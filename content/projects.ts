// ─────────────────────────────────────────────────────────────
// PROJECTS
// Each project is one case study page at /work/<slug>/.
// To add images: put the file in /public/img/ and add it to `screens` or `extra`.
// To add reference links (Figma, prototype, live site): add to `links`.
// Leave a field as "" to hide it.
// ─────────────────────────────────────────────────────────────

export type Pin = { x: number; y: number }; // position on the image, in % from top-left
export type Figure = { src: string; alt: string; caption: string; pins: Pin[]; wide?: boolean };
export type Decision = { title: string; body: string };
export type Screen = { src: string; caption: string };
export type Link = { label: string; url: string };

export type Project = {
  slug: string;
  name: string;
  category: string;
  platform: string;
  platformTags: ("mobile" | "web")[];
  role: string;
  year: string;
  duration: string;
  tools: string;
  cover: string;
  coverAlt: string;
  line: string;
  problem: string;
  overview: string[];
  problemLong: string;
  users: string;
  requirements: string[];
  /** Screens with numbered pins. Pins map, in order, onto `decisions`. */
  figures: Figure[];
  decisions: Decision[];
  screens: Screen[];
  landscapeScreens?: boolean;
  /** Extra images shown under the main screens. */
  extra: Screen[];
  links: Link[];
  /** Optional closing summary. */
  outcome?: { takeaway: string; body: string };
  nextQuestions: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "safefi",
    name: "SafeFi",
    category: "Fintech · Security",
    platform: "Mobile app",
    platformTags: ["mobile"],
    role: "UI/UX Designer",
    year: "2024",
    duration: "4 weeks",
    tools: "Figma",
    cover: "/img/safefi.webp",
    coverAlt:
      "Three SafeFi screens: home with App Vault and Urgent Locking, the splash screen, and the App Vault list of locked finance apps.",
    line: "A vault for the apps that hold your money.",
    problem: "Every money app has its own PIN, but once the phone is open, all of them are a tap away.",
    overview: [
      "SafeFi is a secure app vault and finance-protection app. It gives people one extra layer of control over their banking and payment apps: lock them behind SafeFi, back up their data, and lock every finance app at once if they lose control of their phone.",
      "The brand line sets the tone for the whole product: Secure · Control · Live freely.",
    ],
    problemLong:
      "Most people keep several money apps on one phone. Each app guards itself, but the phone is the thing that gets lost, borrowed or taken. Protection has to work at the level of the phone, across every app that can move money.",
    users:
      "People who manage money across several apps. The screens are built around apps common in Nigeria, including Opay, Moniepoint, PalmPay, Kuda and GTBank, so the product speaks to that everyday setup.",
    requirements: [
      "Lock chosen apps behind SafeFi, one by one or by category.",
      "Lock every finance app at once, remotely, when something goes wrong.",
      "Show at a glance what is protected.",
      "Back up data to the cloud.",
      "Leave room for a paid tier.",
    ],
    figures: [
      { src: "/img/safefi-a.webp", alt: "SafeFi home screen", caption: "Home", pins: [{ x: 78, y: 41 }, { x: 33, y: 59 }, { x: 74, y: 83 }] },
      { src: "/img/safefi-c.webp", alt: "SafeFi App Vault screen", caption: "App Vault", pins: [{ x: 30, y: 36 }, { x: 33, y: 43.5 }, { x: 74, y: 58 }] },
    ],
    decisions: [
      { title: "Emergency action on the home screen", body: "Urgent Locking is a single toggle on home. When someone needs it, they shouldn't be hunting through settings." },
      { title: "Four areas, one screen", body: "Home opens onto App Vault, Cloud Backup, Insights and Premium. The whole scope of the product is readable at once." },
      { title: "Premium sits in the main grid", body: "The paid tier is a destination of its own, which keeps the business model visible without interrupting security tasks." },
      { title: "Reassurance before detail", body: "The vault opens with a summary (“Your apps are securely locked”, 12 apps locked) before the list." },
      { title: "Group by what's at stake", body: "All, Finance, Social and Others filters let people handle their finance apps as a set." },
      { title: "One switch per app", body: "Each app has its own toggle and a plain “Locked” label, so its state reads clearly even without colour." },
    ],
    screens: [
      { src: "/img/safefi-a.webp", caption: "Home" },
      { src: "/img/safefi-b.webp", caption: "Splash" },
      { src: "/img/safefi-c.webp", caption: "App Vault" },
    ],
    extra: [],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/255293119/SAFEFI" }],
    nextQuestions: [
      "Whether people trust a third-party app to guard their banking apps, and what onboarding must say to earn that.",
      "How Urgent Locking is triggered from a lost phone, and how the owner unlocks safely afterwards.",
      "What happens when a banking app updates or the operating system restricts app locking.",
    ],
    featured: true,
  },
  {
    slug: "shortrest",
    name: "ShortRest",
    category: "Hospitality · CRM",
    platform: "Web dashboard",
    platformTags: ["web"],
    role: "UI/UX & Product Designer",
    year: "2025",
    duration: "",
    tools: "Figma, FigJam",
    cover: "/img/short.webp",
    coverAlt:
      "The ShortRest dashboard on a laptop: revenue and order metrics, an orders-over-time chart, last 7 days sales, recent transactions and top rooms by units sold.",
    line: "One command centre for running short-stay properties.",
    problem: "Property managers jump between tools to see orders, rooms, customers and revenue, so the full picture is never in one place.",
    overview: [
      "ShortRest is a property-management CRM dashboard for hospitality teams. It brings bookings, rooms, customers, sales and operational performance into one place.",
      "I worked on the information architecture, user flow, dashboard structure, visual design, responsive layout and data visualisation.",
    ],
    problemLong:
      "Monitoring orders, room availability, customer activity, revenue and sales usually means switching between several tools. The goal was a dashboard that puts the important information within a glance while staying simple to use.",
    users:
      "Property managers and hospitality teams running short-stay rooms, priced by the hour, across locations such as Lekki, Victoria Island and Ibadan.",
    requirements: [
      "Monitor revenue and orders.",
      "Track sales performance.",
      "Manage rooms and categories.",
      "See customer activity.",
      "Follow recent transactions.",
      "Reach reports and operational settings.",
    ],
    figures: [
      {
        src: "/img/short-a.webp", alt: "ShortRest dashboard", caption: "Dashboard", wide: true,
        pins: [{ x: 37.4, y: 16 }, { x: 59, y: 45 }, { x: 16, y: 27 }, { x: 93, y: 40 }, { x: 57.5, y: 74 }, { x: 82, y: 71 }],
      },
    ],
    decisions: [
      { title: "Most important numbers first", body: "Revenue, orders, unique visits, new users and existing users sit in a row at the top, so the day's state is clear before anyone scrolls." },
      { title: "Trends, not tables", body: "Orders over time and the last 7 days of sales are charts, so a manager sees the direction of the business without reading a dataset." },
      { title: "Navigation grouped by job", body: "The sidebar separates daily operations (orders, rooms, categories, customers, reports, inbox) from reference information and settings." },
      { title: "A calm visual system", body: "A light interface on a soft pink-tinted background, rounded cards and subtle shadows keep a data-heavy screen professional and easy on the eye." },
      { title: "Status at a glance", body: "Each recent transaction carries a coloured status label (Paid, Received, Pending), so exceptions stand out from routine payments." },
      { title: "Rooms ranked by what sells", body: "Top Rooms by Units Sold lists each room with its hourly price, linking revenue back to the inventory that earns it." },
    ],
    screens: [{ src: "/img/short-a.webp", caption: "Dashboard" }],
    landscapeScreens: true,
    extra: [],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/255306729/SHOREST-CRM" }],
    outcome: {
      takeaway: "The goal wasn't simply to display data. It was to turn complex property-management information into clear, actionable insight.",
      body: "The result is a single command centre where property managers monitor business performance and manage daily operations, balancing functionality, clarity and a polished interface.",
    },
    nextQuestions: [
      "Which numbers managers check first each morning, to confirm the order of the top row.",
      "Whether units sold and hourly price are the right way to judge how a room is performing.",
      "How the dashboard should flag a problem, like a drop in orders, before someone has to spot it in a chart.",
    ],
    featured: true,
  },
  {
    slug: "check",
    name: "Check",
    category: "Retail · Payments",
    platform: "Mobile app",
    platformTags: ["mobile"],
    role: "UI/UX Engineer",
    year: "",
    duration: "1 month",
    tools: "Figma, Photoshop",
    cover: "/img/check.webp",
    coverAlt:
      "Two Check screens: an onboarding screen about dine-in or take-away, and the merchant home with wallet balance and a Receive Payment button.",
    line: "Orders and payments, run from one merchant's phone.",
    problem: "A merchant takes orders, collects payments and watches their balance at once, usually with a customer waiting.",
    overview: [
      "Check is a mobile app for retail and food merchants. The screens cover onboarding around dine-in and take-away service, and a merchant home that puts wallet balance, incoming payments, orders and transactions on one screen.",
    ],
    problemLong:
      "At a counter, every extra tap is felt by the person in the queue. The merchant needs to get paid fast, see that the money landed, and keep track of orders without switching between tools.",
    users: "Merchants who sell in person: restaurants, food vendors and shops that serve customers at the counter and for take-away.",
    requirements: [
      "Accept a payment fast, by QR code or payment request.",
      "Show the wallet balance at a glance.",
      "Track orders and past transactions.",
      "Fund the wallet.",
      "Support both dine-in and take-away service.",
    ],
    figures: [
      { src: "/img/check-b.webp", alt: "Check merchant home screen", caption: "Merchant home", pins: [{ x: 50, y: 20 }, { x: 80, y: 12 }, { x: 77, y: 31 }, { x: 43, y: 55 }] },
      { src: "/img/check-a.webp", alt: "Check onboarding screen", caption: "Onboarding", pins: [{ x: 44, y: 25 }] },
    ],
    decisions: [
      { title: "One primary action", body: "Receive Payment is the only filled button under the balance. It's the action that happens most, with a customer standing there." },
      { title: "QR code in the header", body: "The merchant's QR code sits beside the balance, so showing it to a customer is one tap away." },
      { title: "A home the merchant can adjust", body: "An Edit Menu control on “Your Insights” lets merchants shape the shortcut grid around how their business runs." },
      { title: "Shortcuts that say what they do", body: "Each tile pairs a name with its outcome: Scan new / Click to start, Wallet / Fund your wallet, Transactions / View your spendings." },
      { title: "Service mode comes first", body: "Onboarding introduces dine-in and take-away before anything else, because the service mode changes how an order is handled." },
    ],
    screens: [
      { src: "/img/check-a.webp", caption: "Onboarding" },
      { src: "/img/check-b.webp", caption: "Merchant home" },
    ],
    extra: [],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/176113811/UI-DESIGN-SCREENS(CHECK-RETAIL-MERCHANT)" }],
    nextQuestions: [
      "Time a payment with a customer waiting, from unlocking the phone to seeing it confirmed.",
      "Find out whether merchants expect orders or payments as the default home view.",
      "Test the tile labels with merchants who are new to digital payments.",
    ],
    featured: true,
  },
  {
    slug: "wmta",
    name: "WMTA?",
    category: "AI · Art discovery",
    platform: "Responsive web",
    platformTags: ["web", "mobile"],
    role: "Product design",
    year: "",
    duration: "",
    tools: "Figma",
    cover: "/img/wmta.webp",
    coverAlt: "WMTA landing page on a laptop and a phone, headed “Discover the Artist behind the Artwork”, with an image upload box.",
    line: "Upload a picture of an artwork. Find the African art behind it.",
    problem: "You can't type a search for an artist whose name you don't know. Often the image is all you have.",
    overview: [
      "WMTA? is a web product that uses artificial intelligence to help people discover African art. You upload a source image and the service surfaces related works, helping you find the artist behind the artwork. I designed the experience for desktop and mobile.",
    ],
    problemLong:
      "People come across African artwork online, in homes and in galleries without knowing who made it. Text search assumes you already know what to type. Image search makes the picture itself the query, but only works if people trust it and give it a usable image.",
    users: "Art lovers, collectors and curious people who have a picture of a piece and want to know more about it.",
    requirements: [
      "Accept an image by upload, drag-and-drop or URL.",
      "Tell people what makes a good image before they upload.",
      "Give first-time visitors a way to try it without their own image.",
      "Invite exploration beyond a single result.",
      "Work equally well on desktop and mobile.",
    ],
    figures: [
      { src: "/img/wmta-a.webp", alt: "WMTA desktop landing page", caption: "Desktop", wide: true, pins: [{ x: 27, y: 53 }, { x: 51, y: 74 }, { x: 62, y: 89 }] },
      { src: "/img/wmta-b.webp", alt: "WMTA mobile landing page", caption: "Mobile", pins: [{ x: 86, y: 52 }, { x: 80, y: 81 }] },
    ],
    decisions: [
      { title: "One job above the fold", body: "A headline, one sentence of explanation, then the upload box. The page has a single centre of gravity." },
      { title: "Set expectations for the AI", body: "Results depend on the input, so the page says so upfront: JPG or PNG under 5MB, and a “How to get the best results” link right under the button." },
      { title: "No image? Try one of ours", body: "Sample artworks sit just below the upload box, so a first-time visitor can watch the product work before sharing their own photo." },
      { title: "Same order on a small screen", body: "Mobile keeps the desktop sequence: the promise, the upload, then the samples. Nothing important moves below a menu." },
      { title: "Browsing after the task", body: "“Artwork others are exploring” comes after the upload flow, for people who arrive without a picture or want to keep going." },
    ],
    screens: [
      { src: "/img/wmta-a.webp", caption: "Desktop" },
      { src: "/img/wmta-b.webp", caption: "Mobile" },
    ],
    landscapeScreens: true,
    extra: [],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/255251347/WMTA(-AI-Art-Recognition)" }],
    nextQuestions: [
      "What people do when the match is wrong or uncertain, and how the interface should say “not sure”.",
      "How results credit artists fairly and link back to them.",
      "Whether a camera option on mobile beats upload for someone standing in front of a piece.",
    ],
    featured: true,
  },
  {
    slug: "diginews",
    name: "DigiNews",
    category: "Media · News",
    platform: "Mobile app",
    platformTags: ["mobile"],
    role: "UI/UX Engineer",
    year: "2023",
    duration: "3 weeks",
    tools: "Figma, Photoshop",
    cover: "/img/digi.webp",
    coverAlt: "Two DigiNews screens: a Politics category page and the My News feed with breaking news and audio stories.",
    line: "Personalised news, breaking stories and audio in one app.",
    problem: "Most news apps show everything at once, and give you nothing for the moments you can't read.",
    overview: ["DigiNews is a news app that brings a personalised feed, breaking news and audio stories into one experience."],
    problemLong:
      "Readers scroll past stories they don't care about to find the few they do. And a lot of news time happens on the move, when reading isn't practical.",
    users: "People who follow the news on their phone through the day, including when they're commuting or busy.",
    requirements: [
      "A personal feed separate from general categories.",
      "A clear place for breaking news.",
      "Audio stories alongside written ones.",
      "Fast scanning of many stories.",
    ],
    figures: [],
    decisions: [
      { title: "Your news, apart from everyone's", body: "A personal home (“My News”) sits apart from category pages like Politics, and a breadcrumb keeps people oriented." },
      { title: "Breaking news gets the top slot", body: "A full-width carousel at the top of My News holds breaking stories. Everything else scrolls beneath it." },
      { title: "Audio lives in the feed", body: "“Listen to Audio” is a section of the feed rather than a separate mode, so switching from reading to listening costs nothing." },
      { title: "Cards built for scanning", body: "Every card carries its category tag, date, comment count and likes in the same positions." },
    ],
    screens: [
      { src: "/img/digi-a.webp", caption: "Category: Politics" },
      { src: "/img/digi-b.webp", caption: "My News" },
    ],
    extra: [],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/168461255/DIGINEWS" }],
    nextQuestions: [],
    featured: true,
  },
  {
    slug: "sportme",
    name: "SportMe",
    category: "Sports · Community",
    platform: "Mobile app",
    platformTags: ["mobile"],
    role: "UI/UX Designer",
    year: "2025",
    duration: "",
    tools: "Figma",
    cover: "/img/sport.webp",
    coverAlt: "Two SportMe screens: an onboarding screen reading Elevate Through Sport, and a Select your Sport grid.",
    line: "Meeting people through the sports you play.",
    problem: "A community app is only as good as its first match. It has to learn what you play before it can connect you to anyone.",
    overview: ["SportMe is a mobile app about building relationships through sport. The screens shown cover onboarding and sport selection."],
    problemLong:
      "The onboarding line frames the product: “Build meaningful relationships through the power of sport.” Everything after onboarding depends on knowing which sports someone cares about.",
    users: "People who play or follow sport and want to connect with others who do the same.",
    requirements: ["Explain the value in one screen.", "Capture which sports someone plays.", "Handle both common and niche sports."],
    figures: [],
    decisions: [
      { title: "Ask for interests on day one", body: "Sport selection is part of onboarding, so the first session can already be relevant." },
      { title: "Popular first, then the long tail", body: "Six popular sports lead, more follow under “More sports”, and search at the top catches anything else." },
      { title: "Big tiles, one-word labels", body: "Each option is a large tile with a familiar icon and a single word, quick to scan and easy to tap." },
      { title: "Visible progress", body: "A step indicator shows how far through onboarding the person is." },
    ],
    screens: [
      { src: "/img/sport-a.webp", caption: "Onboarding" },
      { src: "/img/sport-b.webp", caption: "Select your sport" },
    ],
    extra: [],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/255307501/SPORTME" }],
    nextQuestions: [],
    featured: false,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
