
import { Layout } from "@/components/Layout";
import { SmokeBackground } from "@/components/SmokeBackground";
import kristinePhoto from "@/assets/kristine.png";
import heroBg from "@/assets/hero-bg.png";
import asanaCrm from "@/assets/work/asana-crm.png";
import leadEnrich from "@/assets/work/lead-enrichment.png";
import financialReporting from "@/assets/work/financial-reporting.png";
import aiAppointment from "@/assets/work/ai-appointment.png";
import aiJobScraper from "@/assets/work/ai-job-scraper.png";
import fbAutoresponder from "@/assets/work/fb-autoresponder.png";
import reelsShorts from "@/assets/work/reels-shorts.png";
import omnichannel from "@/assets/work/omnichannel.png";
import ragDemo from "@/assets/work/rag-demo.png";
import techFallback from "@/assets/tech-fallback.png";
import logoMake from "@/assets/tech/make.png";
import logoAirtable from "@/assets/tech/airtable.png";
import logoCanva from "@/assets/tech/canva.jpeg";
import logoAdobe from "@/assets/tech/adobe.png";
import logoSalesforce from "@/assets/tech/salesforce.png";
import logoSlack from "@/assets/tech/slack.png";
import logoSalesNav from "@/assets/tech/sales-navigator.jpeg";
import logoSeamless from "@/assets/tech/seamless.png";
import logoZoominfo from "@/assets/tech/zoominfo.png";
import logoApollo from "@/assets/tech/apollo.png";
import logoClaude from "@/assets/tech/claude.png";
import logoElevenLabs from "@/assets/tech/elevenlabs.png";
import logoGithub from "@/assets/tech/github.png";
import logoGrok from "@/assets/tech/grok.png";
import logoLovable from "@/assets/tech/lovable.png";
import logoOpenAI from "@/assets/tech/openai.png";
import logoRender from "@/assets/tech/render.png";
import logoWordpress from "@/assets/tech/wordpress.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  ArrowRight, Bot, Target, Sparkles, Workflow, Zap, Users,
  Megaphone, Palette, Database, BrainCircuit, Briefcase,
  Mail, Phone, MapPin, Linkedin, Send, Quote, Star, Compass,
  Plus, Minus,
} from "lucide-react";
import { useState } from "react";


const exploreItems = [
  { href: "#services", label: "Services", icon: Workflow, desc: "What I build & deliver" },
  { href: "#experience", label: "Experience", icon: Briefcase, desc: "13 years of journey" },
  { href: "#work", label: "Work", icon: Sparkles, desc: "Selected automations" },
  { href: "#testimonials", label: "Testimonials", icon: Quote, desc: "Words from clients" },
  { href: "#contact", label: "Contact", icon: Mail, desc: "Let's start a project" },
];

const services = [
  { icon: Workflow, title: "No-Code/Low-Code Automation", desc: "End-to-end workflow automations across marketing, ops, and customer support using Make.com, n8n, and Zapier." },
  { icon: BrainCircuit, title: "AI Workflow Engineering", desc: "LLM-powered agents for content creation, sentiment analysis, appointment setting, and inbound auto-response." },
  { icon: Database, title: "API Integrations", desc: "Webhook-driven integrations that synchronize data across disparate platforms — eliminating manual silos." },
  { icon: Target, title: "B2B SaaS Sales Development", desc: "Full B2B sales cycle: prospecting, qualification, multi-channel outreach, and CRM hygiene." },
  { icon: Megaphone, title: "Strategic Marketing", desc: "Content strategy, social media management, and research-backed copywriting that ranks and converts." },
  { icon: Palette, title: "Creative & Brand Production", desc: "Visual assets, magazine covers, video editing, and marketing collateral with Canva, Adobe, and DaVinci Resolve." },
  { icon: Bot, title: "AI Content Repurposing", desc: "Single-source content transformed into SEO blogs and auto-posted across LinkedIn and Instagram." },
  { icon: Zap, title: "Sales + Marketing Ops Glue", desc: "CRM systems, lead-qualification logic, and reporting pipelines that bridge GTM teams." },
];

