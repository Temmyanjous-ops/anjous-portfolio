// ─────────────────────────────────────────────────────────────
// SITE-WIDE CONTENT
// Edit the text between the quotes. Save, commit, and Vercel redeploys.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Anjous Temitayo",
  firstName: "Temitayo",
  lastName: "Anjous",
  role: "Product UI/UX Designer + Product Manager",
  statement:
    "I work out what a product should do, then design it until people can use it.",
  location: "Lagos, Nigeria",
  timezone: "GMT+1",
  email: "temmyanjous@gmail.com",
  // Used for SEO, the sitemap and social previews. Change when you buy your own domain.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://temitayoanjous.vercel.app",
  description:
    "Anjous Temitayo is a Product UI/UX Designer and Product Manager in Lagos, Nigeria, designing web and mobile products across fintech, retail, AI and media.",
  openTo: "Full-time roles, remote or on-site, and product projects",
  socials: [
    { label: "LinkedIn", handle: "anjous-temitayo", url: "https://www.linkedin.com/in/anjous-temitayo" },
    { label: "Behance", handle: "Temitayoanjous", url: "https://www.behance.net/Temitayoanjous" },
    { label: "X", handle: "@miz_G100", url: "https://x.com/miz_G100" },
  ],
};

export type Role = { title: string; note?: string; org: string; place: string; dates?: string };

// Add dates like "2023 – Present" when you have them.
export const roles: Role[] = [
  { title: "Product Manager", org: "Calm Information Technologies", place: "Lagos, Nigeria", dates: "2025" },
  { title: "Product Designer", org: "Check Retail", place: "Lagos, Nigeria", dates: "2021 – 2023" },
  { title: "Freelance Designer", org: "Independent", place: "Canada · US" },
  { title: "Product Designer", org: "Boraj Technologies", place: "Nigeria", dates: "2022" },
];

export const workProcess = [
  {
    n: "01",
    title: "Understand",
    body: "Who has the problem, how often, and what they do about it today. A day here saves a week of redesign later.",
    outputs: ["Problem statement", "User notes", "Constraints"],
  },
  {
    n: "02",
    title: "Define",
    body: "Turn what we learned into something buildable: goals, scope, requirements, and what we're deliberately leaving out.",
    outputs: ["Requirements", "User stories", "Priorities"],
  },
  {
    n: "03",
    title: "Design",
    body: "Flows first, then structure, then the interface. Every screen has a job, and I can explain why it looks the way it does.",
    outputs: ["User flows", "Wireframes", "UI", "Prototype"],
  },
  {
    n: "04",
    title: "Ship",
    body: "Work through edge cases, states and trade-offs with engineers, then check what was built against what was intended.",
    outputs: ["Specs", "Handoff", "QA review"],
  },
];

export const capabilities = {
  Product: [
    "Problem framing & discovery",
    "Requirements & user stories",
    "Prioritisation & scope",
    "User journeys & flows",
    "Delivery with engineering",
  ],
  Design: [
    "UX & interaction design",
    "UI & visual design",
    "Mobile & responsive web",
    "Design systems",
    "Prototyping in Figma",
  ],
};

export const focusAreas = {
  "Product & strategy": ["Problem framing", "Requirements & user stories", "Prioritisation", "Product strategy"],
  "Design & technology": ["UX & UI for web and mobile", "Design systems", "Computer Science foundation", "Working with developers"],
  "Leadership & communication": ["Team collaboration", "Stakeholder communication", "Brand & messaging", "Presenting decisions"],
};

export const archive = [
  { title: "Mobile Food Delivery App", kind: "UI/UX case study", url: "https://www.behance.net/gallery/152331857/UIUX-CASE-STUDY-MOBILE-FOOD-DELIVERY-APP" },
  { title: "B2B Website Design", kind: "Website", url: "https://www.behance.net/gallery/160432411/B2B-WEBSITE-DESIGN" },
  { title: "Explore Africa: My Express", kind: "Behance project", url: "https://www.behance.net/gallery/171705605/EXPLORE-AFRICA-MY-EXPRESS" },
  { title: "Gold Website", kind: "Website", url: "https://www.behance.net/gallery/168563517/GOLD-WEBSITE" },
  { title: "Safari Real Estate", kind: "Landing page", url: "https://www.behance.net/gallery/154264889/SAFARI-REAL-ESTATE-LANDING-PAGE" },
  { title: "NFT Landing Page", kind: "Landing page", url: "https://www.behance.net/gallery/168365695/NFT-LANDING-PAGE" },
];
