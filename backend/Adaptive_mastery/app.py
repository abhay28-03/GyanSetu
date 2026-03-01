import streamlit as st
from database import init_db, get_connection
from mastery import calculate_mastery, get_difficulty
from planner import update_spaced_repetition, get_today_plan
from llm_engine import generate_structured_problem

st.set_page_config(page_title="Adaptive Mastery Engine", page_icon="🧠", layout="wide")

st.markdown("""
<style>
.stButton>button {
    border-radius: 8px;
    height: 3em;
    font-weight: 600;
}
</style>
""", unsafe_allow_html=True)

init_db()

st.title("🧠 Adaptive Concept Mastery Engine")
st.divider()

# Sidebar
with st.sidebar:
    topic = st.text_input("Enter Topic")
    language = st.selectbox("Language", ["English", "Hindi", "Simple English"])
    custom_question = st.text_area("Optional: Your Question")

if topic:
    conn = get_connection()
    c = conn.cursor()
    c.execute("SELECT * FROM performance WHERE topic=?", (topic,))
    row = c.fetchone()
    conn.close()

    if row:
        data = {
            "attempts": row[1],
            "correct": row[2],
            "correct_without_hints": row[3],
            "total_hints_used": row[4]
        }
    else:
        data = {
            "attempts": 0,
            "correct": 0,
            "correct_without_hints": 0,
            "total_hints_used": 0
        }

    mastery = calculate_mastery(data)
    difficulty = get_difficulty(mastery)

    col1, col2 = st.columns([2,1])

    with col1:

        st.metric("Mastery Score", f"{mastery}%")
        st.progress(mastery/100)
        st.write(f"Difficulty: **{difficulty.upper()}**")

        if st.button("Generate Problem"):

            problem = generate_structured_problem(
                topic, difficulty, language,
                custom_question if custom_question.strip() else None
            )

            st.session_state.problem = problem
            st.session_state.hints_used = 0
            st.session_state.hint_level = 0

        if "problem" in st.session_state:

            p = st.session_state.problem
            st.info(p["question"])

            if st.button("Reveal Hint"):
                if st.session_state.hint_level < 3:
                    st.session_state.hint_level += 1
                    st.session_state.hints_used += 1

            if st.session_state.hint_level >= 1:
                st.warning(p["hint_1"])
            if st.session_state.hint_level >= 2:
                st.warning(p["hint_2"])
            if st.session_state.hint_level >= 3:
                st.warning(p["hint_3"])

            if st.button("Reveal Solution"):
                st.success(p["solution"])

            result = st.radio("Solved correctly?", ["Select","Yes","No"], horizontal=True)

            if st.button("Submit") and result != "Select":

                correct = result == "Yes"

                conn = get_connection()
                c = conn.cursor()

                attempts = data["attempts"] + 1
                correct_total = data["correct"] + (1 if correct else 0)
                correct_wo = data["correct_without_hints"] + (1 if correct and st.session_state.hints_used==0 else 0)
                total_hints = data["total_hints_used"] + st.session_state.hints_used

                c.execute("""
                    INSERT OR REPLACE INTO performance
                    VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
                """, (topic, attempts, correct_total, correct_wo, total_hints))

                conn.commit()
                conn.close()

                # Update planner
                if correct and st.session_state.hints_used == 0:
                    performance = "easy"
                elif correct:
                    performance = "hard"
                else:
                    performance = "fail"

                update_spaced_repetition(topic, performance)

                st.success("Progress Updated!")

    with col2:

        st.subheader("📅 Today's Revision Plan")
        today_plan = get_today_plan()

        if today_plan:
            for t in today_plan:
                st.write(f"• {t}")
        else:
            st.success("No revisions due today 🎉")