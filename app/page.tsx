const researchAreas = [
  { index: "01", title: "Embodied Intelligence", description: "Agents that connect multimodal perception with grounded reasoning and purposeful action in complex environments.", tags: ["Visual reasoning", "Agent learning"] },
  { index: "02", title: "Vision-Language Navigation", description: "Zero-shot navigation, semantic-geometric mapping, and spatial reasoning for instruction-following embodied agents.", tags: ["VLN", "3D reasoning"] },
  { index: "03", title: "Game VLA", description: "Vision-language-action foundation models for long-horizon gameplay under strict context and latency constraints.", tags: ["VLA", "Online inference"] },
  { index: "04", title: "Multimodal Memory", description: "Learnable visual memory and recurrent updates that preserve useful history over long trajectories.", tags: ["Long context", "Memory"] },
  { index: "05", title: "Video Understanding", description: "Fine-grained understanding of long and egocentric video through temporal evidence and grounding.", tags: ["Egocentric video", "Grounding"] },
];

const awards = [
  { year: "2023", title: "National Scholarship", detail: "National Scholarship for Undergraduate Students" },
  { year: "2023", title: "Third Prize", detail: "14th China College Students' Service Outsourcing Innovation and Entrepreneurship Competition" },
  { year: "2024", title: "Excellence Award", detail: "2nd Oubei Cup Data Intelligence Competition" },
  { year: "2022", title: "Second Prize", detail: "National English Competition for College Students" },
  { year: "2020-24", title: "University Honors", detail: "Outstanding Student, Outstanding Communist Youth League Member, and Academic Excellence Scholarship" },
];

const navItems = [["About", "#about"], ["Research", "#research"], ["Publications", "#publications"], ["Internship", "#experience"], ["Awards", "#awards"]];

