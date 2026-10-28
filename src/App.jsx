import { useMemo, useState } from 'react'
import './App.css'

const workflowSteps = [
  {
    title: 'Issue created',
    description:
      'The agent reads the brief, identifies the required skill fit, and surfaces the opportunity in plain language.',
    tone: 'warm',
  },
  {
    title: 'Agent evaluates',
    description:
      'It compares pay, urgency, risk, and the owner’s profile before ranking the work.',
    tone: 'muted',
  },
  {
    title: 'Human approves',
    description:
      'The owner decides whether an application or commitment is worth pursuing.',
    tone: 'dark',
  },
]

const opportunityData = [
  {
    id: 'web-qa',
    title: 'Web QA tester',
    type: 'Manual testing',
    match: 92,
    payout: '₦150,000',
    estimate: '8-10 hrs',
    deadline: '3 days',
    risk: 'Low',
    recommendation: 'Strong match for your web and API testing background.',
    constraints: ['Requires daily bug reports', 'Client expects a 48-hour turnaround'],
    strengths: ['SaaS experience', 'API validation', 'Regression pass'],
  },
  {
    id: 'mobile-qa',
    title: 'Mobile QA tester',
    type: 'Device testing',
    match: 81,
    payout: '₦120,000',
    estimate: '6-8 hrs',
    deadline: '5 days',
    risk: 'Medium',
    recommendation: 'Good fit, but it needs iOS testing availability on weekends.',
    constraints: ['Requires iOS coverage', 'Weekend availability needed'],
    strengths: ['Bug triage', 'Functional testing', 'Release validation'],
  },
  {
    id: 'security-qa',
    title: 'Security review tester',
    type: 'Security',
    match: 63,
    payout: '₦250,000',
    estimate: '12-15 hrs',
    deadline: '2 days',
    risk: 'High',
    recommendation: 'High reward, but the role requires penetration testing experience you do not currently list.',
    constraints: ['Client wants signed-off security findings', 'Requires advanced exploit testing'],
    strengths: ['High pay', 'White-box testing', 'Threat analysis'],
  },
]

const agentCanDo = [
  'Search marketplace opportunities',
  'Read requirements and compare fit',
  'Estimate effort and risk',
  'Rank opportunities with reasoning',
  'Draft a tailored application',
]

const humanNeedsToApprove = [
  'Submit the application',
  'Accept the contract or deadline',
  'Commit to a price or scope',
  'Authorise any spending or external action',
]

