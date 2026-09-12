import {
  BarChart3,
  BriefcaseBusiness,
  Database,
  Layers,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  AchievementItem,
  CertificationItem,
  EducationItem,
  ExperienceItem,
  FeaturedCaseStudy,
  ProjectItem,
  QuickMetric,
  SkillCategory
} from "../types/portfolio";

export const resumeSummary =
  "Data Analyst with experience in business reporting, inventory analytics, dashboard development, and process automation. Skilled in SQL, Python, Excel, Power BI, and AI-assisted analytics workflows. Experienced in transforming raw data into actionable insights, automating reporting systems, and developing data-driven solutions that improve operational efficiency and support business decisions.";

export const quickMetrics: QuickMetric[] = [
  { value: "997+", label: "Data-log rows automated", detail: "Daily live tracking without data redundancy" },
  { value: "27", label: "Integrated Excel sheets", detail: "Multi-branch analytics & consolidated reporting" },
  { value: "16", label: "Critical management numbers", detail: "VOR tracking, inventory turnover, margin leakages" },
  { value: "6", label: "Revenue streams modeled", detail: "Parts, Labour, Oil, DEF, Warranty, Accidental" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Database,
    items: ["Python (Pandas, Numpy)", "SQL (MySQL)", "Data Cleansing", "Automated Pipelines"]
  },
  {
    title: "Data & BI",
    icon: BarChart3,
    items: [
      "Microsoft Excel",
      "Advanced Formulas",
      "XLOOKUP",
      "SUMIFS",
      "Pivot Tables",
      "Data Validation",
      "Power BI (Dashboard)",
      "Tableau",
      "Google Sheets",
      "Looker"
    ]
  },
  {
    title: "ERP Systems (Construction & Infra)",
    icon: BriefcaseBusiness,
    items: [
      "BOQ (Bill of Quantities)",
      "GRN (Goods Receipt Note)",
      "DPR (Daily Progress Report)",
      "Material Indent",
      "Store Issue Logs",
      "Purchase Orders (PO)",
      "Machinery Logs"
    ]
  },
  {
    title: "Domain Skills",
    icon: Layers,
    items: [
      "MIS Reporting",
      "Performance Scorecards",
      "KPI Tracking",
      "Data Validation",
      "Cost Variance Tracking",
      "Executive Decision Support"
    ]
  },
  {
    title: "Platforms & AI Tools",
    icon: Workflow,
    items: [
      "Google Apps Script",
      "Google Sites",
      "MS Office",
      "Windows 10/11",
      "Claude",
      "OpenAI (ChatGPT)",
      "Gemini AI"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "Surface Engineering Pvt. Ltd.",
    role: "Data Analyst | MIS Executive",
    location: "Raipur, Chhattisgarh",
    period: "Mar 2026 — Present",
    current: true,
    points: [
      "Built estimated vs actual reports to track project performance and cost variance.",
      "Developed profit calculators and revenue analysis sheets for management reporting.",
      "Analyzed inventory consumption and procurement data to optimize stock planning.",
      "Created dashboards and business reports using Excel and Google Sheets.",
      "Designed a centralized Google Sites platform integrated with Google Sheets for attendance, stock reports, and daily site operations.",
      "Automated manual reporting processes using Google Apps Script.",
      "Improved reporting efficiency and data accuracy through structured data management."
    ]
  },
  {
    company: "FitClap",
    role: "MIS Executive",
    location: "Ahmedabad, India",
    period: "Jul 2025 — Dec 2025",
    current: false,
    points: [
      "Engineered dynamic dashboards using ERP and CRM data to track real-time memberships, payments, renewals, and customer lifecycle metrics.",
      "Built operational scorecards from financial and operational datasets to highlight business trends, performance gaps, and growth opportunities.",
      "Automated reporting workflows by creating data-driven dashboards, reducing manual reporting hours and accelerating stakeholder decisions.",
      "Maintained central dashboard health to support daily operations and provide leadership with real-time business visibility."
    ]
  }
];

export const currentProjects: ProjectItem[] = [
  {
    no: "01",
    title: "Attendance Reporting System",
    type: "Excel Enterprise Reporting",
    category: "excel",
    file: `${import.meta.env.BASE_URL}workbooks/ATTENDANCE_REPORT.xlsx`,
    stats: [
      { value: "3", label: "Workbook modules" },
      { value: "48", label: "Attendance columns" },
      { value: "997+", label: "Data-log rows" }
    ],
    desc: "A structured attendance workflow with employee master data and a daily data log, designed for controlled input, validation, and consolidated monthly reporting.",
    tags: ["Excel", "Attendance", "Employee Master", "Data Validation", "XLOOKUP"],
    features: [
      "Automated shift and attendance validation logic",
      "Employee Master linked with dynamic formulas to prevent identity conflicts",
      "Audit-ready data logs structured for swift monthly payroll reconciliation"
    ],
    keyFormulas: ["XLOOKUP", "COUNTIFS", "SUMIFS", "Dynamic Array Filtering"],
    businessImpact: "Eliminated manual punch inconsistencies across multiple site shifts and sped up monthly attendance sign-off."
  },
  {
    no: "02",
    title: "Hotel Room Tracking Dashboard",
    type: "Excel + Executive Dashboards",
    category: "dashboards",
    file: `${import.meta.env.BASE_URL}workbooks/HOTEL_ROOM_TRACKING_DASHBOARD.xlsx`,
    stats: [
      { value: "8", label: "Workbook sheets" },
      { value: "4", label: "Dashboard views" },
      { value: "100+", label: "Room / area records" }
    ],
    desc: "A construction progress analytics workbook covering guest rooms, public lobbies, and passages, featuring completion stage tracking and bottleneck alerts.",
    tags: ["Excel", "Construction", "Progress Analytics", "Executive Dashboard"],
    features: [
      "Stage-by-stage snagging and handover status monitoring",
      "Executive overview with condition-formatted milestone indicators",
      "Segmented tracking across room types, utility spaces, and corridors"
    ],
    keyFormulas: ["SUMPRODUCT", "INDEX/MATCH", "Nested IF/IFS", "Conditional Heatmaps"],
    businessImpact: "Provided site directors real-time visibility into delayed zones, expediting critical contractor inspections."
  },
  {
    no: "03",
    title: "Budget vs. Actual Cost Sheet",
    type: "Financial & Operational Control",
    category: "operations",
    stats: [
      { value: "Budget", label: "vs actual" },
      { value: "Cost", label: "variance tracking" },
      { value: "Executive", label: "reporting" }
    ],
    desc: "Capital budget planning and monitoring framework designed to compare planned spend against actual site expenditures and surface cost runaways.",
    tags: ["Budgeting", "Cost Control", "MIS", "Variance Analysis"],
    features: [
      "Line-item budget allocation with real-time expenditure feeds",
      "Dynamic cost-variance color coding alerting on threshold breaches (>5%)",
      "Category-level expense burn rate forecasting"
    ],
    keyFormulas: ["SUMIFS", "ABS Variance %", "Trend Extrapolation"],
    businessImpact: "Identified over-budget purchase categories early in the procurement lifecycle, saving significant overhead."
  },
  {
    no: "04",
    title: "Inventory Position & Consumption Dashboard",
    type: "Supply Chain & Material Tracking",
    category: "dashboards",
    stats: [
      { value: "Stock", label: "visibility" },
      { value: "Usage", label: "burn tracking" },
      { value: "Safety", label: "reorder alerts" }
    ],
    desc: "Inventory intelligence reporting focused on stock position, consumption rates, and procurement lead times for site-level materials.",
    tags: ["Inventory", "Procurement", "Stock Planning", "Excel Dashboard"],
    features: [
      "Minimum and maximum safety stock threshold tracking",
      "Consumption velocity calculations per active site location",
      "Material indent vs issue discrepancy highlighting"
    ],
    keyFormulas: ["VLOOKUP/XLOOKUP", "Rolling Averages", "Stockout Risk Flags"],
    businessImpact: "Reduced emergency stock procurement rush charges and cut down unutilized material buildup on site."
  },
  {
    no: "05",
    title: "Site Reporting Management System (Google Sites Hub)",
    type: "Cloud Portal + Sheets + Apps Script",
    category: "operations",
    stats: [
      { value: "1", label: "Unified hub" },
      { value: "10+", label: "Sheets linked" },
      { value: "Auto", label: "sync scripts" }
    ],
    desc: "Built a cloud-based reporting platform using Google Sites and Google Sheets to centralize stock reports, attendance, and daily site updates without email clutter.",
    tags: ["Google Sites", "Google Sheets", "Apps Script", "Cloud MIS", "Operations"],
    features: [
      "Role-based permission architecture for site teams vs management",
      "Embedded real-time data inputs and live status feeds",
      "Automated alert triggers when daily field logs are pending"
    ],
    keyFormulas: ["IMPORTRANGE", "QUERY", "Google Apps Script Triggers"],
    businessImpact: "Created digital systems that centralized operational data and enhanced reporting efficiency across active site teams."
  },
  {
    no: "06",
    title: "Construction Operations Dashboard",
    type: "Operational Analytics & Governance",
    category: "dashboards",
    stats: [
      { value: "Live", label: "attendance feed" },
      { value: "Material", label: "inventory metrics" },
      { value: "Daily", label: "site logs" }
    ],
    desc: "Created dashboards for inventory tracking, attendance monitoring, and operational reporting, automating data collection using Google Sheets and Apps Script.",
    tags: ["Construction", "Inventory Tracking", "Attendance", "Apps Script", "MIS"],
    features: [
      "Daily automated sync of field workforce logs",
      "Real-time visibility into active materials on site vs allocated BOQ",
      "Mobile-friendly operational view for site supervisors"
    ],
    keyFormulas: ["QUERY", "FILTER", "Apps Script Webhooks"],
    businessImpact: "Cut manual consolidation time and established audit-ready reporting across ongoing infrastructure projects."
  },
  {
    no: "07",
    title: "Actual vs Estimate Performance Matrix",
    type: "Financial Governance Dashboard",
    category: "operations",
    stats: [
      { value: "Real-time", label: "variance check" },
      { value: "Execution", label: "timeline audit" },
      { value: "Live", label: "cloud access" }
    ],
    desc: "Built estimated vs actual reports to track project performance and cost variance, connecting actual material expenditures with initial estimates.",
    tags: ["Actual vs Estimate", "Cost Variance", "Google Sheets", "Executive MIS"],
    features: [
      "Granular cost breakdown across materials, labor, and machinery",
      "Visual deviation indicators showing red/green status based on margin tolerance",
      "Automated profit calculators and revenue analysis models"
    ],
    keyFormulas: ["ARRAYFORMULA", "FILTER", "Conditional Formatting Rules"],
    businessImpact: "Surfaced cost variances before project completion, protecting project profit margins."
  }
];

export const featuredWorkshop: FeaturedCaseStudy = {
  no: "08",
  title: "Workshop Operations & Performance Analytics System",
  client: "AYV Bafna Motor (Multi-Branch Workshop)",
  desc: "An enterprise-grade 27-sheet Excel & Power BI analytics system built to track 16 Critical Management Numbers across multi-branch workshop operations (Dondi & Charama branches).",
  stats: [
    { value: "27", label: "Excel sheets integrated" },
    { value: "16", label: "Critical management numbers" },
    { value: "6", label: "Revenue streams tracked" }
  ],
  problem: "Operational data was scattered across branches, revenue streams, and inventory records, causing delayed reporting, unmonitored parts obsolescence, and revenue leakage from rejected estimates.",
  solution: "Built revenue tracking modules across 6 streams (Parts, Labour, Oil, DEF, Warranty, Accidental), implemented estimate conversion models to identify rejected estimate values, and developed parts classification models (Fast/Slow/Dead Stock >180 days) with a back-order tracking matrix to monitor Vehicle Off Road (VOR) incidents.",
  impact: "Created a single consolidated performance view for Dondi & Charama branches, minimized revenue leakage from rejected estimates, and reduced parts delivery delays for grounded vehicles.",
  tags: ["Excel Analytics", "Power BI", "Revenue Leakage Control", "VOR Optimization", "Inventory Classification"],
  keyHighlights: [
    "Monitored 6 distinct revenue streams: Parts, Labour, Oil, DEF, Warranty, and Accidental",
    "Implemented estimate conversion models to identify rejected estimate values and minimize leakage",
    "Developed parts classification models: Fast, Slow, and Dead Stock (>180 days)",
    "Engineered a back-order tracking matrix to monitor Vehicle Off Road (VOR) incidents and reduce turnaround time"
  ]
};

export const educationHistory: EducationItem[] = [
  {
    degree: "B-Tech, Computer Science & Engineering",
    institution: "Bansal Institute of Science and Technology, Bhopal (M.P.)",
    location: "Bhopal, Madhya Pradesh",
    period: "Jul 2020 — Jul 2024",
    score: "CGPA 7.59 / 10.0",
    scoreType: "CGPA"
  },
  {
    degree: "Senior Secondary (12th, PCM)",
    institution: "Shri Vidyawati Deodia Vidyalaya & Junior College",
    location: "Nagpur, Maharashtra",
    period: "Apr 2019 — Mar 2020",
    score: "64.9%",
    scoreType: "Percentage"
  },
  {
    degree: "Secondary School (10th)",
    institution: "Air Force School Manauri, Prayagraj (U.P.)",
    location: "Prayagraj, Uttar Pradesh",
    period: "Apr 2017 — Mar 2018",
    score: "69.2%",
    scoreType: "Percentage"
  }
];

export const officialAchievements: AchievementItem[] = [
  {
    title: "Cross-Site Inventory Visibility",
    description: "Improved inventory visibility and consumption tracking across multiple active construction and workshop sites, significantly reducing stockout occurrences."
  },
  {
    title: "End-to-End Process Automation",
    description: "Automated recurring manual reporting workflows using Google Apps Script and Excel formulas, cutting dozens of weekly reporting hours."
  },
  {
    title: "Centralized Digital Data Infrastructure",
    description: "Created cloud-based digital systems (Google Sites + Sheets) that centralized operational data and enhanced reporting efficiency for field and executive teams."
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "Oracle DBA Internship Certificate",
    issuer: "CEPTA Infotech Pvt. Ltd.",
    url: ""
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    url: ""
  },
  {
    title: "SQL",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates"
  }
];
