# ARmour — AR-Based Industrial Safety Training Simulator

Smart India Hackathon 2026 | Problem Statement: SIH26041

ARmour is an Augmented Reality-based vocational training and assessment platform designed for workers in Jharkhand's mining and manufacturing sectors.

The platform enables workers to safely practise industrial emergency scenarios through interactive AR simulations while providing decision-level assessment, performance analytics and digital training records.

## Key Features

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

## System Architecture

ARmour
  |
  +----------------+----------------+
  |                |                |
  v                v                v
Frontend          Unity AR         Backend
HTML/CSS/JS      AR Modules        FastAPI
+ Capacitor          |                |
  |          +-------+--------+       |
  |          |                |       |
  |          v                v       |
  |      Fire Safety      Gas Leak    |
  |                      + Confined   |
  |                        Space      |
  |          |                |       |
  +----------+----------------+-------+
                     |
                     v
                PostgreSQL
                     ^
                     |
               Admin Dashboard

## Repository Structure

SIH26041/
|
+-- Backend/
|   +-- app/
|   +-- requirements.txt
|   +-- schema.sql
|   +-- .env.example
|   +-- README.md
|
+-- Frontend/
|   +-- www/
|   +-- android/
|   +-- package.json
|   +-- package-lock.json
|   +-- capacitor.config.json
|   +-- README.md
|
+-- Unity/
|   +-- Fire module/
|   |   +-- Assets/
|   |   +-- Packages/
|   |   +-- ProjectSettings/
|   |
|   +-- Gas module/
|       +-- Assets/
|       +-- Packages/
|       +-- ProjectSettings/
|
+-- docs/
+-- assets/
+-- README.md

## Technology Stack

Frontend
- HTML
- CSS
- JavaScript
- Capacitor
- Android

AR Simulation
- Unity
- C#
- AR Foundation
- Google ARCore

Backend
- Python
- FastAPI
- REST APIs

Database
- PostgreSQL

Deployment
- Render

## Training Modules

### 1. Fire & Explosion Safety

The Fire Safety module allows workers to practise emergency response procedures in an interactive AR environment.

Workers are assessed on:
- Selecting appropriate PPE
- Identifying the correct fire-response method
- Correct extinguisher application
- Identifying the correct evacuation route
- Following emergency-response procedures

### 2. Gas Leak & Confined Space Safety

The Gas Leak and Confined Space module simulates multiple industrial hazards in an AR environment.

Workers practise:
- Identifying hazardous conditions
- Detecting gas leaks
- Recognising flammable hazards
- Identifying confined-space risks
- Selecting appropriate PPE
- Following safe operating procedures

The worker receives feedback after important decisions, allowing the simulation to function as both a training and assessment experience.

## Decision-Level Assessment

A key feature of ARmour is its decision-level assessment system.

Instead of providing only a final score, ARmour evaluates individual decisions made throughout a training scenario.

This allows administrators to identify:
- Individual competency gaps
- Common mistakes across workers
- Areas requiring additional training
- Overall team performance

This helps answer not only whether a worker passed, but also where the worker struggled and what they may need to practise further.

## Worker Application

The worker application provides:
1. Worker registration
2. Secure login
3. Language selection
4. Training module selection
5. AR simulation launch
6. Interactive assessment
7. Performance score
8. Training history
9. Digital certificates
10. Profile and settings

## Admin Dashboard

The admin dashboard provides training and compliance information including:
- Total trainees
- Completed assessments
- Pass rates
- Certificates issued
- Training attempts
- Module performance
- Individual trainee records
- Competency analysis

This enables administrators to monitor both individual worker performance and overall team competency.

## Digital Certificates

Workers can access their digital training certificates after completing the required training and assessments.

The platform supports QR-based certificate verification, providing a convenient digital record of completed training.

## Accessibility and Scalability

ARmour is designed to work on low-end and mid-range Android smartphones, reducing the need for expensive VR headsets or specialised training hardware.

This allows organisations to deploy the training solution across multiple workers and locations using commonly available Android devices.

The platform supports English, Hindi and Santali to make the training more accessible to workers from different linguistic backgrounds.

ARmour is also designed with offline and limited-connectivity environments in mind, which is particularly relevant for mining and industrial locations where reliable internet connectivity may not always be available.

## Backend API

The FastAPI backend provides APIs for:
- Authentication
- Worker management
- Training modules
- Assessments
- Certificates
- Admin compliance statistics

FastAPI Swagger documentation is available when the backend server is running.

## Running the Backend

cd Backend
pip install -r requirements.txt

Configure the required environment variables using the provided .env.example file.

Start the FastAPI server according to the backend configuration.

## Running the Frontend

cd Frontend
npm install
npx cap sync android

The Android project can then be opened and built using Android Studio.

## Running the Unity AR Modules

Open the required Unity project from:

Unity/Fire module/

or:

Unity/Gas module/

Open the project using a compatible Unity version and build it for Android.

## Project Objective

ARmour aims to make industrial safety training more interactive, practical, accessible, measurable and scalable.

Workers can practise responding to hazardous situations in a safe simulated environment, while organisations can monitor performance and identify areas where additional training is required.

## Project Information

Project: ARmour
Problem Statement: SIH26041
Organisation: Government of Jharkhand
Hackathon: Smart India Hackathon 2026

## Team ARmour

Developed as part of Smart India Hackathon 2026.

The project combines Android application development, Augmented Reality, Unity and ARCore, backend APIs, database management, training assessment and administrative analytics.
