/**
 * ARmour – Shared Localization Engine
 * ====================================
 * One small, dependency-free translation system shared by every screen.
 *
 * HOW IT WORKS
 * ------------
 * 1. Add `data-i18n="some.key"` to any element whose TEXT should be translated.
 *    On page load (and whenever the language changes) its textContent is set
 *    to translations[currentLang]['some.key'].
 * 2. Add `data-i18n-placeholder="some.key"` to translate an <input placeholder="...">.
 * 3. Add `data-i18n-aria-label="some.key"` to translate an aria-label.
 * 4. The selected language is saved to localStorage under "armour_lang" so it
 *    survives page navigation AND full reloads (this replaces the old,
 *    per-page sessionStorage reads that never actually changed any text).
 * 5. Call ARmourI18n.setLanguage('hi') from the language-selection screen (or
 *    the settings screen) to change language and immediately re-render.
 * 6. Missing keys automatically fall back to English, and a console warning
 *    is logged so gaps are easy to spot during development.
 *
 * IMPORTANT: Never put data-i18n on a <span class="material-symbols-outlined">
 * icon element — its text content is an icon ligature name (e.g. "dashboard",
 * "verified"), not visible copy, and translating it would break the icon.
 *
 * SANTALI NOTE
 * ------------
 * This project's original files only ever contained ONE piece of real Santali
 * text: the language's own name, "ᱥᱟᱱᱛᱟᱲᱤ" (Santali written in Ol Chiki
 * script), used on the language-picker and settings screens. No other screen
 * had verified Santali translations anywhere in the provided source.
 * Rather than invent Santali medical/technical/safety vocabulary (which would
 * be unreliable and potentially unsafe for a safety-training app), the `sat`
 * dictionary below is intentionally left empty for every key except the
 * language name itself. Every other key falls back to English automatically.
 * Add real, verified Santali strings to translations.sat as they become
 * available — no other code changes will be needed.
 */
