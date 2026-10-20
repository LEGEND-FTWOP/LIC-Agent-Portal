
// ==================== js\data.js ====================
/**
 * AgentPro - LIC Agent Management Platform
 * Data Storage Engine & Initial Realistic Dataset
 * Task ID: WD-LIC-001 | Data Alcott Systems
 */

const STORAGE_KEYS = {
  CLIENTS: 'agentpro_clients',
  POLICIES: 'agentpro_policies',
  PREMIUMS: 'agentpro_premiums',
  COMMISSIONS: 'agentpro_commissions',
  RENEWALS: 'agentpro_renewals',
  CLAIMS: 'agentpro_claims',
  LEADS: 'agentpro_leads',
  AGENT_PROFILE: 'agentpro_profile',
  THEME: 'agentpro_theme',
  SESSION: 'agentpro_session'
};

const DEFAULT_AGENT_PROFILE = {
  name: "Ramesh Kumar Verma",
  code: "DAS-LIC-001",
  branch: "Chennai Metro Central (Br. 884)",
  division: "Southern Zone",
  email: "ramesh.verma@licagent.in",
  phone: "+91 98401 98765",
  experienceYears: 8,
  clubStatus: "Chairman's Club Member (MDRT Aspirant)"
};

const DEFAULT_SESSION = {
  isLoggedIn: true,
  agentCode: "DAS-LIC-001",
  agentName: "Ramesh Kumar Verma",
  branch: "Chennai Metro Central (Br. 884)",
  division: "Southern Zone",
  role: "Senior Development Officer",
  clubStatus: "Chairman's Club Member (MDRT Aspirant)",
  avatar: "RV",
  loginTime: new Date().toISOString(),
  lastActive: new Date().toISOString(),
  sessionToken: "LIC-AUTH-SES-9982"
};

// Seed Data
const INITIAL_CLIENTS = [
  {
    id: "CLI-101",
    name: "Rajesh S. Sundaram",
    email: "rajesh.sundaram@gmail.com",
    phone: "+91 98402 11234",
    city: "Chennai",
    address: "Flat 4B, Emerald Heights, T. Nagar, Chennai - 600017",
    nominee: "Lakshmi Sundaram",
    nominee_relation: "Spouse",
    medical_history: "None / Fit (Normal ECG)",
    annual_income: "₹18,50,000",
    created_at: "2024-01-15"
  },
  {
    id: "CLI-102",
    name: "Dr. Ananya Natarajan",
    email: "dr.ananya.n@apollohospitals.org",
    phone: "+91 97890 44521",
    city: "Chennai",
    address: "12/A, Kanchi Avenue, Adyar, Chennai - 600020",
    nominee: "Karthik Natarajan",
    nominee_relation: "Spouse",
    medical_history: "Mild Hypertension (Under Medication)",
    annual_income: "₹24,00,000",
    created_at: "2024-02-10"
  },
  {
    id: "CLI-103",
    name: "Vikramaditya Rao",
    email: "vikram.rao@fintech.io",
    phone: "+91 99621 88345",
    city: "Bengaluru",
    address: "702, Skyline Towers, Indiranagar, Bengaluru - 560038",
    nominee: "Sujata Rao",
    nominee_relation: "Mother",
    medical_history: "None / Fit",
    annual_income: "₹32,00,000",
    created_at: "2024-03-01"
  },
  {
    id: "CLI-104",
    name: "Pooja Deshmukh",
    email: "pooja.d@tcs.com",
    phone: "+91 98205 33219",
    city: "Mumbai",
    address: "24, Sea Breeze Apt, Bandra West, Mumbai - 400050",
    nominee: "Arun Deshmukh",
    nominee_relation: "Father",
    medical_history: "Asthma in childhood, cleared",
    annual_income: "₹14,00,000",
    created_at: "2024-04-18"
  },
  {
    id: "CLI-105",
    name: "Suresh Balakrishnan",
    email: "suresh.bala@gmail.com",
    phone: "+91 94440 67890",
    city: "Coimbatore",
    address: "88, Cross Cut Road, Gandhipuram, Coimbatore - 641012",
    nominee: "Meenakshi Balakrishnan",
    nominee_relation: "Spouse",
    medical_history: "Type 2 Diabetes (HbA1c 6.4)",
    annual_income: "₹12,50,000",
    created_at: "2024-05-12"
  },
  {
    id: "CLI-106",
    name: "Deepa Krishnan",
    email: "deepa.krish@techcorp.in",
    phone: "+91 98418 55432",
    city: "Chennai",
    address: "B-10, Green Meadows, Velachery, Chennai - 600042",
    nominee: "Aarav Krishnan",
    nominee_relation: "Son",
    medical_history: "None / Fit",
    annual_income: "₹16,00,000",
    created_at: "2024-06-20"
  }
];

const INITIAL_POLICIES = [
  {
    id: "POL-801",
    policy_number: "LIC-09823411",
    client_id: "CLI-101",
    client_name: "Rajesh S. Sundaram",
    policy_type: "Endowment Plan",
    plan_name: "LIC Jeevan Labh (Table 936)",
    premium_amount: 54000,
    term: 21,
    sum_assured: 1200000,
    payment_frequency: "Yearly",
    start_date: "2022-03-15",
    end_date: "2043-03-15",
    next_due_date: "2026-03-15",
    status: "Active",
    document_name: "Jeevan_Labh_Bond_09823411.pdf"
  },
  {
    id: "POL-802",
    policy_number: "LIC-09823412",
    client_id: "CLI-101",
    client_name: "Rajesh S. Sundaram",
    policy_type: "Term Insurance",
    plan_name: "LIC Tech Term (Table 854)",
    premium_amount: 28500,
    term: 30,
    sum_assured: 10000000,
    payment_frequency: "Yearly",
    start_date: "2023-05-10",
    end_date: "2053-05-10",
    next_due_date: "2026-05-10",
    status: "Active",
    document_name: "Tech_Term_Bond_09823412.pdf"
  },
  {
    id: "POL-803",
    policy_number: "LIC-07741290",
    client_id: "CLI-102",
    client_name: "Dr. Ananya Natarajan",
    policy_type: "Health Insurance",
    plan_name: "LIC Cancer Cover (Table 905)",
    premium_amount: 14200,
    term: 20,
    sum_assured: 2500000,
    payment_frequency: "Yearly",
    start_date: "2021-08-01",
    end_date: "2041-08-01",
    next_due_date: "2026-08-01",
    status: "Active",
    document_name: "Cancer_Cover_07741290.pdf"
  },
  {
    id: "POL-804",
    policy_number: "LIC-08819034",
    client_id: "CLI-103",
    client_name: "Vikramaditya Rao",
    policy_type: "Money Back Plan",
    plan_name: "LIC Bima Diamond (Table 841)",
    premium_amount: 72000,
    term: 16,
    sum_assured: 1500000,
    payment_frequency: "Yearly",
    start_date: "2023-11-20",
    end_date: "2039-11-20",
    next_due_date: "2026-11-20",
    status: "Renewal Due",
    document_name: "Bima_Diamond_08819034.pdf"
  },
  {
    id: "POL-805",
    policy_number: "LIC-06634812",
    client_id: "CLI-104",
    client_name: "Pooja Deshmukh",
    policy_type: "Child Plan",
    plan_name: "LIC Amritbaal (Table 874)",
    premium_amount: 36000,
    term: 18,
    sum_assured: 800000,
    payment_frequency: "Yearly",
    start_date: "2024-02-14",
    end_date: "2042-02-14",
    next_due_date: "2026-02-14",
    status: "Active",
    document_name: "Amritbaal_06634812.pdf"
  },
  {
    id: "POL-806",
    policy_number: "LIC-05519844",
    client_id: "CLI-105",
    client_name: "Suresh Balakrishnan",
    policy_type: "Pension Plan",
    plan_name: "LIC Jeevan Shanti Annuity (Table 858)",
    premium_amount: 150000,
    term: 10,
    sum_assured: 3000000,
    payment_frequency: "Yearly",
    start_date: "2020-04-05",
    end_date: "2030-04-05",
    next_due_date: "2026-04-05",
    status: "Active",
    document_name: "Jeevan_Shanti_05519844.pdf"
  },
  {
    id: "POL-807",
    policy_number: "LIC-04423189",
    client_id: "CLI-106",
    client_name: "Deepa Krishnan",
    policy_type: "Endowment Plan",
    plan_name: "LIC New Jeevan Anand (Table 915)",
    premium_amount: 48000,
    term: 25,
    sum_assured: 1000000,
    payment_frequency: "Yearly",
    start_date: "2023-10-10",
    end_date: "2048-10-10",
    next_due_date: "2026-10-10",
    status: "Lapsed",
    document_name: "Jeevan_Anand_04423189.pdf"
  }
];

const INITIAL_PREMIUMS = [
  {
    id: "PRM-501",
    policy_id: "POL-801",
    policy_number: "LIC-09823411",
    client_name: "Rajesh S. Sundaram",
    amount: 54000,
    due_date: "2026-03-15",
    payment_date: "2026-03-10",
    payment_method: "Net Banking (SBI)",
    status: "Paid",
    receipt_no: "REC-2026-981"
  },
  {
    id: "PRM-502",
    policy_id: "POL-803",
    policy_number: "LIC-07741290",
    client_name: "Dr. Ananya Natarajan",
    amount: 14200,
    due_date: "2026-08-01",
    payment_date: null,
    payment_method: "Pending",
    status: "Due",
    receipt_no: "--"
  },
  {
    id: "PRM-503",
    policy_id: "POL-804",
    policy_number: "LIC-08819034",
    client_name: "Vikramaditya Rao",
    amount: 72000,
    due_date: "2026-11-20",
    payment_date: null,
    payment_method: "Pending",
    status: "Due",
    receipt_no: "--"
  },
  {
    id: "PRM-504",
    policy_id: "POL-805",
    policy_number: "LIC-06634812",
    client_name: "Pooja Deshmukh",
    amount: 36000,
    due_date: "2026-02-14",
    payment_date: "2026-02-12",
    payment_method: "UPI (Google Pay)",
    status: "Paid",
    receipt_no: "REC-2026-842"
  },
  {
    id: "PRM-505",
    policy_id: "POL-807",
    policy_number: "LIC-04423189",
    client_name: "Deepa Krishnan",
    amount: 48000,
    due_date: "2026-10-10",
    payment_date: null,
    payment_method: "Pending",
    status: "Overdue",
    receipt_no: "--"
  }
];

const INITIAL_COMMISSIONS = [
  {
    id: "COM-701",
    policy_id: "POL-801",
    policy_number: "LIC-09823411",
    client_name: "Rajesh S. Sundaram",
    policy_year: 4,
    premium_amount: 54000,
    commission_percentage: 10,
    commission_amount: 5400,
    paid_date: "2026-03-20",
    status: "Credited"
  },
  {
    id: "COM-702",
    policy_id: "POL-805",
    policy_number: "LIC-06634812",
    client_name: "Pooja Deshmukh",
    policy_year: 2,
    premium_amount: 36000,
    commission_percentage: 15,
    commission_amount: 5400,
    paid_date: "2026-02-22",
    status: "Credited"
  },
  {
    id: "COM-703",
    policy_id: "POL-802",
    policy_number: "LIC-09823412",
    client_name: "Rajesh S. Sundaram",
    policy_year: 3,
    premium_amount: 28500,
    commission_percentage: 10,
    commission_amount: 2850,
    paid_date: "2025-05-15",
    status: "Credited"
  },
  {
    id: "COM-704",
    policy_id: "POL-806",
    policy_number: "LIC-05519844",
    client_name: "Suresh Balakrishnan",
    policy_year: 6,
    premium_amount: 150000,
    commission_percentage: 5,
    commission_amount: 7500,
    paid_date: "2025-04-12",
    status: "Credited"
  }
];

const INITIAL_RENEWALS = [
  {
    id: "REN-301",
    policy_id: "POL-804",
    policy_number: "LIC-08819034",
    client_name: "Vikramaditya Rao",
    client_phone: "+91 99621 88345",
    client_email: "vikram.rao@fintech.io",
    renewal_date: "2026-11-20",
    status: "Renewal Due",
    premium_due: 72000
  },
  {
    id: "REN-302",
    policy_id: "POL-807",
    policy_number: "LIC-04423189",
    client_name: "Deepa Krishnan",
    client_phone: "+91 98418 55432",
    client_email: "deepa.krish@techcorp.in",
    renewal_date: "2026-10-10",
    status: "Grace Period",
    premium_due: 48000
  },
  {
    id: "REN-303",
    policy_id: "POL-803",
    policy_number: "LIC-07741290",
    client_name: "Dr. Ananya Natarajan",
    client_phone: "+91 97890 44521",
    client_email: "dr.ananya.n@apollohospitals.org",
    renewal_date: "2026-08-01",
    status: "Upcoming",
    premium_due: 14200
  }
];

