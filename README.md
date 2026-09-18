# 💳 Expense Tracker App

> A lightweight, responsive web application for tracking daily income and expenses with real-time balance calculations and persistent state.

---

## 📌 Problem Statement
Managing daily personal cash flow requires a quick, frictionless tool to log income and expenses on the fly. Heavy budgeting tools often require account setup or introduce unnecessary clutter. This Expense Tracker provides an immediate, browser-native solution that calculates balances accurately and retains data across sessions.

---

## 🎯 Project Goals
- Enable users to **dynamically add and delete daily transactions**.
- Automatically calculate real-time financial metrics: total balance, total income, and total expenses.
- Prevent Cross-Site Scripting (XSS) risks by utilizing safe DOM construction methods.
- Deliver a responsive, mobile-first experience using a fluid layout design with zero layout overflow.
- Maintain full application state across reloads using client-side persistent storage.

---

## 🛠️ Tech Stack
**Technologies Used:**
- **HTML5:** Semantic document structure (`<header>`, `<main>`, `<ul>`, `<form>`).
- **CSS3:** Modern, fluid layout built without media queries for responsive design across all viewports (375px+).
- **JavaScript (ES6+):** Programmatic DOM manipulation, array manipulation methods, and mathematical calculations

**Data Persistence:**
- **Web Storage API (`localStorage`):** Retains transaction history across browser reloads.

---

## 🖥️ Features
* **Real-time Balance Calculations**: Dynamically updates total balance, income, and expenses as transactions are added or deleted.
* **Persistent Storage**: Utilizes `localStorage` to retain transaction history across browser reloads.
* **Two-way Transaction Deletion**: Supports granular transaction removal while maintaining exact balance and expense totals.
* **DOM Protection**: Secure DOM rendering built with `createElement` and `textContent` bindings rather than direct HTML template injection.
* **Fully Responsive Layout**: Fluid design that adapts seamlessly from mobile viewports (375px+) to desktop without hardcoded media queries.

---

## 📷 Screenshots
![Expense_tracker](asset/image/expense_tracker.PNG)

---

## ⚙️ Installation & Setup
To clone and run this project locally, execute the following commands in your terminal:

```bash
# Clone the repository
git clone https://github.com/RusselFonta/Expense_Tracker.git

# Navigate into the project directory
cd Expense_Tracker

# Switch branch to feature/Expense_Tracker if you are on the main branch
git checkout feature/Expense_Tracker
```

---

## 🧠 Challenges Faced
- **Two-Way Arithmetic on Deletion:** Ensuring that deleting negative amounts correctly reduces the total expense metric while re-balancing the current balance without sign inversion bugs.
- **State Synchronization:** Keeping `localStorage` arrays and the DOM list perfectly aligned when transactions are filtered out by ID during deletion

---

## 📚 What I Learned
- **Safe DOM Operations:** Constructing interactive UI components with native DOM methods to eliminate security vectors associated with string interpolation
- **Array-Based Calculations:** Deriving totals from a single array data structure rather than maintaining redundant, drift-prone state variables.
- **Fluid Layout Strategies:** Designing robust, scalable container constraints that adapt smoothly from small mobile viewports (375px) to desktop without explicit @media query breakpoints

---

## 🚀 Future Improvements
- **Interactive Budget Charts:** Integrating a library like Chart.js or ApexCharts to display monthly visual expense breakdowns in a pie chart.
- **Monthly Budget Targets:** Allowing users to set a strict spending cap and triggering color-coded alerts if they get close to exceeding it.
- **Export to CSV:** Adding a feature to download transaction history as a spreadsheet-ready file.

---

## 👨🏽‍💻 Author
**Russel Fonta Fadil**  
*Junior Fullstack Developer*  
- 📩 **Email:** fontawestbrook99@gmail.com  
- 🌍 **Location:** Cameroon (Open to remote opportunities)  
- 💼 **GitHub:** [RusselFonta](https://github.com)
