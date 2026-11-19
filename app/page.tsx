import { Fragment } from "react";
import { homeUrl, siteUrl } from "./site";

const interests = [
  { number: "01", title: "Embodied AI & Visual Reasoning", text: "Multimodal agents that perceive, reason, remember, and act in complex embodied environments." },
  { number: "02", title: "Vision-Language Navigation", text: "Instruction following, 3D spatial reasoning, and semantic-geometric mapping for zero-shot navigation." },
  { number: "03", title: "Vision-Language-Action Models", text: "Game VLA and autonomous-driving VLA under long-context, memory, and latency constraints." },
  { number: "04", title: "Video Understanding", text: "Long-form and egocentric video understanding through temporal evidence, grounding, and structured memory." },
];

const awards = [
  ["2026", "National Scholarship for Graduate Students"],
  ["2023", "National Scholarship for Undergraduate Students"],
  ["2023", "Third Prize, 14th China College Students' Service Outsourcing Innovation and Entrepreneurship Competition"],
  ["2024", "Excellence Award, 2nd Oubei Cup Data Intelligence Competition"],
  ["2022", "Second Prize, National English Competition for College Students"],
  ["2020-2024", "Outstanding Student, Outstanding Communist Youth League Member, and Academic Excellence Scholarship"],
];

type Publication = {
  title: string;
  authors: string[];
  venue: string;
  role?: string;
  description: string;
  image?: { src: string; alt: string };
  links: { label: string; href: string }[];
};

const publications: Publication[] = [
  {
    title: "CLiViS: Unleashing Cognitive Map through Linguistic-Visual Synergy for Embodied Visual Reasoning",
    authors: ["Kailing Li", "Qi'ao Xu", "Tianwen Qian", "Yuqian Fu", "Yang Jiao", "Xiaoling Wang"],
    venue: "CVPR 2026",
    role: "First Author",
    description: "A training-free framework that alternates language-guided planning with visual evidence collection and maintains a cognitive map and evidence memory for egocentric video reasoning.",
    image: { src: "/clivis-overview.png", alt: "CLiViS framework overview showing cognitive maps, evidence memory, and integrated reasoning" },
    links: [
      { label: "CVF", href: "https://openaccess.thecvf.com/content/CVPR2026/html/Li_CLiViS_Unleashing_Cognitive_Map_through_Linguistic-Visual_Synergy_for_Embodied_Visual_Reasoning_CVPR_2026_paper.html" },
      { label: "Code", href: "https://github.com/Teacher-Tom/CLiViS" },
    ],
  },
  {
    title: "Bridging the 2D-3D Gap: A Hierarchical Semantic-Geometric Map for Vision Language Navigation",
    authors: ["Kailing Li", "Tianwen Qian", "Lijin Yang", "Yuqian Fu", "Jingyu Gong", "Xiaoling Wang", "Liang He"],
    venue: "CVPR 2026",
    role: "First Author",
    description: "A hierarchical map renders traversable geometry, object semantics, and candidate waypoints as a top-down view for vision-language planning. A geometric planner executes the selected waypoints.",
    image: { src: "/hsgm-overview.png", alt: "HSGM framework overview showing semantic, geometric, and decision maps for navigation" },
    links: [
      { label: "CVF", href: "https://openaccess.thecvf.com/content/CVPR2026/html/Li_Bridging_the_2D-3D_Gap_A_Hierarchical_Semantic-Geometric_Map_for_Vision_CVPR_2026_paper.html" },
      { label: "arXiv", href: "https://arxiv.org/abs/2606.00095" },
      { label: "Code", href: "https://github.com/Teacher-Tom/HSGM_public" },
    ],
  },
  {
    title: "GroundingVLN: Reasoning and Acting with Grounding for Vision-Language Navigation",
    authors: ["Kailing Li", "Yu Han", "Tianwen Qian", "Yuqian Fu", "Jingyu Gong", "Jiangming Shi", "Xiaoling Wang"],
    venue: "Preprint · 2026",
    role: "First Author",
    description: "Uses visual grounding to connect navigation reasoning with execution. The model anchors evidence to image locations and predicts a pixel goal for a geometric planner.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2609.18581" }],
  },
  {
    title: "3SPO: State-Score-Supervised Policy Optimization for LLM Agents",
    authors: ["Yu Han", "Kailing Li", "Yang Jiao", "Yulin Dai", "Yuqian Fu", "Linhai Zhuo", "Tianwen Qian"],
    venue: "Preprint · 2026",
    role: "Co-first Author",
    description: "Uses dynamic state scores derived from past task success to assign step-level rewards, allocate more rollouts to states where the policy can improve, and update the policy during an episode.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2606.09961" },
      { label: "Code", href: "https://github.com/genalyu/3SPO" },
    ],
  },
  {
    title: "AceAction-5M: Hierarchical Goals for Generalist Action Learning Across 3D Game Worlds",
    authors: ["Kailing Li", "Ruoxuan Zhang", "Zheyuan Zhou", "Boyang Chu", "Yingshan Lei", "Hongxia Xie", "Liang Du", "Zixun Sun"],
    venue: "Preprint · 2026",
    role: "Co-first Author",
    description: "A multi-game dataset that aligns task instructions, ordered subgoals, and local skills with gameplay frames and keyboard and mouse inputs to support skill composition.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2611.04241" }],
  },
  {
    title: "ToG-Bench: Task-Oriented Spatio-Temporal Grounding in Egocentric Videos",
    authors: ["Qi'ao Xu", "Tianwen Qian", "Yuqian Fu", "Kailing Li", "Yang Jiao", "Jiacheng Zhang", "Xiaoling Wang", "Liang He"],
    venue: "Preprint · 2025",
    description: "A benchmark for identifying and localizing all objects needed to complete a task in egocentric video, including objects implied by context.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2512.03666" }],
  },
];

