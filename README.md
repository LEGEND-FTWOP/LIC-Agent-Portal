# AgentPro - LIC Agent Management Platform

A web portal designed for LIC insurance agents to easily manage policyholders, track policies, calculate commissions, and stay on top of renewals.

**Internship Details:**
- **Student Code:** DAS-LIC-001
- **Task ID:** WD-LIC-001
- **Company:** Data Alcott Systems
- **Domain:** Web Development / Insurance Tech
- **Task Page:** [freeinternships.in/web-development-internship](https://www.freeinternships.in/web-development-internship/web-development-internship-free-for-students-complete-insurance-agent-management-platform-wd-lic-001.php)
- **Submission Blog:** [freeinternships.in/blog/](https://www.freeinternships.in/blog/)

---

## How to Run the Project

You don't need to install Node.js, npm, or any database. Everything works directly in the browser.

### Option 1: Open Locally (Takes 2 seconds)
Just double-click `index.html` or run this command:
```powershell
start index.html
```

### Option 2: Live on GitHub Pages
1. Push/upload this code to your GitHub repo.
2. In GitHub, go to **Settings** > **Pages**.
3. Select `main` branch and `/ (root)` folder, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Option 3: Java Backend
The complete standalone Java backend with Spring Boot REST controllers, models, and LIC commission calculation logic is available in `AgentProApplication.java`.

---

## What Does This App Do?

Here is a quick look at the main features:

- **Executive Dashboard**: View key stats at a glance (active clients, total policies, total premium volume, commissions earned, and pending renewals). Click on any card to jump straight to that section.
- **MDRT Goal Tracker**: See your progress toward the ₹10 Lakhs annual MDRT target, with tips on how many policies you need to close.
- **Client Management (CRUD)**: Add new clients, edit their details, see their nominees, and inspect their full policy portfolio.
- **Policy Operations**: Issue policies across all 6 core LIC types (Endowment, Health, Money Back, Child, Pension, Term) and preview printable bond certificates.
- **Premium Tracker**: Log premium payments as Paid or Due, and generate 80C tax payment receipts.
- **Commission Calculator**: Interactive sliders to calculate earnings based on official LIC commission rates:
  - Year 1: 25%
  - Year 2: 15%
  - Years 3 to 5: 10%
  - Renewal (Year 6+): 5%
  - Automatic 5% TDS deduction under Section 194D.
- **Renewals & Grace Period**: Identifies policies due for renewal (within the 30-day grace window) with simulated WhatsApp and SMS notice previews.
- **Claims Tracking**: Track death, maturity, illness claims, and policy loans from submitted to disbursed.
- **Leads Kanban Board**: Move prospective clients from *New* to *Contacted* to *Converted*, and turn them into registered clients with one click.
- **Data Export & Print**: Download client lists and policy records as CSV, or print certified Form 16A commission statements.
- **Dark Mode & Session**: Switch between light and dark themes with one click. Includes an active agent session card with 1-click quick login.

---

## Tech Stack Used

- **HTML5 (`index.html`)**: Semantic markup for forms, tables, and modal dialogs.
- **Vanilla CSS3 (`style.css`)**: Custom styles, responsive grid/flexbox layout, dark mode colors, and print styling (no heavy Tailwind or Bootstrap).
- **Vanilla JavaScript (`app.js`)**: Clean modular code with zero external libraries needed for core logic:
  - Stores data in browser `localStorage` so changes stay saved when you refresh.
  - Handles commission math, rider bonuses, and tax deductions.
  - Visual analytics using Chart.js (with built-in fallback if offline).
  - Generates downloadable CSV files and printable receipts.
  - Controls view routing, search filtering, modals, and user sessions.
- **Java 17 (`AgentProApplication.java`)**: Complete standalone Spring Boot REST API containing client management, policy operations, and Section 194D TDS commission calculation service.

---

## Project Structure (Flat Architecture - No Subfolders)

All files are placed directly in the root directory for 1-click GitHub web upload:

```
├── index.html               # Frontend HTML structure & UI
├── style.css                # CSS styling, dark/light theme & responsive design
├── app.js                   # JavaScript logic, calculations, charts & storage
├── AgentProApplication.java # Java backend REST API & commission calculation engine
└── README.md                # Project guide and documentation
```

---

## Submission Details

- **Student Code:** `DAS-LIC-001`
- **Task ID:** `WD-LIC-001`
- **Internship:** Free Web Development Internship Online (Data Alcott Systems)
- **Submission Portal:** [https://www.freeinternships.in/blog/](https://www.freeinternships.in/blog/)
