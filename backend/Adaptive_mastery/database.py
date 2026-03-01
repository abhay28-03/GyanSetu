import sqlite3

DB_NAME = "mastery.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()

    # Mastery table
    c.execute("""
        CREATE TABLE IF NOT EXISTS performance (
            topic TEXT PRIMARY KEY,
            attempts INTEGER DEFAULT 0,
            correct INTEGER DEFAULT 0,
            correct_without_hints INTEGER DEFAULT 0,
            total_hints_used INTEGER DEFAULT 0,
            last_updated TEXT DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # Planner table
    c.execute("""
        CREATE TABLE IF NOT EXISTS planner (
            topic TEXT PRIMARY KEY,
            ease_factor REAL DEFAULT 2.5,
            interval INTEGER DEFAULT 1,
            repetitions INTEGER DEFAULT 0,
            next_review TEXT,
            FOREIGN KEY(topic) REFERENCES performance(topic)
        )
    """)

    conn.commit()
    conn.close()


def get_connection():
    return sqlite3.connect(DB_NAME)