const navItems = [["Biography", "#biography"], ["Publications", "#publications"], ["Internships", "#internship"], ["Awards", "#awards"]];
const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${homeUrl}#profile`,
  url: homeUrl,
  name: "李锴凌 (Kailing Li) | Academic Homepage",
  description: "Academic profile of Kailing Li, an embodied AI researcher at East China Normal University.",
  dateCreated: "2026-08-24",
  dateModified: "2026-11-20",
  mainEntity: {
    "@type": "Person",
    "@id": `${homeUrl}#person`,
    name: "Kailing Li",
    alternateName: ["李锴凌", "Teacher-Tom"],
    url: homeUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "M.Eng. Candidate and Embodied AI Researcher",
    affiliation: { "@type": "CollegeOrUniversity", name: "East China Normal University" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Hohai University" },
    sameAs: ["https://github.com/Teacher-Tom", "https://scholar.google.com/citations?user=LuCZXUwAAAAJ"],
    knowsAbout: ["Embodied AI", "Vision-Language Navigation", "Vision-Language-Action Models", "Game VLA", "Video Understanding"],
  },
};

export default function Home() {
  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileStructuredData) }} />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="topbar">
        <div className="topbar-inner">
          <a className="site-name" href="#top" aria-label="Kailing Li, academic homepage">
            <strong>Kailing Li</strong><span>Academic Homepage</span>
          </a>
          <nav aria-label="Primary navigation">
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
        </div>
      </header>

      <div className="academic-layout" id="top">
        <aside className="profile-card" aria-label="Profile information">
          <div className="avatar-wrap">
            <img src="/profile.jpg" alt="Teacher-Tom pixel art avatar" />
            <span>Teacher-Tom</span>
          </div>
          <div className="profile-heading">
            <h1>Kailing Li</h1>
            <p className="chinese-name">李锴凌</p>
            <p className="role">M.Eng. Candidate · Embodied AI Researcher</p>
          </div>

          <div className="affiliation">
            <span className="affiliation-mark">EC</span>
            <div><strong>East China Normal University</strong><small>Computer Science and Technology</small></div>
          </div>

          <dl className="profile-facts">
            <div><dt>Education</dt><dd>M.Eng. 2024–2027 (expected)<br />B.Eng. 2020–2024</dd></div>
            <div><dt>Location</dt><dd>China</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:1204232472@qq.com">1204232472@qq.com</a></dd></div>
          </dl>

          <div className="profile-links">
            <a href="https://scholar.google.com/citations?user=LuCZXUwAAAAJ" target="_blank" rel="noreferrer">Google Scholar <span>↗</span></a>
            <a href="https://github.com/Teacher-Tom" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="mailto:1204232472@qq.com">Email <span>↗</span></a>
          </div>

          <p className="profile-note">Embodied AI · VLN · Game VLA · Video Understanding</p>
        </aside>

        <main id="main-content">
          <section className="content-card biography-card" id="biography">
            <header className="section-title">
              <div><span>About</span><h2>Short Biography</h2></div>
              <span className="section-number">01</span>
            </header>
            <div className="biography-copy">
              <p>I am an M.Eng. candidate in Computer Science and Technology at <strong>East China Normal University</strong>, where I work in the ICALK Lab under the supervision of Prof. Xiaoling Wang. I expect to graduate in July 2027. I earned my B.Eng. in Software Engineering from <strong>Hohai University</strong> in 2024.</p>
              <p>My research focuses on embodied AI, including vision-language navigation, game vision-language-action models, and egocentric video understanding. I published <strong>two first-author papers at CVPR 2026</strong> and have conducted research at Tencent IEG and Bosch Corporate Research.</p>
            </div>
            <div className="compact-interests" id="research">
              <span>Research Interests</span>
              <div>{interests.map((item) => <span key={item.number}>{item.title}</span>)}</div>
            </div>
          </section>

          <section className="content-card publications-card" id="publications">
            <header className="section-title section-title-row">
              <h2>Publications</h2>
              <div className="section-title-aside"><a href="https://scholar.google.com/citations?user=LuCZXUwAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a><span className="section-number">02</span></div>
            </header>

            <div className="paper-list">
              {publications.map((paper) => (
                <article key={paper.title} className={paper.image ? "paper-entry" : "paper-entry paper-entry--text"}>
                  {paper.image && (
                    <figure className="paper-visual"><img src={paper.image.src} alt={paper.image.alt} /></figure>
                  )}
                  <div className="paper-copy">
                    <div className="paper-badges">
                      <span>{paper.venue}</span>{paper.role && <em>{paper.role}</em>}
                    </div>
                    <h3>{paper.title}</h3>
                    <p className="authors">
                      {paper.authors.map((author, index) => (
                        <Fragment key={author}>
                          {index > 0 && ", "}
                          {author === "Kailing Li" ? <strong>{author}</strong> : author}
                        </Fragment>
                      ))}
                    </p>
                    <p className="paper-description">{paper.description}</p>
                    <div className="paper-links">
                      {paper.links.map(({ label, href }) => (
                        <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={`${label} for ${paper.title}`}>[ {label} ]</a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-card" id="internship">
            <header className="section-title">
              <h2>Research Internships</h2>
              <span className="section-number">03</span>
            </header>
            <div className="experience-list">
              <article>
                <div className="company-logo"><img src="/tencent-logo.svg" alt="Tencent" /></div>
                <div className="experience-copy">
                  <div className="experience-heading">
                    <div><h3>Tencent IEG</h3><p>Rhino-Bird Elite Talent Program · Frontier Lab, Game AI Engine Department</p></div>
                    <time>May 2026 — Present</time>
                  </div>
                  <p>I develop memory for game VLA agents to track progress across subtasks during real-time control. I also co-developed <strong>AceAction-5M</strong>, which aligns task goals, ordered subgoals, and skill instructions with gameplay video and controls across 3D games.</p>
                  <div className="topic-tags"><span>Game VLA</span><span>Visual Memory</span><span>Gameplay Demonstrations</span></div>
                </div>
              </article>
              <article>
                <div className="company-logo"><img src="/bosch-logo.svg" alt="Bosch" /></div>
                <div className="experience-copy">
                  <div className="experience-heading">
                    <div><h3>Bosch Corporate Research</h3><p>Zero-Shot Vision-Language Navigation and Driving VLA</p></div>
                    <time>Jun 2025 — Mar 2026</time>
                  </div>
                  <p>I developed a hierarchical semantic-geometric map for zero-shot navigation and applied it to autonomous parking without high-definition maps. I reproduced ORION, ReCogDrive, and SimLingo, covering model architecture, training, and inference.</p>
                  <div className="topic-tags"><span>Zero-shot VLN</span><span>3D Mapping</span><span>Autonomous Parking</span></div>
                </div>
              </article>
            </div>
          </section>

          <section className="content-card" id="awards">
            <header className="section-title">
              <div><span>Recognition</span><h2>Honors &amp; Awards</h2></div>
              <span className="section-number">04</span>
            </header>
            <div className="award-list">{awards.map(([year, title]) => <article key={year + title}><time>{year}</time><p>{title}</p></article>)}</div>
          </section>

          <footer className="page-footer">
            <p>Last updated in <time dateTime="2026-11-20">November 2026</time>.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
