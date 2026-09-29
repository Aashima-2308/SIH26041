# ARmour — AR-Based Industrial Safety Training Simulator

**Smart India Hackathon 2026 — Problem Statement SIH26041**

ARmour is an Augmented Reality-based vocational training and assessment platform designed for workers in Jharkhand's mining and manufacturing sectors.

The platform enables workers to safely practise industrial emergency scenarios through interactive AR simulations while providing decision-level assessment, performance analytics and digital training records.

---

## 🚀 Key Features

- Interactive AR-based industrial safety training
- Fire & Explosion Safety simulation
- Gas Leak & Confined Space Safety simulation
- Hazard identification and PPE selection
- Decision-level assessment and instant feedback
- Worker registration and authentication
- English, Hindi and Santali language support
- Worker performance and score breakdown
- Digital training certificates
- Admin compliance and analytics dashboard
- Individual and team competency tracking
- Offline / limited-connectivity support
- Android smartphone-based deployment without dedicated VR hardware

---

## 🏗️ System Architecture

```text
                         ARmour
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
      Frontend          Unity AR         Backend
   HTML/CSS/JS        AR Modules         FastAPI
   + Capacitor             │                │
          │          ┌─────┴─────┐          │
          │          ▼           ▼          │
          │       Fire Safety   Gas Leak    │
          │                    + Confined   │
          │                      Space      │
          │          │           │          │
          └──────────┴───────────┴──────────┘
                         │
                         ▼
                    PostgreSQL
                         ▲
                         │
                   Admin Dashboard