const jobs = const jobs = [
  { role: "Automation Fellow", company: "Technical Virtual Assistants", period: "April 2026 – Present",
    bullets: [
      "Designed and deployed 15+ end-to-end workflow automations across marketing, operations, and customer support using Make.com, n8n, and Zapier.",
      "Engineered AI-driven workflows leveraging LLMs to automate content drafting, sentiment analysis, and data processing — increasing production velocity by 5x.",
    ] },
  { role: "SaaS Sales Development Representative", company: "Soundtrace", period: "April 2022 – April 2026 (4 years)",
    bullets: [
      "Orchestrated the complete B2B full-sales funnel from cold prospecting to deal closure using ZoomInfo, LinkedIn Sales Navigator, Apollo, and Seamless.AI.",
      "Maintained 100% CRM accuracy in Salesforce and HubSpot while shortening the lead-to-demo window by 50%.",
    ] },
  { role: "Marketing & Creative Tech Specialist", company: "Soundtrace (concurrent with SDR role)", period: "April 2022 – April 2026 (4 years)",
    bullets: [
      "Managed end-to-end social media presence producing 400+ high-engagement visual assets monthly and authored 25+ research-driven blogs earning first-page SEO rankings.",
      "Reduced content turnaround time by 30% via AI-assisted drafting and templated design workflows.",
    ] },
  { role: "Business Development Fellow", company: "HopOn! Tech Sales (San Francisco, CA)", period: "February 2022 – April 2022",
    bullets: [
      "Selected as one of the top 1% of applicants for a high-intensity SaaS Business Development Fellowship.",
      "Exceeded sales metrics and quotas by 120% via cold calling, video prospecting, and social selling.",
    ] },
  { role: "Professional Educator (JHS / SHS)", company: "Tagumpay JHS & Kasiglahan Village SHS", period: "May 2013 – December 2021 (9 years)",
    bullets: [
      "Delivered high-impact instruction and curriculum development for Junior and Senior High School levels.",
      "Managed data and administrative tools for 1,200+ students across 9 years of classroom leadership.",
    ] },
];
];

const projects = [
  { title: "Sales & CRM Optimization", tag: "Zapier", desc: "Asana-based CRM with automated lead qualification — turning a project tool into a pipeline engine.", image: asanaCrm },
  { title: "Automated Lead Enrichment & Qualification", tag: "Zapier + Apollo", desc: "Inbound leads from Youform are auto-enriched via Apollo, scored as High/Low priority, routed to Sheets/Slack/Gmail with AI-drafted outreach.", image: leadEnrich },
  { title: "Financial Reporting Pipeline", tag: "Make.com", desc: "Asana × Xero integration that pushes completed tasks and transactions into Sheets for real-time financial visibility.", image: financialReporting },
  { title: "AI Inbound Appointment Setter", tag: "n8n", desc: "Voice-AI receptionist that checks calendar availability, books meetings, and logs every call to Airtable 24/7.", image: aiAppointment },
  { title: "AI Jobs Scraper + Resume Builder", tag: "n8n", desc: "Slack-triggered agent that scrapes job descriptions, tailors a custom resume from a template, and emails the polished draft back.", image: aiJobScraper },
  { title: "Facebook Page Auto-Responder", tag: "n8n + LLM", desc: "Context-aware AI agent powered by Gemini that handles inbound DMs with on-brand replies via webhook.", image: fbAutoresponder },
  { title: "Automated Reels & Shorts Pipeline", tag: "n8n", desc: "Vertex AI generates ASMR videos on schedule and auto-publishes to Facebook Reels and YouTube Shorts.", image: reelsShorts },
  { title: "Omnichannel Content Repurposing", tag: "Make.com + Gmail", desc: "Email attachments analyzed by AI, renamed, archived to Drive, logged in Sheets, and notifications sent automatically.", image: omnichannel },
  { title: "RAG Knowledge Base Agent", tag: "n8n + Supabase", desc: "Drive-synced vector store powering a Gemini-backed AI agent that answers from your private knowledge base in real time.", image: ragDemo },
{ 
    title: "Audiogram Data Extraction Automation", 
    tag: "Make.com + Gemini AI", 
    desc: "AI-driven workflow that monitors Gmail for audiogram PDFs, extracts patient data via OCR and Google Gemini, and logs it instantly into Google Sheets — zero manual entry.", 
    image: techFallback,
    videoUrl: "https://www.youtube.com/embed/HV-Tn0BBasY"
  },
];

