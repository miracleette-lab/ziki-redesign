# Ziki redesign: Human-in-the-loop opportunity discovery

## Who this is for

This redesign is for a freelancer or agent owner on Ziki who already has work but wants to discover more opportunities without manually reviewing dozens of listings. The user is not asking for a prettier dashboard; they are asking for a workflow that helps them decide which jobs are worth pursuing while keeping the final decision with a human.

## The problem

The existing Ziki experience is strong at showing work, but it does not answer the most important question for an owner who is delegating work via an agent: “What should the agent actually do on its own, and what should I still approve?” In a marketplace context, that turns into a practical problem: the user is flooded with opportunities, most of which are weak matches, and the current interface leaves the person responsible for reading, comparing, ranking, and deciding on each opportunity by hand.

That is the critical gap. The interface is organized, but not agent-aware. It does not show the human which tasks the AI should investigate automatically and which decisions still require permission.

## The decision the user needs to make

The decision is not “Which opportunity is best?” in the abstract. It is: “Which opportunity should my agent be allowed to pursue?”

This matters because the user is balancing several variables at once:

- skill match
- pay-to-effort ratio
- risk of unreliable clients
- time constraints and deadlines
- required availability and expertise
- the user’s current workload

The user needs information that reduces decision fatigue without removing agency.

## Before: existing Ziki experience

The original Ziki landing page communicates the product story clearly: it presents a system for AI agents, approval gates, and human-led workflows. It explains the product vision well, but it does not yet demonstrate a concrete decision flow for a user who wants an agent to discover and evaluate work on their behalf.

![Before screenshot](./before.png)

## The proposed interaction

I kept the same overall Ziki visual language and structure, but redesigned one workflow around the Marketplace Seeker perspective:

- the user gives the agent an objective: “Find QA opportunities that match my skills and availability”
- the agent searches, reads requirements, ranks opportunities, and explains important trade-offs
- the agent surfaces a short, high-quality shortlist instead of a noisy list of everything available
- the human reviews the recommendations and chooses whether to approve the application, reject the opportunity, or ask the agent to investigate further

This turns the interface from a passive job board into an active agent-coordinated workflow.

## Agent-human boundary

The design makes the boundary explicit.

Agent can:
- search for opportunities
- read and compare requirements
- estimate suitability, effort, and risk
- rank opportunities with reasons and constraints
- prepare an application draft

Human must approve:
- submitting the application
- accepting a contract or deadline
- agreeing to a price or scope
- spending money or committing the user’s time

This is the central point of the redesign: the agent removes the repetitive research work, but the human remains the only person allowed to make binding commitments.

## After: redesigned workflow

The redesigned interface keeps the look and feel of Ziki while adding the discovery and approval workflow. The page now includes a clear opportunity-scoring panel, a ranked shortlist, and a visible “approval needed” state that makes the trust boundary obvious.

![After screenshot](./after.png)

## Why this design is better

The benefit is not that the AI is more “smart”; it is that the AI is more appropriately delegated. The user gets a filtered shortlist with useful context instead of having to inspect every listing manually. The agent handles the exploratory work, while the human remains in control of meaningful decisions.

This is stronger than a generic “AI chatbot” because it defines a real workflow with clear boundaries. It shows what the agent does automatically and what the person still decides. That is the heart of human-agent interaction: reducing unnecessary work without removing the human from the important moments.
