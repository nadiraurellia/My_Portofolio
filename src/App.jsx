import { useState, useEffect, useRef } from "react";

// Import komponen-komponen kecil yang barusan kita buat
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

const COLORS = {
  charcoal: "#2C3E50",
  terracotta: "#Ea7611",
  sage: "#bab456",
  sand: "#f1ede4",
  white: "#f6f6f6",
  lightTerra: "#E27D6020",
  lightSage: "#85DCB015",
  darkCharcoal: "#1a2f22ff",
};

const EXPERIENCES = [
  {
    role: "SAP SCM Lab Assistant", org: "Telkom University Jakarta", period: "Jan 2026 — Present", tag: "SAP SCM500", color: COLORS.terracotta,
    points: [
      "Facilitated 5 hands-on sessions for 41 students covering Procurement, Purchase Requisition, Purchase Order, Goods Receipt & Invoice Verification.",
      "Achieved 5/5 responsiveness score and 100% positive feedback throughout the semester.",
      "Provided daily troubleshooting on MRP, Inventory Management & Warehouse Management transactions.",
    ],
  },
  {
    role: "SAP HRM Lab Assistant", org: "Telkom University Jakarta", period: "Jan 2026 — Present", tag: "SAP HR050", color: COLORS.sage,
    points: [
      "Guided 30 students across Personnel Administration, Org Management, Time Management & Payroll Processing.",
      "Simplified complex HR data management workflows, improving student comprehension by ~25%.",
      "Delivered daily troubleshooting for Personnel Actions, Infotype Maintenance & Time Recording.",
    ],
  },
  {
    role: "SAP Enterprise Systems Lab Assistant", org: "Telkom University Jakarta", period: "Aug 2025 — Jan 2026", tag: "SAP01", color: COLORS.terracotta,
    points: [
      "Introduced 43 students to core ERP modules: FI, CO, MM, SD, HCM.",
      "Achieved 90% student satisfaction through interactive, structured teaching methods.",
      "Bridged theoretical business process concepts with hands-on SAP navigation.",
    ],
  },
  {
    role: "Head of Operations Division", org: "ERPify — Telkom University Jakarta", period: "2025 — Present", tag: "Leadership", color: COLORS.sage,
    points: [
      "Standardized cross-functional workflows → 50% improvement in operational efficiency.",
      "Designed 8 ERP documents: module designs, report templates & documentation formats.",
      "Aligned division outputs with lab objectives through stakeholder collaboration.",
    ],
  },
  {
    role: "Head of DINAMIKA Division", org: "HIMSI — Telkom University Jakarta", period: "2024 — 2026", tag: "Leadership", color: COLORS.terracotta,
    points: [
      "Coordinating with 55 members from across 9 divisions and 4 departments, including the Executive Board.",
      "Managed end-to-end planning, cross-divisional task assignment & deliverable tracking.",
      "Spearheaded annual Ramadhan Berbagi program, mobilizing contributions from 4 academic programs.",
    ],
  },
  {
    role: "Chief Treasurer", org: "Language Club — Telkom University Jakarta", period: "2024 — 2026", tag: "Finance", color: COLORS.sage,
    points: [
      "Managed IDR 2,000,000+ budget for 80+ members: 100% transparency, zero deficit.",
      "Built financial tracking system (Excel & Google Sheets) for real-time cash flow monitoring.",
      "Conducted cost-benefit analysis for budget allocation decisions.",
    ],
  },
];

const SKILLS_DATA = [
  {
    category: "Business Analysis", skills: [
      { name: "Requirements Gathering & BRD", level: 88 },
      { name: "Business Process Modeling", level: 85 },
      { name: "Stakeholder Analysis", level: 90 },
      { name: "Gap Analysis & Process Improvement", level: 82 },
    ]
  },
  {
    category: "ERP & Enterprise Systems", skills: [
      { name: "SAP ERP (FI, CO, MM, SD, HCM)", level: 92 },
      { name: "SAP Cloud & Integration", level: 78 },
      { name: "TOGAF ADM", level: 75 },
      { name: "COBIT 2019", level: 72 },
    ]
  },
  {
    category: "Data & Visualization", skills: [
      { name: "Power BI & Looker Studio", level: 85 },
      { name: "Python (Data Mining)", level: 78 },
      { name: "Excel & Google Sheets (Advanced)", level: 92 },
      { name: "R Studio", level: 72 },
    ]
  },
  {
    category: "Project Management", skills: [
      { name: "Jira & Notion", level: 88 },
      { name: "Agile / Scrum", level: 80 },
      { name: "Cross-Functional Coordination", level: 92 },
      { name: "Microsoft Project", level: 75 },
    ]
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, visible] = useInView(0.1);
  const dirs = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(40px)", right: "translateX(-40px)", none: "none" };
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : dirs[direction],
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>{children}</div>
  );
}

export default function App() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const h = () => {
      const sects = ["about", "experience", "skills", "portfolio", "contact"];
      for (const id of sects.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 300) { setActive(id); return; }
      }
      setActive("");
    };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div style={{ background: COLORS.sand, minHeight: "100vh" }}>
      <Navbar active={active} COLORS={COLORS} />
      <Hero COLORS={COLORS} FadeIn={FadeIn} />
      <About COLORS={COLORS} FadeIn={FadeIn} />
      <Experience COLORS={COLORS} FadeIn={FadeIn} EXPERIENCES={EXPERIENCES} />
      <Skills COLORS={COLORS} FadeIn={FadeIn} useInView={useInView} SKILLS_DATA={SKILLS_DATA} />
      <Portfolio COLORS={COLORS} FadeIn={FadeIn} />
      <Contact COLORS={COLORS} FadeIn={FadeIn} />
    </div>
  );
}