const testimonials = [
  { quote: "Working with Kristine has been an absolute joy. Her creativity is matched only by her resourcefulness and her incredible ability to pivot whenever needed. She has this intuitive understanding of our business goals and branding, ensuring that everything she creates feels both beautiful and intentional. The sheer quality and professionalism of her work speak for themselves, but it’s her dedicated spirit that makes her truly irreplaceable.", role: "Soundtrace CEO" },
  { quote: "It was a pleasure having the opportunity to work alongside Kristine. The true value of a working partner isn't so much what they do, although that is important, but it's more about who they are. She proved to be an honest, thoughtful, creative, and hard-working person. I am grateful for that.", name: "Chad Johnson", role: "VP of Sales" },
  { quote: "Wonderful doesn't even begin to cover it—Kristine was a cornerstone of our team's success. She is one of those rare colleagues you can always count on, no matter the deadline. Her drive and timeliness are matched only by her kindness and organizational spirit. She tackled every challenge with a tenacious attitude that was truly inspiring to witness. She doesn't just get the job done; she cares deeply about the quality of the work. I'd jump at the chance to collaborate with her again in the future!", name: "Sabrina Kumar", role: "Account Executive" },
];

const techStack = [
  { name: "Make.com", logo: logoMake },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/FF4A00" },
  { name: "OpenAI", logo: logoOpenAI },
  { name: "Claude", logo: logoClaude },
  { name: "Grok", logo: logoGrok },
  { name: "Google Gemini", logo: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
  { name: "Vertex AI", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { name: "ElevenLabs", logo: logoElevenLabs },
  { name: "Lovable", logo: logoLovable },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3FCF8E" },
  { name: "GitHub", logo: logoGithub },
  { name: "Render", logo: logoRender },
  { name: "WordPress", logo: logoWordpress },
  { name: "Salesforce", logo: logoSalesforce },
  { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59" },
  { name: "Apollo.io", logo: logoApollo },
  { name: "ZoomInfo", logo: logoZoominfo },
  { name: "LinkedIn Sales Nav", logo: logoSalesNav },
  { name: "Seamless.AI", logo: logoSeamless },
  { name: "Asana", logo: "https://cdn.simpleicons.org/asana/F06A6A" },
  { name: "Slack", logo: logoSlack },
  { name: "Gmail", logo: "https://cdn.simpleicons.org/gmail/EA4335" },
  { name: "Google Sheets", logo: "https://cdn.simpleicons.org/googlesheets/34A853" },
  { name: "Google Drive", logo: "https://cdn.simpleicons.org/googledrive/4285F4" },
  { name: "Xero", logo: "https://cdn.simpleicons.org/xero/13B5EA" },
  { name: "Airtable", logo: logoAirtable },
  { name: "Canva", logo: logoCanva },
  { name: "Adobe", logo: logoAdobe },
  { name: "DaVinci Resolve", logo: "https://cdn.simpleicons.org/davinciresolve/233A51" },
  { name: "Facebook", logo: "https://cdn.simpleicons.org/facebook/1877F2" },
  { name: "Instagram", logo: "https://cdn.simpleicons.org/instagram/E4405F" },
  { name: "YouTube", logo: "https://cdn.simpleicons.org/youtube/FF0000" },
];

// Calendly URL — update to your actual scheduling link
const CALENDLY_URL = "https://calendly.com/krisdigitalvibe/30min";

function Index() {
  const [sent, setSent] = useState(false);
  const [openService, setOpenService] = useState<number | null>(0);
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <Layout>
      {/* HERO with Explore header */}
      <section className="relative overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="grid grid-cols-[1.3fr_1fr] gap-4 sm:gap-8 md:gap-12 items-center">
            <div>
              {/* Explore header strip */}
              <div id="explore" className="mb-8">
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                  <Compass className="h-4 w-4" /> Explore
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {exploreItems.map((e) => (
                    <a
                      key={e.href}
                      href={e.href}
                      className="group inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur border border-border/60 shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all text-sm font-semibold px-[11px] py-[4px]"
                    >
                      <e.icon className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                      {e.label}
                    </a>
                  ))}
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                I'm <span className="text-gradient-warm">Kristine De Vera,</span><br />
                Certified No-Code/<br />
                Low-Code AI <br />
                Automation Specialist.
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-8">
                A multidisciplinary professional with 9 years of experience in secondary education and 4 years in high-growth B2B SaaS start-up company in the US as an SDR. Transitioned into technical automation after identifying manual workflows as a primary barrier to organizational productivity. Now a Certified No-Code/Low-Code AI Automation Specialist and Top 1% Trained SaaS Tech SDR, specializing in the design and implementation of scalable integrations that allow businesses to automate tedious tasks and focus on high-value strategy.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-warm blur-3xl opacity-50 rounded-full" />
                <div className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-[22rem] md:w-[22rem] lg:h-[26rem] lg:w-[26rem] rounded-full bg-gradient-warm p-2 shadow-glow">
                  <img
                    src={kristinePhoto}
                    alt="Kristine De Vera"
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 backdrop-blur text-xs font-semibold text-foreground text-center">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Automation Fellow • SDR • Marketing Specialist
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="#work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
                  See my work <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setBookOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Users className="h-4 w-4" /> Book a call
                </button>
              </div>
              <div className="flex items-center justify-center gap-3 mt-1">
                <a
                  href="mailto:krisdigitalvibe@gmail.com"
                  aria-label="Email"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur text-foreground hover:bg-gradient-warm hover:text-primary-foreground hover:border-transparent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="tel:+639507095404"
                  aria-label="Phone"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur text-foreground hover:bg-gradient-warm hover:text-primary-foreground hover:border-transparent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kristine-d-58a676213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur text-foreground hover:bg-gradient-warm hover:text-primary-foreground hover:border-transparent transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated smoke background wraps everything below the hero */}
      <div className="relative">
        <SmokeBackground />

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ n: "13+", l: "Years experience" },{ n: "30%", l: "Pipeline growth" },{ n: "100%", l: "CRM accuracy" },{ n: "100+", l: "Tech Tools Used" }].map((s) => (
            <div key={s.l} className="bg-card rounded-2xl p-6 shadow-soft border border-border/60 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-warm font-display">{s.n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — icon + title; click to expand */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Services</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How I can help</h2>
          <p className="text-muted-foreground">Tap any service to read the details.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s, i) => {
            const open = openService === i;
            return (
              <div key={s.title} className="rounded-3xl bg-card border border-border/60 shadow-soft overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenService(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/40 transition-colors"
                >
                  <div className={`h-12 w-12 shrink-0 rounded-2xl flex items-center justify-center ${i % 2 ? "bg-gradient-cool" : "bg-gradient-warm"}`}>
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="flex-1 text-base md:text-lg font-bold">{s.title}</h3>
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TECH STACK — auto-scrolling marquee */}
      <section id="stack" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Tech Stack</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tools I work with</h2>
          <p className="text-muted-foreground">A continuous look at the platforms powering my workflows.</p>
        </div>
        {(() => {
          const half = Math.ceil(techStack.length / 2);
          const row1 = techStack.slice(0, half);
          const row2 = techStack.slice(half);
          const renderItem = (t: typeof techStack[number], idx: number) => (
            <div
              key={`${t.name}-${idx}`}
              className="shrink-0 w-40 bg-background rounded-2xl border border-border/60 p-5 text-center hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <div className="mx-auto h-14 w-14 rounded-xl bg-muted flex items-center justify-center mb-3 p-2">
                <img
                  src={t.logo}
                  alt={t.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src !== window.location.origin + techFallback && !img.src.endsWith(techFallback)) {
                      img.src = techFallback;
                    }
                  }}
                />
              </div>
              <div className="font-bold text-sm">{t.name}</div>
            </div>
          );
          return (
            <div
              className="relative bg-card border border-border/60 rounded-3xl shadow-soft p-6 md:p-10 overflow-hidden space-y-6"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              }}
            >
              <div className="flex w-max animate-marquee gap-4">
                {[...row1, ...row1].map(renderItem)}
              </div>
              <div className="flex w-max animate-marquee-reverse gap-4">
                {[...row2, ...row2].map(renderItem)}
              </div>
            </div>
          );
        })()}
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Experience</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">A 13-year journey</h2>
          <p className="text-muted-foreground">From the classroom to the SaaS pipeline to autonomous AI workflows.</p>
        </div>
        <div className="relative border-l-2 border-dashed border-primary/30 pl-8 space-y-10">
          {jobs.map((j) => (
            <div key={j.role + j.company} className="relative">
              <div className="absolute -left-[42px] top-1 h-10 w-10 rounded-full bg-gradient-warm flex items-center justify-center shadow-soft">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="bg-card rounded-2xl border border-border/60 p-6 shadow-soft">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold">{j.role}</h3>
                  <span className="text-xs font-semibold text-muted-foreground">{j.period}</span>
                </div>
                <div className="text-primary font-semibold mb-3">{j.company}</div>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {j.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><span className="text-accent mt-1">▸</span>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Selected Work</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Automations that ship</h2>
          <p className="text-muted-foreground">A sample of projects spanning sales ops, finance, AI agents, and content distribution.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-3xl overflow-hidden bg-card border border-border/60 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all flex flex-col">
  {'videoUrl' in p && p.videoUrl ? (
    <div className="relative w-full overflow-hidden bg-muted" style={{paddingBottom:'56.25%'}}>
      <iframe
        src={(p as any).videoUrl}
        title={p.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-semibold text-primary">{p.tag}</div>
    </div>
  ) : (
    <div className="relative h-48 overflow-hidden bg-muted">
      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-semibold text-primary">{p.tag}</div>
    </div>
  )}
  <div className="p-6 flex-1">
    <h3 className="text-lg font-bold mb-2">{p.title}</h3>
    <p className="text-sm text-muted-foreground">{p.desc}</p>
  </div>
</article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Kind words</h2>
          <p className="text-muted-foreground">From the people I've built things with.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure key={t.quote} className="relative bg-card rounded-3xl border border-border/60 p-8 shadow-soft">
              <Quote className="absolute -top-4 left-6 h-10 w-10 text-accent bg-background rounded-full p-2 border border-border/60" />
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-5">"{t.quote}"</blockquote>
              <figcaption>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Contact</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's build something</h2>
          <p className="text-muted-foreground">Tell me about the workflow you want to automate, the pipeline you want to grow, or the brand you want to scale.</p>
        </div>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "krisdigitalvibe@gmail.com", href: "mailto:krisdigitalvibe@gmail.com" },
              { icon: Phone, label: "Phone", value: "+63-950-709-5404", href: "tel:+639507095404" },
              { icon: MapPin, label: "Location", value: "Rizal, Calabarzon, PH", href: "#" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kristine-d-58a676213", href: "https://www.linkedin.com/in/kristine-d-58a676213/" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-start gap-4 bg-card rounded-2xl border border-border/60 p-5 shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all">
                <div className="h-11 w-11 rounded-xl bg-gradient-warm flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.label}</div>
                  <div className="font-medium break-all">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card rounded-3xl border border-border/60 p-8 shadow-soft space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold mb-1 block">Name</label>
                <input required className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm font-semibold mb-1 block">Email</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors" placeholder="jane@company.com" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold mb-1 block">Subject</label>
              <input className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors" placeholder="Automation project" />
            </div>
            <div>
              <label className="text-sm font-semibold mb-1 block">Message</label>
              <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-all">
              <Send className="h-4 w-4" /> Send message
            </button>
            {sent && <p className="text-sm text-primary text-center font-semibold">Thanks! I'll be in touch soon.</p>}
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="rounded-3xl bg-gradient-hero p-10 md:p-16 text-center shadow-glow">
          <Zap className="h-10 w-10 text-primary-foreground mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Ready to automate the boring parts?</h2>
          <p className="text-primary-foreground/90 max-w-xl mx-auto mb-6">Let's design workflows that win back hours and unlock revenue.</p>
          <button
            type="button"
            onClick={() => setBookOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card text-foreground font-semibold hover:scale-105 transition-transform"
          >
            <Users className="h-4 w-4" /> Book a call
          </button>
        </div>
      </section>
      </div>

      {/* Book a call modal — Calendly embed */}
      <Dialog open={bookOpen} onOpenChange={setBookOpen}>
        <DialogContent className="max-w-4xl w-[95vw] h-[80vh] p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-5 pb-3 border-b border-border">
            <DialogTitle>Book a 30-minute discovery call</DialogTitle>
          </DialogHeader>
          <iframe
            src={CALENDLY_URL}
            title="Schedule a call with Kristine"
            className="w-full h-full border-0"
            allow="camera; microphone; fullscreen"
          />
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

export default Index;
