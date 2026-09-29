# ARmour — Frontend

Mobile-first frontend for the **ARmour** vocational industrial safety training Android application.  
Built with clean, beginner-friendly HTML5, Tailwind CSS (via CDN), and Vanilla JavaScript.

---

## 📱 Complete Screen Architecture (17 Files)

All 17 application screens are fully functional, responsive, scroll-fixed, and interconnected with mock data:

```
armour-frontend/
│
├── 🚀 Role & Auth Flow
│   ├── role_selection.html           ← Main app entry point (choose Worker or Admin)
│   ├── language_selection.html       ← Multilingual selector (English, Hindi, Santali)
│   ├── worker_login.html             ← Field worker sign-in (PIN / Worker ID)
│   ├── admin_login.html              ← Administrator & Proctor sign-in
│   ├── forgot_password.html          ← 3-state recovery flow (form, loading, success)
│   └── worker_registration.html      ← New trainee & mining division registration
│
├── 🦺 Worker Training Flow
│   ├── worker_training_home.html     ← Worker home, telemetry, assigned modules
│   ├── choose_training_module.html   ← Module selection & AR simulator launch modal
│   ├── module_completion_score.html  ← Post-drill scorecard, breakdown & CEU credentials
│   ├── worker_certificates.html      ← Trainee digital credentials ledger & QR modal
│   └── worker_profile_settings.html  ← Language preferences, offline cache, logout
│
├── 🛡️ Admin & Proctor Flow
│   ├── admin_dashboard.html          ← Live KPI metrics, filter chips, attempts ledger
│   ├── trainees.html                 ← Trainee roster with live search filter
│   ├── trainee_detail_profile.html   ← Individual participant competency breakdown
│   ├── modules.html                  ← Curriculum oversight & mandatory checkpoints
│   ├── certificates.html             ← Verification terminal & cryptographic QR modal
│   └── admin_profile_settings.html   ← Proctor credentials, station details, logout
│
└── README.md                         ← Project documentation & flow guide
```

---

## 🗺️ User Flow Mapping

### 1. Worker Journey
`role_selection.html` (Select Worker)  
➔ `language_selection.html` (Select English / Hindi / Santali)  
➔ `worker_login.html` (Auto-fill Demo ID `WRK-4029`)  
➔ `worker_training_home.html` (View Drills: 2/4, Score: 82%)  
➔ `choose_training_module.html` (Select scenario ➔ Launch AR modal)  
➔ `module_completion_score.html` (View 92% breakdown & passing telemetry)  
➔ `worker_certificates.html` (Inspect digital credentials & QR token)  
➔ `worker_profile_settings.html` (Toggle locale or Log Out)

### 2. Administrator & Proctor Journey
`role_selection.html` (Select Admin)  
➔ `admin_login.html` (Click Demo Admin `rajeshwar.verma@armour.safety`)  
➔ `admin_dashboard.html` (Filter 7d / 30d / All KPIs, inspect recent attempts)  
➔ `trainees.html` (Search by trainee name or ID)  
➔ `trainee_detail_profile.html` (Inspect Manoj Soren's audit telemetry)  
➔ `modules.html` (Review Fire & Gas module checkpoints)  
➔ `certificates.html` (Verify cryptographic QR & export audit tokens)  
➔ `admin_profile_settings.html` (Review Proctor Station & Log Out)

---

## 💻 How to Run Locally

No build step, Node.js, or complex compiler required.

### Option A — Double Click
Open any `.html` file (e.g., `role_selection.html` or `admin_dashboard.html`) directly in Google Chrome, Edge, or Firefox.

### Option B — VS Code Live Server (Recommended for mobile preview)
1. Open `armour-frontend/` in VS Code.
2. Right-click `role_selection.html` → **Open with Live Server**.
3. Press `F12` in Chrome and toggle the Device Toolbar (`Ctrl+Shift+M`) to a mobile screen (e.g. Pixel 7 / Samsung Galaxy S20, 390px - 412px wide).

---

## 📱 Mobile-First Features & Standards

- **Touch Ergonomics:** All buttons, form inputs, and nav tabs adhere to the minimum `44px` tap target standard.
- **Scroll Integrity:** `overflow-x: hidden` and `overflow-y: auto` isolated on `<body>` to allow fluid scrolling with zero accidental horizontal drift.
- **Fixed System Chrome:** Top header and bottom navigation bars stay docked with safe-area padding (`pt-safe`, `pb-safe`) for Android WebView and notched devices.
- **Brand Consistency:** App name is strictly **ARmour**. High-contrast safety amber (`#fe932c`), dark industrial navy (`#131b2e`), and compliance green (`#069669`) applied throughout.

---

## 🚀 Next Steps Roadmap

1. **Capacitor Android Packaging:** Wrap the `armour-frontend/` folder into an Android project using `@capacitor/core` and `@capacitor/android` to generate the debug APK.
2. **FastAPI & PostgreSQL Backend:** Wire existing mock data structures (`mockDashboardData`, form submissions, credentials) to live REST endpoints.
3. **Unity AR Bridge:** Wire the "Launch AR Simulator" buttons in `choose_training_module.html` to trigger the native Unity AR activity.
