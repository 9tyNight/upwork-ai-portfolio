import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Gauge,
  Github,
  MessageSquareText,
  Rocket,
  Workflow,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "AI Customer Support Chatbot",
    tag: "OpenAI + Lead Capture",
    description:
      "Website assistant that answers FAQs, qualifies leads, routes handoff, and connects support content to useful conversational flows.",
    results: ["24/7 support entry point", "Lead fields + handoff", "Website-ready UI"],
  },
  {
    title: "RAG Document Q&A Dashboard",
    tag: "Knowledge Base AI",
    description:
      "Document search and answer system for PDFs, help docs, SOPs, and internal knowledge with source-aware responses.",
    results: ["Semantic retrieval", "Clean admin dashboard", "Reduced repeated questions"],
  },
  {
    title: "SaaS Operations Dashboard",
    tag: "React + KPI Views",
    description:
      "Scanning-first dashboards for customer ops, revenue signals, workflow queues, and decision-ready metrics.",
    results: ["KPI cards", "Filtered task views", "Executive summaries"],
  },
  {
    title: "Workflow Automation System",
    tag: "Python + APIs",
    description:
      "Automation workflows that move data between tools, trigger notifications, update records, and remove manual busywork.",
    results: ["API integrations", "Repeatable workflows", "Error-aware handoff"],
  },
];

const services = [
  { icon: Bot, label: "AI Chatbots", text: "FAQ bots, customer support assistants, lead capture, and website chat." },
  { icon: BrainCircuit, label: "RAG Systems", text: "Knowledge-base Q&A using your documents, URLs, SOPs, and support content." },
  { icon: Workflow, label: "Automation", text: "Python, APIs, webhooks, Google Sheets, CRM flows, and internal tooling." },
  { icon: Gauge, label: "Dashboards", text: "SaaS, operations, analytics, admin panels, and KPI reporting interfaces." },
];

const stack = ["OpenAI", "Python", "React", "Node.js", "FastAPI", "Supabase", "PostgreSQL", "n8n", "Zapier", "REST APIs"];

function App() {
  return (
    <main>
      <section className="hero">
        <div className="heroContent">
          <div className="profileLine">
            <span className="statusDot" />
            Available for AI automation projects on Upwork
          </div>
          <h1>Zia Danka builds AI tools that save teams hours every week.</h1>
          <p className="heroText">
            I design and build OpenAI chatbots, RAG knowledge bases, workflow automations, and operational dashboards for clients who need useful systems, not demos that stop at the first happy path.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="https://www.upwork.com/freelancers/ziadanka" target="_blank" rel="noreferrer">
              Hire on Upwork <ArrowUpRight size={18} />
            </a>
            <a className="ghostBtn" href="https://github.com/9tyNight" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
        <div className="heroVisual" aria-label="AI chatbot project preview">
          <img src="/upwork-ai-portfolio/ai-chatbot-project-thumbnail.png" alt="AI support chatbot project mockup" />
        </div>
      </section>

      <section className="proofBand" aria-label="Portfolio highlights">
        <div>
          <strong>5+</strong>
          <span>portfolio-ready AI and dashboard projects</span>
        </div>
        <div>
          <strong>3</strong>
          <span>clear delivery packages for chatbot builds</span>
        </div>
        <div>
          <strong>End-to-end</strong>
          <span>from idea, UI, API logic, testing, to handoff</span>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="sectionIntro">
          <span className="eyebrow">Services</span>
          <h2>What clients can hire me for</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="serviceCard" key={service.label}>
                <Icon size={26} />
                <h3>{service.label}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="sectionBlock projectSection">
        <div className="sectionIntro">
          <span className="eyebrow">Selected Work</span>
          <h2>Project proof shaped for buyers</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <span>{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.results.map((result) => (
                  <li key={result}>
                    <CheckCircle2 size={16} /> {result}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div>
          <span className="eyebrow">How I Work</span>
          <h2>Simple process, clean handoff</h2>
        </div>
        <ol>
          <li><span>01</span> Understand your workflow, users, content, and success metric.</li>
          <li><span>02</span> Design the flow, interface, and data/API connections before building.</li>
          <li><span>03</span> Build, test real scenarios, document the setup, and deliver maintainable work.</li>
        </ol>
      </section>

      <section className="stackBand" aria-label="Technology stack">
        {stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="cta">
        <div>
          <MessageSquareText size={30} />
          <h2>Need an AI workflow, chatbot, or dashboard?</h2>
          <p>Send your idea, your current process, and what you want to automate. I will help turn it into a practical build plan.</p>
        </div>
        <div className="ctaActions">
          <a className="primaryBtn" href="https://www.upwork.com/freelancers/ziadanka" target="_blank" rel="noreferrer">
            Start on Upwork <Rocket size={18} />
          </a>
          <a className="ghostBtn" href="https://github.com/9tyNight" target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
