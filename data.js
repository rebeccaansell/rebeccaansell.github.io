// ─────────────────────────────────────────────────────────────
//  SITE CONTENT — edit this file to update the website.
//  Anything left as "" (empty) is simply hidden on the page.
// ─────────────────────────────────────────────────────────────

const SITE = {
  name: "Rebecca Ansell",
  role: "Computer Science PhD Student",
  org: "Georgetown University",

  links: {
    email: "rja80@georgetown.edu",
    linkedin: "https://www.linkedin.com/in/rebecca-ansell2405/",
    scholar: "https://scholar.google.com/citations?user=nYq91MAAAAAJ",
    orcid: "https://orcid.org/0009-0001-7526-2406",
    github: "",         // optional, e.g. "https://github.com/rebeccaansell"
    cv: "files/Rebecca_Ansell_CV.pdf",
  },

  // "Current projects" box on the player card.
  projects: [
    "Humanness Project",
    "Public Debt is Public",
    "Forced Migration in Bangladesh",
    "Evaluating Persona-Conditioned LLMs as Proxies for Human Judgments",
  ],

  // Welcome message (based on the LinkedIn "About" section).
  bio: [
    "I'm a PhD student in Computer Science at Georgetown researching how people perceive and use AI-generated text (and what that means for how we evaluate LLMs).",
    "Areas I think about: persona agents, decision making in different information spaces, the evolving social media landscape, bias and fairness, and AI safety.",
    "Board game enthusiast, coffee lover, and former D1 water polo player.",
  ],

  interests: [
    "Persona agents",
    "Perception of AI-generated text",
    "LLM evaluation",
    "Decision making in information spaces",
    "The evolving social media landscape",
    "Bias & fairness",
    "AI safety",
  ],
};

// ── Guess Who: questions (every answer for Rebecca is "yes") ──
// Each of the other characters is knocked out by at least one of these (see app.js).
const QUESTIONS = [
  { key: "orange",      text: "Is their favorite color orange?" },
  { key: "southafrica", text: "Did they grow up in South Africa?" },
  { key: "phd",         text: "Are they a Computer Science PhD student?" },
  { key: "hiking",      text: "Do they love hiking?" },
  { key: "waterpolo",   text: "Did they play water polo in college?" },
  { key: "mentor",      text: "Do they enjoy teaching and mentoring?" },
  { key: "hoya",        text: "Are they a Georgetown Hoya?" },
];

// ── Career board: clockwise from GO. ──
// Must have a multiple of 4 spaces; every (length / 4)th space is a corner.
// kind: corner | edu | exp | honor | paper | chance | chest | boardwalk | future (greyed out, not done yet)
// optional link: { url, label } shows a button on the title deed (a body item can also be { text, link }); label: overrides the card's small header
// Inline SVG flags (emoji flags don't render on Windows)
const FLAG_ZA = `<svg class="flag" viewBox="0 0 90 60" role="img" aria-label="South Africa"><rect width="90" height="30" fill="#e03c31"/><rect y="30" width="90" height="30" fill="#001489"/><path d="M0 0 L45 30 H90 M45 30 L0 60" fill="none" stroke="#fff" stroke-width="22"/><path d="M0 0 L45 30 H90 M45 30 L0 60" fill="none" stroke="#007749" stroke-width="13"/><path d="M0 9 L31 30 L0 51 Z" fill="#ffb81c"/><path d="M0 15 L23 30 L0 45 Z" fill="#000"/></svg>`;
const FLAG_US = `<svg class="flag" viewBox="0 0 76 40" role="img" aria-label="United States"><rect width="76" height="40" fill="#fff"/><path d="M0 1.54h76M0 7.69h76M0 13.85h76M0 20h76M0 26.15h76M0 32.31h76M0 38.46h76" stroke="#b22234" stroke-width="3.08"/><rect width="30.4" height="21.54" fill="#3c3b6e"/><g fill="#fff"><circle cx="5" cy="4" r="1.4"/><circle cx="12.5" cy="4" r="1.4"/><circle cx="20" cy="4" r="1.4"/><circle cx="27" cy="4" r="1.4"/><circle cx="8.7" cy="8.5" r="1.4"/><circle cx="16.2" cy="8.5" r="1.4"/><circle cx="23.7" cy="8.5" r="1.4"/><circle cx="5" cy="13" r="1.4"/><circle cx="12.5" cy="13" r="1.4"/><circle cx="20" cy="13" r="1.4"/><circle cx="27" cy="13" r="1.4"/><circle cx="8.7" cy="17.5" r="1.4"/><circle cx="16.2" cy="17.5" r="1.4"/><circle cx="23.7" cy="17.5" r="1.4"/></g></svg>`;
const FLAG_GB = `<svg class="flag" viewBox="0 0 60 30" role="img" aria-label="United Kingdom"><clipPath id="gb-c"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><rect width="60" height="30" fill="#012169"/><path d="M0 0L60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0L60 30M60 0L0 30" clip-path="url(#gb-c)" stroke="#c8102e" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#c8102e" stroke-width="6"/></svg>`;

