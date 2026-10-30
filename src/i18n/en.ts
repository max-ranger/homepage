export default {
  common: {
    close: 'close',
    themes: { dark: 'dark', light: 'light' },
  },
  topbar: {
    domain: 'ranger.ac',
    paletteTooltip: 'open command palette',
    themeTooltip: 'theme: {theme}',
    languageTooltip: 'language: {lang}',
  },
  sections: {
    about: 'about',
    projects: 'projects',
    services: 'services',
    experience: 'experience',
    education: 'education',
    contact: 'contact',
  },
  hero: {
    titleSuffix: '/ software developer',
    location: 'Wels, Upper Austria · Remote',
    languages: ['German (native)', 'English (C2)'],
    para1:
      'I build web apps from database to screen. .NET and Postgres on the server, Vue in the browser, Flutter on phones.',
    para2: 'I work full-time at CADS and take on small side projects when I have the time.',
    now: "Software Developer {'@'} CADS, since Aug 2026",
    statusValue: '● taking small side projects',
    kv: {
      now: 'now',
      location: 'location',
      status: 'status',
      stack: 'stack',
      languages: 'languages',
      reach: 'reach',
    },
    hint: 'to navigate · or just scroll',
  },
  about: {
    cardReadme: 'readme.md',
    cardPortrait: 'me.webp',
    cardStack: 'stack.json',
    headings: {
      title: '# Max',
      howIWork: '## How I work',
      goodAt: "## What I'm good at",
    },
    intro:
      'Software developer from Upper Austria. I work full-time at CADS. In my free time I build my own products and take on small side projects.',
    howIWork:
      'We start with a short call. Before I write code, I write down what we agreed. You see small, regular commits, and a preview when there is something to show. At the end you get a short document, so you can carry on without me.',
    goodAt: [
      'Turning a vague idea into a spec someone can build from.',
      "Designing systems that survive changing requirements, without building for problems you don't have.",
      "Explaining technical things to people who don't write code.",
    ],
    skillGroups: {
      daily: 'daily',
      also: 'also',
    },
  },
  projects: {
    groups: {
      own: 'my own',
      work: 'at work',
    },
    status: {
      live: 'Live',
      testing: 'In testing',
      building: 'In progress',
      daily: 'Daily use',
    },
    entries: {
      argos: {
        title: 'Argos',
        kind: 'Web app',
        desc: 'Draw Rally Obedience courses on a 30 by 20 m field. Numbering and sign holders follow the ÖKV and FCI rulebooks, and the course is checked as you draw.',
      },
      whk: {
        title: 'WHK website',
        kind: 'Website',
        desc: 'Website of the Welser Hundesportklub, the dog sport club I am active in. People sign up for courses online and get the payment details by mail.',
      },
      pegasus: {
        title: 'Pegasus',
        kind: 'Mobile app',
        desc: 'App for show-jumping riders to record and review tournament courses. The course builder works fully offline.',
      },
      cerberus: {
        title: 'Cerberus',
        kind: 'Web app',
        desc: 'Club software for the Welser Hundesportklub. Members, courses and participants move out of spreadsheets into one place.',
      },
      manticore: {
        title: 'Manticore',
        kind: 'Web app',
        desc: 'Service reports, clients, contracts and time entries for installer and maintenance companies. Documents come in through an LLM import that a person reviews.',
      },
      kitsune: {
        title: 'Kitsune',
        kind: 'Developer tool',
        desc: 'My setup for Claude Code. One conversation shapes a change, then agents build it, review it and open a pull request.',
      },
      invoice: {
        title: 'Invoice extraction SaaS',
        desc: 'Reads inboxes, finds invoices, runs OCR and files them for accounting. I built and led it.',
      },
      energy: {
        title: 'Energy insights platform',
        desc: 'Metering data, dashboards and reports for energy management.',
      },
      marketplace: {
        title: 'Sales-talent marketplace',
        desc: 'Book sales people for a fixed term, with buyer flows, contracts and billing.',
      },
      timeTracking: {
        title: 'Time-tracking suite',
        desc: 'Time tracking under Austrian collective agreements, across complex shift patterns.',
      },
    },
  },
  services: {
    hint: '// side projects only. start anywhere. fees credit toward the next step.',
    from: 'from {price}',
    viewDetails: '{title}: view details',
    units: {
      hour: 'h',
      day: 'd',
      month: 'month',
    },
    entries: {
      '01': {
        title: 'Consulting & reviews',
        desc: 'Tech advice, architecture and code reviews, and turning an idea into a spec. A second opinion when you need one.',
        details:
          'A second opinion for teams that want one. I help pick a tech stack when you are not sure what to build with. I review architecture and write up what I find. I review code or a pull request on a tricky change. I also work with you to turn a vague idea into a spec a developer can quote on. I do not join your team as extra capacity. This work stays advisory, so it fits next to my day job.',
        included: [
          'Tech stack and framework recommendations',
          'Architecture review with written notes',
          'Code or pull request review on existing repos',
          'Turning a concept into a spec for new builds',
          'Follow-up document with concrete next steps',
        ],
        pricing: {
          hourly: 'Hourly, review or consulting',
          daily: 'Daily rate, full days',
        },
        delivery: 'Slots are usually booked 1 to 2 weeks ahead',
        continuation:
          'If consulting leads to a prototype or build, hours spent on the spec for that project credit toward it.',
      },
      '02': {
        title: 'Prototyping',
        desc: 'Working draft code in days. Good enough to test an idea, cheap enough to throw away. No hosting included.',
        details:
          "A working slice of a product that you can demo, in days instead of months. It is real enough to show to users, investors or your own team. It is small enough to throw away when you learn something new. You get working code in your repo, or a zip if you don't have one yet. A hosted production build is a separate job.",
        included: [
          'Wireframe and a UX pass for the happy path',
          'Working draft code: frontend, plus a stub backend if needed',
          'Mock or live data, depending on scope',
          'Source code and a Loom walkthrough',
          'No production deploy or hosting setup',
        ],
        pricing: {
          spike: '1-day spike',
          week: '1-week prototype',
          twoWeek: '2-week prototype',
        },
        delivery: '1 day to 2 weeks (calendar time)',
        continuation:
          "If a small build follows, the prototyping fee credits toward it. You don't pay twice for the same work.",
      },
      '03': {
        title: 'Small web apps & websites',
        desc: 'Marketing sites and small apps, from first idea to live product.',
        details:
          "Most builds start with a talk about what you actually need. I help refine the idea and shape it into a draft or wireframe. Then I build a working prototype and take it to a finished product, with backend, frontend, deploy and handover. It doesn't fall over the moment I leave.",
        included: [
          'Refining the concept, and wireframes',
          'Database schema and migrations',
          'API in .NET, occasionally Node or TypeScript',
          'Frontend in Vue or React',
          'CI/CD pipeline and Docker deploy',
          'Handover docs and an on-call window',
        ],
        pricing: {
          marketing: 'Marketing site (1 to 10 pages)',
          singlePurpose: 'Single-purpose web app',
          saasMvp: 'Small SaaS MVP (multi-user)',
        },
        delivery: 'Side project pace, usually 4 to 16 weeks from kickoff',
        continuation:
          "Builds usually start with a paid prototyping phase. If we already built a prototype together, that fee credits toward the build. You don't pay twice for work already done.",
      },
      '04': {
        title: 'Maintenance',
        desc: 'Bug fixes, dependency updates, small features and deploys for an app you already run.',
        details:
          "For teams or solo founders who shipped something and want it kept healthy. You get predictable monthly hours for everything on the code side. That means the repo, bug fixes, releases, small UI changes, dependency upgrades and modest features within the hour budget. It is code only. I don't answer customer mails about refunds, pricing or product questions for you.",
        included: [
          'Repo and dependency maintenance',
          'Bug fixes and UI adjustments',
          'Deploys and releases',
          'Small features within the hour budget',
          'Monitoring or log review on request',
          'Code only, no customer support',
        ],
        pricing: {
          light: 'Light, 5 h / month',
          standard: 'Standard, 10 h / month',
          heavy: 'Heavy, 20 h / month',
        },
        delivery: 'Rolling monthly, month to month, no lock-in',
      },
    },
  },
  experience: {
    entries: {
      cads: {
        role: 'Software Developer',
        org: 'CADS',
        years: 'Aug 2026 to now',
        yearsShort: '2026 to now',
        note: 'Full-time.',
      },
      codebeam: {
        role: 'Software Developer',
        org: 'codebeam',
        years: 'Jun 2024 to Jun 2026',
        yearsShort: '2024 to 2026',
        note: 'Full-time, hybrid in Wels. Full-stack work on the codebeam SaaS products.',
      },
      countItFulltime: {
        role: 'Software Developer',
        org: 'COUNT IT Group',
        years: 'Oct 2022 to Apr 2024',
        yearsShort: '2022 to 2024',
        note: 'Full-time in Hagenberg. Blazor and .NET systems for clients, mostly time tracking and expenses.',
      },
      countItIntern: {
        role: 'Software Developer (internship)',
        org: 'COUNT IT Group',
        years: 'May 2022 to Sep 2022',
        yearsShort: '2022',
        note: 'Five months, focused on Blazor and software architecture.',
      },
      fhTutor: {
        role: 'Tutor, Software Development',
        org: 'FH Hagenberg',
        years: 'Oct 2019 to Jul 2020',
        yearsShort: '2019 to 2020',
        note: 'Taught software architecture basics to undergraduates.',
      },
    },
  },
  education: {
    entries: {
      fhHagenberg: {
        degree: 'BSc Software Engineering',
        org: 'FH Hagenberg',
        years: '2018 to 2022',
        yearsShort: '2018 to 2022',
        note: 'University of Applied Sciences Upper Austria. My thesis was a code editor plugin for Moodle.',
      },
      wuVienna: {
        degree: 'Bachelor, not finished',
        org: 'WU Vienna',
        years: '2015 to 2018',
        yearsShort: '2015 to 2018',
        note: 'Business Informatics. I tried it, decided software was the better fit and moved to Hagenberg.',
      },
      matura: {
        degree: 'Matura',
        org: 'BG/BRG Brucknerstrasse',
        years: '2006 to 2014',
        yearsShort: '2006 to 2014',
        note: 'Wels, Austria.',
      },
    },
  },
  contact: {
    cardHead: 'message.txt',
    big: 'Building something?',
    sub: 'Two sentences and a rough timeline get the fastest reply.',
    sendCta: 'send →',
  },
  palette: {
    placeholder: 'type a command…',
    empty: 'no matches',
    selectHint: 'to select',
    closeHint: 'to close',
    groups: { nav: 'nav', sys: 'sys' },
    items: {
      about: { label: 'cd ~/about', hint: 'about' },
      projects: { label: 'cd ~/projects', hint: 'selected work' },
      services: { label: 'cd ~/services', hint: 'what I offer' },
      experience: { label: 'cd ~/experience', hint: 'work history' },
      education: { label: 'cd ~/education', hint: 'studies' },
      contact: { label: 'cd ~/contact', hint: 'get in touch' },
      theme: { label: 'theme toggle' },
      language: { label: 'language toggle' },
      mailto: { label: 'mailto: max' },
      legal: { label: 'open legal notice', hint: 'imprint · privacy · copyright' },
    },
  },
  serviceDialog: {
    included: '// included',
    pricing: '// pricing',
    delivery: 'delivery',
    continuation: '// continuation',
    rangesNote: 'Ranges are starting points. Final scope and quote are always agreed in writing.',
    closeHint: 'to close',
    cta: 'start a conversation →',
    inquirySubject: '[{id}] {title}: inquiry',
  },
  status: {
    shippedWith: 'shipped with zero',
    copyright: '© {year} Maximilian Ranger',
    copyrightSuffix: 'All rights reserved.',
    legalLink: 'legal notice',
    sourceLink: 'view source',
  },
  legal: {
    closeHint: 'to close',
    notice: {
      title: 'Legal Notice',

      imprintHead: '// imprint',
      imprintIntroHead: 'Information according to law',
      imprintIntroBody:
        'Maximilian Ranger\nSoftware development\nCharwatstraße 10a\n4600 Wels, Austria',
      imprintObligation:
        'Information obligation according to §5 E-Commerce Act, §14 Corporate Code, and disclosure obligation according to §25 Media Act.',
      imprintContactHead: 'Contact',
      imprintContactBody: "max{'@'}ranger.ac",

      copyrightHead: '// copyright notice',
      copyrightBody:
        "All content on this website, including text, images, graphics and designs, is protected by copyright and is the property of Maximilian Ranger unless otherwise indicated. Any use, reproduction or distribution without express written permission is prohibited. For inquiries regarding the use of content, please contact: max{'@'}ranger.ac.",

      privacyHead: '// privacy & data protection',
      privacyBody:
        "This site is largely static. If you reach out via the email link, your message and email address are processed only to handle the inquiry (Art. 6(1)(b) GDPR). The hosting provider may briefly log technical request data (IP, time, user agent) for security. Theme and language preferences are stored in your browser's localStorage and never transmitted. You have the right to access, rectification, erasure, and complaint to the Datenschutzbehörde Österreich (https://www.dsb.gv.at).",

      liabilityHead: '// liability for external links',
      liabilityBody:
        'External links are checked at the time of inclusion. I am not responsible for the current or future content of linked pages. The respective operators are.',

      attributionHead: '// attributions',
      attributionZero:
        'The Zero logo is a brand mark of shipzero, used here with appreciation. This site is shipped with Zero:',
    },
  },
};