const INITIAL_CLAIMS = [
  {
    id: "CLM-901",
    policy_id: "POL-803",
    policy_number: "LIC-07741290",
    client_name: "Dr. Ananya Natarajan",
    claim_date: "2025-11-04",
    claim_type: "Hospitalization / Critical Care",
    amount: 150000,
    status: "Approved",
    description: "Day-care chemotherapy coverage under LIC Cancer Cover. Documents verified by TPA."
  },
  {
    id: "CLM-902",
    policy_id: "POL-801",
    policy_number: "LIC-09823411",
    client_name: "Rajesh S. Sundaram",
    claim_date: "2026-01-20",
    claim_type: "Loan Against Policy",
    amount: 250000,
    status: "Disbursed",
    description: "Emergency education loan against surrender value of LIC Jeevan Labh. Sanctioned at 9% p.a."
  }
];

const INITIAL_LEADS = [
  {
    id: "LED-401",
    name: "Kavitha Murugesan",
    contact: "+91 94441 22334",
    email: "kavitha.m@gmail.com",
    interest: "Child Plan (Amritbaal)",
    budget: "₹40,000 / yr",
    status: "Proposal Sent",
    follow_up_date: "2026-10-22",
    notes: "Interested in 18-year term for daughter's higher education."
  },
  {
    id: "LED-402",
    name: "Mohan Ramachandran",
    contact: "+91 98840 99881",
    email: "mohan.rc@zoho.com",
    interest: "Term Insurance (Tech Term)",
    budget: "₹30,000 / yr",
    status: "Contacted",
    follow_up_date: "2026-10-24",
    notes: "Requires 1 Crore sum assured. Non-smoker. Schedule online consultation."
  },
  {
    id: "LED-403",
    name: "Gopalakrishnan Iyer",
    contact: "+91 98405 66778",
    email: "gopal.iyer@bankofindia.co.in",
    interest: "Pension Plan (Jeevan Shanti)",
    budget: "₹5,00,000 (One-time)",
    status: "New",
    follow_up_date: "2026-10-20",
    notes: "Retiring in December 2026. Needs immediate guaranteed annuity."
  },
  {
    id: "LED-404",
    name: "Shalini Venkatesh",
    contact: "+91 97911 34567",
    email: "shalini.v@infosys.com",
    interest: "Endowment Plan (Jeevan Labh)",
    budget: "₹60,000 / yr",
    status: "Converted",
    follow_up_date: "2026-10-15",
    notes: "Policy issued! Converted into client CLI-101 family."
  }
];

/**
 * State Management Helper Object
 */
const StateManager = {
  get(key, defaultValue) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.error("Storage error:", e);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Storage error:", e);
    }
  },

  // Initialize all storage with defaults if not already present
  initialize() {
    // Self-healing migration: sanitize any legacy encoding artifacts from localStorage
    try {
      Object.values(STORAGE_KEYS).forEach(k => {
        const item = localStorage.getItem(k);
        if (item && (item.includes('â‚¹') || item.includes('Â·') || item.includes('\u00e2\u201a\u00b9'))) {
          const sanitized = item
            .split('â‚¹').join('₹')
            .split('\u00e2\u201a\u00b9').join('₹')
            .split('Â·').join('·');
          localStorage.setItem(k, sanitized);
        }
      });
    } catch (err) {
      console.warn("Storage migration warning:", err);
    }

    if (!localStorage.getItem(STORAGE_KEYS.CLIENTS)) {
      this.set(STORAGE_KEYS.CLIENTS, INITIAL_CLIENTS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.POLICIES)) {
      this.set(STORAGE_KEYS.POLICIES, INITIAL_POLICIES);
    }
    if (!localStorage.getItem(STORAGE_KEYS.PREMIUMS)) {
      this.set(STORAGE_KEYS.PREMIUMS, INITIAL_PREMIUMS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.COMMISSIONS)) {
      this.set(STORAGE_KEYS.COMMISSIONS, INITIAL_COMMISSIONS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.RENEWALS)) {
      this.set(STORAGE_KEYS.RENEWALS, INITIAL_RENEWALS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.CLAIMS)) {
      this.set(STORAGE_KEYS.CLAIMS, INITIAL_CLAIMS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.LEADS)) {
      this.set(STORAGE_KEYS.LEADS, INITIAL_LEADS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.AGENT_PROFILE)) {
      this.set(STORAGE_KEYS.AGENT_PROFILE, DEFAULT_AGENT_PROFILE);
    }
    if (!localStorage.getItem(STORAGE_KEYS.SESSION)) {
      this.set(STORAGE_KEYS.SESSION, DEFAULT_SESSION);
    }
  },

  resetDefaults() {
    localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(INITIAL_CLIENTS));
    localStorage.setItem(STORAGE_KEYS.POLICIES, JSON.stringify(INITIAL_POLICIES));
    localStorage.setItem(STORAGE_KEYS.PREMIUMS, JSON.stringify(INITIAL_PREMIUMS));
    localStorage.setItem(STORAGE_KEYS.COMMISSIONS, JSON.stringify(INITIAL_COMMISSIONS));
    localStorage.setItem(STORAGE_KEYS.RENEWALS, JSON.stringify(INITIAL_RENEWALS));
    localStorage.setItem(STORAGE_KEYS.CLAIMS, JSON.stringify(INITIAL_CLAIMS));
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(INITIAL_LEADS));
    localStorage.setItem(STORAGE_KEYS.AGENT_PROFILE, JSON.stringify(DEFAULT_AGENT_PROFILE));
    localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(DEFAULT_SESSION));
  }
};

/**
 * Agent Session Management Helper
 */
const SessionManager = {
  getSession() {
    return StateManager.get(STORAGE_KEYS.SESSION, DEFAULT_SESSION);
  },

  setSession(session) {
    StateManager.set(STORAGE_KEYS.SESSION, session);
  },

  isLoggedIn() {
    const s = this.getSession();
    return s && s.isLoggedIn === true;
  },

  login(agentCode, password = '') {
    const profile = StateManager.get(STORAGE_KEYS.AGENT_PROFILE, DEFAULT_AGENT_PROFILE);
    const updated = {
      isLoggedIn: true,
      agentCode: agentCode || profile.code || "DAS-LIC-001",
      agentName: profile.name || "Ramesh Kumar Verma",
      branch: profile.branch || "Chennai Metro Central (Br. 884)",
      division: profile.division || "Southern Zone",
      role: "Senior Development Officer",
      clubStatus: profile.clubStatus || "Chairman's Club Member (MDRT Aspirant)",
      avatar: (profile.name || "Ramesh Verma").split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'RV',
      loginTime: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      sessionToken: "LIC-AUTH-" + Math.random().toString(36).substring(2, 8).toUpperCase()
    };
    this.setSession(updated);
    return updated;
  },

  logout() {
    const current = this.getSession();
    const updated = {
      ...current,
      isLoggedIn: false,
      lastLogout: new Date().toISOString()
    };
    this.setSession(updated);
    return updated;
  },

  touch() {
    const current = this.getSession();
    if (current && current.isLoggedIn) {
      current.lastActive = new Date().toISOString();
      this.setSession(current);
    }
  },

  getDurationString() {
    const s = this.getSession();
    if (!s || !s.isLoggedIn || !s.loginTime) return "Inactive";
    const start = new Date(s.loginTime).getTime();
    const now = Date.now();
    const diffMins = Math.max(1, Math.floor((now - start) / 60000));
    if (diffMins < 60) {
      return `${diffMins} min${diffMins > 1 ? 's' : ''}`;
    }
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    return `${hours}h ${mins}m`;
  }
};

// Auto initialize on load
StateManager.initialize();


// ==================== js\calculator.js ====================
/**
 * AgentPro - LIC Agent Management Platform
 * Commission & Policy Premium Calculation Engine
 * Task ID: WD-LIC-001 | Data Alcott Systems
 */

const LIC_COMMISSION_RATES = {
  year1: 0.25,      // 25%
  year2: 0.15,      // 15%
  years3to5: 0.10,  // 10%
  renewal: 0.05     // 5%
};

const CalculatorEngine = {
  /**
   * Determine commission percentage based on policy year
   * @param {number} year - The policy tenure year (1, 2, 3...)
   * @returns {number} Rate as decimal
   */
  getRateByYear(year) {
    const y = parseInt(year, 10);
    if (y === 1) return LIC_COMMISSION_RATES.year1;
    if (y === 2) return LIC_COMMISSION_RATES.year2;
    if (y >= 3 && y <= 5) return LIC_COMMISSION_RATES.years3to5;
    return LIC_COMMISSION_RATES.renewal;
  },

  /**
   * Calculate full commission breakdown
   * @param {number} premiumAmount - Annual premium amount in INR
   * @param {number} policyYear - 1, 2, 3, etc.
   * @param {string} planType - 'Endowment Plan', 'Term Insurance', etc.
   * @param {boolean} hasAccidentalRider - Optional rider
   */
  calculateCommission(premiumAmount, policyYear, planType = 'Endowment Plan', hasAccidentalRider = false) {
    const premium = parseFloat(premiumAmount) || 0;
    const year = parseInt(policyYear, 10) || 1;
    
    // Base rate
    let baseRate = this.getRateByYear(year);

    // Some specific plan adjustments in LIC rules (e.g. Single Premium vs Regular)
    if (planType === 'Pension Plan' && year === 1) {
      baseRate = 0.075; // 7.5% on annuity/pension regular or single
    }

    const baseCommission = Math.round(premium * baseRate);
    
    // Accidental rider addition
    const riderCommission = hasAccidentalRider ? Math.round(premium * 0.015) : 0;
    
    // Agent Performance Incentive Bonus (2.5% for Year 1 premium)
    const performanceIncentive = (year === 1 && premium >= 50000) ? Math.round(baseCommission * 0.1) : 0;
    
    const grossCommission = baseCommission + riderCommission + performanceIncentive;
    
    // TDS under Section 194D (5% of Gross Commission)
    const tdsDeduction = Math.round(grossCommission * 0.05);
    
    const netPayout = grossCommission - tdsDeduction;

    return {
      premium,
      policyYear: year,
      planType,
      ratePercentage: (baseRate * 100).toFixed(1) + '%',
      baseCommission,
      riderCommission,
      performanceIncentive,
      grossCommission,
      tdsDeduction,
      netPayout
    };
  },

  /**
   * Approximate Maturity Benefit Estimation for LIC Endowment plans
   */
  calculateMaturityBenefit(sumAssured, termYears, bonusRatePerThousand = 48) {
    const sa = parseFloat(sumAssured) || 0;
    const term = parseInt(termYears, 10) || 15;
    
    // Simple Reversionary Bonus = (SA / 1000) * BonusRate * Term
    const simpleBonus = Math.round((sa / 1000) * bonusRatePerThousand * term);
    
    // Final Additional Bonus (FAB) for terms >= 15 years
    const fab = term >= 15 ? Math.round((sa / 1000) * 50) : 0;
    
    const totalMaturity = sa + simpleBonus + fab;

    return {
      sumAssured: sa,
      termYears: term,
      accruedBonus: simpleBonus,
      finalAdditionalBonus: fab,
      estimatedMaturity: totalMaturity
    };
  }
};


// ==================== js\charts.js ====================
/**
 * AgentPro - LIC Agent Management Platform
 * Analytics & Interactive Charts via Chart.js with Offline SVG Fallbacks
 * Task ID: WD-LIC-001 | Data Alcott Systems
 */

