import type { Dictionary } from "./pt-BR";

/**
 * English dictionary. Written as native English copy, with its own rhythm and voice.
 */
export const en: Dictionary = {
  langSwitch: {
    ariaLabel: "Select language",
    pt: "PT",
    en: "EN",
  },

  nav: {
    brand: "GUILHERME",
    work: "Work",
    lab: "Lab",
    how: "How I work",
    contact: "Contact",
    cta: "LET'S TALK",
    menuOpen: "Menu",
    menuClose: "Close",
  },

  hero: {
    eyebrow: "GUILHERME / SOFTWARE / AUTOMATION / WEB / AI",
    headlineLines: [
      "HOW MUCH OF",
      "YOUR DAY IS",
      "TAKEN UP",
      "BY ANNOYING",
      "TASKS?",
    ],
    subheadline:
      "Sup! I'm Guilherme and I build systems, automations and tools (and sometimes I dismantle too).",
    ctaPrimary: "SEE WHAT I'VE BUILT",
    ctaSecondary: "SHOW ME THE PROBLEM",
    rotatorPairs: [
      "spreadsheet → system",
      "form → WhatsApp",
      "request → quote",
      "customer asked → reminder sent",
      "missing document → automatic reminder",
    ],
  },

  manifesto: {
    headlineLines: [
      "YOU DO IT",
      "SO OFTEN",
      "YOU STOP",
      "NOTICING",
      "HOW ODD",
      "IT IS.",
    ],
    chainWords: [
      "WhatsApp",
      "spreadsheet",
      "email",
      "copy",
      "paste",
      "check",
      "repeat",
      "search",
      "ask again",
    ],
    closing:
      "That's usually where I like to look. I want to see how the work happens today and find the parts people keep doing simply because that's how it has always been done.",
  },

  work: {
    eyebrow: "SELECTED WORK",
    headlineLines: ["SOME THINGS", "I'VE ALREADY", "PUT TOGETHER."],
    labels: {
      problem: "PROBLEM",
      solution: "SOLUTION",
      build: "WHAT I BUILT",
      tech: "TECH",
    },
    status: {
      production: "IN PRODUCTION",
      beta: "IN BETA",
      betaV2: "BETA V2",
      demo: "CONCEPT DEMO",
    },
    demoDisclaimer: "Demo with sample data.",
    imagePlaceholder: "real screenshot coming soon",
    projects: {
      reliora: {
        category: "AI / FRONT DESK / HEALTHCARE",
        name: "RELIORA",
        headlineLines: [
          "THE MESSAGE COMES IN.",
          "THE FRONT DESK IS BUSY.",
          "NOW WHAT?",
        ],
        description:
          "WhatsApp front desk software for clinics, with AI that can reply, collect details, book appointments and hand conversations to the team when needed.",
        problem:
          "A message comes in while the front desk is helping someone else. By the time someone gets back to WhatsApp, there are new chats, old chats and another patient waiting.",
        solution:
          "The tool answers from the clinic's own information, collects the details it needs, books when it can and hands the conversation to the team when it should.",
        build:
          "A production app with an AI attendance engine, WhatsApp integration and an operations panel for conversations, patients and appointments.",
        imageAlt: "Reliora panel with clinic conversations and appointments",
      },
      accounting: {
        category: "DOCUMENT OPS / ACCOUNTING",
        name: "",
        headlineLines: ["EVERY MONTH,", "ONE DOCUMENT", "GOES MISSING."],
        description:
          "A portal for requesting, receiving and tracking documents from many accounting clients.",
        problem:
          "The request starts in one channel, the file arrives somewhere else and someone has to check what is missing before asking each client again.",
        solution:
          "One place to request documents, receive files and see what has arrived and what is still missing.",
        build:
          "A web system in beta, organized by client and period, with tracking for the document collection flow and a second version of the experience.",
        imageAlt: "Accounting document collection interface",
      },
      fieldQuotes: {
        category: "FIELD OPS / MOBILE",
        name: "",
        headlineLines: ["DOES THE QUOTE", "STILL HAVE TO", "WAIT UNTIL LATER?"],
        description:
          "A field-first quote and proposal flow for people who need to answer customers quickly.",
        problem:
          "Open the old template. Find the price. Replace the items. Fix the formatting. Then send it. A lot of the time, the quote waits until the end of the day.",
        solution:
          "A generator that builds the quote from the selected items and prices and leaves the PDF ready to send.",
        build:
          "A mobile beta for creating standardized quotes and generating the PDF on the spot.",
        imageAlt: "Mobile quote generator for field technicians",
      },
      hotel: {
        category: "REVENUE / HOSPITALITY",
        name: "",
        headlineLines: ["WHEN THE RATE", "CHANGES, WHAT", "DO YOU LOOK AT?"],
        description:
          "A revenue management dashboard that brings together the indicators behind pricing decisions.",
        problem:
          "Occupancy, ADR, lead time, history and seasonality live in different places. When the rate needs to change, the context is scattered.",
        solution:
          "A dashboard that brings the key indicators together so the numbers are easier to read before changing a rate.",
        build:
          "A working demo with sample data, built around hospitality indicators and revenue analysis.",
        imageAlt: "Revenue management dashboard for hospitality",
      },
    },
  },

  beforeAfter: {
    eyebrow: "BEFORE / AFTER",
    headlineTop: "BEFORE",
    headlineAmp: "&",
    headlineBottom: "AFTER",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    beforeSteps: [
      "WhatsApp",
      "spreadsheet",
      "copy",
      "paste",
      "check again",
      "send",
      "forget",
    ],
    afterSteps: ["input", "system", "automation", "follow-up", "done"],
    beforeCaption: "How a lot of operations end up running",
    afterCaption: "When part of the process can handle itself",
    closing:
      "When the system takes care of those steps, the team has more room for the things that actually need a person.",
  },

  whatIBuild: {
    eyebrow: "WHAT I BUILD",
    headlineLines: [
      "ONCE I UNDERSTAND",
      "THE PROBLEM,",
      "IT USUALLY TURNS",
      "INTO ONE OF THESE.",
    ],
    items: [
      {
        title: "SOFTWARE",
        description:
          "Internal systems, dashboards, client areas and tools built around a real operation.",
      },
      {
        title: "AUTOMATION",
        description:
          "Workflows that stop people from typing, checking and chasing the same things over and over.",
      },
      {
        title: "INTEGRATIONS",
        description:
          "When one tool has the information and another needs it, I connect the two.",
      },
      {
        title: "AI",
        description:
          "AI when it actually helps: answering, organizing information, finding things or speeding up a decision.",
      },
    ],
  },

  lab: {
    eyebrow: "LAB",
    headlineLines: ["SOME THINGS", "I BUILD", "JUST BECAUSE."],
    description:
      "Small prototypes, ideas and weird little tools. Some become products. Others disappear and leave something useful for the next one.",
    entries: {
      senna: {
        tag: "WEB / TRIBUTE",
        title: "Ayrton Senna",
        description:
          "A narrative site about the biography and the legacy. Timeline, cars, circuits — I wanted this story on a screen, not in a static article.",
        hrefLabel: "Open the site",
        imageAlt:
          "Ayrton Senna tribute site, with the portrait and career statistics",
      },
    },
    comingSoon: "More things are being built.",
    openExternal: "opens in a new tab",
  },

  diagnosis: {
    headlineLines: [
      "IS THERE A TASK",
      "EVERYONE HERE",
      "HATES DOING",
      "EVERY WEEK?",
    ],
    body: "Maybe it's a spreadsheet, a WhatsApp routine, three browser tabs or a report someone builds every Friday. Show me how it works today. From there, I'll look for what can be simplified, automated or built.",
    cta: "SHOW ME THE PROBLEM",
  },

  howIWork: {
    eyebrow: "HOW I WORK",
    headlineLines: [
      "BEFORE I OPEN",
      "THE EDITOR,",
      "I WANT TO SEE",
      "HOW YOU DO IT.",
    ],
    steps: [
      {
        title: "UNDERSTAND",
        description:
          "You show me the process. I ask questions until I understand where it gets stuck.",
      },
      {
        title: "MODEL",
        description:
          "I put the pieces together, remove what doesn't need to be there and sketch a flow that fits the day-to-day work.",
      },
      {
        title: "BUILD",
        description:
          "I get a first version up early and adjust it as people start using it.",
      },
      {
        title: "DELIVER",
        description:
          "Then comes the part you only discover in real use: fixing the details and making it fit the routine.",
      },
    ],
  },

  stack: {
    eyebrow: "STACK / CAPABILITIES",
    headlineLines: ["A FEW THINGS", "IN MY", "TOOLBOX."],
    note: "React, Next.js, TypeScript, Node.js, React Native, Prisma, PostgreSQL, n8n and whatever else makes sense for the project.",
  },

  finalCta: {
    lineOne: "IS THERE",
    lineTwo: "SOMETHING",
    lineThree: "WASTING YOUR TIME?",
    cta: "SHOW ME",
  },

  footer: {
    madeBy: "Built with ❤️ by me.",
    rights: "Guilherme",
    backToTop: "Back to top",
  },
};
