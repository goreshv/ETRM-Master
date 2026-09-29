# ETRM Master ⚡📈

> **Professional Energy Trading & Risk Management (ETRM) Learning & Simulation Platform**  
> Complete with interactive learning curricula, progressive quiz unlocking, simulated market analytics, and an enterprise trading backend.

[![React Native](https://img.shields.io/badge/React%20Native-0.81-blue.svg)](https://reactnative.dev/)
[![Expo SDK](https://img.shields.io/badge/Expo-SDK%2057-black.svg)](https://expo.dev/)
[![Django](https://img.shields.io/badge/Django-Backend-green.svg)](https://www.djangoproject.com/)
[![License](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

---

## 🌟 Key Features

### 🎓 1. Comprehensive Learning Curriculum
- **Foundations**: ETRM architecture, deal lifecycle (Front, Middle, Back Office), nominations, balancing, credit risk, and trade confirmations.
- **Oil Trading**: Crude grades (Brent, WTI, Dubai), crack spreads, prompt vs forward trading, refining margins, shipping (VLCC/Suezmax), and hedging.
- **Natural Gas**: Henry Hub benchmarks, pipeline tariffs, capacity release, storage injection/withdrawal, MMBtu conversion, and basis trading.
- **Liquefied Natural Gas (LNG)**: Cryogenic supply chains, liquefaction/regasification, DES vs FOB contracts, JKM benchmark, boil-off gas, and shipping logistics.
- **Power Markets**: Megawatts vs Megawatt-hours, spark spreads, baseload vs peakload, Day-Ahead & Intraday auctions, grid balancing, and transmission losses.

### 🏆 2. Sequential Progressive Quiz Engine
- **Mastery Gating**: Subsequent quiz categories unlock **only after scoring $\ge 60\%$** on the preceding section.
- **Interactive Feedback**: Instant visual score breakdowns, unlock badges, and direct "Play Next" navigation.
- **Reset Option**: Test your knowledge repeatedly with real-time score tracking.

### 📱 3. Offline-First Mobile Experience
- Built on **Expo SDK 57** and **React Native**.
- Zero network reliance for core learning and quizzes—fully operational offline.
- Smooth animations, dark-mode styling, and responsive layout.

### ⚙️ 4. Enterprise Backend
- Powered by **Django & Django REST Framework**.
- Trade capture, counterparty management, portfolio valuation, and risk calculations.

---

## 📂 Repository Structure

```text
ETRM-Master/
├── PulseTrade-App-main/          # React Native (Expo) Mobile Client
│   ├── assets/                   # App icons, splash screens, adaptive icons
│   ├── src/
│   │   ├── components/           # UI components (Header, cards, badges)
│   │   ├── navigation/           # React Navigation stack & tabs
│   │   ├── screens/              # Quiz, Learn, Market, Trade, Portfolio screens
│   │   ├── services/             # Quiz engine, Learning curricula, Offline data
│   │   └── types/                # TypeScript interfaces
│   ├── App.tsx                   # App root entry point
│   ├── app.json                  # Expo project metadata & Google Play config
│   ├── eas.json                  # EAS Build configuration (APK & AAB bundle)
│   └── package.json
│
└── PulseTrade-Backend-main/      # Django REST Backend API
    ├── manage.py
    └── ...                       # Backend trading engines & endpoints
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**
- **Expo Go** mobile app (iOS or Android) for live preview

### Running the Mobile App
```bash
cd PulseTrade-App-main

# Install dependencies
npm install

# Start the Expo development server
npx expo start -c
```
Scan the displayed QR code with your camera (iOS) or the **Expo Go** app (Android) to run instantly on your physical device.

---

## 📦 Building for Google Play Store

The application is pre-configured for production deployment on Android:
- **Package Name**: `com.x24tech.etrmmaster`
- **Build Tool**: Expo Application Services (`eas-cli`)

```bash
cd PulseTrade-App-main

# 1. Log in to your Expo account
npx eas login

# 2. Build production Android App Bundle (.aab)
npx eas build -p android --profile production

# Or build a standalone test APK
npx eas build -p android --profile preview
```

---

## 🛡️ License
Distributed under the MIT License. See `LICENSE` for more information.