(function (window) {
  "use strict";

  var STORAGE_KEY = "armour_lang";
  var DEFAULT_LANG = "en";

  var translations = {
    /* ================================= ENGLISH ================================= */
    en: {
      "app.name": "ARmour",

      /* ---- Common / shared actions ---- */
      "common.back": "Back",
      "common.cancel": "Cancel",
      "common.continue": "Continue",
      "common.close": "Close",
      "common.dismiss": "Dismiss",
      "common.save": "Save",
      "common.search": "Search",
      "common.add": "Add",
      "common.viewAll": "View All",
      "common.review": "Review",
      "common.resume": "Resume",
      "common.start": "Start",
      "common.done": "Done",
      "common.download": "Export PDF",
      "common.score": "Score",
      "common.scoreLabel": "Score:",

      /* ---- Bottom navigation (shared across worker + admin) ---- */
      "nav.dashboard": "Dashboard",
      "nav.overview": "Overview",
      "nav.trainees": "Trainees",
      "nav.modules": "Modules",
      "nav.certificates": "Certificates",
      "nav.certs": "Certs",
      "nav.settings": "Settings",

      /* ---- Status labels (reused across admin + worker screens) ---- */
      "status.passed": "Passed",
      "status.completed": "Completed",
      "status.inProgress": "In Progress",
      "status.pending": "Pending",
      "status.reassess": "Re-Assess",
      "status.valid": "Valid",
      "status.active": "Active",
      "status.certified": "Certified",
      "status.none": "None",
      "status.mandatory": "Mandatory",

      /* ---- Role selection ---- */
      "role.headline": "AR-Based Safety Training",
      "role.subtitle": "Select your access role",
      "role.worker.badge": "Interactive AR",
      "role.worker.title": "Worker",
      "role.worker.desc": "Field operations & vocational training",
      "role.worker.modules": "MODULES: FIRE SAFETY / GAS SAFETY",
      "role.admin.badge": "Proctor Access",
      "role.admin.title": "Admin",
      "role.admin.desc": "Safety management & trainee compliance",
      "role.admin.portal": "PORTAL: OVERVIEW / CREDENTIALS",
      "role.cta.worker": "Enter Trainee Simulator",
      "role.cta.admin": "Proceed to Admin Login",
      "role.footer": "ARmour Mobile • DGMS Compliant",

      /* ---- Language selection ---- */
      "lang.title": "Choose Your Language",
      "lang.subtitle": "Select the language you are most comfortable with.",
      "lang.english": "English",
      "lang.englishDesc": "Instructional modules in English",
      "lang.hindi": "हिन्दी",
      "lang.hindiLabel": "Hindi",
      "lang.hindiDesc": "हिंदी में सुरक्षा प्रशिक्षण एवं ऑडियो",
      "lang.santali": "Santali",
      "lang.santaliNative": "ᱥᱟᱱᱛᱟᱲᱤ",
      "lang.continue": "Continue to Worker Login",
      "lang.footer": "SIH 2026 Prototype • Multilingual support",

      /* ---- Worker login ---- */
      "loginWorker.eyebrow": "Field Worker Portal",
      "loginWorker.title": "Worker Login",
      "loginWorker.subtitle": "Enter your Worker ID and PIN to start your vocational safety drill.",
      "loginWorker.idLabel": "Worker ID",
      "loginWorker.autofill": "Auto-fill Demo ID",
      "loginWorker.idPlaceholder": "e.g. WRK-4029",
      "loginWorker.pinLabel": "Access PIN / Password",
      "loginWorker.forgotPin": "Forgot PIN?",
      "loginWorker.pinPlaceholder": "Enter 6-digit PIN",
      "loginWorker.submit": "START TRAINING",
      "loginWorker.authenticating": "AUTHENTICATING FIELD ID...",
      "loginWorker.newHeading": "New to ARmour?",
      "loginWorker.registerCta": "Register as New Worker",
      "loginWorker.footer": "ARmour Mobile Sandbox • Vocational DGMS Module",

      /* ---- Admin login ---- */
      "loginAdmin.badge": "ADMIN PORTAL",
      "loginAdmin.eyebrow": "Proctor Authentication",
      "loginAdmin.title": "Admin Login",
      "loginAdmin.subtitle": "Sign in to manage trainee training records, compliance stats, and safety assessments.",
      "loginAdmin.emailLabel": "Official Email / Admin ID",
      "loginAdmin.demo": "Demo Admin",
      "loginAdmin.emailPlaceholder": "admin@armour.safety",
      "loginAdmin.passwordLabel": "Password",
      "loginAdmin.forgot": "Forgot password?",
      "loginAdmin.submit": "SIGN IN",
      "loginAdmin.verifying": "VERIFYING PROCTOR TOKEN...",
      "loginAdmin.newAdmin": "New administrator?",
      "loginAdmin.registerCta": "Register as Admin",
      "loginAdmin.footer": "ARmour Administration System • Mining Safety Hub",

      /* ---- Forgot password ---- */
      "forgot.eyebrow": "Recovery",
      "forgot.title": "Forgot Password?",
      "forgot.subtitle": "Enter your registered email or Worker ID and we'll dispatch instant reset instructions.",
      "forgot.errorTitle": "Account ID Not Found",
      "forgot.errorDesc": "Unable to verify identifier. Please check your badge format (WRK-XXXX) or email address.",
      "forgot.idLabel": "Email or Worker ID",
      "forgot.idPlaceholder": "e.g. WRK-4029 or admin@armour.safety",
      "forgot.continue": "Continue",
      "forgot.backToLogin": "Back to Login",
      "forgot.loadingTitle": "Dispatching Instructions...",
      "forgot.loadingDesc": "Querying safety directory & generating temporary recovery authorization...",
      "forgot.dispatchedBadge": "Dispatched",
      "forgot.successTitle": "Reset Instructions Sent!",
      "forgot.successDescPrefix": "Recovery credentials sent for",
      "forgot.emailAccountsLabel": "Email Accounts:",
      "forgot.emailAccountsDesc": "Follow the secure 15-minute token link sent to your inbox.",
      "forgot.workerIdLabel": "Field Worker IDs:",
      "forgot.workerIdDesc": "Present your ID badge to your Shift Safety Supervisor for biometric unlock.",
      "forgot.resend": "Resend Instructions",
      "forgot.resendSent": "Instructions re-dispatched!",
      "forgot.returnLogin": "Return to Login",
      "forgot.footer": "ARmour Safety Credentials Gateway",

      /* ---- Worker registration ---- */
      "register.eyebrow": "New Account",
      "register.title": "Create Profile",
      "register.subtitle": "Register new personnel to access ARmour vocational safety drills.",
      "register.firstName": "First Name",
      "register.surname": "Surname",
      "register.idLabel": "Worker ID / Badge No",
      "register.idPlaceholder": "WRK-XXXX",
      "register.firstNamePlaceholder": "e.g. Manoj",
      "register.surnamePlaceholder": "e.g. Soren",
      "register.passwordPlaceholder": "At least 6 characters",
      "register.confirmPlaceholder": "Re-enter password",
      "register.passwordMismatch": "Password confirmation does not match. Please verify both password fields.",
      "register.divisionLabel": "Assigned Operational Division",
      "register.passwordLabel": "Terminal Password",
      "register.confirmLabel": "Confirm Password",
      "register.submit": "Create Profile",
      "register.synchronizing": "SYNCHRONIZING PROFILE...",
      "register.successTitle": "Registration Completed",
      "register.successDesc": "Your profile has been created and synced with DGMS roster.",
      "register.proceedLogin": "Proceed to Login",
      "register.footer": "ARmour Personnel Roster • Vocational Registration",

      /* ---- Worker training home ---- */
      "home.welcomePrefix": "Welcome,",
      "home.sectionTitle": "Safety Training",
      "home.drills": "Drills",
      "home.score": "Score",
      "home.passing": "Passing",
      "home.badges": "Badges",
      "home.verified": "Verified",
      "home.nextUp": "Next Up: In Progress",
      "home.start": "Start",
      "home.assignedModules": "Assigned Modules",
      "home.targetScorePrefix": "Target passing score:",
      "home.drillTimePrefix": "Drill Time:",
      "home.resume": "Resume",
      "home.certifiedScorePrefix": "Certified Score:",
      "home.review": "Review",
      "home.accredited": "Accredited by DGMS protocol",

      /* ---- Choose training module ---- */
      "chooseModule.title": "Choose a Training Module",
      "chooseModule.subtitle": "Select an industrial AR safety simulation scenario to practice.",
      "chooseModule.module01": "Module 01",
      "chooseModule.module02": "Module 02",
      "chooseModule.basicLevel": "Basic Level",
      "chooseModule.intermediate": "Intermediate",
      "chooseModule.badgesCount": "3 Badges",
      "chooseModule.viewScoreCard": "View Score Card",
      "chooseModule.practiceDrill": "Practice Drill",
      "chooseModule.attemptPending": "Attempt #2 Pending",
      "chooseModule.launchDrill": "Launch AR Drill",
      "chooseModule.preparing": "Preparing AR Training...",
      "chooseModule.spatialCheck": "Spatial LiDAR & Environment Verification",
      "chooseModule.pointDevice": "Point device camera at flat floor surface",
      "chooseModule.panInstructions": "Slowly pan device left to right to calibrate plane tracking and spatial depth.",
      "chooseModule.planeReady": "Plane Detection: Ready",
      "chooseModule.arcoreFps": "ARCore / Unity 60 FPS",
      "chooseModule.lightingLabel": "Recommended Ambient Lighting",
      "chooseModule.luxValue": "> 350 Lux (Optimal)",
      "chooseModule.collisionLabel": "Obstacle Collision Buffer",
      "chooseModule.perimeterActive": "1.5m Perimeter Active",
      "chooseModule.cancel": "Cancel",
      "chooseModule.startDrillScore": "Start Drill & Score",
      "chooseModule.secureSandbox": "Secure Vocational Sandbox • DGMS Compliant",
      "chooseModule.initializing": "Initializing AR Engine...",
      "chooseModule.drillInitialized": "Drill initialized: Completing simulation pipeline and generating scorecard...",

      /* ---- Module completion score ---- */
      "score.eyebrow": "Drill Complete • Module 01",
      "score.title": "Fire Safety Protocol",
      "score.subtitle": "Underground Coal Seam 4 Simulation",
      "score.overallScore": "Overall Score",
      "score.minPassing": "Min. Passing: 75%",
      "score.highDistinction": "High Distinction",
      "score.dgmsCertified": "DGMS Certified",
      "score.breakdown": "Audited Safety Breakdown",
      "score.hazardDetection": "Hazard Detection Accuracy",
      "score.ppeAdherence": "PPE Protocol Adherence",
      "score.evacuationSpeed": "Evacuation Speed (<45s)",
      "score.viewCertificate": "View Earned Certificate",
      "score.returnModules": "Return to Modules",
      "score.retake": "Retake Simulation Drill",
      "score.footer": "Logged to DGMS Digital Vocational Ledger #ARM-841",

      /* ---- Worker certificates ---- */
      "certsWorker.title": "Worker Certificates",
      "certsWorker.subtitle": "Accredited vocational qualification ledger",
      "certsWorker.personnel": "TRAINEE PERSONNEL",
      "certsWorker.workerIdLabel": "Worker ID:",
      "certsWorker.issuedCredentials": "Issued Credentials",
      "certsWorker.activeVerified": "ACTIVE / VERIFIED",
      "certsWorker.credentialId": "CREDENTIAL ID:",
      "certsWorker.issued": "Issued:",
      "certsWorker.validUntil": "Valid Until:",
      "certsWorker.digitalCertificate": "Digital Certificate",
      "certsWorker.qr": "QR",
      "certsWorker.auditKey": "DGMS ON-SITE AUDIT KEY",
      "certsWorker.hash": "HASH: SHA256-ARMOUR-DGMS",
      "certsWorker.done": "Done / Return to Ledger",

      /* ---- Worker profile & settings ---- */
      "profileWorker.role": "Worker / Trainee",
      "profileWorker.curriculumProgress": "Curriculum Progress",
      "profileWorker.modulesDone": "Modules Done",
      "profileWorker.certificates": "Certificates",
      "profileWorker.appPreferences": "App Preferences",
      "profileWorker.trainingLanguage": "Training Language",
      "profileWorker.savedLocale": "Saved locale",
      "profileWorker.offlineStorage": "Offline Storage",
      "profileWorker.synced": "Synced",
      "profileWorker.offlineDesc": "Safety simulation content & localized 3D assets are cached for offline quarry operations.",
      "profileWorker.logout": "LOG OUT",
      "profileWorker.footer": "ARmour Mobile Sandbox • Personnel Roster",

      /* ---- Admin profile & settings ---- */
      "profileAdmin.role": "Admin / Proctor",
      "profileAdmin.assignedRole": "Assigned Operational Role",
      "profileAdmin.assignedRoleValue": "System Administrator & Chief Safety Proctor",
      "profileAdmin.authorization": "Proctor Authorization",
      "profileAdmin.jurisdiction": "Jurisdiction Station",
      "profileAdmin.accreditation": "Accreditation",
      "profileAdmin.systemVersion": "System Version",
      "profileAdmin.logout": "Secure Log Out",
      "profileAdmin.footer": "ARmour Administration Console • SIH 2026",

      /* ---- Admin dashboard ---- */
      "adminDash.badge": "ADMIN",
      "adminDash.title": "Admin Dashboard",
      "adminDash.subtitle": "Overview of all training activity",
      "adminDash.filterAll": "All Time",
      "adminDash.filter30d": "Last 30 Days",
      "adminDash.filter7d": "This Week",
      "adminDash.kpiTotalTrainees": "Total Trainees",
      "adminDash.kpiCompleted": "Completed",
      "adminDash.kpiAvgPassRate": "Avg Pass Rate",
      "adminDash.kpiCertificates": "Certificates",
      "adminDash.modulePerformance": "Module Performance",
      "adminDash.avgScorePrefix": "Avg Score:",
      "adminDash.syllabusCompletion": "Syllabus Completion",
      "adminDash.decisionsAssessment": "Decisions Assessment",
      "adminDash.hazardIdentification": "Hazard Identification",
      "adminDash.ppeSelection": "PPE Selection",
      "adminDash.responseTime": "Response Time",
      "adminDash.finalAssessment": "Final Assessment Performance",
      "adminDash.recentAttempts": "Recent Training Attempts",
      "adminDash.sessionIdPrefix": "AR Session ID:",

      /* ---- Admin: Trainees ---- */
      "trainees.title": "Trainees",
      "trainees.subtitle": "Registered participants & progress",
      "trainees.searchPlaceholder": "Search trainee name or ID...",
      "trainees.enrolled": "Enrolled",
      "trainees.certified": "Certified",
      "trainees.actionReq": "Action Req",
      "trainees.avgScore": "Avg Score",
      "trainees.certificates": "Certificates",
      "trainees.lastActive": "Last Active",
      "trainees.inTraining": "In Training",
      "trainees.loadMore": "Load More Records",

      /* ---- Admin: Trainee detail ---- */
      "traineeDetail.certified": "CERTIFIED",
      "traineeDetail.overallAvgScore": "Overall Avg Score",
      "traineeDetail.complianceStatus": "Compliance Status",
      "traineeDetail.dgmsCompliant": "DGMS Compliant",
      "traineeDetail.accreditedModules": "Accredited Modules",
      "traineeDetail.progress": "Progress",
      "traineeDetail.bestScore": "Best Score",
      "traineeDetail.attempts": "Attempts",
      "traineeDetail.decisionScores": "Decision based scores",
      "traineeDetail.scenarioTelemetry": "Scenario-based telemetry index",
      "traineeDetail.hazardIdentification": "Hazard Identification",
      "traineeDetail.ppeSelectionProtocol": "PPE Selection Protocol",
      "traineeDetail.emergencyEvacuation": "Emergency Evacuation",
      "traineeDetail.attemptHistory": "Attempt History",
      "traineeDetail.chronological": "CHRONOLOGICAL",
      "traineeDetail.view": "View",

      /* ---- Admin: Modules management ---- */
      "modulesAdmin.title": "Modules",
      "modulesAdmin.subtitle": "Augmented reality safety simulation modules",
      "modulesAdmin.activeMvp": "Active MVP",
      "modulesAdmin.enrolled": "Enrolled",
      "modulesAdmin.completionRate": "Completion Rate",
      "modulesAdmin.averageScore": "Average Score",
      "modulesAdmin.passRate": "Pass Rate",
      "modulesAdmin.compliant": "Compliant",
      "modulesAdmin.checkpoints": "Mandatory Checkpoints",
      "modulesAdmin.inFlight": "In-Flight",
      "modulesAdmin.retestActive": "Re-test active",

      /* ---- Admin: Certificates ---- */
      "certsAdmin.title": "Certificates",
      "certsAdmin.subtitle": "Issued credentials",
      "certsAdmin.searchPlaceholder": "Search Certificate ID or Miner ID...",
      "certsAdmin.total": "Total",
      "certsAdmin.allLogged": "All logged",
      "certsAdmin.valid": "Valid",
      "certsAdmin.signOffReq": "Sign-off Req",
      "certsAdmin.module": "Module",
      "certsAdmin.finalScore": "Final Score",
      "certsAdmin.issuedPrefix": "Issued:",
      "certsAdmin.verifyQr": "Verify QR",
      "certsAdmin.pending": "PENDING",
      "certsAdmin.simScore": "Sim Score",
      "certsAdmin.minRequired": "(Min 70%)",
      "certsAdmin.pendingReview": "Pending Proctor Review",
      "certsAdmin.signOff": "Sign-Off",
      "certsAdmin.auditToken": "DGMS Audit Token"
    },

    /* ================================== HINDI =================================== */
    hi: {
      "app.name": "ARmour",

      "common.back": "वापस",
      "common.cancel": "रद्द करें",
      "common.continue": "आगे बढ़ें",
      "common.close": "बंद करें",
      "common.dismiss": "बंद करें",
      "common.save": "सहेजें",
      "common.search": "खोजें",
      "common.add": "जोड़ें",
      "common.viewAll": "सभी देखें",
      "common.review": "समीक्षा",
      "common.resume": "जारी रखें",
      "common.start": "शुरू करें",
      "common.done": "पूर्ण",
      "common.download": "पीडीएफ निर्यात करें",
      "common.score": "स्कोर",
      "common.scoreLabel": "स्कोर:",

      "nav.dashboard": "डैशबोर्ड",
      "nav.overview": "अवलोकन",
      "nav.trainees": "प्रशिक्षु",
      "nav.modules": "मॉड्यूल",
      "nav.certificates": "प्रमाणपत्र",
      "nav.certs": "प्रमाणपत्र",
      "nav.settings": "सेटिंग्स",

      "status.passed": "उत्तीर्ण",
      "status.completed": "पूर्ण",
      "status.inProgress": "प्रगति में",
      "status.pending": "लंबित",
      "status.reassess": "पुनर्मूल्यांकन",
      "status.valid": "मान्य",
      "status.active": "सक्रिय",
      "status.certified": "प्रमाणित",
      "status.none": "कोई नहीं",
      "status.mandatory": "अनिवार्य",

      "role.headline": "एआर-आधारित सुरक्षा प्रशिक्षण",
      "role.subtitle": "अपनी पहुँच भूमिका चुनें",
      "role.worker.badge": "इंटरैक्टिव एआर",
      "role.worker.title": "श्रमिक",
      "role.worker.desc": "क्षेत्रीय कार्य एवं व्यावसायिक प्रशिक्षण",
      "role.worker.modules": "मॉड्यूल: अग्नि सुरक्षा / गैस सुरक्षा",
      "role.admin.badge": "प्रॉक्टर पहुँच",
      "role.admin.title": "प्रशासक",
      "role.admin.desc": "सुरक्षा प्रबंधन एवं प्रशिक्षु अनुपालन",
      "role.admin.portal": "पोर्टल: अवलोकन / प्रमाणपत्र",
      "role.cta.worker": "प्रशिक्षु सिम्युलेटर में प्रवेश करें",
      "role.cta.admin": "एडमिन लॉगिन पर जाएँ",
      "role.footer": "ARmour मोबाइल • DGMS अनुरूप",

      "lang.title": "अपनी भाषा चुनें",
      "lang.subtitle": "वह भाषा चुनें जिसमें आप सबसे सहज हैं।",
      "lang.english": "अंग्रेज़ी",
      "lang.englishDesc": "अंग्रेज़ी में प्रशिक्षण मॉड्यूल",
      "lang.hindi": "हिन्दी",
      "lang.hindiLabel": "हिन्दी",
      "lang.hindiDesc": "हिंदी में सुरक्षा प्रशिक्षण एवं ऑडियो",
      "lang.santali": "संताली",
      "lang.santaliNative": "ᱥᱟᱱᱛᱟᱲᱤ",
      "lang.continue": "श्रमिक लॉगिन पर आगे बढ़ें",
      "lang.footer": "SIH 2026 प्रोटोटाइप • बहुभाषी सहायता",

      "loginWorker.eyebrow": "फील्ड वर्कर पोर्टल",
      "loginWorker.title": "श्रमिक लॉगिन",
      "loginWorker.subtitle": "अपनी वोकेशनल सुरक्षा ड्रिल शुरू करने के लिए अपनी वर्कर आईडी और पिन दर्ज करें।",
      "loginWorker.idLabel": "वर्कर आईडी",
      "loginWorker.autofill": "डेमो आईडी भरें",
      "loginWorker.idPlaceholder": "उदाहरण: WRK-4029",
      "loginWorker.pinLabel": "एक्सेस पिन / पासवर्ड",
      "loginWorker.forgotPin": "पिन भूल गए?",
      "loginWorker.pinPlaceholder": "6 अंकों का पिन दर्ज करें",
      "loginWorker.submit": "प्रशिक्षण शुरू करें",
      "loginWorker.authenticating": "फील्ड आईडी सत्यापित की जा रही है...",
      "loginWorker.newHeading": "ARmour में नए हैं?",
      "loginWorker.registerCta": "नए श्रमिक के रूप में पंजीकरण करें",
      "loginWorker.footer": "ARmour मोबाइल सैंडबॉक्स • वोकेशनल DGMS मॉड्यूल",

      "loginAdmin.badge": "एडमिन पोर्टल",
      "loginAdmin.eyebrow": "प्रॉक्टर प्रमाणीकरण",
      "loginAdmin.title": "एडमिन लॉगिन",
      "loginAdmin.subtitle": "प्रशिक्षु प्रशिक्षण रिकॉर्ड, अनुपालन आँकड़े और सुरक्षा मूल्यांकन प्रबंधित करने हेतु साइन इन करें।",
      "loginAdmin.emailLabel": "आधिकारिक ईमेल / एडमिन आईडी",
      "loginAdmin.demo": "डेमो एडमिन",
      "loginAdmin.emailPlaceholder": "admin@armour.safety",
      "loginAdmin.passwordLabel": "पासवर्ड",
      "loginAdmin.forgot": "पासवर्ड भूल गए?",
      "loginAdmin.submit": "साइन इन करें",
      "loginAdmin.verifying": "प्रॉक्टर टोकन सत्यापित किया जा रहा है...",
      "loginAdmin.newAdmin": "नए प्रशासक?",
      "loginAdmin.registerCta": "एडमिन के रूप में पंजीकरण करें",
      "loginAdmin.footer": "ARmour प्रशासन प्रणाली • खनन सुरक्षा केंद्र",

      "forgot.eyebrow": "रिकवरी",
      "forgot.title": "पासवर्ड भूल गए?",
      "forgot.subtitle": "अपना पंजीकृत ईमेल या वर्कर आईडी दर्ज करें और हम तुरंत रीसेट निर्देश भेजेंगे।",
      "forgot.errorTitle": "खाता आईडी नहीं मिली",
      "forgot.errorDesc": "पहचानकर्ता सत्यापित नहीं हो सका। कृपया अपना बैज फ़ॉर्मेट (WRK-XXXX) या ईमेल पता जाँचें।",
      "forgot.idLabel": "ईमेल या वर्कर आईडी",
      "forgot.idPlaceholder": "उदाहरण: WRK-4029 या admin@armour.safety",
      "forgot.continue": "आगे बढ़ें",
      "forgot.backToLogin": "लॉगिन पर वापस जाएँ",
      "forgot.loadingTitle": "निर्देश भेजे जा रहे हैं...",
      "forgot.loadingDesc": "सुरक्षा निर्देशिका की जाँच एवं अस्थायी रिकवरी प्राधिकरण तैयार किया जा रहा है...",
      "forgot.dispatchedBadge": "भेजा गया",
      "forgot.successTitle": "रीसेट निर्देश भेज दिए गए!",
      "forgot.successDescPrefix": "रिकवरी क्रेडेंशियल भेजे गए:",
      "forgot.emailAccountsLabel": "ईमेल खाते:",
      "forgot.emailAccountsDesc": "अपने इनबॉक्स में भेजे गए सुरक्षित 15-मिनट के टोकन लिंक का उपयोग करें।",
      "forgot.workerIdLabel": "फील्ड वर्कर आईडी:",
      "forgot.workerIdDesc": "बायोमेट्रिक अनलॉक हेतु अपना आईडी बैज अपने शिफ्ट सेफ्टी सुपरवाइज़र को दिखाएँ।",
      "forgot.resend": "निर्देश पुनः भेजें",
      "forgot.resendSent": "निर्देश पुनः भेज दिए गए!",
      "forgot.returnLogin": "लॉगिन पर लौटें",
      "forgot.footer": "ARmour सुरक्षा क्रेडेंशियल गेटवे",

      "register.eyebrow": "नया खाता",
      "register.title": "प्रोफ़ाइल बनाएँ",
      "register.subtitle": "ARmour वोकेशनल सुरक्षा ड्रिल तक पहुँच के लिए नए कर्मी को पंजीकृत करें।",
      "register.firstName": "पहला नाम",
      "register.surname": "उपनाम",
      "register.idLabel": "वर्कर आईडी / बैज नंबर",
      "register.idPlaceholder": "WRK-XXXX",
      "register.firstNamePlaceholder": "उदाहरण: मनोज",
      "register.surnamePlaceholder": "उदाहरण: सोरेन",
      "register.passwordPlaceholder": "कम से कम 6 अक्षर",
      "register.confirmPlaceholder": "पासवर्ड पुनः दर्ज करें",
      "register.passwordMismatch": "पासवर्ड पुष्टि मेल नहीं खाती। कृपया दोनों पासवर्ड फ़ील्ड जाँचें।",
      "register.divisionLabel": "नियत परिचालन प्रभाग",
      "register.passwordLabel": "टर्मिनल पासवर्ड",
      "register.confirmLabel": "पासवर्ड की पुष्टि करें",
      "register.submit": "प्रोफ़ाइल बनाएँ",
      "register.synchronizing": "प्रोफ़ाइल समन्वित की जा रही है...",
      "register.successTitle": "पंजीकरण पूर्ण हुआ",
      "register.successDesc": "आपकी प्रोफ़ाइल बना दी गई है और DGMS रोस्टर के साथ समन्वित कर दी गई है।",
      "register.proceedLogin": "लॉगिन पर आगे बढ़ें",
      "register.footer": "ARmour कार्मिक रोस्टर • वोकेशनल पंजीकरण",

      "home.welcomePrefix": "स्वागत है,",
      "home.sectionTitle": "सुरक्षा प्रशिक्षण",
      "home.drills": "ड्रिल",
      "home.score": "स्कोर",
      "home.passing": "उत्तीर्ण",
      "home.badges": "बैज",
      "home.verified": "सत्यापित",
      "home.nextUp": "अगला: प्रगति में",
      "home.start": "शुरू करें",
      "home.assignedModules": "नियत मॉड्यूल",
      "home.targetScorePrefix": "लक्षित उत्तीर्ण स्कोर:",
      "home.drillTimePrefix": "ड्रिल समय:",
      "home.resume": "जारी रखें",
      "home.certifiedScorePrefix": "प्रमाणित स्कोर:",
      "home.review": "समीक्षा",
      "home.accredited": "DGMS प्रोटोकॉल द्वारा मान्यता प्राप्त",

      "chooseModule.title": "प्रशिक्षण मॉड्यूल चुनें",
      "chooseModule.subtitle": "अभ्यास के लिए एक औद्योगिक एआर सुरक्षा सिमुलेशन परिदृश्य चुनें।",
      "chooseModule.module01": "मॉड्यूल 01",
      "chooseModule.module02": "मॉड्यूल 02",
      "chooseModule.basicLevel": "बेसिक स्तर",
      "chooseModule.intermediate": "मध्यम स्तर",
      "chooseModule.badgesCount": "3 बैज",
      "chooseModule.viewScoreCard": "स्कोर कार्ड देखें",
      "chooseModule.practiceDrill": "अभ्यास ड्रिल",
      "chooseModule.attemptPending": "प्रयास #2 लंबित",
      "chooseModule.launchDrill": "एआर ड्रिल शुरू करें",
      "chooseModule.preparing": "एआर प्रशिक्षण तैयार किया जा रहा है...",
      "chooseModule.spatialCheck": "स्पेशियल लाइडार एवं वातावरण सत्यापन",
      "chooseModule.pointDevice": "डिवाइस कैमरे को समतल फर्श की ओर रखें",
      "chooseModule.panInstructions": "प्लेन ट्रैकिंग और स्पेशियल गहराई को कैलिब्रेट करने के लिए डिवाइस को धीरे-धीरे बाएँ से दाएँ घुमाएँ।",
      "chooseModule.planeReady": "प्लेन डिटेक्शन: तैयार",
      "chooseModule.arcoreFps": "ARCore / Unity 60 FPS",
      "chooseModule.lightingLabel": "अनुशंसित परिवेश प्रकाश",
      "chooseModule.luxValue": "> 350 लक्स (उत्तम)",
      "chooseModule.collisionLabel": "अवरोध टक्कर बफ़र",
      "chooseModule.perimeterActive": "1.5 मीटर परिधि सक्रिय",
      "chooseModule.cancel": "रद्द करें",
      "chooseModule.startDrillScore": "ड्रिल शुरू करें और स्कोर करें",
      "chooseModule.secureSandbox": "सुरक्षित वोकेशनल सैंडबॉक्स • DGMS अनुरूप",
      "chooseModule.initializing": "एआर इंजन आरंभ किया जा रहा है...",
      "chooseModule.drillInitialized": "ड्रिल आरंभ हुई: सिमुलेशन पाइपलाइन पूर्ण की जा रही है और स्कोरकार्ड तैयार किया जा रहा है...",

      "score.eyebrow": "ड्रिल पूर्ण • मॉड्यूल 01",
      "score.title": "अग्नि सुरक्षा प्रोटोकॉल",
      "score.subtitle": "अंडरग्राउंड कोल सीम 4 सिमुलेशन",
      "score.overallScore": "कुल स्कोर",
      "score.minPassing": "न्यूनतम उत्तीर्णांक: 75%",
      "score.highDistinction": "उच्च विशिष्टता",
      "score.dgmsCertified": "DGMS प्रमाणित",
      "score.breakdown": "ऑडिट किया गया सुरक्षा विवरण",
      "score.hazardDetection": "खतरा पहचान सटीकता",
      "score.ppeAdherence": "PPE प्रोटोकॉल पालन",
      "score.evacuationSpeed": "निकासी गति (<45 सेकंड)",
      "score.viewCertificate": "अर्जित प्रमाणपत्र देखें",
      "score.returnModules": "मॉड्यूल पर वापस जाएँ",
      "score.retake": "सिमुलेशन ड्रिल पुनः करें",
      "score.footer": "DGMS डिजिटल वोकेशनल लेजर #ARM-841 में दर्ज",

      "certsWorker.title": "श्रमिक प्रमाणपत्र",
      "certsWorker.subtitle": "मान्यता प्राप्त वोकेशनल योग्यता लेजर",
      "certsWorker.personnel": "प्रशिक्षु कार्मिक",
      "certsWorker.workerIdLabel": "वर्कर आईडी:",
      "certsWorker.issuedCredentials": "जारी किए गए प्रमाणपत्र",
      "certsWorker.activeVerified": "सक्रिय / सत्यापित",
      "certsWorker.credentialId": "क्रेडेंशियल आईडी:",
      "certsWorker.issued": "जारी:",
      "certsWorker.validUntil": "मान्य तिथि तक:",
      "certsWorker.digitalCertificate": "डिजिटल प्रमाणपत्र",
      "certsWorker.qr": "क्यूआर",
      "certsWorker.auditKey": "DGMS ऑन-साइट ऑडिट कुंजी",
      "certsWorker.hash": "हैश: SHA256-ARMOUR-DGMS",
      "certsWorker.done": "पूर्ण / लेजर पर वापस जाएँ",

      "profileWorker.role": "श्रमिक / प्रशिक्षु",
      "profileWorker.curriculumProgress": "पाठ्यक्रम प्रगति",
      "profileWorker.modulesDone": "पूर्ण मॉड्यूल",
      "profileWorker.certificates": "प्रमाणपत्र",
      "profileWorker.appPreferences": "ऐप प्राथमिकताएँ",
      "profileWorker.trainingLanguage": "प्रशिक्षण भाषा",
      "profileWorker.savedLocale": "सहेजी गई भाषा",
      "profileWorker.offlineStorage": "ऑफ़लाइन संग्रहण",
      "profileWorker.synced": "समन्वित",
      "profileWorker.offlineDesc": "ऑफ़लाइन खदान संचालन के लिए सुरक्षा सिमुलेशन सामग्री और स्थानीयकृत 3D एसेट संग्रहीत हैं।",
      "profileWorker.logout": "लॉग आउट करें",
      "profileWorker.footer": "ARmour मोबाइल सैंडबॉक्स • कार्मिक रोस्टर",

      "profileAdmin.role": "प्रशासक / प्रॉक्टर",
      "profileAdmin.assignedRole": "नियत परिचालन भूमिका",
      "profileAdmin.assignedRoleValue": "सिस्टम प्रशासक एवं मुख्य सुरक्षा प्रॉक्टर",
      "profileAdmin.authorization": "प्रॉक्टर प्राधिकरण",
      "profileAdmin.jurisdiction": "क्षेत्राधिकार स्टेशन",
      "profileAdmin.accreditation": "मान्यता",
      "profileAdmin.systemVersion": "सिस्टम संस्करण",
      "profileAdmin.logout": "सुरक्षित लॉग आउट",
      "profileAdmin.footer": "ARmour प्रशासन कंसोल • SIH 2026",

      "adminDash.badge": "एडमिन",
      "adminDash.title": "एडमिन डैशबोर्ड",
      "adminDash.subtitle": "सभी प्रशिक्षण गतिविधि का अवलोकन",
      "adminDash.filterAll": "सभी समय",
      "adminDash.filter30d": "पिछले 30 दिन",
      "adminDash.filter7d": "इस सप्ताह",
      "adminDash.kpiTotalTrainees": "कुल प्रशिक्षु",
      "adminDash.kpiCompleted": "पूर्ण",
      "adminDash.kpiAvgPassRate": "औसत उत्तीर्ण दर",
      "adminDash.kpiCertificates": "प्रमाणपत्र",
      "adminDash.modulePerformance": "मॉड्यूल प्रदर्शन",
      "adminDash.avgScorePrefix": "औसत स्कोर:",
      "adminDash.syllabusCompletion": "पाठ्यक्रम पूर्णता",
      "adminDash.decisionsAssessment": "निर्णय मूल्यांकन",
      "adminDash.hazardIdentification": "खतरा पहचान",
      "adminDash.ppeSelection": "PPE चयन",
      "adminDash.responseTime": "प्रतिक्रिया समय",
      "adminDash.finalAssessment": "अंतिम मूल्यांकन प्रदर्शन",
      "adminDash.recentAttempts": "हाल के प्रशिक्षण प्रयास",
      "adminDash.sessionIdPrefix": "एआर सत्र आईडी:",

      "trainees.title": "प्रशिक्षु",
      "trainees.subtitle": "पंजीकृत प्रतिभागी एवं प्रगति",
      "trainees.searchPlaceholder": "प्रशिक्षु का नाम या आईडी खोजें...",
      "trainees.enrolled": "नामांकित",
      "trainees.certified": "प्रमाणित",
      "trainees.actionReq": "कार्रवाई आवश्यक",
      "trainees.avgScore": "औसत स्कोर",
      "trainees.certificates": "प्रमाणपत्र",
      "trainees.lastActive": "अंतिम सक्रिय",
      "trainees.inTraining": "प्रशिक्षण में",
      "trainees.loadMore": "अधिक रिकॉर्ड लोड करें",

      "traineeDetail.certified": "प्रमाणित",
      "traineeDetail.overallAvgScore": "कुल औसत स्कोर",
      "traineeDetail.complianceStatus": "अनुपालन स्थिति",
      "traineeDetail.dgmsCompliant": "DGMS अनुरूप",
      "traineeDetail.accreditedModules": "मान्यता प्राप्त मॉड्यूल",
      "traineeDetail.progress": "प्रगति",
      "traineeDetail.bestScore": "सर्वश्रेष्ठ स्कोर",
      "traineeDetail.attempts": "प्रयास",
      "traineeDetail.decisionScores": "निर्णय आधारित स्कोर",
      "traineeDetail.scenarioTelemetry": "परिदृश्य-आधारित टेलीमेट्री सूचकांक",
      "traineeDetail.hazardIdentification": "खतरा पहचान",
      "traineeDetail.ppeSelectionProtocol": "PPE चयन प्रोटोकॉल",
      "traineeDetail.emergencyEvacuation": "आपातकालीन निकासी",
      "traineeDetail.attemptHistory": "प्रयास इतिहास",
      "traineeDetail.chronological": "कालानुक्रमिक",
      "traineeDetail.view": "देखें",

      "modulesAdmin.title": "मॉड्यूल",
      "modulesAdmin.subtitle": "संवर्धित वास्तविकता सुरक्षा सिमुलेशन मॉड्यूल",
      "modulesAdmin.activeMvp": "सक्रिय एमवीपी",
      "modulesAdmin.enrolled": "नामांकित",
      "modulesAdmin.completionRate": "पूर्णता दर",
      "modulesAdmin.averageScore": "औसत स्कोर",
      "modulesAdmin.passRate": "उत्तीर्ण दर",
      "modulesAdmin.compliant": "अनुरूप",
      "modulesAdmin.checkpoints": "अनिवार्य चेकपॉइंट",
      "modulesAdmin.inFlight": "प्रगति में",
      "modulesAdmin.retestActive": "पुनः परीक्षण सक्रिय",

      "certsAdmin.title": "प्रमाणपत्र",
      "certsAdmin.subtitle": "जारी किए गए क्रेडेंशियल",
      "certsAdmin.searchPlaceholder": "प्रमाणपत्र आईडी या माइनर आईडी खोजें...",
      "certsAdmin.total": "कुल",
      "certsAdmin.allLogged": "सभी दर्ज",
      "certsAdmin.valid": "मान्य",
      "certsAdmin.signOffReq": "हस्ताक्षर आवश्यक",
      "certsAdmin.module": "मॉड्यूल",
      "certsAdmin.finalScore": "अंतिम स्कोर",
      "certsAdmin.issuedPrefix": "जारी:",
      "certsAdmin.verifyQr": "क्यूआर सत्यापित करें",
      "certsAdmin.pending": "लंबित",
      "certsAdmin.simScore": "सिम स्कोर",
      "certsAdmin.minRequired": "(न्यूनतम 70%)",
      "certsAdmin.pendingReview": "प्रॉक्टर समीक्षा लंबित",
      "certsAdmin.signOff": "हस्ताक्षर करें",
      "certsAdmin.auditToken": "DGMS ऑडिट टोकन"
    },

    /* =================================================================
       SANTALI — intentionally minimal.
       Only the language's own name has a verified Santali source string
       (it appeared, in Ol Chiki script, on the original language-picker
       screen). Every other key is left out on purpose so it safely falls
       back to English rather than showing invented/unreliable Santali
       text in a safety-training context. Fill these in only with
       verified translations.
       ================================================================= */
    sat: {
      "lang.santaliNative": "ᱥᱟᱱᱛᱟᱲᱤ"
    }
  };

  function getLang() {
    var stored = window.localStorage.getItem(STORAGE_KEY);
    return stored || DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!translations[lang]) {
      lang = DEFAULT_LANG;
    }
    window.localStorage.setItem(STORAGE_KEY, lang);
    apply();
  }

  function t(key) {
    var lang = getLang();
    var dict = translations[lang] || {};
    if (dict[key] !== undefined) {
      return dict[key];
    }
    if (translations[DEFAULT_LANG][key] !== undefined) {
      if (lang !== DEFAULT_LANG) {
        console.warn('[ARmourI18n] Missing "' + key + '" for language "' + lang + '" — falling back to English.');
      }
      return translations[DEFAULT_LANG][key];
    }
    console.warn('[ARmourI18n] Unknown translation key:', key);
    return key;
  }

  function apply() {
    var lang = getLang();

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(key));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      el.setAttribute("aria-label", t(key));
    });

    // Keep <html lang="..."> accurate for accessibility/screen readers.
    // Santali has no ISO 639-1 code in wide browser use, so we keep the
    // base "en" markup lang for "sat" rather than emitting an invalid tag,
    // while the visible content itself is still whatever `sat` provides.
    document.documentElement.setAttribute("lang", lang === "hi" ? "hi" : "en");

    document.dispatchEvent(new CustomEvent("armour-i18n-applied", { detail: { lang: lang } }));
  }

  window.ARmourI18n = {
    STORAGE_KEY: STORAGE_KEY,
    translations: translations,
    getLang: getLang,
    setLang: setLang,
    t: t,
    apply: apply
  };

  document.addEventListener("DOMContentLoaded", apply);
})(window);
