export default {
  topbar: {
    domain: 'ranger.ac — v2026.04',
    paletteTooltip: 'Befehlspalette öffnen',
    themeTooltip: 'Thema: {theme}',
    languageTooltip: 'Sprache: {lang}',
  },
  sections: {
    about: 'über',
    projects: 'projekte',
    services: 'leistungen',
    experience: 'erfahrung',
    education: 'ausbildung',
    contact: 'kontakt',
  },
  hero: {
    titleSuffix: '/ Softwareentwickler',
    location: 'Wels, Oberösterreich · Remote',
    languages: ['Deutsch (Muttersprache)', 'Englisch (C1)'],
    para1:
      'Full-Stack. .NET & Postgres am Server, Vue oder React am Client, und der Klebstoff, den das Problem braucht.',
    para2:
      'Hauptberuflich bei codebeam — daneben offen für kleinere und mittlere Nebenprojekte. Im Q2 / Q3 2026 sind Plätze frei.',
    statusValue: '● offen für Nebenprojekte',
    kv: {
      location: 'standort',
      status: 'status',
      stack: 'stack',
      languages: 'sprachen',
      reach: 'kontakt',
    },
    hint: 'zum Navigieren · oder einfach scrollen',
  },
  about: {
    cardReadme: 'readme.md',
    cardStack: 'stack.json',
    headings: {
      title: '# Max',
      howIWork: '## Wie ich arbeite',
      goodAt: '## Worin ich gut bin',
    },
    intro:
      'Softwareentwickler aus Oberösterreich. Hauptberuflich bei codebeam in der Full-Stack Produktentwicklung, mit ein paar Nebenprojekten pro Jahr.',
    howIWork:
      'Kurzes Kickoff-Gespräch zur Scope-Klärung. Schriftliches Briefing, bevor Code geschrieben wird — damit wir einig sind, wie Erfolg aussieht. Häufige kleine Commits, demo-fähige Preview-Deploys, wenn das Projekt es verlangt. Abschluss-Dokument mit nächsten Schritten — Kund:innen sollen auch ohne mich weiterarbeiten können.',
    goodAt: [
      'Unscharfe Ideen — meine, die meines Teams, die meiner Kunden — in Spezifikationen kanalisieren, die den Sprung in den Code überleben.',
      'Architektur entwerfen, die hält, wenn sich Anforderungen mitten im Bauprozess ändern — ohne für hypothetische Zukünfte vorzeitig zu komplizieren.',
      'Erklären, was wirklich passiert, an Leute, die keinen Code schreiben — soweit das Thema es zulässt.',
    ],
    skillGroups: {
      primary: 'haupt-stack',
      fluent: 'auch sicher in',
      approach: 'arbeitsweise',
    },
  },
  projects: {
    sub: '{count} ausgewählt',
    peek: {
      project: '// projekt',
      status: '// status',
      stack: '// stack',
      visit: '{host} öffnen →',
      private: '// intern — keine öffentliche URL',
    },
    entries: {
      p1: {
        title: 'Rechnungs-Extraktion (SaaS)',
        kind: 'Web-App · SaaS',
        desc: 'Liest Postfächer aus, holt eingebettete und angehängte Rechnungen, jagt sie durch OCR + Kategorisierung und legt sie strukturiert für die Buchhaltung ab. Bei codebeam aufgebaut und geleitet.',
      },
      p2: {
        title: 'Energie-Insights-Plattform',
        kind: 'Web-App · SaaS',
        desc: 'Energiemanagement- und Analytics-SaaS — Zählerdaten, Dashboards, Reporting. Lange laufende Plattformarbeit bei codebeam.',
      },
      p3: {
        title: 'Sales-Talente-Marktplatz',
        kind: 'Web-App · Marktplatz',
        desc: 'Marktplatz, um Vertriebsleute auf Zeit zu buchen — Käuferflows, Verträge, Abrechnung. Bei codebeam ausgeliefert.',
      },
      p4: {
        title: "max{'@'}ranger.co.at",
        kind: 'Website · Privat',
        desc: 'Diese Seite. Single-Page-Portfolio mit automatischem Hell/Dunkel-Wechsel, Befehlspalette, Custom Cursor und typisierter Inhalts-Schicht.',
      },
      p5: {
        title: 'Zeiterfassungs-Suite',
        kind: 'Web-App · Internes HR',
        desc: 'Enterprise-Zeiterfassung mit österreichischen KV-Regeln, Zeittöpfen und ausbalancierten Zeitsalden über komplexe Schichtmuster. Bei COUNT IT gebaut.',
      },
      p6: {
        title: 'Reisekosten-Tool',
        kind: 'Web-App · Internes Tool',
        desc: 'Reisekosten-Erfassung — Beleg-Upload, Freigaben, Lohnverrechnungs-Export. Bei COUNT IT gebaut.',
      },
    },
  },
  services: {
    flowHint:
      '// einsteigen, wo es passt, und dranhängen, wenn sinnvoll — bezahlte Vorleistungen werden auf den nächsten Schritt angerechnet',
    entries: {
      '01': {
        title: 'Beratung & Reviews',
        flowLabel: 'beraten',
        desc: 'Tech-Beratung, Architektur- & Code-Review, Konzept-bis-Spec — eine unabhängige zweite Meinung, wenn Sie eine brauchen.',
        price: 'stunden- / tageweise',
        details:
          'Unabhängige Perspektive für Teams, die eine brauchen. Stack-Wahl, wenn Sie unsicher sind, womit Sie bauen sollen. Architektur-Reviews mit schriftlichen Empfehlungen, Code- oder PR-Review bei kniffligen Änderungen, oder Konzept-bis-Spec-Sessions, um eine unscharfe Idee in etwas Quotable zu bringen. Keine Team-Aufstockung — ich halte die Engagements im Beratungs- und Review-Bereich, der neben einem Hauptjob Platz hat.',
        included: [
          'Stack- & Framework-Empfehlungen',
          'Architektur-Review mit schriftlichen Notizen',
          'Code- oder PR-Review in bestehenden Repos',
          'Konzept-bis-Spec für neue Builds',
          'Folgedokument mit konkreten nächsten Schritten',
        ],
        pricing: {
          hourly: 'Stundensatz — Review / Beratung',
          daily: 'Tagessatz — ganze Tage',
        },
        delivery: 'Termine üblicherweise 1 – 2 Wochen im Voraus',
        continuation:
          'Wenn aus einer Beratung ein Prototyp oder Build wird, werden Stunden für Konzept-bis-Spec-Arbeit, die direkt in das Projekt einfließt, auf den Folgeauftrag angerechnet.',
      },
      '02': {
        title: 'Prototyping',
        flowLabel: 'prototypen',
        desc: 'Funktionierender Code-Entwurf in Tagen, nicht Monaten. Realistisch genug zum Validieren, knapp genug zum Wegwerfen — Code in Ihr Repo, kein Hosting inkludiert.',
        price: 'fixer Umfang',
        details:
          'Ein lauffähiger, demo-fähiger Produktauschnitt in Tagen, nicht Monaten. Realistisch genug, um Nutzer:innen, Investoren oder dem eigenen Team gezeigt zu werden — gleichzeitig knapp genug zum Wegwerfen, wenn Sie etwas Neues lernen. Das Liefergut ist lauffähiger Code in Ihrem Repo (oder als Zip, falls noch keines existiert), kein gehosteter Production-Build — das ist eine separate Beauftragung.',
        included: [
          'Wireframe + UX für den Happy Path',
          'Lauffähiger Entwurfs-Code — Frontend + optional Stub-Backend',
          'Mock- oder Live-Daten, je nach Umfang',
          'Source-Übergabe + Loom-Walkthrough',
          'Kein Production-Deploy, kein Hosting-Setup',
        ],
        pricing: {
          spike: '1-Tages-Spike',
          week: '1-Wochen-Prototyp',
          twoWeek: '2-Wochen-Prototyp',
        },
        delivery: '1 Tag – 2 Wochen (kalendarisch)',
        continuation:
          'Wenn ein kleiner Build nachfolgt, wird der Prototyping-Betrag auf das Projekt angerechnet — keine Doppelverrechnung für dieselbe Arbeit.',
      },
      '03': {
        title: 'Kleine Web-Apps & Websites',
        flowLabel: 'bauen',
        desc: 'Full-Stack-Builds für Marketing-Sites und kleine Anwendungen — von der Idee bis zum ausgelieferten Produkt.',
        price: 'projekt-basiert',
        details:
          'Die meisten Builds beginnen mit einem Gespräch darüber, was Sie wirklich brauchen. Ich helfe, die Idee zu schärfen, sie in einen Entwurf oder Wireframe zu gießen, einen lauffähigen Prototypen zu bauen und das Ganze zu einem fertigen Produkt zu führen — Backend und Frontend, Deploy, Übergabe. Die Art Projekt, die nicht zusammenbricht, sobald ich weg bin.',
        included: [
          'Konzept-Schärfung & Wireframing',
          'Datenbank-Schema & Migrationen',
          'API in .NET (gelegentlich Node / TypeScript)',
          'Frontend in Vue oder React',
          'CI/CD-Pipeline + Dockerized Deploy',
          'Übergabe-Dokumentation & On-Call-Fenster',
        ],
        pricing: {
          marketing: 'Marketing-Site (1–10 Seiten)',
          singlePurpose: 'Web-App mit klarem Zweck',
          saasMvp: 'Kleines SaaS-MVP (mehrbenutzerfähig)',
        },
        delivery: 'Nebenprojekt-Tempo — meist 4 – 16 Wochen ab Kickoff',
        continuation:
          'Builds beginnen üblicherweise mit einer bezahlten Prototyping-Phase. Falls wir bereits einen Prototypen gemacht haben, wird dieser Betrag auf den Build angerechnet — keine Doppelverrechnung für bereits geleistete Arbeit.',
      },
      '04': {
        title: 'Wartung & Retainer',
        flowLabel: 'warten',
        desc: 'Laufende Code-seitige Unterstützung für eine bestehende App oder Website — Bugfixes, Dependency-Updates, kleine Features, Deploys.',
        price: 'monatlich',
        details:
          'Für Teams oder Solo-Gründer, die etwas ausgeliefert haben und eine ruhige Hand für die Pflege brauchen. Planbare Monatsstunden für alles auf der Code-Seite: Repo-Pflege, Bugfixes, Releases ausrollen, kleine UI-Anpassungen, Dependency-Upgrades und überschaubare Feature-Arbeit innerhalb des Stundenbudgets. Nur Code-seitig — ich beantworte keine Kunden-Mails zu Rückerstattungen, Preisen oder Produktfragen in Ihrem Namen.',
        included: [
          'Repo- & Dependency-Pflege',
          'Bugfixes & UI-Anpassungen',
          'Deploys & Release-Rollouts',
          'Kleine Features innerhalb des Stundenbudgets',
          'Monitoring / Log-Review auf Anfrage',
          'Nur Code-seitig — kein Kundensupport',
        ],
        pricing: {
          light: 'Klein — 5 h / Monat',
          standard: 'Standard — 10 h / Monat',
          heavy: 'Groß — 20 h / Monat',
        },
        delivery: 'Monatlich rollierend — monatskündbar, keine Bindung',
      },
    },
  },
  experience: {
    entries: {
      codebeam: {
        role: 'Softwareentwickler',
        org: 'codebeam',
        note: 'Vollzeit, hybrid in Wels. Full-Stack-Produktarbeit über das codebeam-SaaS-Portfolio.',
      },
      countItFulltime: {
        role: 'Softwareentwickler',
        org: 'COUNT IT Group',
        note: 'Vollzeit in Hagenberg. Blazor- / .NET-Enterprise-Builds für Kunden — lange laufende Zeiterfassungs- und Reisekostensysteme.',
      },
      countItIntern: {
        role: 'Softwareentwickler (Praktikum)',
        org: 'COUNT IT Group',
        note: 'Fünfmonatiges Praktikum mit Blazor- und Architektur-Fokus.',
      },
      fhTutor: {
        role: 'Tutor, Softwareentwicklung',
        org: 'FH Hagenberg',
        note: 'Tutor für Software-Architektur-Grundlagen für Bachelor-Studierende.',
      },
    },
  },
  education: {
    entries: {
      fhHagenberg: {
        degree: 'BSc Software Engineering',
        org: 'FH Hagenberg',
        note: 'Fachhochschule Oberösterreich, Campus Hagenberg.',
      },
      wuVienna: {
        degree: 'Bachelor (Wechsel)',
        org: 'WU Wien',
        note: 'Studienzweig Wirtschaftsinformatik an der Wirtschaftsuniversität Wien — ausprobiert, festgestellt dass Software die bessere Wahl ist, an die FH Hagenberg gewechselt.',
      },
      matura: {
        degree: 'Matura',
        org: 'BG/BRG Brucknerstraße',
        note: 'Linz, Österreich.',
      },
    },
  },
  contact: {
    cardHead: 'message.txt',
    big: 'Sie bauen etwas?',
    sub: 'Zwei Sätze Pitch + Timeline bekommen die schnellste Antwort.',
    sendCta: 'senden →',
  },
  palette: {
    placeholder: 'Befehl eingeben…',
    empty: 'keine Treffer',
    groups: { nav: 'nav', sys: 'sys' },
    items: {
      about: { label: 'cd ~/ueber', hint: 'über mich' },
      projects: { label: 'cd ~/projekte', hint: 'ausgewählte arbeiten' },
      services: { label: 'cd ~/leistungen', hint: 'was ich anbiete' },
      experience: { label: 'cd ~/erfahrung', hint: 'beruflicher werdegang' },
      education: { label: 'cd ~/ausbildung', hint: 'studium' },
      contact: { label: 'cd ~/kontakt', hint: 'kontakt aufnehmen' },
      theme: { label: 'thema umschalten' },
      language: { label: 'sprache umschalten' },
      mailto: { label: 'mailto: max' },
      legal: { label: 'impressum öffnen', hint: 'impressum · datenschutz · urheberrecht' },
    },
  },
  serviceDialog: {
    included: '// inkludiert',
    pricing: '// preise',
    delivery: 'umsetzung',
    continuation: '// fortsetzung',
    rangesNote:
      'Preisspannen sind Richtwerte — endgültiger Umfang und Angebot werden schriftlich vereinbart.',
    closeHint: 'zum Schließen',
    cta: 'Gespräch starten →',
    inquirySubject: '[{id}] {title} — Anfrage',
  },
  status: {
    builtWith: 'gebaut mit vue + vite',
    copyright: '© {year} Maximilian Ranger. Alle Rechte vorbehalten.',
    legalLink: 'impressum',
    sourceLink: 'quellcode',
  },
  legal: {
    closeHint: 'zum Schließen',
    notice: {
      title: 'Impressum',

      imprintHead: '// impressum',
      imprintIntroHead: 'Angaben gemäß Gesetz',
      imprintIntroBody:
        'Maximilian Ranger\nSoftwareentwicklung\nCharwatstraße 10a\n4600 Wels, Österreich',
      imprintTaxHead: 'Steuer & Identifikation',
      imprintTaxBody: 'UID-Nummer: [PLATZHALTER]',
      imprintObligation:
        'Informationspflicht gemäß §5 ECG, §14 UGB, sowie Offenlegungspflicht gemäß §25 MedienG.',
      imprintContactHead: 'Kontakt',
      imprintContactBody: "max{'@'}ranger.co.at",

      copyrightHead: '// urheberrechtshinweis',
      copyrightBody:
        "Sämtliche Inhalte dieser Website — einschließlich Texte, Bilder, Grafiken und Designs — sind urheberrechtlich geschützt und Eigentum von Maximilian Ranger, sofern nicht anders ausgewiesen. Jede Nutzung, Vervielfältigung oder Verbreitung ohne ausdrückliche schriftliche Zustimmung ist untersagt. Anfragen zur Verwendung von Inhalten richten Sie bitte an: max{'@'}ranger.co.at.",

      privacyHead: '// datenschutz',
      privacyBody:
        'Diese Website ist weitgehend statisch. Wenn Sie über den E-Mail-Link Kontakt aufnehmen, werden Ihre E-Mail-Adresse und Nachricht ausschließlich zur Bearbeitung der Anfrage verarbeitet (Art. 6 Abs. 1 lit. b DSGVO). Der Hosting-Provider kann technische Anfrage-Daten (IP, Zeit, User-Agent) zu Sicherheitszwecken kurzzeitig protokollieren. Schriftarten werden von Google Fonts geladen, dabei wird Ihre IP-Adresse an Google übertragen (Art. 6 Abs. 1 lit. f DSGVO). Theme- und Spracheinstellungen werden im Browser (localStorage) gespeichert und nie übertragen. Sie haben das Recht auf Auskunft, Berichtigung, Löschung sowie Beschwerde bei der Datenschutzbehörde Österreich (https://www.dsb.gv.at).',

      liabilityHead: '// haftung für externe links',
      liabilityBody:
        'Externe Links wurden zum Zeitpunkt der Verlinkung geprüft. Für die laufenden und künftigen Inhalte verlinkter Seiten ist ausschließlich der jeweilige Betreiber verantwortlich.',

      odrHead: '// online-streitbeilegung',
      odrBody: 'Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/odr',

      attributionHead: '// danksagungen',
      attributionZero:
        'Das Zero-Logo ist ein Markenzeichen von shipzero und wird hier mit Anerkennung verwendet. Diese Seite wurde mit Zero ausgeliefert —',
    },
  },
};