const BOARD = [
  { kind: "corner", short: "GO", icon: `<span class="go-flags">${FLAG_ZA} → ${FLAG_US}</span>⬅`, title: "GO!",
    sub: "East London, South Africa → New York City",
    body: ["Moved from East London, South Africa to NYC.", "Roll the dice or press <b>Next space</b> to move around the board."] },

  { kind: "edu", short: "Started LIU B.S.", icon: "🎓", title: "Started B.S. Computer Science",
    sub: "Long Island University · College of Engineering", when: "Class of 2023", where: "New York, NY",
    body: ["Distinguished Scholar's Academic Scholarship"] },

  { kind: "chest", short: "D1 Water Polo", icon: "👑", title: "D1 Water Polo",
    sub: "Long Island University", when: "LIU",
    body: ["Division I water polo scholarship", "2023 MAAC Champions 👑"] },

  { kind: "honor", short: "Chi Alpha Sigma", icon: "⭐", title: "Chi Alpha Sigma",
    sub: "Award · National College Athlete Honor Society", when: "LIU",
    body: [] },

  { kind: "exp", short: "iD Tech", icon: "💻", title: "iD Tech",
    sub: "Online & Summer Camps", when: "May 2022 – Aug 2023", where: "Various locations, USA",
    body: ["NVIDIA AI Success Coach", "Machine Learning Lead Instructor", "Assistant Camp Director"] },

  { kind: "chest", short: "Hiking", icon: "mountain", title: "Hiking",
    sub: "Fun fact", body: ["Love hiking."] },

  { kind: "honor", short: "Graduation", icon: "🎉", title: "Graduation",
    sub: "B.S. Computer Science, Long Island University", when: "May 2023",
    body: ["Magna Cum Laude, with Honors", "Undergraduate Computer Science and Artificial Intelligence Award, Class of 2023"] },

  { kind: "corner", short: "NYC → DC", icon: "🚗", title: "NYC → DC",
    sub: "New York City → Washington, DC", when: "2023",
    body: ["Moved from NYC to DC for Georgetown."] },

  { kind: "edu", short: "Started Georgetown M.S.", icon: "🎓", title: "Started M.S. Computer Science (Thesis)",
    sub: "Georgetown University · Graduate School of Arts & Sciences", when: "Fall 2023 – May 2025", where: "Washington, DC",
    body: [] },

  { kind: "exp", short: "MDI Scholar", icon: "📊", title: "Massive Data Institute Scholar",
    sub: "Georgetown University", when: "May 2024 – Aug 2025", where: "Washington, DC",
    body: ["Built a dataset of 4,000 social media posts from X, YouTube, TikTok and Truth Social, human-written and AI-generated", "Collected pairwise human judgments of which posts seemed AI-generated", "Built models to detect and measure the perceived humanness of AI-generated content around the 2024 US election"] },

  { kind: "paper", short: "MDI Poster '24", icon: "🚂", title: "MDI Student Research Poster",
    sub: "Paper Line · Poster", when: "Aug 2024", where: "Georgetown University",
    body: ["\"Detecting Humanness across Social Media Platforms.\""],
    link: { url: "files/MDI_Poster_Summer2024.pdf", label: "Poster" } },

  { kind: "paper", short: "Election '24", icon: "🚂", title: "U.S. Election Analysis 2024",
    sub: "Paper Line · Article", when: "2024",
    body: ["\"Analyzing the Perceived Humanness of AI-Generated Social Media Content Around the Presidential Debate.\""],
    link: { url: "https://www.electionanalysis.ws/us/president2024/section-6-digital-campaign/how-human-analyzing-the-perceived-humanness-of-ai-generated-social-media-content-around-the-u-s-2024-presidential-debate/", label: "Read the article" } },

  { kind: "honor", short: "GAIA Fellow", icon: "⭐", title: "GAIA Fellow",
    sub: "Georgetown AI Policy Fellowship", when: "Spring 2025",
    body: [] },

  { kind: "paper", short: "CAPWIC '25", icon: "🚂", title: "ACM CAPWIC 2025",
    sub: "Paper Line · Talk", when: "Mar 2025", where: "The George Washington University, Washington, DC",
    body: ["\"Assessing Public Perception of AI-Generated Social Media Content of the 2024 U.S. Presidential Debate.\""] },

  { kind: "corner", short: "M.S. Defense", icon: "📜", title: "M.S. Thesis Defense",
    sub: "Georgetown University", when: "Apr 2025",
    body: ["\"Human in the Loop: Fine-Tuning Language Models with Perceived Humanness.\"", "Graduated with the M.S. in May 2025."],
    link: { url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:u5HHmVD_uO8C", label: "View thesis" } },

  { kind: "paper", short: "REU '25", icon: "🚂", title: "REU 2025 → ICDM 2025",
    sub: "Paper Line · Short talk", when: "Summer – Nov 2025", where: "Washington, DC",
    body: ["Mentored REU students on stance detection and the firearm policy debate on social media.", "Paper: \"Using Stance Detection Models to Improve Our Understanding of the Firearm Policy Debate on Social Media.\" ICDM 2025 Workshops."],
    link: { url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11415756", label: "Paper" } },

  { kind: "edu", short: "Started Ph.D.", icon: "🎓", title: "Started Ph.D. Computer Science",
    sub: "Georgetown University · Graduate School of Arts & Sciences", when: "Fall 2025 – expected 2028", where: "Washington, DC",
    body: ["Advised by Dr. Lisa Singh", "Lead Tutor (Fall 2025 – present)", "Teaching Assistant, Graduate Intro to Data Analytics (Fall 2026)"] },

  { kind: "paper", short: "Clue Papers '26", icon: "🔍", title: "The Clue Papers",
    sub: "Paper Line · ICLR & IJCAI-ECAI 2026 Workshops", when: "Apr & Aug 2026",
    body: [
      { text: "ICLR 2026 (poster, Rio de Janeiro): \"How Clued up are LLMs? Evaluating Multi-Step Deductive Reasoning in a Text-Based Game Environment.\"", link: { url: "https://arxiv.org/abs/2603.17169", label: "arXiv" } },
      { text: "IJCAI-ECAI 2026: \"Clueing up LLMs with Tool-Augmented Deductive Reasoning.\"", link: { url: "https://arxiv.org/abs/2609.18736", label: "arXiv" } },
      "Both with Autumn Toney-Wails.",
    ] },

  { kind: "honor", short: "Coursework Done", icon: "✅", title: "PhD Coursework Complete",
    sub: "Georgetown University", when: "May 2026",
    body: [] },

  { kind: "exp", short: "Verition", icon: "📈", title: "Quant Treasury Intern",
    sub: "Verition Fund Management", when: "May 2026 – Aug 2026", where: "New York, NY",
    body: ["LLM-based market-intelligence tools and repo analytics."] },

  { kind: "paper", short: "DeLTA '26", icon: "🚂", title: "DeLTA 2026",
    sub: "Paper Line · Talk", when: "Jul 2026", where: "Porto, Portugal",
    body: ["\"When Alignment Feels Artificial: Evaluating Preference-Based Fine-Tuning for Perceived Humanness.\" With Lisa Singh."],
    link: { url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:qjMakFHDy7sC", label: "View paper" } },

  { kind: "corner", short: "PNAS", label: "Journal", icon: "📖", title: "PNAS 2026",
    sub: "Proceedings of the National Academy of Sciences", when: "Nov 2026",
    body: ["\"Humans show limited ability to distinguish human-authored and AI-generated political content on social media.\" With Sejin Paik, Tiago Ventura, Leticia Bode, Autumn Toney-Wails and Lisa Singh."],
    link: { url: "https://www.pnas.org/doi/10.1073/pnas.2534309123", label: "Paper" } },

  { kind: "chance", short: "NeurIPS '26", icon: "?", title: "NeurIPS 2026 · AI & the Self",
    sub: "Chance · Poster", when: "Dec 2026", where: "Paris, France",
    body: ["\"Provenance and Perceived Humanness in Social Media Political Discourse.\" With Lisa Singh, Tiago Ventura and Leticia Bode."],
    link: { url: "https://openreview.net/attachment?id=Noc5ThJYu7&name=pdf", label: "Paper" } },

  { kind: "future", short: "Area Exam", icon: "📝", title: "Area Exam",
    sub: "Next step", when: "Expected Jan 2027",
    body: [] },

  { kind: "future", short: "Tudor", icon: FLAG_GB, title: "AI Engineer Intern",
    sub: "Tudor Group", when: "Jun – Aug 2027", where: "London, UK",
    body: [] },

  { kind: "future", short: "Proposal", icon: "📋", title: "Ph.D. Proposal",
    sub: "Next step",
    body: [] },

  { kind: "future", short: "Ph.D. Defense", icon: "📜", title: "Ph.D. Defense",
    sub: "Next step", when: "Expected 2028",
    body: [] },

  { kind: "future", short: "Ph.D. Graduation", icon: "🎓", title: "Ph.D. Graduation",
    sub: "Next step", when: "Expected 2028",
    body: [] },

];


// ── Publications ──
// type: journal | conference | workshop | thesis | article
// where: optional conference location
// links: add any of { pdf, arxiv, article, code, slides, scholar } as URLs
const PUBLICATIONS = [
  { year: 2026, type: "journal", venue: "Proceedings of the National Academy of Sciences (PNAS)",
    title: "Humans show limited ability to distinguish human-authored and AI-generated political content on social media",
    authors: "Paik, S., Ventura, T., Ansell, R., Bode, L., Toney-Wails, A., Singh, L.", links: { paper: "https://www.pnas.org/doi/10.1073/pnas.2534309123" } },
  { year: 2026, type: "conference", venue: "DeLTA 2026",
    where: "Porto, Portugal",
    title: "When Alignment Feels Artificial: Evaluating Preference-Based Fine-Tuning for Perceived Humanness",
    authors: "Ansell, R., Singh, L.",
    links: { scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:qjMakFHDy7sC" } },
  { year: 2026, type: "workshop", venue: "NeurIPS 2026 · AI & the Self Workshop",
    where: "Paris, France",
    title: "Provenance and Perceived Humanness in Social Media Political Discourse",
    authors: "Ansell, R., Singh, L., Ventura, T., Bode, L.", links: { paper: "https://openreview.net/attachment?id=Noc5ThJYu7&name=pdf" } },
  { year: 2026, type: "workshop", venue: "IJCAI-ECAI 2026 · Logical & Symbolic Reasoning of LLMs Workshop",
    where: "Bremen, Germany",
    title: "Clueing up LLMs with Tool-Augmented Deductive Reasoning",
    authors: "Ansell, R., Toney-Wails, A.", links: { arxiv: "https://arxiv.org/abs/2609.18736" } },
  { year: 2026, type: "workshop", venue: "ICLR 2026 · Workshop on Logical Reasoning of LLMs",
    where: "Rio de Janeiro, Brazil",
    title: "How Clued up are LLMs? Evaluating Multi-Step Deductive Reasoning in a Text-Based Game Environment",
    authors: "Ansell, R., Toney-Wails, A.", links: { arxiv: "https://arxiv.org/abs/2603.17169", poster: "files/ICLR2026_Clue_Poster.pdf" } },
  { year: 2025, type: "workshop", venue: "ICDM 2025 Workshops (ICDMW)",
    where: "Washington, DC",
    title: "Using Stance Detection Models to Improve Our Understanding of the Firearm Policy Debate on Social Media",
    authors: "Allah, I., Baucom, C., Bogen, C., Brown, R., Cheek, J., Higgins, K., Kendall, E., Beaugris, J., Prince, C., Sakina, U., Stacy, R., Yeasmin, S., Ansell, R., Ahmed, M., Singh, L.",
    links: { paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11415756" } },
  { year: 2025, type: "thesis", venue: "Master's Thesis, Georgetown University",
    title: "Human in the Loop: Fine-Tuning Language Models with Perceived Humanness",
    authors: "Ansell, R.",
    links: { scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:u5HHmVD_uO8C" } },
];

// ── In the news ──
// kind: "Press" (coverage of the work) | "Article" (something you wrote)
// date: display string · sort order is the order listed here
const NEWS = [
  { kind: "Press", outlet: "Georgetown McCourt School of Public Policy", date: "Nov 2026",
    title: "McCourt Faculty Find People Struggle to Tell AI From Human Political Posts",
    blurb: "Coverage of our PNAS study showing people do only slightly better than chance at spotting AI-written political posts.",
    url: "https://mccourt.georgetown.edu/news/mccourt-faculty-find-people-struggle-to-tell-ai-from-human-political-posts/" },
  { kind: "Article", outlet: "U.S. Election Analysis 2024: Media, Voters and the Campaign", date: "Nov 2024",
    title: "How Human? Analyzing the Perceived Humanness of AI-Generated Social Media Content Around the U.S. 2024 Presidential Debate",
    authors: "Ventura, T., Ansell, R., Paik, S., Toney, A., Bode, L., Singh, L.",
    url: "https://www.electionanalysis.ws/us/president2024/section-6-digital-campaign/how-human-analyzing-the-perceived-humanness-of-ai-generated-social-media-content-around-the-u-s-2024-presidential-debate/" },
];

// ── Talks & presentations ──
// format: Oral | Poster | Talk | Short talk | Mentoring …
// link: optional URL to the paper · files: optional [label, url] pairs (slides, posters)
// bullets: optional [{ text, files }] sub-items listed under the title
const TALKS = [
  { date: "Dec 2026", event: "NeurIPS 2026 · AI & the Self Workshop", format: "Poster",
    title: "Provenance and Perceived Humanness in Social Media Political Discourse", where: "Paris, France", upcoming: true,
    link: "https://openreview.net/attachment?id=Noc5ThJYu7&name=pdf" },
  { date: "Jul 2026", event: "DeLTA 2026", format: "Talk",
    title: "When Alignment Feels Artificial: Evaluating Preference-Based Fine-Tuning for Perceived Humanness", where: "Porto, Portugal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:qjMakFHDy7sC" },
  { date: "Apr 2026", event: "ICLR 2026 · Workshop on Logical Reasoning of LLMs", format: "Poster",
    title: "How Clued up are LLMs? Evaluating Multi-Step Deductive Reasoning in a Text-Based Game Environment", where: "Rio de Janeiro, Brazil",
    files: [["Poster", "files/ICLR2026_Clue_Poster.pdf"]],
    link: "https://arxiv.org/abs/2603.17169" },
  { date: "Apr 2026", event: "ACM CAPWIC 2026", format: "Tutorial",
    title: "Augmenting Datasets with Generated Data: Methods and Evaluation", where: "Virginia Tech, Alexandria, VA",
    files: [["Slides", "files/CAPWIC2026_Slides.pdf"]] },
  { date: "Nov 2025", event: "ICDM 2025 · REU Symposium", format: "Short talk",
    title: "Using Stance Detection Models to Improve Our Understanding of the Firearm Policy Debate on Social Media", where: "Washington, DC",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11415756" },
  { date: "Aug 2025", event: "Massive Data Institute · Summer Showcase", format: "Poster",
    title: "Measuring and Modeling Perceived Humanness", where: "Georgetown University, Washington, DC",
    files: [["Poster", "files/MDI_Poster_Summer2025.pdf"]] },
  { date: "Summer 2025", event: "Georgetown REU Program", format: "Mentoring",
    title: "Research lectures & mentoring: stance detection and the firearm policy debate on social media", where: "Washington, DC",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11415756" },
  { date: "May 2025", event: "Massive Data Institute · Spring Poster Session", format: "Poster",
    title: "Measuring and Modeling Perceived Humanness in AI-Generated Political Discourse", where: "Georgetown University, Washington, DC",
    files: [["Poster", "files/MDI_Poster_Spring2025.pdf"]] },
  { date: "Apr 2025", event: "Georgetown University · M.S. Thesis Defense", format: "Oral defense",
    title: "Human in the Loop: Fine-Tuning Language Models with Perceived Humanness", where: "Washington, DC",
    files: [["Slides", "files/MS_Thesis_Defense_Slides.pdf"]],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:u5HHmVD_uO8C" },
  { date: "Mar 2025", event: "ACM CAPWIC 2025", format: "Talk",
    title: "Assessing Public Perception of AI-Generated Social Media Content of the 2024 U.S. Presidential Debate", where: "The George Washington University, Washington, DC",
    files: [["Slides", "files/CAPWIC2025_Slides.pdf"]] },
  { date: "Summer 2024", event: "Massive Data Institute", format: "Poster · Mentoring",
    title: "MDI Scholar", where: "Georgetown University, Washington, DC",
    bullets: [
      { text: "Poster: \"Detecting Humanness across Social Media Platforms\"", files: [["Poster", "files/MDI_Poster_Summer2024.pdf"]] },
      { text: "Research lectures & mentoring for Georgetown REU students: perceived humanness of AI-generated posts around the 2024 presidential debate" },
    ] },
];
