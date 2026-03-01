from datetime import datetime, timedelta
from database import get_connection

def update_spaced_repetition(topic, performance):
    conn = get_connection()
    c = conn.cursor()

    c.execute("SELECT * FROM planner WHERE topic=?", (topic,))
    row = c.fetchone()

    if row:
        ease_factor, interval, repetitions, next_review = row[1:]
    else:
        ease_factor = 2.5
        interval = 1
        repetitions = 0

    if performance == "fail":
        repetitions = 0
        interval = 1
        ease_factor = max(1.3, ease_factor - 0.2)
    elif performance == "hard":
        interval = max(1, int(interval * 1.2))
    elif performance == "easy":
        repetitions += 1
        interval = max(1, int(interval * ease_factor))
        ease_factor += 0.05

    next_review = (datetime.now() + timedelta(days=interval)).strftime("%Y-%m-%d")

    c.execute("""
        INSERT OR REPLACE INTO planner
        VALUES (?, ?, ?, ?, ?)
    """, (topic, ease_factor, interval, repetitions, next_review))

    conn.commit()
    conn.close()


def get_today_plan():
    today = datetime.now().strftime("%Y-%m-%d")
    conn = get_connection()
    c = conn.cursor()

    c.execute("SELECT topic FROM planner WHERE next_review <= ?", (today,))
    rows = c.fetchall()
    conn.close()

    return [r[0] for r in rows]