export default function Home() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="nav-inner">
          <a className="wordmark" href="#top" aria-label="Kailing Li, home"><span className="wordmark-disc">KL</span><span>Kailing Li</span></a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <a className="header-contact" href="mailto:1204232472@qq.com">Get in touch <span aria-hidden="true">↗</span></a>
          <details className="mobile-nav">
            <summary aria-label="Open navigation menu">Menu</summary>
            <nav aria-label="Mobile navigation">
              {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
              <a href="mailto:1204232472@qq.com">Email</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><i aria-hidden="true" />Embodied intelligence researcher</p>
            <h1>Building agents that can<em> see, remember, reason — and act.</em></h1>
            <p className="hero-intro">I&apos;m <strong>Kailing Li (李锴凌)</strong>, an M.Sc. candidate at East China Normal University. I study how multimodal agents understand long visual experiences, navigate 3D worlds, and make grounded decisions.</p>
            <div className="hero-actions">
              <a className="button primary-button" href="#research">Explore my research <span aria-hidden="true">↓</span></a>
              <a className="button secondary-button" href="https://scholar.google.com/citations?user=LuCZXUwAAAAJ" target="_blank" rel="noreferrer">Google Scholar <span aria-hidden="true">↗</span></a>
            </div>
            <dl className="hero-facts" aria-label="Research highlights">
              <div><dt>02</dt><dd>CVPR 2026<br />first-author papers</dd></div>
              <div><dt>02</dt><dd>Industry research<br />programs</dd></div>
              <div><dt>05</dt><dd>Connected<br />research themes</dd></div>
            </dl>
          </div>
          <div className="field-map" aria-hidden="true">
            <div className="map-grid" /><div className="orbit orbit-a"><i /></div><div className="orbit orbit-b"><i /></div>
            <div className="map-core"><strong>KL</strong><span>Research · 2026</span></div>
            <div className="map-label label-one"><b>01</b> Perception</div><div className="map-label label-two"><b>02</b> Memory</div><div className="map-label label-three"><b>03</b> Action</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <header className="section-head"><p><span>01</span> Short biography</p><h2>Research shaped by both ideas and real-world systems.</h2></header>
          <div className="about-grid">
            <div className="biography">
              <p className="lead">My work sits at the intersection of computer vision, language, and action — with a focus on agents that remain capable over long, complex interactions.</p>
              <p>I am pursuing an M.Sc. in Computer Science and Technology at East China Normal University after earning my B.E. in Software Engineering from Hohai University. I have published two first-author papers at CVPR 2026 on embodied visual reasoning and vision-language navigation.</p>
              <p>Beyond academia, I have worked on VLN and autonomous-driving VLA at Bosch Corporate Research and currently study long-context Game VLA foundation models through the Tencent Rhino-Bird Elite Talent Program.</p>
            </div>
            <div className="education" aria-label="Education">
              <article><time>2024 — 2027</time><h3>East China Normal University</h3><p>M.Sc. · Computer Science and Technology</p><small>China</small></article>
              <article><time>2020 — 2024</time><h3>Hohai University</h3><p>B.E. · Software Engineering</p><small>China</small></article>
            </div>
          </div>
        </section>

        <section className="section research-section" id="research">
          <header className="section-head section-head-dark"><p><span>02</span> Research interests</p><h2>From visual evidence to intelligent action.</h2><div className="head-note">Structured representations, memory systems, and decision-making methods for multimodal agents.</div></header>
          <div className="research-grid">
            {researchAreas.map((area) => <article className="research-card" key={area.index}><div className="card-index"><span>{area.index}</span><i aria-hidden="true">↗</i></div><h3>{area.title}</h3><p>{area.description}</p><div className="tags">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <header className="section-head publications-head"><div><p><span>03</span> Publications</p><h2>Published work.</h2></div><aside>Peer-reviewed publications only</aside></header>
          <div className="publication-list">
            <article className="publication">
              <div className="publication-number">01</div>
              <div className="publication-main">
                <div className="publication-badges"><span>CVPR 2026</span><i>First author</i></div>
                <h3>CLiViS: Unleashing Cognitive Map through Linguistic-Visual Synergy for Embodied Visual Reasoning</h3>
                <p className="authors"><strong>Kailing Li</strong>, Qi&apos;ao Xu, Tianwen Qian, Yuqian Fu, Yang Jiao, Xiaoling Wang</p>
                <p className="abstract">A training-free framework that combines dynamic cognitive maps and evidence memory for long-horizon embodied visual reasoning across OpenEQA, EgoSchema, and EgoTempo.</p>
                <div className="publication-links">
                  <a href="https://openaccess.thecvf.com/content/CVPR2026/html/Li_CLiViS_Unleashing_Cognitive_Map_through_Linguistic-Visual_Synergy_for_Embodied_Visual_CVPR_2026_paper.html" target="_blank" rel="noreferrer">Paper <span aria-hidden="true">↗</span></a>
                  <a href="https://arxiv.org/abs/2506.17629" target="_blank" rel="noreferrer">arXiv <span aria-hidden="true">↗</span></a>
                  <a href="https://github.com/Teacher-Tom/CLiViS" target="_blank" rel="noreferrer">Code <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              <div className="publication-side"><span>pp. 5134 — 5143</span><span>Embodied visual reasoning</span></div>
            </article>
            <article className="publication">
              <div className="publication-number">02</div>
              <div className="publication-main">
                <div className="publication-badges"><span>CVPR 2026</span><i>First author</i></div>
                <h3>Bridging the 2D-3D Gap: A Hierarchical Semantic-Geometric Map for Vision Language Navigation</h3>
                <p className="authors"><strong>Kailing Li</strong>, Tianwen Qian, Lijin Yang, Yuqian Fu, Jingyu Gong, Xiaoling Wang, Liang He</p>
                <p className="abstract">A training-free framework that represents 3D environments through a VLM-readable hierarchy, separating high-level planning from low-level control for zero-shot VLN.</p>
                <div className="publication-links">
                  <a href="https://openaccess.thecvf.com/content/CVPR2026/html/Li_Bridging_the_2D-3D_Gap_A_Hierarchical_Semantic-Geometric_Map_for_Vision_CVPR_2026_paper.html" target="_blank" rel="noreferrer">Paper <span aria-hidden="true">↗</span></a>
                  <a href="https://arxiv.org/abs/2606.00095" target="_blank" rel="noreferrer">arXiv <span aria-hidden="true">↗</span></a>
                  <a href="https://github.com/Teacher-Tom/HSGM_public" target="_blank" rel="noreferrer">Code <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              <div className="publication-side"><span>pp. 15243 — 15252</span><span>Vision-language navigation</span></div>
            </article>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <header className="section-head"><p><span>04</span> Internship</p><h2>Turning research questions into working systems.</h2></header>
          <div className="timeline">
            <article className="timeline-row"><div className="timeline-date"><span>May 2026</span><span>Present</span></div><div className="timeline-line" aria-hidden="true"><i /></div><div className="timeline-copy"><div className="company"><h3>Tencent Rhino-Bird Elite Talent Program</h3><span>Current</span></div><h4>Game VLA Foundation Models Research</h4><p>Researching long-context Game VLA under memory and latency constraints, including learnable visual-memory compression and recurrent online updates.</p><div className="experience-tags"><span>Visual memory</span><span>Long context</span><span>Online updates</span></div></div></article>
            <article className="timeline-row"><div className="timeline-date"><span>Jun 2025</span><span>Mar 2026</span></div><div className="timeline-line" aria-hidden="true"><i /></div><div className="timeline-copy"><div className="company"><h3>Bosch Corporate Research</h3></div><h4>Vision-Language Navigation &amp; Autonomous-Driving VLA</h4><p>Developed a hierarchical semantic-geometric mapping approach for VLN, published at CVPR 2026, and contributed to autonomous cruising and parking research without HD maps.</p><div className="experience-tags"><span>Zero-shot VLN</span><span>3D mapping</span><span>Autonomous parking</span></div></div></article>
          </div>
        </section>

        <section className="section awards-section" id="awards">
          <header className="section-head section-head-dark"><p><span>05</span> Honors &amp; awards</p><h2>Recognition along the way.</h2></header>
          <div className="awards-grid">{awards.map((award) => <article className="award" key={award.year + award.title}><time>{award.year}</time><div><h3>{award.title}</h3><p>{award.detail}</p></div></article>)}</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-rings" aria-hidden="true" /><div><p>Research, ideas, collaboration.</p><h2>Let&apos;s connect.</h2></div>
          <div className="contact-links"><a href="mailto:1204232472@qq.com">Email me <span aria-hidden="true">↗</span></a><a href="https://github.com/Teacher-Tom" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></div>
        </section>
      </main>
      <footer><strong>Kailing Li · 李锴凌</strong><span>Embodied AI · Vision-Language Navigation · Game VLA</span><span>© 2026</span></footer>
    </div>
  );
}