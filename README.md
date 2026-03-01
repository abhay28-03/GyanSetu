# 🎓 Gyansetu – AI-Powered Adaptive Learning Platform

Gyansetu is an AI-driven adaptive education platform designed to personalize learning, track mastery, and generate intelligent study plans using spaced repetition and performance analytics.

Built for the AMD Slingshot Hackathon.

---

## 🚀 Problem Statement

Students learn differently. Traditional systems fail to:
- Adapt to individual performance
- Prioritize weak topics
- Provide structured revision cycles
- Offer explainable progress insights

Gyansetu solves this through adaptive mastery tracking and intelligent study planning.

---

## 🧠 Core Features

### 1️⃣ Adaptive Mastery Engine
- Tracks topic-wise performance
- Detects weak concepts
- Adjusts difficulty dynamically
- Measures hint dependency

### 2️⃣ Smart Study Planner
- SM2-inspired spaced repetition algorithm
- Generates daily study plan
- Prioritizes weak topics
- Exam readiness insights

### 3️⃣ Performance Analytics Dashboard
- Mastery scores per topic
- Progress tracking
- Daily learning goals
- Leaderboard support

### 4️⃣ Scalable AI Architecture
- Designed for GPU-accelerated inference
- Cloud-ready backend
- Modular architecture

---

## 🏗️ System Architecture

Frontend:
- Streamlit
- HTML/CSS

Backend:
- Python
- Adaptive Mastery Engine
- Planner Engine

Database:
- SQLite (Prototype)
- PostgreSQL (Scalable)

Deployment (Planned):
- FastAPI
- Docker
- AWS EC2

---

## 🗄️ Database Structure

### performance table
- topic
- attempts
- correct
- correct_without_hints
- total_hints_used

### planner table
- topic
- ease_factor
- interval
- repetitions
- next_review

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/gyansetu.git
cd gyansetu
pip install -r requirements.txt
streamlit run app.py
