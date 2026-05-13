export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  authorBio: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "why-i-left-sales-to-automate-it",
    title: "Why I Left Sales to Automate It",
    category: "Origin Story",
    date: "May 2025",
    readTime: "6 min read",
    excerpt:
      "Four years in SaaS taught me a lot about selling. What I didn't expect was that my biggest takeaway had nothing to do with closing deals.",
    author: "Automation Specialist",
    authorBio:
      "Certified No-Code/Low-Code AI Automation Specialist · Former SDR · Ex-Teacher",
    content: `
    <p>I was a pretty good SDR. I hit my numbers, I knew the product, and I genuinely liked talking to people. But somewhere around year two, I started paying more attention to the work happening <em>around</em> the selling — and what I saw quietly unsettled me.</p>
    <p>Every morning began the same way: open the CRM, manually log yesterday's calls, copy-paste prospect data from one tool to another, update a spreadsheet that three people maintained but no one fully trusted. By the time I actually got to prospecting, a solid chunk of the morning was already gone — consumed not by strategy, not by conversation, but by the unglamorous business of keeping systems in sync.</p>
    <h2>The silent killer no one talks about</h2>
    <p>Nobody puts "data entry" in a job description. But in practice, it was a significant part of the role — and I suspect it was for most of my colleagues too. We just didn't say it out loud, the way you don't complain about a slow commute after you've accepted the job.</p>
    <blockquote>The bottleneck wasn't the pitch. It wasn't the follow-up sequence. It was the invisible tax of manual work that drained energy before the real work even started.</blockquote>
    <p>I started timing myself. How long did it take to research a new account? How many clicks to get a deal from one stage to the next? How much time was spent reconciling data between HubSpot and the spreadsheet that lived in someone's Google Drive? The numbers weren't catastrophic on their own — but they compounded.</p>
    <p>That's when I started Googling things like "how to automate CRM updates" and "no-code workflow tools." Not because I had a plan, but because I was genuinely curious if there was a better way.</p>
    <h2>A different kind of problem-solving</h2>
    <p>I had been a teacher for nine years before moving into SaaS. And teaching, at its core, is about breaking complex things into systems that other people can understand and use. When I started experimenting with tools like Make.com and n8n, that same instinct kicked in — except instead of lesson plans, I was mapping out data flows.</p>
    <p>I built my first automation almost by accident: a basic workflow that automatically logged call outcomes into HubSpot whenever a rep updated a field in our dialer. It worked. It saved maybe forty minutes a week across the team. Small, but the principle was clear — manual, repeatable work is a solvable problem.</p>
    <p>I was hooked.</p>
    <h2>The transition that wasn't dramatic</h2>
    <p>Leaving sales didn't happen in a single bold moment. It was a slow realization that I cared more about the systems enabling the work than the work itself. I invested in certifications, spent weekends building workflows for small businesses, and eventually crossed the threshold where the two paths had to diverge.</p>
    <p>Today, I work as a No-Code/Low-Code AI Automation Specialist — and my clients are often people who remind me of myself two years ago. Smart, capable, spending too much of their day on tasks that shouldn't require a human at all.</p>
    <blockquote>I didn't leave sales. I found a way to give it back the time it was always losing.</blockquote>
    <h2>What I want people to take from this</h2>
    <p>You don't have to be a developer to build systems that work. You don't need to blow up your career to pivot toward something that fits better. And you don't have to accept that friction is just part of the process.</p>
    <p>Most of the businesses I work with aren't broken — they're just leaking time in places they've stopped looking. A workflow here, a missing integration there. The fix is rarely complicated. It just requires someone who's willing to look.</p>
    <p>That's what I do now. And honestly, it's the most useful I've ever felt.</p>
  `,
  },
  {
  id: 2,
  slug: "what-working-at-a-saas-startup-taught-me-about-doing-more-with-less",
  title: "What Working at a SaaS Startup Taught Me About Doing More With Less",
  category: "Lessons Learned",
  date: "May 2025",
  readTime: "5 min read",
  excerpt: "There's something about working at a startup that nobody tells you before you join — you're going to do everything manually, and you're going to do it with a smile.",
  author: "Automation Specialist",
  authorBio: "Certified No-Code/Low-Code AI Automation Specialist · Former SDR · Ex-Teacher",
  content: `
    <p>There's something about working at a startup that nobody tells you before you join — you're going to do everything manually, and you're going to do it with a smile.</p>

    <p>I loved every second of it.</p>

    <p>Working in SaaS tech sales at a startup wasn't just a job. It was a crash course in resourcefulness. No big budget, no dedicated ops team, no fancy automation stack. Just a small, scrappy group of people trying to hit numbers with whatever we had.</p>

    <p>And what we had, mostly, was time — and a lot of manual work to fill it.</p>

    <h2>The Grind Nobody Talks About</h2>

    <p>Our sales process was slow. Not because the team wasn't talented, but because almost everything required a human touch — not by choice, but by necessity. Prospecting lists were built by hand. Follow-up emails were sent one by one. Tracking deal progress meant updating a shared spreadsheet and hoping everyone remembered to do the same.</p>

    <p>It wasn't glamorous. But it taught me exactly where the bottlenecks lived.</p>

    <p>I started noticing patterns. The same repetitive tasks showed up every single day — outreach that took hours, follow-ups that slipped through the cracks, data entry that ate into the time we should have been spending on actual conversations with prospects.</p>

    <h2>The Fire That Started It All</h2>

    <p>That's when something shifted for me. I didn't get frustrated and give up — I got curious.</p>

    <p>If we couldn't afford a full automation stack, could we at least automate the parts that hurt the most? Could we find free or low-cost tools that gave a small startup team the same leverage that bigger companies had?</p>

    <p>I started experimenting. First with simple outreach sequences. Then with automating follow-up reminders. Then with connecting tools that didn't talk to each other so data stopped living in three different places.</p>

    <blockquote>Even shaving an hour a day off manual work felt like hiring an extra team member — one that worked 24/7 and never needed a coffee break.</blockquote>

    <h2>What Startups Actually Need</h2>

    <p>Here's what I learned: startups don't need enterprise-level automation. They need smart, lean workflows that remove the friction from the tasks that happen every single day.</p>

    <p>Most sales reps at startups aren't losing deals because of bad pitches. They're losing time — and sometimes deals — because the process around the selling is slow, disconnected, and still running on manual effort that could easily be replaced.</p>

    <blockquote>You don't need a huge budget to fix that. You need the right tools, the right setup, and someone who understands where the real bottlenecks are.</blockquote>

    <p>That's exactly what lit the fire for me — and it's exactly the problem I now help startups solve.</p>
  `
}
];
