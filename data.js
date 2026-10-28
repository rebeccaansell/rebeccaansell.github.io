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
// optional link: { url, label } shows a button on the title deed
const BOARD = [
  { kind: "corner", short: "GO", icon: "⬅", title: "GO!",
    sub: "East London, South Africa → New York City",
    body: ["Moved from East London, South Africa to NYC.", "Roll the dice or press <b>Next space</b> to move around the board."] },

  { kind: "edu", short: "Started LIU B.S.", icon: "🎓", title: "Started B.S. Computer Science",
    sub: "Long Island University · College of Engineering", when: "Class of 2023", where: "New York, NY",
    body: ["Distinguished Scholar's Academic Scholarship"] },

  { kind: "chest", short: "D1 Water Polo", icon: "👑", title: "D1 Water Polo",
    sub: "Long Island University", when: "LIU",
    body: ["Division I water polo scholarship", "2023 MAAC Champions 👑"] },

  { kind: "honor", short: "Chi Alpha Sigma", icon: "⭐", title: "Chi Alpha Sigma",
    sub: "National College Athlete Honor Society", when: "LIU",
    body: ["Honor society for varsity athletes with a 3.4+ GPA."] },

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
    body: ["Research on how people perceive AI-generated social media content around the 2024 US election."] },

  { kind: "chest", short: "REU 2024", icon: "🧑‍🏫", title: "REU Mentor",
    sub: "Community Chest", when: "Summer 2024", where: "Washington, DC",
    body: ["Mentored REU students on the perceived humanness of AI-generated posts about the 2024 presidential debate."] },

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
    link: { url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:2osOgNQ5qMEC", label: "View paper" } },

  { kind: "edu", short: "Started Ph.D.", icon: "🎓", title: "Started Ph.D. Computer Science",
    sub: "Georgetown University · Graduate School of Arts & Sciences", when: "Fall 2025 – expected 2028", where: "Washington, DC",
    body: ["Advised by Dr. Lisa Singh", "Lead Tutor (Fall 2025 – present)", "Teaching Assistant, Graduate Intro to Data Analytics (Fall 2026)"] },

  { kind: "paper", short: "CAPWIC '26", icon: "🚂", title: "ACM CAPWIC 2026",
    sub: "Paper Line · Talk", when: "Apr 2026", where: "Virginia Tech, Alexandria, VA",
    body: ["\"Augmenting Datasets with Generated Data: Methods and Evaluation.\""] },

  { kind: "paper", short: "ICLR '26", icon: "🚂", title: "ICLR 2026 Workshop",
    sub: "Paper Line · Poster", when: "Apr 2026", where: "Rio de Janeiro, Brazil",
    body: ["\"How Clued up are LLMs? Evaluating Multi-Step Deductive Reasoning in a Text-Based Game Environment.\" With Autumn Toney-Wails."],
    link: { url: "https://arxiv.org/abs/2603.17169", label: "arXiv" } },

  { kind: "honor", short: "Coursework Done", icon: "✅", title: "PhD Coursework Complete",
    sub: "Georgetown University", when: "May 2026",
    body: [] },

  { kind: "exp", short: "Verition", icon: "📈", title: "Quant Treasury Intern",
    sub: "Verition Fund Management", when: "May 2026 – Aug 2026", where: "New York, NY",
    body: ["LLM-based market-intelligence tools and repo analytics."] },

  { kind: "corner", short: "DeLTA '26", icon: "🚂", title: "DeLTA 2026",
    sub: "Paper Line · Talk", when: "Jul 2026", where: "Porto, Portugal",
    body: ["\"When Alignment Feels Artificial: Evaluating Preference-Based Fine-Tuning for Perceived Humanness.\" With Lisa Singh."],
    link: { url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:qjMakFHDy7sC", label: "View paper" } },

  { kind: "paper", short: "IJCAI '26", icon: "🚂", title: "IJCAI-ECAI 2026 Workshop",
    sub: "Paper Line · Oral", when: "Aug 2026", where: "Remote",
    body: ["\"Clueing up LLMs with Tool-Augmented Deductive Reasoning.\" With Autumn Toney-Wails."],
    link: { url: "https://arxiv.org/abs/2609.18736", label: "arXiv" } },

  { kind: "boardwalk", short: "PNAS", icon: "📖", title: "PNAS 2026",
    sub: "Proceedings of the National Academy of Sciences", when: "Forthcoming",
    body: ["Co-author: \"Human-authored or AI-generated? Humans show limited ability to tell the difference for political content on social media.\""] },

  { kind: "chance", short: "NeurIPS '26", icon: "?", title: "NeurIPS 2026 · AI & the Self",
    sub: "Chance · Poster", when: "Dec 2026", where: "Paris, France",
    body: ["\"Provenance and Perceived Humanness in Social Media Political Discourse.\""] },

  { kind: "future", short: "Area Exam", icon: "📝", title: "Area Exam",
    sub: "Next step",
    body: [] },

  { kind: "future", short: "Proposal", icon: "📋", title: "Ph.D. Proposal",
    sub: "Next step",
    body: [] },

  { kind: "future", short: "Ph.D. Defense", icon: "🎓", title: "Ph.D. Defense & Graduation",
    sub: "Next step", when: "Expected 2028",
    body: [] },

];


// ── Publications ──
// type: journal | conference | workshop | thesis | article
// where: optional conference location
// links: add any of { pdf, arxiv, article, code, slides, scholar } as URLs
const PUBLICATIONS = [
  { year: 2026, type: "journal", venue: "PNAS", note: "Forthcoming",
    title: "Human-authored or AI-generated? Humans show limited ability to tell the difference for political content on social media",
    authors: "", role: "Co-author", links: {} },
  { year: 2026, type: "conference", venue: "DeLTA 2026",
    where: "Porto, Portugal",
    title: "When Alignment Feels Artificial: Evaluating Preference-Based Fine-Tuning for Perceived Humanness",
    authors: "Ansell, R., Singh, L.",
    links: { scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:qjMakFHDy7sC" } },
  { year: 2026, type: "workshop", venue: "NeurIPS 2026 · AI & the Self Workshop",
    where: "Paris, France",
    title: "Provenance and Perceived Humanness in Social Media Political Discourse",
    authors: "Ansell, R., et al.", links: {} },
  { year: 2026, type: "workshop", venue: "IJCAI-ECAI 2026 · Logical & Symbolic Reasoning of LLMs Workshop",
    where: "Bremen, Germany",
    title: "Clueing up LLMs with Tool-Augmented Deductive Reasoning",
    authors: "Ansell, R., Toney-Wails, A.", links: { arxiv: "https://arxiv.org/abs/2609.18736" } },
  { year: 2026, type: "workshop", venue: "ICLR 2026 · Workshop on Logical Reasoning of LLMs",
    where: "Rio de Janeiro, Brazil",
    title: "How Clued up are LLMs? Evaluating Multi-Step Deductive Reasoning in a Text-Based Game Environment",
    authors: "Ansell, R., Toney-Wails, A.", links: { arxiv: "https://arxiv.org/abs/2603.17169", poster: "files/ICLR2026_Clue_Poster.pdf" } },
  { year: 2026, type: "conference", venue: "ACM CAPWIC 2026",
    where: "Virginia Tech, Alexandria, VA",
    title: "Augmenting Datasets with Generated Data: Methods and Evaluation",
    authors: "Ansell, R.", links: { slides: "files/CAPWIC2026_Slides.pdf" } },
  { year: 2025, type: "workshop", venue: "ICDM 2025 Workshops (ICDMW)",
    where: "Washington, DC",
    title: "Using Stance Detection Models to Improve Our Understanding of the Firearm Policy Debate on Social Media",
    authors: "Allah, I., Baucom, C., Bogen, C., Brown, R., Cheek, J., Higgins, K., Kendall, E., Beaugris, J., Prince, C., Sakina, U., Stacy, R., Yeasmin, S., Ansell, R., Ahmed, M., Singh, L.",
    links: { scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:2osOgNQ5qMEC" } },
  { year: 2025, type: "thesis", venue: "Master's Thesis, Georgetown University",
    title: "Human in the Loop: Fine-Tuning Language Models with Perceived Humanness",
    authors: "Ansell, R.",
    links: { scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:u5HHmVD_uO8C" } },
  { year: 2024, type: "article", venue: "U.S. Election Analysis 2024: Media, Voters and the Campaign",
    title: "Analyzing the Perceived Humanness of AI-Generated Social Media Content Around the Presidential Debate",
    authors: "Ventura, T., Ansell, R., Paik, S., Toney, A., Bode, L., Singh, L.",
    links: { article: "https://www.electionanalysis.ws/us/president2024/section-6-digital-campaign/how-human-analyzing-the-perceived-humanness-of-ai-generated-social-media-content-around-the-u-s-2024-presidential-debate/" } },
];

// ── Talks & presentations ──
// format: Oral | Poster | Talk | Short talk | Mentoring …
// link: optional URL to the paper · files: optional [label, url] pairs (slides, posters)
const TALKS = [
  { date: "Dec 2026", event: "NeurIPS 2026 · AI & the Self Workshop", format: "Poster",
    title: "Provenance and Perceived Humanness in Social Media Political Discourse", where: "Paris, France", upcoming: true },
  { date: "Aug 2026", event: "IJCAI-ECAI 2026 · LogiSymb Workshop", format: "Oral",
    title: "Clueing up LLMs with Tool-Augmented Deductive Reasoning", where: "Remote",
    link: "https://arxiv.org/abs/2609.18736" },
  { date: "Jul 2026", event: "DeLTA 2026", format: "Talk",
    title: "When Alignment Feels Artificial: Evaluating Preference-Based Fine-Tuning for Perceived Humanness", where: "Porto, Portugal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:qjMakFHDy7sC" },
  { date: "Apr 2026", event: "ICLR 2026 · Workshop on Logical Reasoning of LLMs", format: "Poster",
    title: "How Clued up are LLMs? Evaluating Multi-Step Deductive Reasoning in a Text-Based Game Environment", where: "Rio de Janeiro, Brazil",
    files: [["Poster", "files/ICLR2026_Clue_Poster.pdf"]],
    link: "https://arxiv.org/abs/2603.17169" },
  { date: "Apr 2026", event: "ACM CAPWIC 2026", format: "Talk",
    title: "Augmenting Datasets with Generated Data: Methods and Evaluation", where: "Virginia Tech, Alexandria, VA",
    files: [["Slides", "files/CAPWIC2026_Slides.pdf"]] },
  { date: "Nov 2025", event: "ICDM 2025 · REU Symposium", format: "Short talk",
    title: "Using Stance Detection Models to Improve Our Understanding of the Firearm Policy Debate on Social Media", where: "Washington, DC",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:2osOgNQ5qMEC" },
  { date: "Aug 2025", event: "Massive Data Institute · Summer Showcase", format: "Poster",
    title: "Measuring and Modeling Perceived Humanness", where: "Georgetown University, Washington, DC",
    files: [["Poster", "files/MDI_Poster_Summer2025.pdf"]] },
  { date: "Summer 2025", event: "Georgetown REU Program", format: "Mentoring",
    title: "Research lectures & mentoring: stance detection and the firearm policy debate on social media", where: "Washington, DC",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=nYq91MAAAAAJ&citation_for_view=nYq91MAAAAAJ:2osOgNQ5qMEC" },
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
  { date: "Aug 2024", event: "Massive Data Institute · Student Research Posters", format: "Poster",
    title: "Detecting Humanness across Social Media Platforms", where: "Georgetown University, Washington, DC",
    files: [["Poster", "files/MDI_Poster_Summer2024.pdf"]] },
  { date: "Summer 2024", event: "Georgetown REU Program", format: "Mentoring",
    title: "Research lectures & mentoring: perceived humanness of AI-generated posts around the 2024 presidential debate", where: "Washington, DC",
    link: "https://www.electionanalysis.ws/us/president2024/section-6-digital-campaign/how-human-analyzing-the-perceived-humanness-of-ai-generated-social-media-content-around-the-u-s-2024-presidential-debate/" },
];
