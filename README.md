# 🍔 BiteDash – Modern Fast-Food Delivery Frontend

**BiteDash** is a premium, high-performance, and fully responsive frontend architecture for a fast-food delivery web application. It is built using the cutting-edge combination of **React 19**, **Tailwind CSS v4**, and **Redux Toolkit** to deliver a dynamic, real-time, and lightning-fast food ordering experience.

---

## 📝 Project Description

BiteDash is engineered around a Single-Page Application (SPA) architecture designed to mimic modern production-grade food delivery platforms. The core objective of the project is to implement a robust, state-driven data flow. By utilizing Redux Toolkit, the entire application maintains a centralized, predictable state, automating complex cart mechanics and dynamic computations seamlessly in the background.

---

## 📂 Project Folder Structure

BiteDash follows a highly organized, modular, and component-driven directory layout:

```text
bitedash/
├── public/
│   └── favicon.svg         # Custom modern brand asset (Speed + Burger visual icon)
├── src/
│   ├── assets/             # Optimized AVIF product images
│   ├── compoents/          # Modular and reusable UI structural layouts (Navbar, Cards)
│   │   ├── Card.jsx        # Food item menu layout with dynamic event bindings
│   │   └── Navbar.jsx      # Header routing console and central branding display
│   ├── context/
│   │   └── Context.jsx     # Auxiliary lightweight custom state provider
│   ├── pages/
│   │   └── Home.jsx        # Main viewport dashboard for feeds, filtering, and billing
│   ├── redux/
│   │   ├── cartSlice.js    # Strict transactional actions (Add, Increment, Decrement, Delete)
│   │   └── store.js        # Central Redux source-of-truth configuration
│   ├── food.js             # Localized mock database asset for menu items
│   ├── index.css           # Global core styles with Tailwind v4 engine directives
│   └── main.jsx            # Application root DOM rendering entrypoint
├── .gitignore              # Access control list tracking ignored local cache/dependencies
├── index.html              # Shell HTML document with integrated favicon linking
├── package.json            # Manifest file managing React 19 and Vite 8 scripts
├── package-lock.json       # Tree-locked version registry for all installed modules
└── vite.config.js          # Core bundler settings for hot module replacement (HMR)


🚀 Key Features

    🔍 Dynamic Live Search Engine: Features a high-speed, client-side query filter that instantly tracks and updates matching menu items in the viewport as the user types, without forcing page reloads.

    📂 Smart Category Tabs: Segmented navigation architecture (Breakfast, Soups, Pasta, Main Course) that instantaneously shifts product visibility based on active category states.

    🛒 Advanced Redux Cart Workflows:

        Dynamic Quantity Control (+ / -): If a backend dataset lacks a pre-defined quantity parameter, the code injects a runtime fallback quantity: 1 property, preventing duplicate items from stacking inside the cart array.

        Real-Time Price Scaling: Utilizes pure mathematical mapping to evaluate Number(item.price) * item.quantity iteratively, tracking individual product increments instantly.

    💰 Bulletproof Billing Console:

        Centralized calculations handling subtotal accumulation, structural 5% flat tax rates (GST), and conditional shipping overheads, compiled through rigorous .toFixed(2) decimal rounding.

        Ternary Layout Protections: If the cart array is empty, the entire billing card visually updates to zero out the breakdown metrics and disables the order button.

    🎨 Next-Gen Tailwind CSS v4 Layouts: Fully customized green-palette typography and background layout wrappers, paired with scalable SVG favicons that maintain absolute visual clarity across all display profiles.


    🛠️ Tech Stack & Architecture

BiteDash utilizes the latest and most efficient development tooling available:

    Core Framework Engine: React 19 (Optimized fiber reconciliation and state lifecycles)

    Central State Management: Redux Toolkit & React-Redux

    Styling Architecture: Tailwind CSS v4 (Rapid compile speeds and utility-first layer mapping)

    Project Packaging Tool: Vite 8 (Ultra-fast build compiling and asset staging)

    Asset Icon Packs: React Icons

    Notification Engine: React Toastify

    Code Linter & Quality Checker: Oxlint

💻 Local Installation & Deployment

Follow these quick setup commands to fire up the project environment on your local machine:
1. Clone the Active Project Repository
Bash

git clone [https://github.com/codertaukir/bitedash.git](https://github.com/codertaukir/bitedash.git)
cd bitedash