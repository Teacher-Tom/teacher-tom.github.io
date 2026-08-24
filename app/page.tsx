import { homeUrl, siteUrl } from "./site";

const interests = [
  { number: "01", title: "Embodied AI & Visual Reasoning", text: "Multimodal agents that perceive, reason, remember, and act in complex embodied environments." },
  { number: "02", title: "Vision-Language Navigation", text: "Instruction following, 3D spatial reasoning, and semantic-geometric mapping for zero-shot navigation." },
  { number: "03", title: "Vision-Language-Action Models", text: "Game VLA and autonomous-driving VLA under long-context, memory, and latency constraints." },
  { number: "04", title: "Video Understanding", text: "Long-form and egocentric video understanding through temporal evidence, grounding, and structured memory." },
];

const awards = [
  ["2023", "National Scholarship for Undergraduate Students"],
  ["2023", "Third Prize, 14th China College Students' Service Outsourcing Innovation and Entrepreneurship Competition"],
  ["2024", "Excellence Award, 2nd Oubei Cup Data Intelligence Competition"],
  ["2022", "Second Prize, National English Competition for College Students"],
  ["2020-2024", "Outstanding Student, Outstanding Communist Youth League Member, and Academic Excellence Scholarship"],
];

const navItems = [["Biography", "#biography"], ["Publications", "#publications"], ["Internship", "#internship"], ["Awards", "#awards"]];
const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${homeUrl}#profile`,
  url: homeUrl,
  name: "李锴凌 (Kailing Li) | Academic Homepage",
  description: "Academic profile of Kailing Li, an embodied AI researcher at East China Normal University.",
  dateCreated: "2026-08-24",
  dateModified: "2026-08-24",
  mainEntity: {
    "@type": "Person",
    "@id": `${homeUrl}#person`,
    name: "Kailing Li",
    alternateName: ["李锴凌", "Teacher-Tom"],
    url: homeUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "M.Sc. Candidate and Embodied AI Researcher",
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
            <p className="role">M.Sc. Candidate · Embodied AI Researcher</p>
          </div>

          <div className="affiliation">
            <span className="affiliation-mark">EC</span>
            <div><strong>East China Normal University</strong><small>Computer Science and Technology</small></div>
          </div>

          <dl className="profile-facts">
            <div><dt>Education</dt><dd>M.Sc. 2024-2027<br />B.E. 2020-2024</dd></div>
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
              <p>I am an M.Sc. candidate in Computer Science and Technology at <strong>East China Normal University</strong>, after earning a B.E. in Software Engineering from <strong>Hohai University</strong>. My research focuses on embodied intelligence, especially vision-language navigation, Game VLA, and video understanding.</p>
              <p>I have published <strong>two first-author papers at CVPR 2026</strong> and conducted research through the Tencent Rhino-Bird Elite Talent Program and at Bosch Corporate Research.</p>
            </div>
            <div className="compact-interests" id="research">
              <span>Research Interests</span>
              <div>{interests.map((item) => <span key={item.number}>{item.title}</span>)}</div>
            </div>
          </section>

          <section className="content-card publications-card" id="publications">
            <header className="section-title section-title-row">
              <div><span>Peer-reviewed only</span><h2>Publications</h2></div>
              <div className="section-title-aside"><a href="https://scholar.google.com/citations?user=LuCZXUwAAAAJ" target="_blank" rel="noreferrer">Full list on Scholar ↗</a><span className="section-number">02</span></div>
            </header>

            <div className="paper-list">
              <article className="paper-entry">
                <figure className="paper-visual"><img src="/clivis-overview.png" alt="CLiViS framework overview showing cognitive maps, evidence memory, and integrated reasoning" /></figure>
                <div className="paper-copy">
                  <div className="paper-badges"><span>CVPR 2026</span><em>First Author</em></div>
                  <h3>CLiViS: Unleashing Cognitive Map through Linguistic-Visual Synergy for Embodied Visual Reasoning</h3>
                  <p className="authors"><strong>Kailing Li</strong>, Qi&apos;ao Xu, Tianwen Qian, Yuqian Fu, Yang Jiao, Xiaoling Wang</p>
                  <p className="paper-description">A training-free framework combining dynamic cognitive maps and evidence memory for long-horizon embodied visual reasoning.</p>
                  <div className="paper-links">
                    <a href="https://openaccess.thecvf.com/content/CVPR2026/html/Li_CLiViS_Unleashing_Cognitive_Map_through_Linguistic-Visual_Synergy_for_Embodied_Visual_CVPR_2026_paper.html" target="_blank" rel="noreferrer">[ Paper ]</a>
                    <a href="https://arxiv.org/abs/2506.17629" target="_blank" rel="noreferrer">[ arXiv ]</a>
                    <a href="https://github.com/Teacher-Tom/CLiViS" target="_blank" rel="noreferrer">[ Code ]</a>
                  </div>
                </div>
              </article>

              <article className="paper-entry">
                <figure className="paper-visual"><img src="/hsgm-overview.png" alt="HSGM framework overview showing semantic, geometric, and decision maps for navigation" /></figure>
                <div className="paper-copy">
                  <div className="paper-badges"><span>CVPR 2026</span><em>First Author</em></div>
                  <h3>Bridging the 2D-3D Gap: A Hierarchical Semantic-Geometric Map for Vision Language Navigation</h3>
                  <p className="authors"><strong>Kailing Li</strong>, Tianwen Qian, Lijin Yang, Yuqian Fu, Jingyu Gong, Xiaoling Wang, Liang He</p>
                  <p className="paper-description">A training-free hierarchical representation that makes online 3D geometry understandable to VLM-based planners for zero-shot VLN.</p>
                  <div className="paper-links">
                    <a href="https://openaccess.thecvf.com/content/CVPR2026/html/Li_Bridging_the_2D-3D_Gap_A_Hierarchical_Semantic-Geometric_Map_for_Vision_CVPR_2026_paper.html" target="_blank" rel="noreferrer">[ Paper ]</a>
                    <a href="https://arxiv.org/abs/2606.00095" target="_blank" rel="noreferrer">[ arXiv ]</a>
                    <a href="https://github.com/Teacher-Tom/HSGM_public" target="_blank" rel="noreferrer">[ Code ]</a>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="content-card" id="internship">
            <header className="section-title">
              <div><span>Industry research</span><h2>Internship</h2></div>
              <span className="section-number">03</span>
            </header>
            <div className="experience-list">
              <article>
                <div className="company-logo"><img src="/tencent-logo.svg" alt="Tencent" /></div>
                <div className="experience-copy"><div className="experience-heading"><div><h3>Tencent Rhino-Bird Elite Talent Program</h3><p>Game VLA Foundation Models Research</p></div><time>May 2026 — Present</time></div><p>Researching long-context Game VLA under memory and latency constraints, including learnable visual-memory compression and recurrent online updates.</p><div className="topic-tags"><span>Game VLA</span><span>Visual Memory</span><span>Online Updates</span></div></div>
              </article>
              <article>
                <div className="company-logo"><img src="/bosch-logo.svg" alt="Bosch" /></div>
                <div className="experience-copy"><div className="experience-heading"><div><h3>Bosch Corporate Research</h3><p>Vision-Language Navigation &amp; Autonomous-Driving VLA</p></div><time>Jun 2025 — Mar 2026</time></div><p>Developed a hierarchical semantic-geometric mapping approach for VLN, published at CVPR 2026, and contributed to autonomous cruising and parking research without HD maps.</p><div className="topic-tags"><span>Zero-shot VLN</span><span>3D Mapping</span><span>Autonomous Parking</span></div></div>
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
            <p>Last updated in August 2026.</p>
            <p>Built for clarity, curiosity, and research.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}