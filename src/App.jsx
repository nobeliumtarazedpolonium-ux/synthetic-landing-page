import { useState } from 'react'

const Icon = ({ children, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {children}
  </svg>
)

const Arrow = () => (
  <Icon size={18}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
)

const Check = () => (
  <Icon size={18}>
    <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
)

const features = [
  {
    number: '01',
    title: 'One release view',
    body: 'Bring pull requests, checks, owners, and rollout notes into a single calm workspace your whole team can trust.',
  },
  {
    number: '02',
    title: 'Checks that explain themselves',
    body: 'Turn noisy status updates into clear readiness signals, with every blocker linked to the evidence behind it.',
  },
  {
    number: '03',
    title: 'A decision, not a dashboard',
    body: 'Know whether to ship, hold, or roll back—and give stakeholders a concise reason without another meeting.',
  },
]

const releases = [
  { name: 'Web app', branch: 'release/4.2', status: 'Ready', time: '2m ago', tone: 'green' },
  { name: 'Billing API', branch: 'release/2.8', status: 'Review', time: '8m ago', tone: 'amber' },
  { name: 'Mobile', branch: 'release/6.1', status: 'Ready', time: '12m ago', tone: 'green' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) return
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="ReleasePilot home" onClick={closeMenu}>
          <span className="brand-mark"><span /></span>
          <span>ReleasePilot</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#product" onClick={closeMenu}>Product</a>
          <a href="#workflow" onClick={closeMenu}>Workflow</a>
          <a href="#customers" onClick={closeMenu}>Customers</a>
          <a className="nav-cta" href="#access" onClick={closeMenu}>Get early access <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Release intelligence for modern teams</p>
            <h1 id="hero-title">Ship software.<br /><em>Keep your certainty.</em></h1>
            <p className="hero-lede">ReleasePilot turns scattered checks and status updates into one clear, defensible go-or-hold decision.</p>
            <div className="hero-actions">
              <a className="button primary" href="#access">Request early access <Arrow /></a>
              <a className="text-link" href="#product">Explore the platform <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span>MO</span><span>SK</span><span>JL</span>
              </div>
              <p><strong>4.9/5</strong><br />from release teams</p>
            </div>
          </div>

          <div className="product-scene" aria-label="ReleasePilot product preview">
            <div className="glow" />
            <div className="app-window">
              <div className="window-bar">
                <div className="window-dots"><span /><span /><span /></div>
                <p>Release overview</p>
                <div className="mini-avatar">AA</div>
              </div>
              <div className="app-body">
                <aside className="sidebar" aria-hidden="true">
                  <div className="side-logo"><span /></div>
                  <div className="side-item active" />
                  <div className="side-item" />
                  <div className="side-item" />
                  <div className="side-item short" />
                </aside>
                <div className="dashboard">
                  <div className="dashboard-heading">
                    <div>
                      <span className="micro-label">RELEASE 4.2.0</span>
                      <h2>Ready to ship</h2>
                    </div>
                    <div className="readiness-ring"><strong>94</strong><span>%</span></div>
                  </div>
                  <div className="summary-grid">
                    <div><span>Checks passed</span><strong>38 / 40</strong></div>
                    <div><span>Open blockers</span><strong>0</strong></div>
                    <div><span>Contributors</span><strong>12</strong></div>
                  </div>
                  <div className="release-table">
                    <div className="table-head"><span>Service</span><span>Branch</span><span>Status</span><span>Updated</span></div>
                    {releases.map((release) => (
                      <div className="table-row" key={release.name}>
                        <span className="service"><i className={release.tone} />{release.name}</span>
                        <span className="branch">{release.branch}</span>
                        <span className={`status ${release.tone}`}>{release.status}</span>
                        <span>{release.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="ship-note"><Check /><span>All required checks are complete</span><button type="button">View report</button></div>
                </div>
              </div>
            </div>
            <div className="floating-card">
              <span className="pulse-dot" />
              <div><strong>Deployment healthy</strong><small>Production · us-east-1</small></div>
            </div>
          </div>
        </section>

        <section className="logo-strip" aria-label="Teams using ReleasePilot">
          <p>Trusted by teams shipping every day</p>
          <div><span>QUARRY</span><span>northstar</span><span>ARROW</span><span>FOLD</span><span>terrain</span></div>
        </section>

        <section className="features" id="product" aria-labelledby="features-title">
          <div className="section-heading">
            <p className="eyebrow"><span /> Built for the moment before launch</p>
            <h2 id="features-title">Clarity where releases<br />usually get complicated.</h2>
          </div>
          <div className="feature-list">
            {features.map((feature) => (
              <article key={feature.number}>
                <span className="feature-number">{feature.number}</span>
                <div><h3>{feature.title}</h3><p>{feature.body}</p></div>
                <span className="feature-arrow"><Arrow /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow" id="workflow" aria-labelledby="workflow-title">
          <div className="workflow-copy">
            <p className="eyebrow light"><span /> From signal to decision</p>
            <h2 id="workflow-title">A release process your team can actually repeat.</h2>
            <p>Connect the tools you already use. ReleasePilot gathers the evidence, keeps ownership visible, and produces a release record everyone can understand.</p>
            <a href="#access" className="button light-button">See how it works <Arrow /></a>
          </div>
          <div className="steps" aria-label="ReleasePilot workflow">
            <article><span>1</span><div><h3>Connect</h3><p>Bring in checks from source control, CI, monitoring, and issue tracking.</p></div></article>
            <article><span>2</span><div><h3>Review</h3><p>See owners, blockers, and exceptions in one shared release view.</p></div></article>
            <article><span>3</span><div><h3>Decide</h3><p>Record a clear ship, hold, or rollback decision with supporting evidence.</p></div></article>
          </div>
        </section>

        <section className="testimonial" id="customers" aria-labelledby="quote-title">
          <div className="quote-mark">“</div>
          <blockquote id="quote-title">ReleasePilot gave us the confidence to replace a two-hour release meeting with a ten-minute decision.</blockquote>
          <div className="quote-person"><span>DR</span><p><strong>David Reyes</strong><br />VP Engineering, Quarry</p></div>
        </section>

        <section className="access" id="access" aria-labelledby="access-title">
          <div>
            <p className="eyebrow"><span /> Join the private beta</p>
            <h2 id="access-title">Make your next release<br />the calm one.</h2>
          </div>
          {submitted ? (
            <div className="success-message" role="status">
              <span><Check /></span>
              <div><strong>You’re on the list.</strong><p>We’ll send product access details to {email}.</p></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Work email</label>
              <div className="input-row">
                <input id="email" name="email" type="email" placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
                <button type="submit" className="button primary">Request access <Arrow /></button>
              </div>
              <p>No spam. Just a thoughtful product update when we’re ready.</p>
            </form>
          )}
        </section>
      </main>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark"><span /></span><span>ReleasePilot</span></a>
        <p>© 2026 ReleasePilot. Built for teams that ship.</p>
        <div><a href="#product">Product</a><a href="#workflow">Workflow</a><a href="mailto:hello@releasepilot.dev">Contact</a></div>
      </footer>
    </div>
  )
}

export default App