const ChartsManager = {
  instances: {},

  initDashboardCharts() {
    this.renderPremiumTrendChart();
    this.renderPolicyDistributionChart();
  },

  renderPremiumTrendChart() {
    const canvas = document.getElementById('premiumTrendChart');
    const fallback = document.getElementById('premiumTrendFallback');
    if (!canvas) return;

    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
      canvas.style.display = 'none';
      if (fallback) {
        fallback.style.display = 'block';
        this.renderFallbackTrendChart(fallback);
      }
      return;
    }

    // Chart.js is available: ensure canvas is visible and fallback hidden
    canvas.style.display = 'block';
    if (fallback) fallback.style.display = 'none';

    if (this.instances.premiumTrend) {
      try {
        this.instances.premiumTrend.destroy();
      } catch (e) {
        console.warn("Chart destroy warning:", e);
      }
    }

    const ctx = canvas.getContext('2d');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#94a3b8' : '#64748b';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';

    // Compute or project monthly trend data
    const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov (Proj)', 'Dec (Proj)'];
    const premiumData = [280000, 390000, 310000, 520000, 480000, 640000, 580000, 720000];
    const commissionData = [35000, 52000, 41000, 78000, 68000, 92000, 84000, 105000];

    // Read live policies and commissions to update the latest active month
    const policies = (typeof StateManager !== 'undefined') ? StateManager.get(STORAGE_KEYS.POLICIES, []) : [];
    const commissions = (typeof StateManager !== 'undefined') ? StateManager.get(STORAGE_KEYS.COMMISSIONS, []) : [];
    const currentPremTotal = policies.reduce((acc, p) => acc + (p.premium_amount || 0), 0);
    const currentCommTotal = commissions.reduce((acc, c) => acc + (c.commission_amount || 0), 0);

    if (currentPremTotal > 0) {
      premiumData[5] = Math.max(premiumData[5], currentPremTotal);
    }
    if (currentCommTotal > 0) {
      commissionData[5] = Math.max(commissionData[5], currentCommTotal);
    }

    try {
      this.instances.premiumTrend = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: months,
          datasets: [
            {
              label: 'Premium Volume (₹)',
              data: premiumData,
              backgroundColor: 'rgba(2, 132, 199, 0.75)',
              borderColor: '#0284c7',
              borderWidth: 1.5,
              borderRadius: 6,
              yAxisID: 'y'
            },
            {
              type: 'line',
              label: 'Commission Earned (₹)',
              data: commissionData,
              borderColor: '#f59e0b',
              backgroundColor: 'rgba(245, 158, 11, 0.2)',
              fill: true,
              tension: 0.35,
              pointBackgroundColor: '#f59e0b',
              pointRadius: 4,
              yAxisID: 'y1'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 12 } }
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return context.dataset.label + ': ₹' + Number(context.raw).toLocaleString('en-IN');
                }
              }
            }
          },
          scales: {
            x: {
              grid: { color: gridColor },
              ticks: { color: textColor }
            },
            y: {
              type: 'linear',
              position: 'left',
              grid: { color: gridColor },
              ticks: {
                color: textColor,
                callback: value => '₹' + (value / 1000) + 'k'
              }
            },
            y1: {
              type: 'linear',
              position: 'right',
              grid: { drawOnChartArea: false },
              ticks: {
                color: '#f59e0b',
                callback: value => '₹' + (value / 1000) + 'k'
              }
            }
          }
        }
      });
    } catch (err) {
      console.warn("Chart.js render error, fallback used:", err);
      canvas.style.display = 'none';
      if (fallback) {
        fallback.style.display = 'block';
        this.renderFallbackTrendChart(fallback);
      }
    }
  },

  renderPolicyDistributionChart() {
    const canvas = document.getElementById('policyTypeChart');
    const fallback = document.getElementById('policyTypeFallback');
    if (!canvas) return;

    // Read real policies from StateManager
    const policies = (typeof StateManager !== 'undefined') ? StateManager.get(STORAGE_KEYS.POLICIES, []) : [];
    
    // Count distribution
    const counts = {
      'Endowment Plan': 0,
      'Health Insurance': 0,
      'Money Back Plan': 0,
      'Child Plan': 0,
      'Pension Plan': 0,
      'Term Insurance': 0
    };

    policies.forEach(p => {
      if (counts[p.policy_type] !== undefined) {
        counts[p.policy_type]++;
      } else {
        counts['Endowment Plan']++;
      }
    });

    const badge = document.getElementById('portfolioTotalBadge');
    if (badge) badge.textContent = `${policies.length} Policies Total`;

    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
      canvas.style.display = 'none';
      if (fallback) {
        fallback.style.display = 'block';
        this.renderFallbackPolicyChart(fallback, counts);
      }
      return;
    }

    // Chart.js is available
    canvas.style.display = 'block';
    if (fallback) fallback.style.display = 'none';

    if (this.instances.policyType) {
      try {
        this.instances.policyType.destroy();
      } catch (e) {
        console.warn("Chart destroy warning:", e);
      }
    }

    const ctx = canvas.getContext('2d');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#94a3b8' : '#64748b';

    try {
      this.instances.policyType = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: Object.keys(counts),
          datasets: [{
            data: Object.values(counts),
            backgroundColor: [
              '#0284c7', // Endowment
              '#10b981', // Health
              '#f59e0b', // Money Back
              '#ec4899', // Child
              '#8b5cf6', // Pension
              '#3b82f6'  // Term
            ],
            borderWidth: isDark ? 2 : 1,
            borderColor: isDark ? '#151d30' : '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: textColor,
                boxWidth: 12,
                padding: 10,
                font: { family: 'Plus Jakarta Sans', size: 11 }
              }
            }
          },
          cutout: '68%'
        }
      });
    } catch (err) {
      console.warn("Chart.js render error, fallback used:", err);
      canvas.style.display = 'none';
      if (fallback) {
        fallback.style.display = 'block';
        this.renderFallbackPolicyChart(fallback, counts);
      }
    }
  },

  /* ----------------- High-Grade SVG & CSS Fallback Renderers ----------------- */
  renderFallbackTrendChart(container) {
    if (!container) return;
    const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const premiumVals = [280, 390, 310, 520, 480, 640, 580, 720];
    const maxVal = 750;

    const barsHtml = months.map((m, i) => {
      const val = premiumVals[i];
      const heightPercent = Math.round((val / maxVal) * 100);
      return `
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; height:100%; position:relative;">
          <div style="font-size:0.68rem; font-weight:700; color:var(--text-muted); margin-bottom:4px;">₹${val}k</div>
          <div style="width:70%; height:${heightPercent}%; background:linear-gradient(180deg, #38bdf8, #0284c7); border-radius:4px 4px 0 0;" title="${m}: ₹${val * 1000}"></div>
          <div style="font-size:0.7rem; color:var(--text-muted); margin-top:6px; font-weight:600;">${m}</div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between; padding:0.5rem 0;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem; font-size:0.75rem;">
          <span style="color:var(--primary); font-weight:600;"><i class="fa-solid fa-chart-column"></i> Premium Volume Collection</span>
          <span class="badge" style="background:rgba(2,132,199,0.1); color:var(--primary); font-size:0.7rem;">Vector Render Mode</span>
        </div>
        <div style="height:220px; display:flex; align-items:flex-end; gap:0.4rem; padding-bottom:0.25rem; border-bottom:1px solid var(--border-color);">
          ${barsHtml}
        </div>
      </div>
    `;
  },

  renderFallbackPolicyChart(container, counts) {
    if (!container) return;
    const colors = {
      'Endowment Plan': '#0284c7',
      'Health Insurance': '#10b981',
      'Money Back Plan': '#f59e0b',
      'Child Plan': '#ec4899',
      'Pension Plan': '#8b5cf6',
      'Term Insurance': '#3b82f6'
    };
    const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;

    const itemsHtml = Object.entries(counts).map(([name, count]) => {
      const pct = Math.round((count / total) * 100);
      const col = colors[name] || '#0284c7';
      return `
        <div style="margin-bottom:0.6rem;">
          <div style="display:flex; justify-content:space-between; font-size:0.78rem; font-weight:600; margin-bottom:0.2rem;">
            <span><span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${col}; margin-right:6px;"></span>${name}</span>
            <span>${count} (${pct}%)</span>
          </div>
          <div style="width:100%; height:8px; background:var(--input-bg); border-radius:4px; overflow:hidden;">
            <div style="width:${pct}%; height:100%; background:${col}; border-radius:4px;"></div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div style="height:100%; display:flex; flex-direction:column; justify-content:center; padding:0.5rem;">
        <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.75rem; display:flex; justify-content:space-between;">
          <span>Category Breakdown</span>
          <span style="font-weight:700; color:var(--text-main);">${total} Total Active</span>
        </div>
        ${itemsHtml}
      </div>
    `;
  },

  updateTheme() {
    this.initDashboardCharts();
  }
};


// ==================== js\export.js ====================
/**
 * AgentPro - LIC Agent Management Platform
 * Export & Reporting Engine (CSV and Printable PDF generation)
 * Task ID: WD-LIC-001 | Data Alcott Systems
 */

const ExportEngine = {
  /**
   * Convert an array of objects to CSV and trigger file download
   * @param {Array} data - Array of objects
   * @param {string} filename - Output file name
   */
  downloadCSV(data, filename = 'agentpro_export.csv') {
    if (!data || !data.length) {
      alert("No data available to export.");
      return;
    }

    const headers = Object.keys(data[0]);
    const csvRows = [];

    // Header row
    csvRows.push(headers.join(','));

    // Data rows
    for (const row of data) {
      const values = headers.map(header => {
        let val = row[header];
        if (val === null || val === undefined) val = '';
        val = val.toString().replace(/"/g, '""');
        if (val.search(/("|,|\n)/g) >= 0) {
          val = `"${val}"`;
        }
        return val;
      });
      csvRows.push(values.join(','));
    }

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  /**
   * Generates a printable summary report in a popup window ready for Print/Save as PDF
   * @param {string} reportTitle 
   * @param {string} summaryHtml 
   */
  generatePrintReport(reportTitle, summaryHtml) {
    const agentProfile = StateManager.get(STORAGE_KEYS.AGENT_PROFILE, DEFAULT_AGENT_PROFILE);
    const currentDate = new Date().toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric'
    });

    const printWindow = window.open('', '_blank', 'width=900,height=750');
    if (!printWindow) {
      alert("Popup blocker prevented opening the print report. Please allow popups.");
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${reportTitle} - AgentPro LIC Portal</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #1e293b;
            padding: 30px;
            margin: 0;
            background: #fff;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #0284c7;
            padding-bottom: 15px;
            margin-bottom: 25px;
          }
          .brand h1 {
            color: #003366;
            margin: 0;
            font-size: 24px;
          }
          .brand p {
            color: #64748b;
            margin: 4px 0 0;
            font-size: 13px;
          }
          .meta {
            text-align: right;
            font-size: 13px;
            color: #475569;
          }
          .meta strong {
            color: #003366;
          }
          .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 13px;
          }
          .table th {
            background-color: #f1f5f9;
            color: #0f172a;
            padding: 10px;
            border: 1px solid #cbd5e1;
            text-align: left;
          }
          .table td {
            padding: 9px 10px;
            border: 1px solid #e2e8f0;
          }
          .table tr:nth-child(even) {
            background-color: #f8fafc;
          }
          .footer {
            margin-top: 40px;
            border-top: 1px solid #cbd5e1;
            padding-top: 15px;
            font-size: 11px;
            color: #94a3b8;
            display: flex;
            justify-content: space-between;
          }
          @media print {
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="brand">
            <h1>AgentPro - LIC Agent Portal</h1>
            <p>Task ID: WD-LIC-001 | Data Alcott Systems</p>
          </div>
          <div class="meta">
            <div><strong>Agent:</strong> ${agentProfile.name} (${agentProfile.code})</div>
            <div><strong>Branch:</strong> ${agentProfile.branch}</div>
            <div><strong>Date:</strong> ${currentDate}</div>
          </div>
        </div>

        <h2 style="color: #0f172a; font-size: 18px; margin-bottom: 15px;">${reportTitle}</h2>
        <div>${summaryHtml}</div>

        <div class="footer">
          <div>Generated via AgentPro LIC Platform · Verified by Agent</div>
          <div>Page 1 of 1</div>
        </div>

        <div class="no-print" style="margin-top: 25px; text-align: center;">
          <button onclick="window.print()" style="padding: 10px 24px; background: #0284c7; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600;">
            Print / Save as PDF
          </button>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  }
};


// ==================== js\app.js ====================
/**
 * AgentPro - LIC Agent Management Platform
 * Main Controller & SPA Application Logic
 * Task ID: WD-LIC-001 | Data Alcott Systems
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  activeView: 'dashboard',
  currentActivityFilter: 'all',

  init() {
    this.initTheme();
    this.initSession();
    this.bindNavigation();
    this.bindGlobalSearch();
    this.renderActiveView();
    this.bindCalculator();
    this.bindModals();
    this.setupAlertBanner();

    // Responsive hamburger menu
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('appSidebar');
    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
          sidebar.classList.remove('open');
        }
      }
    });

    console.log("AgentPro Platform Initialized successfully. Task ID: WD-LIC-001");
  },

  /* ----------------- Theme Manager ----------------- */
  initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
    this.setTheme(savedTheme);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        this.setTheme(next);
      });
    }
  },

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
    if (typeof ChartsManager !== 'undefined' && ChartsManager.updateTheme) {
      setTimeout(() => ChartsManager.updateTheme(), 100);
    }
  },

  /* ----------------- Navigation & SPA Router ----------------- */
  bindNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[data-view]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.getAttribute('data-view');
        this.navigate(view);

        // On mobile, close sidebar after clicking
        const sidebar = document.getElementById('appSidebar');
        if (window.innerWidth <= 768 && sidebar) {
          sidebar.classList.remove('open');
        }
      });
    });

    // Handle deep links or hash changes
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && document.getElementById(`view-${hash}`)) {
        this.navigate(hash);
      }
    });

    if (window.location.hash) {
      const initialView = window.location.hash.replace('#', '');
      if (document.getElementById(`view-${initialView}`)) {
        this.navigate(initialView);
      }
    }
  },

  navigate(viewName) {
    this.activeView = viewName;
    window.location.hash = viewName;

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-view') === viewName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update view sections
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const targetSection = document.getElementById(`view-${viewName}`);
    if (targetSection) {
      targetSection.classList.add('active');
    }

    // Update header page title
    const titleEl = document.getElementById('headerPageTitle');
    const descEl = document.getElementById('headerPageDesc');
    const titles = {
      dashboard: { title: 'Executive Agent Dashboard', desc: 'Real-time sales analytics, active policies & key commission metrics' },
      clients: { title: 'Client Relationship Management (CRUD)', desc: 'Manage policyholders, nominees, contact details & portfolios' },
      policies: { title: 'Policy Operations & Portfolio (CRUD)', desc: 'Endowment, Term, Health, Pension, Child & Money Back plans' },
      premiums: { title: 'Premium Collection & Payment Tracker', desc: 'Track due payments, log receipts & monitor overdue balances' },
      commissions: { title: 'LIC Commission Calculator & Ledger', desc: 'Year 1 (25%), Year 2 (15%), Year 3-5 (10%), Renewal (5%) calculations' },
      renewals: { title: 'Policy Renewal & Retention Center', desc: 'Lapse prevention, grace period countdown & instant reminder dispatch' },
      claims: { title: 'Insurance Claims & Settlement Tracking', desc: 'Process death, maturity, illness claims & emergency policy loans' },
      leads: { title: 'Sales Prospecting & Lead Pipeline', desc: 'Convert prospect enquiries into high-value LIC policyholders' },
      reports: { title: 'Performance Reports & Data Exports', desc: 'Download CSV audit sheets and print certified client certificates' },
      settings: { title: 'Agent Profile & Portal Preferences', desc: 'Branch credentials, local storage controls & agency parameters' }
    };

    if (titles[viewName] && titleEl && descEl) {
      titleEl.textContent = titles[viewName].title;
      descEl.textContent = titles[viewName].desc;
    }

    this.renderActiveView();
  },

  renderActiveView() {
    switch (this.activeView) {
      case 'dashboard':
        this.renderDashboard();
        break;
      case 'clients':
        this.renderClientsTable();
        break;
      case 'policies':
        this.renderPoliciesTable();
        break;
      case 'premiums':
        this.renderPremiumsTable();
        break;
      case 'commissions':
        this.renderCommissionsTable();
        break;
      case 'renewals':
        this.renderRenewalsTable();
        break;
      case 'claims':
        this.renderClaimsTable();
        break;
      case 'leads':
        this.renderLeadsKanban();
        break;
      case 'reports':
        this.renderReportsSummary();
        break;
      case 'settings':
        this.renderSettings();
        break;
    }
  },

  /* ----------------- Notifications / Toast ----------------- */
  showToast(title, message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconClass = 'fa-solid fa-circle-check';
    if (type === 'error') iconClass = 'fa-solid fa-circle-xmark';
    if (type === 'info') iconClass = 'fa-solid fa-circle-info';

    toast.innerHTML = `
      <div class="toast-icon"><i class="${iconClass}"></i></div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-msg">${message}</div>
      </div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'slideInRight 0.3s ease reverse forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  /* ----------------- Dashboard Rendering ----------------- */
  renderDashboard() {
    const clients = StateManager.get(STORAGE_KEYS.CLIENTS, []);
    const policies = StateManager.get(STORAGE_KEYS.POLICIES, []);
    const premiums = StateManager.get(STORAGE_KEYS.PREMIUMS, []);
    const commissions = StateManager.get(STORAGE_KEYS.COMMISSIONS, []);
    const renewals = StateManager.get(STORAGE_KEYS.RENEWALS, []);

    // Compute stats
    const totalClients = clients.length;
    const activePolicies = policies.filter(p => p.status === 'Active').length;
    
    // Total premium volume
    const totalPremiumSum = policies.reduce((acc, p) => acc + (p.premium_amount || 0), 0);
    
    // Total commission earned
    const totalCommissionEarned = commissions.reduce((acc, c) => acc + (c.commission_amount || 0), 0);

    const pendingRenewalsCount = renewals.filter(r => r.status !== 'Renewed').length;

    // Set stat values in DOM
    const elClients = document.getElementById('statTotalClients');
    const elActivePolicies = document.getElementById('statActivePolicies');
    const elPremiumVolume = document.getElementById('statPremiumVolume');
    const elCommission = document.getElementById('statTotalCommission');
    const elRenewals = document.getElementById('statPendingRenewals');

    if (elClients) elClients.textContent = totalClients;
    if (elActivePolicies) elActivePolicies.textContent = activePolicies;
    if (elPremiumVolume) elPremiumVolume.textContent = '₹' + (totalPremiumSum / 100000).toFixed(1) + ' Lakhs';
    if (elCommission) elCommission.textContent = '₹' + totalCommissionEarned.toLocaleString('en-IN');
    if (elRenewals) elRenewals.textContent = pendingRenewalsCount;

    // Update Live Sync Toolbar
    const elSyncTime = document.getElementById('dashboardLastSyncTime');
    if (elSyncTime) {
      const now = new Date();
      elSyncTime.textContent = 'Updated at ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    const elAgentBadge = document.getElementById('dashboardAgentCodeBadge');
    if (elAgentBadge && typeof SessionManager !== 'undefined') {
      const sess = SessionManager.getSession();
      elAgentBadge.textContent = sess.agentCode || 'DAS-LIC-001';
    }

    // Dynamic MDRT Tracker Calculations
    const mdrtTarget = 1000000; // ₹10,00,000 MDRT Target
    // MDRT Achieved is computed from commission ledger (or projected first year commission)
    const mdrtAchieved = totalCommissionEarned;
    const mdrtPercent = Math.min(100, Math.max(0, (mdrtAchieved / mdrtTarget) * 100)).toFixed(1);
    const mdrtRemaining = Math.max(0, mdrtTarget - mdrtAchieved);

    const elMdrtAchieved = document.getElementById('mdrtAchievedVal');
    const elMdrtPercent = document.getElementById('mdrtPercentVal');
    const elMdrtBar = document.getElementById('mdrtProgressBar');
    const elMdrtRemaining = document.getElementById('mdrtRemainingText');
    const elMdrtTip = document.getElementById('mdrtMilestoneTip');

    if (elMdrtAchieved) elMdrtAchieved.textContent = '₹' + mdrtAchieved.toLocaleString('en-IN');
    if (elMdrtPercent) elMdrtPercent.textContent = mdrtPercent + '%';
    if (elMdrtBar) elMdrtBar.style.width = mdrtPercent + '%';
    if (elMdrtRemaining) elMdrtRemaining.textContent = 'Remaining: ₹' + mdrtRemaining.toLocaleString('en-IN');

    if (elMdrtTip) {
      if (mdrtRemaining > 0) {
        const policiesNeeded = Math.ceil(mdrtRemaining / 13500);
        elMdrtTip.innerHTML = `
          <i class="fa-solid fa-lightbulb" style="color:var(--lic-gold)"></i>
          Closing <strong>${policiesNeeded} more</strong> <em>LIC Jeevan Labh</em> policies (~₹13,500 avg comm.) will achieve your MDRT Milestone!
        `;
      } else {
        elMdrtTip.innerHTML = `
          <i class="fa-solid fa-crown" style="color:var(--lic-gold)"></i>
          <strong>Congratulations!</strong> You have achieved the Million Dollar Round Table (MDRT) milestone for 2026!
        `;
      }
    }

    // Badges in sidebar
    const renewalBadge = document.getElementById('sidebarRenewalBadge');
    if (renewalBadge) renewalBadge.textContent = pendingRenewalsCount;

    // Initialize charts safely with try/catch
    if (typeof ChartsManager !== 'undefined') {
      try {
        ChartsManager.initDashboardCharts();
      } catch (err) {
        console.warn("Charts initialization caught warning:", err);
      }
    }

    // Render Recent Activity feed
    this.renderRecentActivities(this.currentActivityFilter || 'all');
  },

  /* ----------------- Live Operations & Activity Stream ----------------- */
  renderRecentActivities(filter = 'all') {
    const feed = document.getElementById('recentActivityFeed');
    if (!feed) return;

    const premiums = StateManager.get(STORAGE_KEYS.PREMIUMS, []);
    const policies = StateManager.get(STORAGE_KEYS.POLICIES, []);
    const commissions = StateManager.get(STORAGE_KEYS.COMMISSIONS, []);
    const leads = StateManager.get(STORAGE_KEYS.LEADS, []);
    const renewals = StateManager.get(STORAGE_KEYS.RENEWALS, []);

    const activities = [];

    // 1. Premium Collections
    premiums.forEach(p => {
      activities.push({
        type: 'payments',
        title: `Premium ${p.status} - ₹${(p.amount || 0).toLocaleString('en-IN')}`,
        subtitle: `${p.client_name} (${p.policy_number}) · ${p.payment_method || 'Online'} · Rec: ${p.receipt_no || '--'}`,
        time: p.payment_date || p.due_date || 'Recent',
        icon: 'fa-money-bill-wave',
        badgeBg: 'rgba(16, 185, 129, 0.15)',
        badgeColor: '#10b981',
        tag: p.status,
        timestamp: p.payment_date ? new Date(p.payment_date).getTime() : Date.now() - 3600000
      });
    });

    // 2. Policy Issuances
    policies.forEach(p => {
      activities.push({
        type: 'policies',
        title: `Policy In-Force - ${p.plan_name}`,
        subtitle: `${p.client_name} · Sum Assured: ₹${p.sum_assured ? (p.sum_assured >= 10000000 ? (p.sum_assured/10000000).toFixed(1) + ' Cr' : (p.sum_assured/100000).toFixed(1) + ' Lakhs') : '--'} · ${p.policy_number}`,
        time: p.start_date || 'Recent',
        icon: 'fa-file-shield',
        badgeBg: 'rgba(2, 132, 199, 0.15)',
        badgeColor: '#0284c7',
        tag: p.status,
        timestamp: p.start_date ? new Date(p.start_date).getTime() : Date.now() - 7200000
      });
    });

    // 3. Commission Credits
    commissions.forEach(c => {
      activities.push({
        type: 'payments',
        title: `Commission Credited - ₹${(c.commission_amount || 0).toLocaleString('en-IN')}`,
        subtitle: `Policy #${c.policy_number} (${c.client_name}) · ${c.commission_percentage}% Rate Applied`,
        time: c.paid_date || 'Recent',
        icon: 'fa-coins',
        badgeBg: 'rgba(99, 102, 241, 0.15)',
        badgeColor: '#6366f1',
        tag: 'Credited',
        timestamp: c.paid_date ? new Date(c.paid_date).getTime() : Date.now() - 10800000
      });
    });

    // 4. Leads Progression
    leads.forEach(l => {
      activities.push({
        type: 'leads',
        title: `Prospect CRM - ${l.name}`,
        subtitle: `${l.interested_plan} · Budget: ${l.budget || 'Standard'} · Status: ${l.status}`,
        time: l.follow_up_date || 'Upcoming',
        icon: 'fa-bullseye',
        badgeBg: 'rgba(245, 158, 11, 0.15)',
        badgeColor: '#f59e0b',
        tag: l.status,
        timestamp: Date.now() - 14400000
      });
    });

    // 5. Urgent Renewals
    renewals.filter(r => r.status !== 'Renewed').forEach(r => {
      activities.push({
        type: 'policies',
        title: `Renewal Alert: ${r.policy_number}`,
        subtitle: `${r.client_name} · Due Date: ${r.due_date} (${r.status})`,
        time: r.due_date || 'Pending',
        icon: 'fa-triangle-exclamation',
        badgeBg: 'rgba(239, 68, 68, 0.15)',
        badgeColor: '#ef4444',
        tag: r.status,
        timestamp: Date.now() - 1800000
      });
    });

    // Sort by timestamp descending
    activities.sort((a, b) => b.timestamp - a.timestamp);

    // Apply filter
    const filtered = (filter === 'all') ? activities : activities.filter(a => a.type === filter);

    if (filtered.length === 0) {
      feed.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-inbox" style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.5;"></i>
          <p style="margin: 0; font-size: 0.85rem;">No operations found in this category.</p>
        </div>
      `;
      return;
    }

    feed.innerHTML = filtered.slice(0, 7).map(item => `
      <div style="display: flex; gap: 1rem; margin-bottom: 0.9rem; align-items: flex-start; padding: 0.5rem; border-radius: 8px; transition: background 0.15s ease;" class="activity-row">
        <div style="width: 38px; height: 38px; border-radius: 50%; background: ${item.badgeBg}; color: ${item.badgeColor}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.95rem;">
          <i class="fa-solid ${item.icon}"></i>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
            <div style="font-weight: 700; font-size: 0.86rem; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              ${item.title}
            </div>
            <span class="badge" style="background: ${item.badgeBg}; color: ${item.badgeColor}; font-size: 0.68rem; padding: 0.15rem 0.45rem;">
              ${item.tag}
            </span>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${item.subtitle}
          </div>
          <div style="font-size: 0.7rem; color: var(--text-dim); margin-top: 3px;">
            <i class="fa-regular fa-clock"></i> ${item.time}
          </div>
        </div>
      </div>
    `).join('');
  },

  filterActivityFeed(filter) {
    this.currentActivityFilter = filter;
    document.querySelectorAll('.activity-filter-btn').forEach(btn => {
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    this.renderRecentActivities(filter);
  },

  refreshDashboardMetrics() {
    const btn = document.getElementById('dashboardRefreshBtn');
    if (btn) {
      btn.classList.add('spinning');
      setTimeout(() => btn.classList.remove('spinning'), 600);
    }
    this.renderDashboard();
    this.showToast('Dashboard Refreshed', 'Live metrics, MDRT progress & activity feed updated.', 'info');
  },

  setupAlertBanner() {
    const banner = document.getElementById('urgentAlertBanner');
    if (!banner) return;
    const renewals = StateManager.get(STORAGE_KEYS.RENEWALS, []);
    const graceItems = renewals.filter(r => r.status === 'Grace Period' || r.status === 'Renewal Due');
    if (graceItems.length > 0) {
      banner.style.display = 'flex';
      const textEl = document.getElementById('urgentAlertText');
      if (textEl) {
        textEl.textContent = `Alert: ${graceItems.length} policies are currently due for renewal! Immediate follow-up required to prevent lapsing.`;
      }
    } else {
      banner.style.display = 'none';
    }
  },

  /* ----------------- Client Management (CRUD) ----------------- */
  renderClientsTable(searchQuery = '') {
    const clients = StateManager.get(STORAGE_KEYS.CLIENTS, []);
    const tbody = document.getElementById('clientsTableBody');
    if (!tbody) return;

    let filtered = clients;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = clients.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 2rem; color: var(--text-muted);">No client records found.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(c => `
      <tr>
        <td><strong>${c.id}</strong></td>
        <td>
          <div style="font-weight: 700; color: var(--text-main);">${c.name}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${c.email}</div>
        </td>
        <td>${c.phone}</td>
        <td>${c.city}</td>
        <td>
          <span style="font-weight: 600;">${c.nominee}</span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">(${c.nominee_relation})</span>
        </td>
        <td>${c.annual_income}</td>
        <td>
          <div style="display: flex; gap: 0.4rem;">
            <button class="btn btn-sm btn-outline" title="View Policy Portfolio" onclick="App.viewClientPortfolio('${c.id}')">
              <i class="fa-solid fa-briefcase"></i> Portfolio
            </button>
            <button class="btn btn-sm btn-outline" title="Edit Client" onclick="App.openEditClientModal('${c.id}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-sm btn-outline" title="Delete Client" onclick="App.deleteClient('${c.id}')" style="color: var(--danger);">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  },

  openAddClientModal() {
    const form = document.getElementById('clientForm');
    if (form) form.reset();
    document.getElementById('clientId').value = '';
    document.getElementById('clientModalTitle').textContent = 'Register New Client';
    document.getElementById('clientModal').classList.add('active');
  },

  openEditClientModal(clientId) {
    const clients = StateManager.get(STORAGE_KEYS.CLIENTS, []);
    const client = clients.find(c => c.id === clientId);
    if (!client) return;

    document.getElementById('clientId').value = client.id;
    document.getElementById('clientName').value = client.name;
    document.getElementById('clientEmail').value = client.email;
    document.getElementById('clientPhone').value = client.phone;
    document.getElementById('clientCity').value = client.city;
    document.getElementById('clientAddress').value = client.address;
    document.getElementById('clientNominee').value = client.nominee;
    document.getElementById('clientNomineeRelation').value = client.nominee_relation;
    document.getElementById('clientMedical').value = client.medical_history;
    document.getElementById('clientIncome').value = client.annual_income;

    document.getElementById('clientModalTitle').textContent = `Edit Client (${client.id})`;
    document.getElementById('clientModal').classList.add('active');
  },

  saveClient(e) {
    e.preventDefault();
    const id = document.getElementById('clientId').value;
    const name = document.getElementById('clientName').value.trim();
    const email = document.getElementById('clientEmail').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const city = document.getElementById('clientCity').value.trim();
    const address = document.getElementById('clientAddress').value.trim();
    const nominee = document.getElementById('clientNominee').value.trim();
    const nominee_relation = document.getElementById('clientNomineeRelation').value;
    const medical_history = document.getElementById('clientMedical').value.trim();
    const annual_income = document.getElementById('clientIncome').value.trim();

    if (!name || !phone || !nominee) {
      alert("Please fill in the required fields (Name, Phone, Nominee).");
      return;
    }

    const clients = StateManager.get(STORAGE_KEYS.CLIENTS, []);

    if (id) {
      // Edit existing
      const index = clients.findIndex(c => c.id === id);
      if (index !== -1) {
        clients[index] = { ...clients[index], name, email, phone, city, address, nominee, nominee_relation, medical_history, annual_income };
        StateManager.set(STORAGE_KEYS.CLIENTS, clients);
        this.showToast('Client Updated', `${name}'s details saved successfully.`, 'success');
      }
    } else {
      // Create new
      const newId = 'CLI-' + (100 + clients.length + 1);
      const newClient = {
        id: newId,
        name,
        email,
        phone,
        city,
        address,
        nominee,
        nominee_relation,
        medical_history: medical_history || 'Fit / Clear',
        annual_income: annual_income || '₹10,00,000',
        created_at: new Date().toISOString().split('T')[0]
      };
      clients.push(newClient);
      StateManager.set(STORAGE_KEYS.CLIENTS, clients);
      this.showToast('Client Created', `${name} registered as client ${newId}.`, 'success');
    }

    document.getElementById('clientModal').classList.remove('active');
    this.renderClientsTable();
    this.renderDashboard();
  },

  deleteClient(clientId) {
    if (!confirm(`Are you sure you want to delete client ${clientId}? Associated policies will also be affected.`)) {
      return;
    }
    let clients = StateManager.get(STORAGE_KEYS.CLIENTS, []);
    clients = clients.filter(c => c.id !== clientId);
    StateManager.set(STORAGE_KEYS.CLIENTS, clients);

    this.showToast('Client Deleted', `Client ${clientId} removed.`, 'info');
    this.renderClientsTable();
    this.renderDashboard();
  },

  viewClientPortfolio(clientId) {
    const clients = StateManager.get(STORAGE_KEYS.CLIENTS, []);
    const client = clients.find(c => c.id === clientId);
    if (!client) return;

    const policies = StateManager.get(STORAGE_KEYS.POLICIES, []).filter(p => p.client_id === clientId);
    const premiums = StateManager.get(STORAGE_KEYS.PREMIUMS, []).filter(p => policies.some(pol => pol.id === p.policy_id));

    const totalSA = policies.reduce((acc, p) => acc + (p.sum_assured || 0), 0);
    const totalAnnualPrem = policies.reduce((acc, p) => acc + (p.premium_amount || 0), 0);

    const container = document.getElementById('portfolioModalBody');
    if (!container) return;

    container.innerHTML = `
      <div class="portfolio-header">
        <div class="portfolio-client-title">
          <h3>${client.name}</h3>
          <p><i class="fa-solid fa-phone"></i> ${client.phone} | <i class="fa-solid fa-envelope"></i> ${client.email}</p>
          <p style="font-size: 0.78rem; opacity: 0.85; margin-top: 4px;">Address: ${client.address}</p>
        </div>
        <div style="text-align: right;">
          <span class="status-badge badge-active" style="background:#fff; color: #0284c7;">Active Portfolio</span>
          <div style="font-size: 0.8rem; margin-top: 5px;">Nominee: <strong>${client.nominee} (${client.nominee_relation})</strong></div>
        </div>
      </div>

      <div class="portfolio-stats">
        <div class="portfolio-stat-box">
          <div class="num">${policies.length}</div>
          <div class="lbl">Active Policies</div>
        </div>
        <div class="portfolio-stat-box">
          <div class="num">₹${(totalSA / 100000).toFixed(1)}L</div>
          <div class="lbl">Total Sum Assured</div>
        </div>
        <div class="portfolio-stat-box">
          <div class="num">₹${totalAnnualPrem.toLocaleString('en-IN')}</div>
          <div class="lbl">Annual Premium Outlay</div>
        </div>
      </div>

      <h4 style="margin: 1.5rem 0 0.75rem; font-size: 1.05rem;">Assigned LIC Policies</h4>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Policy No</th>
              <th>Plan</th>
              <th>Type</th>
              <th>Term</th>
              <th>Sum Assured</th>
              <th>Premium</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${policies.map(p => `
              <tr>
                <td><strong>${p.policy_number}</strong></td>
                <td>${p.plan_name}</td>
                <td><span class="type-tag">${p.policy_type}</span></td>
                <td>${p.term} Yrs</td>
                <td>₹${p.sum_assured.toLocaleString('en-IN')}</td>
                <td>₹${p.premium_amount.toLocaleString('en-IN')}</td>
                <td><span class="status-badge badge-${p.status.toLowerCase().replace(' ', '-')}">${p.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById('portfolioModal').classList.add('active');
  },

  /* ----------------- Policy Management (CRUD) ----------------- */
  renderPoliciesTable(searchQuery = '', typeFilter = 'All', statusFilter = 'All') {
    const policies = StateManager.get(STORAGE_KEYS.POLICIES, []);
    const tbody = document.getElementById('policiesTableBody');
    if (!tbody) return;

    let filtered = policies;

    if (typeFilter !== 'All') {
      filtered = filtered.filter(p => p.policy_type === typeFilter);
    }

    if (statusFilter !== 'All') {
      filtered = filtered.filter(p => p.status === statusFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.policy_number.toLowerCase().includes(q) ||
        p.client_name.toLowerCase().includes(q) ||
        p.plan_name.toLowerCase().includes(q) ||
        p.policy_type.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 2rem; color: var(--text-muted);">No policies match the criteria.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(p => `
      <tr>
        <td><strong>${p.policy_number}</strong></td>
        <td><strong>${p.client_name}</strong></td>
        <td>
          <div style="font-weight: 600;">${p.plan_name}</div>
          <span class="type-tag">${p.policy_type}</span>
        </td>
        <td>₹${(p.premium_amount || 0).toLocaleString('en-IN')} <span style="font-size:0.75rem; color:var(--text-muted);">/${p.payment_frequency}</span></td>
        <td>₹${(p.sum_assured || 0).toLocaleString('en-IN')}</td>
        <td>${p.term} Yrs</td>
        <td><span class="status-badge badge-${p.status.toLowerCase().replace(' ', '-')}">${p.status}</span></td>
        <td>
          <div style="display: flex; gap: 0.4rem;">
            <button class="btn btn-sm btn-outline" title="View Bond Document" onclick="App.viewPolicyDocument('${p.policy_number}', '${p.plan_name}', '${p.client_name}', ${p.sum_assured})">
              <i class="fa-solid fa-file-pdf"></i>
            </button>
            <button class="btn btn-sm btn-outline" title="Edit Policy" onclick="App.openEditPolicyModal('${p.id}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-sm btn-outline" title="Delete Policy" onclick="App.deletePolicy('${p.id}')" style="color: var(--danger);">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  },

  populateClientDropdown() {
    const clients = StateManager.get(STORAGE_KEYS.CLIENTS, []);
    const select = document.getElementById('policyClientId');
    if (!select) return;
    select.innerHTML = `<option value="">-- Choose Existing Client --</option>` +
      clients.map(c => `<option value="${c.id}">${c.name} (${c.id})</option>`).join('');
  },

  openAddPolicyModal() {
    this.populateClientDropdown();
    const form = document.getElementById('policyForm');
    if (form) form.reset();
    document.getElementById('policyId').value = '';
    
    // Auto-generate realistic LIC Policy Number
    const randomSuffix = Math.floor(10000000 + Math.random() * 90000000);
    document.getElementById('policyNumber').value = `LIC-${randomSuffix}`;
    document.getElementById('policyModalTitle').textContent = 'Issue New Policy';
    document.getElementById('policyModal').classList.add('active');
  },

  openEditPolicyModal(policyId) {
    this.populateClientDropdown();
    const policies = StateManager.get(STORAGE_KEYS.POLICIES, []);
    const pol = policies.find(p => p.id === policyId);
    if (!pol) return;

    document.getElementById('policyId').value = pol.id;
    document.getElementById('policyNumber').value = pol.policy_number;
    document.getElementById('policyClientId').value = pol.client_id;
    document.getElementById('policyType').value = pol.policy_type;
    document.getElementById('policyPlanName').value = pol.plan_name;
    document.getElementById('policyPremiumAmount').value = pol.premium_amount;
    document.getElementById('policyTerm').value = pol.term;
    document.getElementById('policySumAssured').value = pol.sum_assured;
    document.getElementById('policyFrequency').value = pol.payment_frequency;
    document.getElementById('policyStartDate').value = pol.start_date;
    document.getElementById('policyStatus').value = pol.status;

    document.getElementById('policyModalTitle').textContent = `Edit Policy (${pol.policy_number})`;
    document.getElementById('policyModal').classList.add('active');
  },

  savePolicy(e) {
    e.preventDefault();
    const id = document.getElementById('policyId').value;
    const policy_number = document.getElementById('policyNumber').value.trim();
    const client_id = document.getElementById('policyClientId').value;
    const policy_type = document.getElementById('policyType').value;
    const plan_name = document.getElementById('policyPlanName').value.trim();
    const premium_amount = parseFloat(document.getElementById('policyPremiumAmount').value) || 0;
    const term = parseInt(document.getElementById('policyTerm').value, 10) || 15;
    const sum_assured = parseFloat(document.getElementById('policySumAssured').value) || 0;
    const payment_frequency = document.getElementById('policyFrequency').value;
    const start_date = document.getElementById('policyStartDate').value;
    const status = document.getElementById('policyStatus').value;

    if (!policy_number || !client_id || !plan_name || !premium_amount || !sum_assured) {
      alert("Please fill all required policy fields.");
      return;
    }

    const clients = StateManager.get(STORAGE_KEYS.CLIENTS, []);
    const client = clients.find(c => c.id === client_id);
    const client_name = client ? client.name : 'Unknown Client';

    const policies = StateManager.get(STORAGE_KEYS.POLICIES, []);

    if (id) {
      const index = policies.findIndex(p => p.id === id);
      if (index !== -1) {
        policies[index] = {
          ...policies[index],
          policy_number,
          client_id,
          client_name,
          policy_type,
          plan_name,
          premium_amount,
          term,
          sum_assured,
          payment_frequency,
          start_date,
          status
        };
        StateManager.set(STORAGE_KEYS.POLICIES, policies);
        this.showToast('Policy Updated', `Policy ${policy_number} has been updated.`, 'success');
      }
    } else {
      const newId = 'POL-' + (800 + policies.length + 1);
      const newPolicy = {
        id: newId,
        policy_number,
        client_id,
        client_name,
        policy_type,
        plan_name,
        premium_amount,
        term,
        sum_assured,
        payment_frequency,
        start_date: start_date || new Date().toISOString().split('T')[0],
        end_date: '2045-01-01',
        next_due_date: '2026-12-01',
        status,
        document_name: `${plan_name.replace(/\s+/g, '_')}_${policy_number}.pdf`
      };
      policies.push(newPolicy);
      StateManager.set(STORAGE_KEYS.POLICIES, policies);

      // Auto-create initial commission entry
      const commissions = StateManager.get(STORAGE_KEYS.COMMISSIONS, []);
      const commCalc = CalculatorEngine.calculateCommission(premium_amount, 1, policy_type);
      commissions.push({
        id: 'COM-' + (700 + commissions.length + 1),
        policy_id: newId,
        policy_number,
        client_name,
        policy_year: 1,
        premium_amount,
        commission_percentage: 25,
        commission_amount: commCalc.baseCommission,
        paid_date: new Date().toISOString().split('T')[0],
        status: 'Credited'
      });
      StateManager.set(STORAGE_KEYS.COMMISSIONS, commissions);

      this.showToast('Policy Created', `Policy ${policy_number} issued for ${client_name}. 25% first-year commission generated!`, 'success');
    }

    document.getElementById('policyModal').classList.remove('active');
    this.renderPoliciesTable();
    this.renderDashboard();
  },

  deletePolicy(policyId) {
    if (!confirm(`Are you sure you want to delete policy ${policyId}?`)) return;
    let policies = StateManager.get(STORAGE_KEYS.POLICIES, []);
    policies = policies.filter(p => p.id !== policyId);
    StateManager.set(STORAGE_KEYS.POLICIES, policies);

    this.showToast('Policy Deleted', `Policy ${policyId} removed.`, 'info');
    this.renderPoliciesTable();
    this.renderDashboard();
  },

  viewPolicyDocument(policyNo, planName, clientName, sumAssured) {
    const body = document.getElementById('documentModalBody');
    if (!body) return;

    body.innerHTML = `
      <div style="border: 2px solid #003366; padding: 2rem; border-radius: 8px; background: #fff; color: #1e293b;">
        <div style="text-align: center; border-bottom: 2px solid #f59e0b; padding-bottom: 1rem; margin-bottom: 1.5rem;">
          <h2 style="color: #003366; font-size: 1.6rem; margin: 0;">LIFE INSURANCE CORPORATION OF INDIA</h2>
          <p style="font-size: 0.85rem; color: #64748b; margin: 4px 0 0;">Yogakshema, Central Office, Mumbai · Branch 884</p>
          <div style="display: inline-block; background: #003366; color: #fff; padding: 4px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; margin-top: 10px;">
            OFFICIAL POLICY BOND CERTIFICATE
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; font-size: 0.9rem; margin-bottom: 1.5rem;">
          <div>
            <div style="color: #64748b; font-size: 0.78rem;">POLICY NUMBER</div>
            <div style="font-weight: 700; font-size: 1.1rem; color: #003366;">${policyNo}</div>
          </div>
          <div>
            <div style="color: #64748b; font-size: 0.78rem;">LIFE ASSURED</div>
            <div style="font-weight: 700; font-size: 1.1rem; color: #003366;">${clientName}</div>
          </div>
          <div>
            <div style="color: #64748b; font-size: 0.78rem;">PLAN & TABLE</div>
            <div style="font-weight: 600;">${planName}</div>
          </div>
          <div>
            <div style="color: #64748b; font-size: 0.78rem;">SUM ASSURED</div>
            <div style="font-weight: 700; color: #10b981; font-size: 1.1rem;">₹${Number(sumAssured).toLocaleString('en-IN')}</div>
          </div>
        </div>

        <div style="background: #f8fafc; border: 1px dashed #cbd5e1; padding: 1rem; border-radius: 6px; font-size: 0.82rem; color: #475569; line-height: 1.6;">
          This policy witnesseth that the Life Insurance Corporation of India hereby agrees that upon proof to the satisfaction of the Corporation of the happening of the event on which the Sum Assured is payable according to the Schedule, the Corporation will pay the assured sum to the person entitled.
        </div>

        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0;">
          <div style="font-size: 0.8rem; color: #64748b;">
            Authorized Agent Code: <strong>DAS-LIC-001</strong><br>
            Digital Seal Timestamp: ${new Date().toLocaleDateString('en-IN')}
          </div>
          <div style="text-align: center;">
            <div style="font-family: 'Brush Script MT', cursive; font-size: 1.5rem; color: #003366;">Ramesh K. Verma</div>
            <div style="border-top: 1px solid #64748b; font-size: 0.75rem; color: #64748b; padding-top: 2px;">Sr. Branch Manager / Agent</div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('documentModal').classList.add('active');
  },

  /* ----------------- Premium Tracking ----------------- */
  renderPremiumsTable() {
    const premiums = StateManager.get(STORAGE_KEYS.PREMIUMS, []);
    const tbody = document.getElementById('premiumsTableBody');
    if (!tbody) return;

    tbody.innerHTML = premiums.map(p => `
      <tr>
        <td><strong>${p.id}</strong></td>
        <td><strong>${p.policy_number}</strong></td>
        <td>${p.client_name}</td>
        <td><strong style="color: var(--primary);">₹${p.amount.toLocaleString('en-IN')}</strong></td>
        <td>${p.due_date}</td>
        <td>${p.payment_date || '<span style="color:var(--text-dim);">Awaiting Payment</span>'}</td>
        <td>${p.payment_method}</td>
        <td><span class="status-badge badge-${p.status.toLowerCase()}">${p.status}</span></td>
        <td>
          ${p.status !== 'Paid' ? `
            <button class="btn btn-sm btn-success" onclick="App.markPremiumPaid('${p.id}')">
              <i class="fa-solid fa-check"></i> Collect
            </button>
          ` : `
            <button class="btn btn-sm btn-outline" onclick="App.printReceipt('${p.id}')">
              <i class="fa-solid fa-receipt"></i> Receipt
            </button>
          `}
        </td>
      </tr>
    `).join('');
  },

  markPremiumPaid(premiumId) {
    const premiums = StateManager.get(STORAGE_KEYS.PREMIUMS, []);
    const prem = premiums.find(p => p.id === premiumId);
    if (!prem) return;

    prem.status = 'Paid';
    prem.payment_date = new Date().toISOString().split('T')[0];
    prem.payment_method = 'UPI / Cash Collection';
    prem.receipt_no = 'REC-2026-' + Math.floor(100 + Math.random() * 900);

    StateManager.set(STORAGE_KEYS.PREMIUMS, premiums);
    this.showToast('Payment Recorded', `Payment of ₹${prem.amount} marked as Paid for policy ${prem.policy_number}.`, 'success');
    this.renderPremiumsTable();
    this.renderDashboard();
  },

  printReceipt(premiumId) {
    const premiums = StateManager.get(STORAGE_KEYS.PREMIUMS, []);
    const prem = premiums.find(p => p.id === premiumId);
    if (!prem) return;

    const receiptHtml = `
      <div style="border: 2px solid #0284c7; padding: 25px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; border-bottom: 2px solid #f59e0b; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="color: #003366; margin: 0;">LIFE INSURANCE CORPORATION OF INDIA</h2>
          <div style="font-size: 13px; color: #64748b;">OFFICIAL PREMIUM PAYMENT RECEIPT</div>
          <div style="font-weight: 700; color: #0284c7; margin-top: 5px;">Receipt No: ${prem.receipt_no}</div>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px; color: #64748b;">Policy Number:</td>
            <td style="padding: 8px; font-weight: 700;">${prem.policy_number}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #64748b;">Policyholder Name:</td>
            <td style="padding: 8px; font-weight: 700;">${prem.client_name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #64748b;">Payment Date:</td>
            <td style="padding: 8px;">${prem.payment_date}</td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #64748b;">Payment Mode:</td>
            <td style="padding: 8px;">${prem.payment_method}</td>
          </tr>
          <tr style="background: #f1f5f9;">
            <td style="padding: 12px 8px; font-size: 16px; font-weight: 700; color: #003366;">Premium Amount Paid:</td>
            <td style="padding: 12px 8px; font-size: 18px; font-weight: 800; color: #10b981;">₹${prem.amount.toLocaleString('en-IN')}</td>
          </tr>
        </table>

        <div style="font-size: 12px; color: #64748b; text-align: center; margin-top: 20px; border-top: 1px dashed #cbd5e1; padding-top: 15px;">
          This is an official system-generated receipt issued through AgentPro Portal. Valid for Income Tax Rebate under Section 80C.
        </div>
      </div>
    `;

    ExportEngine.generatePrintReport(`Premium Receipt - ${prem.receipt_no}`, receiptHtml);
  },

  /* ----------------- Commission Calculator & Ledger ----------------- */
  bindCalculator() {
    const calcBtn = document.getElementById('btnCalculateCommission');
    if (calcBtn) {
      calcBtn.addEventListener('click', () => this.runCalculator());
    }

    // Auto-recalculate on change
    ['calcPremium', 'calcYear', 'calcPlanType', 'calcRider'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => this.runCalculator());
        el.addEventListener('change', () => this.runCalculator());
      }
    });

    // Run once on startup
    setTimeout(() => this.runCalculator(), 200);
  },

  runCalculator() {
    const premium = parseFloat(document.getElementById('calcPremium').value) || 0;
    const year = parseInt(document.getElementById('calcYear').value, 10) || 1;
    const planType = document.getElementById('calcPlanType').value;
    const hasRider = document.getElementById('calcRider') ? document.getElementById('calcRider').checked : false;

    const result = CalculatorEngine.calculateCommission(premium, year, planType, hasRider);

    document.getElementById('calcGrossCommission').textContent = '₹' + result.grossCommission.toLocaleString('en-IN');
    document.getElementById('calcRateText').textContent = `${result.ratePercentage} (Year ${year})`;
    document.getElementById('calcBaseAmt').textContent = '₹' + result.baseCommission.toLocaleString('en-IN');
    document.getElementById('calcRiderAmt').textContent = '₹' + result.riderCommission.toLocaleString('en-IN');
    document.getElementById('calcBonusAmt').textContent = '₹' + result.performanceIncentive.toLocaleString('en-IN');
    document.getElementById('calcTdsAmt').textContent = '- ₹' + result.tdsDeduction.toLocaleString('en-IN');
    document.getElementById('calcNetAmt').textContent = '₹' + result.netPayout.toLocaleString('en-IN');
  },

  renderCommissionsTable() {
    const commissions = StateManager.get(STORAGE_KEYS.COMMISSIONS, []);
    const tbody = document.getElementById('commissionsTableBody');
    if (!tbody) return;

    tbody.innerHTML = commissions.map(c => `
      <tr>
        <td><strong>${c.id}</strong></td>
        <td><strong>${c.policy_number}</strong></td>
        <td>${c.client_name}</td>
        <td>Year ${c.policy_year}</td>
        <td>₹${c.premium_amount.toLocaleString('en-IN')}</td>
        <td><strong>${c.commission_percentage}%</strong></td>
        <td><strong style="color: var(--lic-gold);">₹${c.commission_amount.toLocaleString('en-IN')}</strong></td>
        <td>${c.paid_date}</td>
        <td><span class="status-badge badge-active">${c.status}</span></td>
      </tr>
    `).join('');
  },

  /* ----------------- Renewal Management ----------------- */
  renderRenewalsTable() {
    const renewals = StateManager.get(STORAGE_KEYS.RENEWALS, []);
    const tbody = document.getElementById('renewalsTableBody');
    if (!tbody) return;

    tbody.innerHTML = renewals.map(r => `
      <tr>
        <td><strong>${r.id}</strong></td>
        <td><strong>${r.policy_number}</strong></td>
        <td>
          <div style="font-weight: 700;">${r.client_name}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${r.client_phone}</div>
        </td>
        <td><strong>${r.renewal_date}</strong></td>
        <td><strong style="color: var(--danger);">₹${r.premium_due.toLocaleString('en-IN')}</strong></td>
        <td><span class="status-badge badge-${r.status.toLowerCase().replace(' ', '-')}">${r.status}</span></td>
        <td>
          <div style="display: flex; gap: 0.4rem;">
            <button class="btn btn-sm btn-primary" onclick="App.sendSimulatedReminder('${r.client_name}', '${r.policy_number}', '${r.premium_due}', '${r.client_phone}')">
              <i class="fa-brands fa-whatsapp"></i> Send Notice
            </button>
            <button class="btn btn-sm btn-success" onclick="App.markRenewed('${r.id}')">
              <i class="fa-solid fa-rotate"></i> Renew
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  },

  sendSimulatedReminder(clientName, policyNo, amount, phone) {
    const body = document.getElementById('reminderModalBody');
    if (!body) return;

    body.innerHTML = `
      <div style="background: #eef2f6; border-radius: 8px; padding: 1.5rem; color: #1e293b;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: #25D366; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <div>
            <div style="font-weight: 700;">WhatsApp / SMS Dispatch Preview</div>
            <div style="font-size: 0.8rem; color: #64748b;">Recipient: ${clientName} (${phone})</div>
          </div>
        </div>

        <div style="background: #ffffff; padding: 1.25rem; border-radius: 8px; border: 1px solid #cbd5e1; font-family: monospace; font-size: 0.85rem; line-height: 1.6; white-space: pre-wrap;">
Dear ${clientName},

Greetings from LIC of India!
This is a gentle reminder that renewal premium of *₹${Number(amount).toLocaleString('en-IN')}* for your LIC Policy *${policyNo}* is due.

Pay on or before the grace period to keep your risk cover and life benefits active without lapse.

Payment Modes:
- Online via LIC Portal or UPI (GPay/PhonePe)
- Cash/Cheque at Branch 884

For assistance, contact your LIC Agent:
Ramesh Kumar Verma (DAS-LIC-001) | +91 98401 98765
Yogakshema, LIC of India.
        </div>
      </div>
    `;

    document.getElementById('reminderModal').classList.add('active');
  },

  dispatchNoticeNow() {
    document.getElementById('reminderModal').classList.remove('active');
    this.showToast('Reminder Dispatched', 'Simulated SMS and WhatsApp notice delivered to client.', 'success');
  },

  markRenewed(renewalId) {
    const renewals = StateManager.get(STORAGE_KEYS.RENEWALS, []);
    const r = renewals.find(item => item.id === renewalId);
    if (!r) return;

    r.status = 'Renewed';
    StateManager.set(STORAGE_KEYS.RENEWALS, renewals);
    this.showToast('Policy Renewed', `Policy ${r.policy_number} has been marked as Renewed! Commission ledger credited.`, 'success');
    this.renderRenewalsTable();
    this.renderDashboard();
  },

  /* ----------------- Claims Management ----------------- */
  renderClaimsTable() {
    const claims = StateManager.get(STORAGE_KEYS.CLAIMS, []);
    const tbody = document.getElementById('claimsTableBody');
    if (!tbody) return;

    tbody.innerHTML = claims.map(c => `
      <tr>
        <td><strong>${c.id}</strong></td>
        <td><strong>${c.policy_number}</strong></td>
        <td>${c.client_name}</td>
        <td><span class="type-tag">${c.claim_type}</span></td>
        <td><strong style="color: var(--primary);">₹${c.amount.toLocaleString('en-IN')}</strong></td>
        <td>${c.claim_date}</td>
        <td><span class="status-badge badge-${c.status === 'Disbursed' ? 'active' : c.status === 'Approved' ? 'active' : 'pending'}">${c.status}</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="App.viewClaimDetails('${c.id}')">
            <i class="fa-solid fa-eye"></i> Details
          </button>
        </td>
      </tr>
    `).join('');
  },

  openNewClaimModal() {
    const policies = StateManager.get(STORAGE_KEYS.POLICIES, []);
    const select = document.getElementById('claimPolicySelect');
    if (select) {
      select.innerHTML = `<option value="">-- Choose Active Policy --</option>` +
        policies.map(p => `<option value="${p.id}" data-client="${p.client_name}" data-policyno="${p.policy_number}">${p.policy_number} - ${p.client_name} (${p.plan_name})</option>`).join('');
    }
    document.getElementById('claimForm').reset();
    document.getElementById('newClaimModal').classList.add('active');
  },

  saveClaim(e) {
    e.preventDefault();
    const policySelect = document.getElementById('claimPolicySelect');
    const selectedOption = policySelect.options[policySelect.selectedIndex];
    
    if (!selectedOption || !selectedOption.value) {
      alert("Please choose a policy.");
      return;
    }

    const policy_number = selectedOption.getAttribute('data-policyno');
    const client_name = selectedOption.getAttribute('data-client');
    const policy_id = selectedOption.value;
    const claim_type = document.getElementById('claimType').value;
    const amount = parseFloat(document.getElementById('claimAmount').value) || 0;
    const description = document.getElementById('claimDescription').value.trim();

    const claims = StateManager.get(STORAGE_KEYS.CLAIMS, []);
    const newId = 'CLM-' + (900 + claims.length + 1);

    claims.push({
      id: newId,
      policy_id,
      policy_number,
      client_name,
      claim_date: new Date().toISOString().split('T')[0],
      claim_type,
      amount,
      status: 'Under Review',
      description
    });

    StateManager.set(STORAGE_KEYS.CLAIMS, claims);
    this.showToast('Claim Registered', `Claim ${newId} for ₹${amount.toLocaleString('en-IN')} submitted for review.`, 'success');
    document.getElementById('newClaimModal').classList.remove('active');
    this.renderClaimsTable();
  },

  viewClaimDetails(claimId) {
    const claims = StateManager.get(STORAGE_KEYS.CLAIMS, []);
    const c = claims.find(item => item.id === claimId);
    if (!c) return;

    alert(`Claim ID: ${c.id}\nPolicy No: ${c.policy_number}\nClient: ${c.client_name}\nType: ${c.claim_type}\nAmount: ₹${c.amount.toLocaleString('en-IN')}\nStatus: ${c.status}\n\nDescription:\n${c.description}`);
  },

  /* ----------------- Lead Management & Kanban ----------------- */
  renderLeadsKanban() {
    const leads = StateManager.get(STORAGE_KEYS.LEADS, []);
    const columns = {
      'New': document.getElementById('leadsColNew'),
      'Contacted': document.getElementById('leadsColContacted'),
      'Proposal Sent': document.getElementById('leadsColProposal'),
      'Converted': document.getElementById('leadsColConverted')
    };

    // Reset columns
    Object.keys(columns).forEach(key => {
      if (columns[key]) columns[key].innerHTML = '';
    });

    // Counts
    const counts = { 'New': 0, 'Contacted': 0, 'Proposal Sent': 0, 'Converted': 0 };

    leads.forEach(l => {
      if (columns[l.status]) {
        counts[l.status] = (counts[l.status] || 0) + 1;
        const card = document.createElement('div');
        card.className = 'lead-card';
        card.innerHTML = `
          <div class="lead-card-header">
            <span class="lead-name">${l.name}</span>
            <span class="lead-budget">${l.budget}</span>
          </div>
          <div class="lead-plan"><i class="fa-solid fa-shield-halved"></i> ${l.interest}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.5rem;">${l.notes}</div>
          <div class="lead-footer">
            <span><i class="fa-solid fa-calendar-day"></i> Follow-up: ${l.follow_up_date}</span>
            <div style="display: flex; gap: 0.3rem;">
              ${l.status !== 'Converted' ? `
                <button class="btn btn-sm btn-outline" title="Advance Stage" onclick="App.advanceLead('${l.id}')">
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
                <button class="btn btn-sm btn-primary" title="Convert to Client" onclick="App.convertLeadToClient('${l.id}')">
                  <i class="fa-solid fa-user-plus"></i> Convert
                </button>
              ` : `
                <span class="status-badge badge-converted"><i class="fa-solid fa-check"></i> Won</span>
              `}
            </div>
          </div>
        `;
        columns[l.status].appendChild(card);
      }
    });

    // Update count labels
    document.getElementById('countLeadNew').textContent = counts['New'] || 0;
    document.getElementById('countLeadContacted').textContent = counts['Contacted'] || 0;
    document.getElementById('countLeadProposal').textContent = counts['Proposal Sent'] || 0;
    document.getElementById('countLeadConverted').textContent = counts['Converted'] || 0;
  },

  openNewLeadModal() {
    document.getElementById('leadForm').reset();
    document.getElementById('leadModal').classList.add('active');
  },

  saveLead(e) {
    e.preventDefault();
    const name = document.getElementById('leadName').value.trim();
    const contact = document.getElementById('leadContact').value.trim();
    const email = document.getElementById('leadEmail').value.trim();
    const interest = document.getElementById('leadInterest').value;
    const budget = document.getElementById('leadBudget').value.trim();
    const follow_up_date = document.getElementById('leadFollowUp').value;
    const notes = document.getElementById('leadNotes').value.trim();

    if (!name || !contact) {
      alert("Please provide the lead's name and contact number.");
      return;
    }

    const leads = StateManager.get(STORAGE_KEYS.LEADS, []);
    const newId = 'LED-' + (400 + leads.length + 1);

    leads.push({
      id: newId,
      name,
      contact,
      email: email || 'prospect@gmail.com',
      interest,
      budget: budget || '₹50,000 / yr',
      status: 'New',
      follow_up_date: follow_up_date || new Date().toISOString().split('T')[0],
      notes: notes || 'Lead captured via digital campaign.'
    });

    StateManager.set(STORAGE_KEYS.LEADS, leads);
    this.showToast('Lead Created', `Lead ${name} added to pipeline.`, 'success');
    document.getElementById('leadModal').classList.remove('active');
    this.renderLeadsKanban();
  },

  advanceLead(leadId) {
    const leads = StateManager.get(STORAGE_KEYS.LEADS, []);
    const l = leads.find(item => item.id === leadId);
    if (!l) return;

    const stages = ['New', 'Contacted', 'Proposal Sent', 'Converted'];
    const idx = stages.indexOf(l.status);
    if (idx !== -1 && idx < stages.length - 1) {
      l.status = stages[idx + 1];
      StateManager.set(STORAGE_KEYS.LEADS, leads);
      this.showToast('Lead Advanced', `${l.name} moved to stage '${l.status}'.`, 'info');
      this.renderLeadsKanban();
    }
  },

  convertLeadToClient(leadId) {
    const leads = StateManager.get(STORAGE_KEYS.LEADS, []);
    const l = leads.find(item => item.id === leadId);
    if (!l) return;

    l.status = 'Converted';
    StateManager.set(STORAGE_KEYS.LEADS, leads);

    // Pre-populate Add Client modal
    this.openAddClientModal();
    document.getElementById('clientName').value = l.name;
    document.getElementById('clientPhone').value = l.contact;
    document.getElementById('clientEmail').value = l.email || '';
    document.getElementById('clientIncome').value = l.budget || '';

    this.showToast('Lead Converted', `${l.name} marked as Converted! Pre-filling Client Registration Form.`, 'success');
  },

  /* ----------------- Reports & Exports ----------------- */
  renderReportsSummary() {
    const clients = StateManager.get(STORAGE_KEYS.CLIENTS, []);
    const policies = StateManager.get(STORAGE_KEYS.POLICIES, []);
    const commissions = StateManager.get(STORAGE_KEYS.COMMISSIONS, []);

    document.getElementById('reportTotalClients').textContent = clients.length;
    document.getElementById('reportTotalPolicies').textContent = policies.length;
    
    const totalComms = commissions.reduce((acc, c) => acc + (c.commission_amount || 0), 0);
    document.getElementById('reportTotalCommission').textContent = '₹' + totalComms.toLocaleString('en-IN');
  },

  exportClientsCSV() {
    const clients = StateManager.get(STORAGE_KEYS.CLIENTS, []);
    ExportEngine.downloadCSV(clients, 'LIC_Clients_Directory.csv');
    this.showToast('Export Success', 'Clients directory downloaded as CSV.', 'success');
  },

  exportPoliciesCSV() {
    const policies = StateManager.get(STORAGE_KEYS.POLICIES, []);
    ExportEngine.downloadCSV(policies, 'LIC_Active_Policies_Ledger.csv');
    this.showToast('Export Success', 'Policies ledger downloaded as CSV.', 'success');
  },

  exportCommissionStatementPDF() {
    const commissions = StateManager.get(STORAGE_KEYS.COMMISSIONS, []);
    const totalCommission = commissions.reduce((sum, c) => sum + (c.commission_amount || 0), 0);
    const totalTds = Math.round(totalCommission * 0.05);
    const netCommission = totalCommission - totalTds;

    const tableHtml = `
      <p style="font-size: 14px; margin-bottom: 15px;">
        Official Commission Statement & Tax Deduction Certificate for FY 2025-26 under Section 194D.
      </p>

      <table class="table">
        <thead>
          <tr>
            <th>Txn ID</th>
            <th>Policy Number</th>
            <th>Client Name</th>
            <th>Tenure Year</th>
            <th>Premium Collected</th>
            <th>Commission Rate</th>
            <th>Gross Commission</th>
            <th>TDS (5%)</th>
            <th>Credit Date</th>
          </tr>
        </thead>
        <tbody>
          ${commissions.map(c => `
            <tr>
              <td>${c.id}</td>
              <td>${c.policy_number}</td>
              <td>${c.client_name}</td>
              <td>Year ${c.policy_year}</td>
              <td>₹${c.premium_amount.toLocaleString('en-IN')}</td>
              <td>${c.commission_percentage}%</td>
              <td><strong>₹${c.commission_amount.toLocaleString('en-IN')}</strong></td>
              <td>-₹${Math.round(c.commission_amount * 0.05).toLocaleString('en-IN')}</td>
              <td>${c.paid_date}</td>
            </tr>
          `).join('')}
        </tbody>
        <tfoot>
          <tr style="background: #e2e8f0; font-weight: 700;">
            <td colspan="6" style="padding: 10px; text-align: right;">Total Gross Commission:</td>
            <td style="padding: 10px; color: #0284c7;">₹${totalCommission.toLocaleString('en-IN')}</td>
            <td style="padding: 10px; color: #ef4444;">-₹${totalTds.toLocaleString('en-IN')}</td>
            <td>Net: ₹${netCommission.toLocaleString('en-IN')}</td>
          </tr>
        </tfoot>
      </table>
    `;

    ExportEngine.generatePrintReport('Annual LIC Commission Statement (Form 16A Audit)', tableHtml);
  },

  /* ----------------- Settings & Preferences ----------------- */
  renderSettings() {
    const profile = StateManager.get(STORAGE_KEYS.AGENT_PROFILE, DEFAULT_AGENT_PROFILE);
    document.getElementById('agentNameInput').value = profile.name;
    document.getElementById('agentCodeInput').value = profile.code;
    document.getElementById('agentBranchInput').value = profile.branch;
    document.getElementById('agentDivisionInput').value = profile.division;
    document.getElementById('agentEmailInput').value = profile.email;
    document.getElementById('agentPhoneInput').value = profile.phone;
  },

  saveAgentProfile(e) {
    e.preventDefault();
    const profile = {
      name: document.getElementById('agentNameInput').value.trim(),
      code: document.getElementById('agentCodeInput').value.trim(),
      branch: document.getElementById('agentBranchInput').value.trim(),
      division: document.getElementById('agentDivisionInput').value.trim(),
      email: document.getElementById('agentEmailInput').value.trim(),
      phone: document.getElementById('agentPhoneInput').value.trim(),
      experienceYears: 8,
      clubStatus: "Chairman's Club Member"
    };

    StateManager.set(STORAGE_KEYS.AGENT_PROFILE, profile);
    this.showToast('Profile Saved', 'Agent credentials and branch updated.', 'success');
  },

  resetPortalData() {
    if (confirm("Are you sure you want to reset all data back to original default seed values? Any custom clients and policies will be reloaded.")) {
      StateManager.resetDefaults();
      this.showToast('Data Reset', 'All tables restored to default initial values.', 'info');
      this.renderActiveView();
      this.renderDashboard();
    }
  },

  /* ----------------- Global Search & Modals Setup ----------------- */
  bindGlobalSearch() {
    const globalInput = document.getElementById('globalSearchInput');
    if (globalInput) {
      globalInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 0 && this.activeView !== 'clients' && this.activeView !== 'policies') {
          this.navigate('clients');
        }
        if (this.activeView === 'clients') {
          this.renderClientsTable(query);
        } else if (this.activeView === 'policies') {
          this.renderPoliciesTable(query);
        }
      });
    }

    // Client toolbar search
    const clientSearch = document.getElementById('clientSearchInput');
    if (clientSearch) {
      clientSearch.addEventListener('input', (e) => this.renderClientsTable(e.target.value));
    }

    // Policy toolbar filters
    const polSearch = document.getElementById('policySearchInput');
    const polTypeFilter = document.getElementById('policyTypeFilter');
    const polStatusFilter = document.getElementById('policyStatusFilter');

    const updatePolicyFilters = () => {
      const q = polSearch ? polSearch.value : '';
      const type = polTypeFilter ? polTypeFilter.value : 'All';
      const status = polStatusFilter ? polStatusFilter.value : 'All';
      this.renderPoliciesTable(q, type, status);
    };

    if (polSearch) polSearch.addEventListener('input', updatePolicyFilters);
    if (polTypeFilter) polTypeFilter.addEventListener('change', updatePolicyFilters);
    if (polStatusFilter) polStatusFilter.addEventListener('change', updatePolicyFilters);
  },

  bindModals() {
    // Form submits
    const clientForm = document.getElementById('clientForm');
    if (clientForm) clientForm.addEventListener('submit', (e) => this.saveClient(e));

    const policyForm = document.getElementById('policyForm');
    if (policyForm) policyForm.addEventListener('submit', (e) => this.savePolicy(e));

    const leadForm = document.getElementById('leadForm');
    if (leadForm) leadForm.addEventListener('submit', (e) => this.saveLead(e));

    const claimForm = document.getElementById('claimForm');
    if (claimForm) claimForm.addEventListener('submit', (e) => this.saveClaim(e));

    const profileForm = document.getElementById('agentProfileForm');
    if (profileForm) profileForm.addEventListener('submit', (e) => this.saveAgentProfile(e));

    // Modal Close Buttons
    document.querySelectorAll('.modal-close, [data-modal-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      });
    });

    // Close when clicking modal backdrop
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.addEventListener('click', (e) => {
        if (e.target === m) {
          m.classList.remove('active');
        }
      });
    });
  },

  /* ----------------- Agent Session Management ----------------- */
  initSession() {
    this.updateSessionUI();

    // Check if session is logged in
    if (typeof SessionManager !== 'undefined' && !SessionManager.isLoggedIn()) {
      this.openLoginModal(false);
    }

    // Session heartbeat every 30s
    setInterval(() => {
      if (typeof SessionManager !== 'undefined' && SessionManager.isLoggedIn()) {
        SessionManager.touch();
        this.updateSessionUI();
      }
    }, 30000);
  },

  updateSessionUI() {
    if (typeof SessionManager === 'undefined') return;
    const session = SessionManager.getSession();
    const isLoggedIn = session && session.isLoggedIn === true;

    // Sidebar Agent Profile elements
    const sidebarName = document.getElementById('sidebarAgentName');
    const sidebarCode = document.getElementById('sidebarAgentCode');
    const sidebarAvatar = document.getElementById('sidebarAgentAvatar');
    const sidebarBadge = document.getElementById('sidebarSessionBadge');

    if (sidebarName) sidebarName.textContent = session.agentName || 'Ramesh K. Verma';
    if (sidebarCode) sidebarCode.innerHTML = `<i class="fa-solid fa-id-badge"></i> ${session.agentCode || 'DAS-LIC-001'}`;
    if (sidebarAvatar) sidebarAvatar.textContent = session.avatar || 'RV';

    if (sidebarBadge) {
      if (isLoggedIn) {
        sidebarBadge.className = 'session-badge active';
        sidebarBadge.innerHTML = '<span class="session-dot"></span> Active';
      } else {
        sidebarBadge.className = 'session-badge inactive';
        sidebarBadge.innerHTML = '<span class="session-dot off"></span> Locked';
      }
    }

    // Header Session Chip
    const headerText = document.getElementById('headerSessionText');
    if (headerText) {
      headerText.textContent = isLoggedIn ? `${session.agentCode || 'DAS-LIC-001'} · Active` : 'Session Locked';
    }
  },

  openSessionModal() {
    if (typeof SessionManager === 'undefined') return;
    const session = SessionManager.getSession();
    const profile = StateManager.get(STORAGE_KEYS.AGENT_PROFILE, DEFAULT_AGENT_PROFILE);

    const elName = document.getElementById('sessionModalAgentName');
    const elCode = document.getElementById('sessionModalAgentCode');
    const elAvatar = document.getElementById('sessionModalAvatar');
    const elBranch = document.getElementById('sessionModalBranch');
    const elDivision = document.getElementById('sessionModalDivision');
    const elClub = document.getElementById('sessionModalClub');
    const elDuration = document.getElementById('sessionModalDuration');
    const elLoginTime = document.getElementById('sessionModalLoginTime');
    const elToken = document.getElementById('sessionModalToken');

    if (elName) elName.textContent = session.agentName || profile.name;
    if (elCode) elCode.textContent = session.agentCode || profile.code;
    if (elAvatar) elAvatar.textContent = session.avatar || 'RV';
    if (elBranch) elBranch.textContent = profile.branch || 'Chennai Metro Central (884)';
    if (elDivision) elDivision.textContent = profile.division || 'Southern Zone';
    if (elClub) elClub.textContent = profile.clubStatus || "Chairman's Club Member";
    if (elDuration) elDuration.textContent = SessionManager.getDurationString();
    if (elToken) elToken.textContent = session.sessionToken || 'LIC-AUTH-SECURE-884';

    if (elLoginTime && session.loginTime) {
      const d = new Date(session.loginTime);
      elLoginTime.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' (' + d.toLocaleDateString() + ')';
    }

    const modal = document.getElementById('modalAgentSession');
    if (modal) modal.classList.add('active');
  },

  openLoginModal(canClose = true) {
    const modal = document.getElementById('modalAgentLogin');
    if (!modal) return;
    modal.classList.add('active');
    const closeBtns = modal.querySelectorAll('.modal-close, [data-modal-close]');
    closeBtns.forEach(btn => {
      btn.style.display = canClose ? 'inline-flex' : 'none';
    });
  },

  handleLoginSubmit(e) {
    if (e) e.preventDefault();
    const codeInput = document.getElementById('loginAgentCode');
    const pinInput = document.getElementById('loginAgentPin');
    const code = codeInput ? codeInput.value.trim() : 'DAS-LIC-001';
    const pin = pinInput ? pinInput.value.trim() : '';

    if (!code) {
      this.showToast('Login Failed', 'Please provide a valid LIC Agent Code.', 'error');
      return;
    }

    if (typeof SessionManager !== 'undefined') {
      const session = SessionManager.login(code, pin);
      const modal = document.getElementById('modalAgentLogin');
      if (modal) modal.classList.remove('active');
      this.updateSessionUI();
      this.renderDashboard();
      this.showToast('Session Started', `Welcome, ${session.agentName}! Terminal session authenticated.`, 'success');
    }
  },

  quickDemoLogin() {
    if (typeof SessionManager !== 'undefined') {
      const session = SessionManager.login('DAS-LIC-001', 'lic123');
      const modal = document.getElementById('modalAgentLogin');
      if (modal) modal.classList.remove('active');
      this.updateSessionUI();
      this.renderDashboard();
      this.showToast('Demo Session Activated', 'Logged in as Ramesh Kumar Verma (DAS-LIC-001)', 'success');
    }
  },

  handleLogout() {
    if (typeof SessionManager !== 'undefined') {
      SessionManager.logout();
      this.updateSessionUI();

      // Close session details modal if open
      const sessionModal = document.getElementById('modalAgentSession');
      if (sessionModal) sessionModal.classList.remove('active');

      this.showToast('Session Ended', 'Agent session locked securely. Please log in to continue.', 'info');
      this.openLoginModal(false);
    }
  }
};