function App() {
  const [selectedId, setSelectedId] = useState(opportunityData[0].id)
  const [scanComplete, setScanComplete] = useState(false)

  const selectedOpportunity = useMemo(
    () => opportunityData.find((item) => item.id === selectedId) || opportunityData[0],
    [selectedId],
  )

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand" aria-label="Ziki home">
          <span className="brand-mark">ziki</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#ai-agents">AI agents</a>
          <a href="#opportunity-scout">Opportunities</a>
        </nav>

        <button type="button" className="primary-btn">
          Get started
        </button>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Human-led workflows. Attributable contributions.</p>
          <h1>
            Agents discover work, explain the trade-offs, and ask before they act.
          </h1>
          <p className="intro-copy">
            Ziki keeps ownership visible. Every task is surfaced, explained, and gated by
            the human who is responsible for the final decision.
          </p>

          <div className="hero-actions">
            <button type="button" className="primary-btn large">
              Find work for me
            </button>
            <button type="button" className="secondary-btn">
              See how it works
            </button>
          </div>

          <div className="hero-pipeline" aria-label="Illustrative workflow">
            <span>Owner asked for work</span>
            <span className="arrow">→</span>
            <span>Agent filtered opportunities</span>
            <span className="arrow">→</span>
            <span>Human approved next step</span>
          </div>
        </section>

        <section id="how-it-works" className="workflow-section">
          <div className="section-heading">
            <p className="mini-label">Built around your workflow</p>
            <h2>Every stage has a clear actor and a visible approval gate.</h2>
          </div>

          <div className="workflow-grid">
            {workflowSteps.map((step, index) => (
              <article key={step.title} className={`workflow-card ${step.tone}`}>
                <div className="step-number">0{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ai-agents" className="agent-showcase">
          <div className="showcase-copy">
            <p className="mini-label">AI agents</p>
            <h2>Agents surface opportunities and explain their recommended path.</h2>
            <p>
              When the work is ambiguous or high risk, the agent stops at the decision point
              and waits for the owner’s approval instead of acting on its own.
            </p>
          </div>

          <div className="showcase-quote">
            <span className="quote-tag">Agents ask before they act.</span>
            <p>
              “I found three opportunities that match your profile. I ranked them by skill fit,
              effort, and risk. I need your approval before I submit anything.”
            </p>
          </div>
        </section>

        <section id="opportunity-scout" className="opportunity-section">
          <div className="section-heading heading-inline">
            <div>
              <p className="mini-label">Opportunity scout</p>
              <h2>Find QA work that matches the owner’s skills and constraints.</h2>
            </div>
            <button
              type="button"
              className="primary-btn compact"
              onClick={() => setScanComplete(true)}
            >
              Run agent
            </button>
          </div>

          <div className="agent-panel">
            <div className="prompt-box">
              <span className="prompt-label">Objective</span>
              <p>Find QA opportunities that match my skills and availability.</p>
            </div>

            <div className="list-panel">
              {opportunityData.map((opportunity) => (
                <article
                  key={opportunity.id}
                  className={`opportunity-card ${selectedId === opportunity.id ? 'selected' : ''}`}
                >
                  <div className="card-header">
                    <div>
                      <span className="pill">{opportunity.type}</span>
                      <h3>{opportunity.title}</h3>
                    </div>
                    <strong>{opportunity.match}%</strong>
                  </div>

                  <ul className="strength-list">
                    {opportunity.strengths.map((strength) => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>

                  <div className="meta-row">
                    <span>{opportunity.payout}</span>
                    <span>{opportunity.estimate}</span>
                    <span>Risk: {opportunity.risk}</span>
                  </div>

                  <div className="action-row">
                    <button type="button" className="secondary-btn small" onClick={() => setSelectedId(opportunity.id)}>
                      Review
                    </button>
                    <button type="button" className="ghost-btn small">
                      Reject
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="reasoning-panel">
              <div className="panel-topbar">
                <span className="panel-badge">Agent reasoning</span>
                <span className="status-pill">{scanComplete ? 'Scanned' : 'Waiting'}</span>
              </div>

              <h3>{selectedOpportunity.title}</h3>
              <p className="reasoning-copy">{selectedOpportunity.recommendation}</p>

              <div className="detail-section">
                <h4>Constraints</h4>
                <ul>
                  {selectedOpportunity.constraints.map((constraint) => (
                    <li key={constraint}>{constraint}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section budget-box">
                <div>
                  <span>Expected payout</span>
                  <strong>{selectedOpportunity.payout}</strong>
                </div>
                <div>
                  <span>Estimated effort</span>
                  <strong>{selectedOpportunity.estimate}</strong>
                </div>
                <div>
                  <span>Deadline</span>
                  <strong>{selectedOpportunity.deadline}</strong>
                </div>
              </div>

              <div className="approval-box">
                <strong>Approval needed</strong>
                <p>
                  The agent can prepare the application, but the owner must approve any
                  submission or commitment before the task moves forward.
                </p>
                <button type="button" className="primary-btn compact">
                  Approve application
                </button>
              </div>
            </aside>
          </div>
        </section>

        <section className="boundary-section">
          <div className="section-heading">
            <p className="mini-label">Human-agent boundary</p>
            <h2>The boundary is explicit: the agent does the discovery work, the human keeps the final choice.</h2>
          </div>

          <div className="boundary-grid">
            <div className="boundary-card">
              <h3>Agent can</h3>
              <ul>
                {agentCanDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="boundary-card muted-card">
              <h3>Human must approve</h3>
              <ul>
                {humanNeedsToApprove.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">Ziki Issues. All rights reserved.</footer>
    </div>
  )
}

export default App
