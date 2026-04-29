export default {
  topbar: {
    domain: 'ranger.ac — v2026.04',
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
    languages: ['German (native)', 'English (C1)'],
    para1:
      'Full-stack. .NET & Postgres on the server, Vue or React on the client, and whatever glue the problem needs.',
    para2:
      'Day job at codebeam — open to small / medium side projects on the side. Q2 / Q3 2026 has openings.',
    statusValue: '● open to side projects',
    kv: {
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
    cardStack: 'stack.json',
    headings: {
      title: '# Max',
      howIWork: '## How I work',
      goodAt: "## What I'm good at",
    },
    intro:
      'Software engineer based in Upper Austria. Full-time at codebeam on full-stack product work, taking on a small number of side projects each year.',
    howIWork:
      "Short kickoff call to scope the work. Written brief before any code, so we're aligned on what success looks like. Frequent small commits, demo-able preview deploys when the build calls for it. End-of-engagement hand-off doc with next steps — clients should be able to keep moving without me.",
    goodAt: [
      "Funnelling fuzzy ideas — mine, my team's, my clients' — into specs that survive contact with code.",
      'Designing architecture that holds up when requirements shift mid-build, without over-engineering for hypothetical futures.',
      "Explaining what's actually going on to people who don't write code, to the degree the topic allows.",
    ],
    skillGroups: {
      primary: 'primary',
      fluent: 'also fluent in',
      approach: 'approach',
    },
  },
  projects: {
    sub: '{count} selected',
    peek: {
      project: '// project',
      status: '// status',
      stack: '// stack',
      visit: 'visit {host} →',
      private: '// private — no public URL',
    },
    entries: {
      p1: {
        title: 'Invoice extraction SaaS',
        kind: 'Web app · SaaS',
        desc: 'Reads inboxes, pulls attached and inline invoices, runs OCR + classification, and lands them in a structured archive ready for accounting hand-off. Built and led at codebeam.',
      },
      p2: {
        title: 'Energy insights platform',
        kind: 'Web app · SaaS',
        desc: 'Energy-management and analytics SaaS — metering ingest, dashboards, reporting. Long-running platform work at codebeam.',
      },
      p3: {
        title: 'Sales-talent marketplace',
        kind: 'Web app · Marketplace',
        desc: 'Marketplace for booking sales people on fixed-term engagements — buyer flows, contracts, billing. Delivered at codebeam.',
      },
      p4: {
        title: "max{'@'}ranger.co.at",
        kind: 'Website · Personal',
        desc: 'This site. Single-page portfolio with auto-switching dark/light palette, command palette, custom cursor, and a typed content layer.',
      },
      p5: {
        title: 'Time-tracking suite',
        kind: 'Web app · Internal HR',
        desc: 'Enterprise time-tracking with Austrian collective agreement rules, time-pots, and balanced accounting across complex shift patterns. Built at COUNT IT.',
      },
      p6: {
        title: 'Travel-expense tool',
        kind: 'Web app · Internal tool',
        desc: 'Travel-expense reporting — receipt capture, approvals, payroll export. Built at COUNT IT.',
      },
    },
  },
  services: {
    flowHint:
      '// start anywhere, chain when it makes sense — prior fees credit toward the next step',
    entries: {
      '01': {
        title: 'Consulting & reviews',
        flowLabel: 'consult',
        desc: 'Tech advice, architecture & code review, and concept-to-spec work — an independent set of eyes when you need one.',
        price: 'hourly / daily',
        details:
          'Independent perspective for teams that need one. Tech-stack picks when you are not sure what to build with, architecture review with written follow-ups, code or PR review on a tricky change, or concept-to-spec sessions to map a fuzzy idea into something a developer can actually quote on. Not team-augmentation — I keep these engagements scoped to advisory and review work that fits alongside a day job.',
        included: [
          'Tech-stack & framework recommendations',
          'Architecture review with written notes',
          'Code or PR review on existing repos',
          'Concept-to-spec mapping for new builds',
          'Follow-up doc with concrete next steps',
        ],
        pricing: {
          hourly: 'Hourly — review / consulting',
          daily: 'Daily rate — full days',
        },
        delivery: 'Slots typically booked 1 – 2 weeks ahead',
        continuation:
          'If a consulting engagement leads into a prototype or build, hours spent on concept-to-spec work that maps directly to that project credit toward the follow-up.',
      },
      '02': {
        title: 'Prototyping',
        flowLabel: 'prototype',
        desc: 'Working draft code in days, not months. Realistic enough to validate, scoped to throw away — code shipped to your repo, no hosting included.',
        price: 'fixed-scope',
        details:
          "A working, demo-able product slice in days, not months. Realistic enough to put in front of users, investors, or your own team — scoped tight enough to throw away when you learn something new. The deliverable is working code in your repo (or a zip if you don't have one yet), not a hosted production build — that's a separate engagement.",
        included: [
          'Wireframe + happy-path UX pass',
          'Working draft code — frontend + optional stub backend',
          'Mock or live data, depending on scope',
          'Source hand-off + Loom walkthrough',
          'No production deploy or hosting setup',
        ],
        pricing: {
          spike: '1-day spike',
          week: '1-week prototype',
          twoWeek: '2-week prototype',
        },
        delivery: '1 day – 2 weeks (calendar)',
        continuation:
          'If you continue with a small build afterwards, the prototyping fee credits toward the project — no double-charging for the same work.',
      },
      '03': {
        title: 'Small webapps & websites',
        flowLabel: 'build',
        desc: 'Full-stack builds for marketing sites and small applications — from idea to shipped product.',
        price: 'project-based',
        details:
          "Most builds start with a conversation about what you actually need. I help refine the idea, shape it into a draft or wireframe, build a working prototype, and take it through to a finished product — backend and frontend, deploy, hand-off. The kind of project that doesn't fall over the moment I leave.",
        included: [
          'Concept refinement & wireframing',
          'Database schema & migrations',
          'API in .NET (occasionally Node / TypeScript)',
          'Frontend in Vue or React',
          'CI/CD pipeline + Dockerized deploy',
          'Hand-off docs & on-call window',
        ],
        pricing: {
          marketing: 'Marketing site (1–10 pages)',
          singlePurpose: 'Single-purpose web app',
          saasMvp: 'Small SaaS MVP (multi-user)',
        },
        delivery: 'Side-project pace — typically 4 – 16 weeks from kickoff',
        continuation:
          'Builds usually start with a paid prototyping phase. If we already did a prototype together, that fee credits toward the build — no double-charging for work already done.',
      },
      '04': {
        title: 'Maintenance & retainer',
        flowLabel: 'maintain',
        desc: 'Ongoing code-side support for an existing app or site — bug fixes, dependency updates, small features, deploys.',
        price: 'monthly',
        details:
          'For teams or solo founders who shipped something and need a steady hand keeping it healthy. Predictable monthly hours covering everything on the code side: maintaining the repo, fixing bugs, rolling out releases, small UI adjustments, dependency upgrades, and modest feature work within the hour budget. Code-side only — I will not be answering customer emails about refunds, pricing, or product questions on your behalf.',
        included: [
          'Repo & dependency maintenance',
          'Bug fixes & UI adjustments',
          'Deploys & release roll-outs',
          'Small features within hour budget',
          'Monitoring / log review on request',
          'Code-side only — no customer support',
        ],
        pricing: {
          light: 'Light — 5 h / month',
          standard: 'Standard — 10 h / month',
          heavy: 'Heavy — 20 h / month',
        },
        delivery: 'Rolling monthly — month-to-month, no lock-in',
      },
    },
  },
  experience: {
    entries: {
      codebeam: {
        role: 'Software Developer',
        org: 'codebeam',
        note: 'Full-time, hybrid in Wels. Full-stack product work across the codebeam SaaS portfolio.',
      },
      countItFulltime: {
        role: 'Software Developer',
        org: 'COUNT IT Group',
        note: 'Full-time in Hagenberg. Blazor / .NET enterprise builds for clients — long-running time-tracking and expense systems.',
      },
      countItIntern: {
        role: 'Software Developer (internship)',
        org: 'COUNT IT Group',
        note: 'Five-month internship. Blazor & software architecture focus.',
      },
      fhTutor: {
        role: 'Tutor, Software Development',
        org: 'FH Hagenberg',
        note: 'Tutored software architecture fundamentals to undergraduates.',
      },
    },
  },
  education: {
    entries: {
      fhHagenberg: {
        degree: 'BSc Software Engineering',
        org: 'FH Hagenberg',
        note: 'University of Applied Sciences Upper Austria, Campus Hagenberg.',
      },
      wuVienna: {
        degree: 'Bachelor (transferred out)',
        org: 'WU Vienna',
        note: 'Business Informatics track at the Vienna University of Economics and Business — tried it, decided software was the better fit, transferred to FH Hagenberg.',
      },
      matura: {
        degree: 'Matura',
        org: 'BG/BRG Brucknerstrasse',
        note: 'Linz, Austria.',
      },
    },
  },
  contact: {
    cardHead: 'message.txt',
    big: 'Building something?',
    sub: 'Two-sentence pitch + timeline gets the fastest reply.',
    sendCta: 'send →',
  },
  palette: {
    placeholder: 'type a command…',
    empty: 'no matches',
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
      impressum: { label: 'open imprint', hint: 'legal' },
      privacy: { label: 'open privacy policy', hint: 'legal' },
    },
  },
  serviceDialog: {
    included: '// included',
    pricing: '// pricing',
    delivery: 'delivery',
    continuation: '// continuation',
    rangesNote: 'Ranges are starting points — final scope and quote always agreed in writing.',
    closeHint: 'to close',
    cta: 'start a conversation →',
    inquirySubject: '[{id}] {title} — inquiry',
  },
  status: {
    builtWith: 'built with vue + vite',
    copyright: '© {year} max ranger',
    impressumLink: 'imprint',
    privacyLink: 'privacy',
    sourceLink: 'view source',
  },
  legal: {
    closeHint: 'to close',
    impressum: {
      title: 'Imprint',
      lastUpdated: 'Last updated: {date}',
      providerHead: '// service provider',
      providerBody:
        'Maximilian Ranger\nCharwatstraße 10a\n4600 Wels, Austria',
      contactHead: '// contact',
      contactBody: "Email: max{'@'}ranger.co.at",
      activityHead: '// business activity',
      activityBody:
        'Software development as a side activity — consulting, prototyping, small web builds, and maintenance.',
      regulatoryHead: '// regulatory information',
      regulatoryBody:
        '[GISA / trade-register number, if applicable]\n[Chamber of Commerce membership, if applicable]\nSupervisory authority: Magistrat der Stadt Wels — Bezirksverwaltungsbehörde\nProfessional title: [as per trade licence, or "freelance activity"]',
      odrHead: '// online dispute resolution',
      odrBody: 'European Commission ODR platform: https://ec.europa.eu/odr',
      liabilityHead: '// liability for external links',
      liabilityBody:
        'External links are checked at the time of inclusion. We are not responsible for the current or future content of linked pages — the respective operators are.',
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: {date}',
      controllerHead: '// data controller',
      controllerBody:
        'Maximilian Ranger\nCharwatstraße 10a\n4600 Wels, Austria\nmax{\'@\'}ranger.co.at',
      dataHead: '// what is processed',
      dataBody:
        'This site is largely static and does not collect personal data on its own. If you contact me through the email link, you voluntarily transmit your email address and the contents of your message. This data is used only to handle your inquiry and is deleted once the inquiry is resolved (legal basis: Art. 6(1)(b) GDPR).',
      logsHead: '// server logs',
      logsBody:
        'When the site is loaded, the hosting provider may process technical data (IP address, date/time, user agent) for security purposes. These logs are retained briefly and then deleted.',
      fontsHead: '// fonts',
      fontsBody:
        'The site loads fonts from Google Fonts (https://fonts.google.com). When fonts load, your IP address is transmitted to Google. Legal basis: legitimate interest in a coherent visual presentation (Art. 6(1)(f) GDPR).',
      localStorageHead: '// local storage',
      localStorageBody:
        'The site stores your language preference and theme choice in your browser (localStorage). This data stays on your device and is never transmitted to the server.',
      rightsHead: '// your rights',
      rightsBody:
        'You have the right to access, rectification, erasure, restriction of processing, portability, and objection. Inquiries: max{\'@\'}ranger.co.at',
      authorityHead: '// supervisory authority',
      authorityBody:
        'Datenschutzbehörde Österreich, Barichgasse 40-42, 1030 Vienna — https://www.dsb.gv.at',
    },
  },
};
