export default {
  common: {
    close: 'schließen',
    themes: { dark: 'dunkel', light: 'hell' },
  },
  topbar: {
    domain: 'ranger.ac',
    paletteTooltip: 'Befehlspalette öffnen',
    themeTooltip: 'Farbschema: {theme}',
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
    languages: ['Deutsch (Muttersprache)', 'Englisch (C2)'],
    para1:
      'Ich baue Web-Apps von der Datenbank bis zum Bildschirm. .NET und Postgres am Server, Vue im Browser, Flutter am Handy.',
    para2: 'Ich arbeite Vollzeit bei CADS und übernehme kleine Nebenprojekte, wenn ich Zeit habe.',
    now: "Softwareentwickler {'@'} CADS, seit Aug 2026",
    statusValue: '● nehme kleine Nebenprojekte an',
    kv: {
      now: 'aktuell',
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
    cardPortrait: 'me.webp',
    cardStack: 'stack.json',
    headings: {
      title: '# Max',
      howIWork: '## Wie ich arbeite',
      goodAt: '## Worin ich gut bin',
    },
    intro:
      'Softwareentwickler aus Oberösterreich. Ich arbeite Vollzeit bei CADS. In meiner Freizeit entwickle ich eigene Produkte und übernehme kleine Nebenprojekte.',
    howIWork:
      'Wir beginnen mit einem kurzen Gespräch. Bevor ich Code schreibe, halte ich schriftlich fest, was wir vereinbart haben. Sie sehen kleine, regelmäßige Commits und eine Vorschau, sobald es etwas zu zeigen gibt. Am Ende bekommen Sie ein kurzes Dokument, damit Sie ohne mich weitermachen können.',
    goodAt: [
      'Aus einer vagen Idee eine Spezifikation machen, nach der jemand bauen kann.',
      'Systeme entwerfen, die geänderte Anforderungen aushalten, ohne für Probleme zu bauen, die Sie nicht haben.',
      'Technisches für Menschen erklären, die keinen Code schreiben.',
    ],
    skillGroups: {
      daily: 'täglich',
      also: 'auch im einsatz',
    },
  },
  projects: {
    groups: {
      own: 'meine eigenen',
      work: 'beruflich',
    },
    status: {
      live: 'Live',
      testing: 'Im Test',
      building: 'In Arbeit',
      daily: 'Täglich im Einsatz',
    },
    entries: {
      argos: {
        title: 'Argos',
        kind: 'Web-App',
        desc: 'Rally-Obedience-Parcours auf einem Feld von 30 mal 20 m zeichnen. Nummerierung und Schilderhalter folgen den Regelwerken von ÖKV und FCI, und der Parcours wird schon beim Zeichnen geprüft.',
      },
      whk: {
        title: 'WHK-Website',
        kind: 'Website',
        desc: 'Website des Welser Hundesportklubs, des Hundesportvereins, in dem ich aktiv bin. Kurse lassen sich online buchen, die Zahlungsdaten kommen per Mail.',
      },
      pegasus: {
        title: 'Pegasus',
        kind: 'Mobile App',
        desc: 'App für Springreiter, um Turnierparcours festzuhalten und durchzugehen. Der Parcoursbauer funktioniert komplett offline.',
      },
      cerberus: {
        title: 'Cerberus',
        kind: 'Web-App',
        desc: 'Vereinssoftware für den Welser Hundesportklub. Mitglieder, Kurse und Teilnehmer wandern aus Tabellen an einen gemeinsamen Ort.',
      },
      manticore: {
        title: 'Manticore',
        kind: 'Web-App',
        desc: 'Serviceberichte, Kunden, Verträge und Zeiterfassung für Installations- und Wartungsbetriebe. Dokumente kommen über einen LLM-Import herein, den ein Mensch prüft.',
      },
      kitsune: {
        title: 'Kitsune',
        kind: 'Entwicklerwerkzeug',
        desc: 'Mein Setup für Claude Code. Ein Gespräch formt eine Änderung, dann bauen Agenten sie, prüfen sie und öffnen einen Pull Request.',
      },
      invoice: {
        title: 'Rechnungserkennung als SaaS',
        desc: 'Liest Postfächer, findet Rechnungen, führt OCR aus und legt sie für die Buchhaltung ab. Ich habe sie gebaut und geleitet.',
      },
      energy: {
        title: 'Plattform für Energiedaten',
        desc: 'Zählerdaten, Dashboards und Berichte für das Energiemanagement.',
      },
      marketplace: {
        title: 'Marktplatz für Vertriebsleute',
        desc: 'Vertriebsleute auf Zeit buchen, mit Käuferabläufen, Verträgen und Abrechnung.',
      },
      timeTracking: {
        title: 'Zeiterfassung',
        desc: 'Zeiterfassung nach österreichischen Kollektivverträgen, auch bei komplexen Schichtmodellen.',
      },
    },
  },
  services: {
    hint: '// nur nebenprojekte. einstieg überall möglich. honorare werden auf den nächsten schritt angerechnet.',
    from: 'ab {price}',
    viewDetails: '{title}: Details ansehen',
    units: {
      hour: 'h',
      day: 'Tag',
      month: 'Monat',
    },
    entries: {
      '01': {
        title: 'Beratung & Reviews',
        desc: 'Technische Beratung, Architektur- und Code-Reviews, und aus einer Idee eine Spezifikation machen. Eine zweite Meinung, wenn Sie eine brauchen.',
        details:
          'Eine zweite Meinung für Teams, die eine möchten. Ich helfe bei der Wahl des Tech-Stacks, wenn Sie unsicher sind, womit Sie bauen sollen. Ich prüfe Architektur und halte das Ergebnis schriftlich fest. Ich schaue mir Code oder einen Pull Request bei einer kniffligen Änderung an. Mit Ihnen forme ich aus einer vagen Idee auch eine Spezifikation, für die ein Entwickler ein Angebot legen kann. Ich verstärke Ihr Team nicht als zusätzliche Kapazität. Die Arbeit bleibt beratend, damit sie neben meinem Hauptberuf Platz hat.',
        included: [
          'Empfehlungen zu Tech-Stack und Frameworks',
          'Architektur-Review mit schriftlichen Notizen',
          'Code- oder Pull-Request-Review in bestehenden Repos',
          'Vom Konzept zur Spezifikation für neue Projekte',
          'Abschlussdokument mit konkreten nächsten Schritten',
        ],
        pricing: {
          hourly: 'Stundensatz, Review oder Beratung',
          daily: 'Tagessatz, ganze Tage',
        },
        delivery: 'Termine meist 1 bis 2 Wochen im Voraus',
        continuation:
          'Wird aus der Beratung ein Prototyp oder Projekt, rechne ich die Stunden für dessen Spezifikation darauf an.',
      },
      '02': {
        title: 'Prototyping',
        desc: 'Funktionierender Entwurfscode in wenigen Tagen. Gut genug, um eine Idee zu testen, günstig genug, um ihn wegzuwerfen. Hosting ist nicht dabei.',
        details:
          'Ein lauffähiger Ausschnitt eines Produkts, den Sie vorführen können, in Tagen statt Monaten. Er ist echt genug, um ihn Nutzern, Investoren oder Ihrem Team zu zeigen. Er ist klein genug, um ihn wegzuwerfen, wenn Sie etwas Neues lernen. Sie bekommen lauffähigen Code in Ihrem Repo, oder als Zip, falls Sie noch keines haben. Ein gehosteter Produktivbetrieb ist ein eigener Auftrag.',
        included: [
          'Wireframe und UX für den Hauptablauf',
          'Lauffähiger Entwurfscode: Frontend, bei Bedarf mit Stub-Backend',
          'Testdaten oder echte Daten, je nach Umfang',
          'Quellcode und ein Loom-Rundgang',
          'Kein Produktiv-Deploy, kein Hosting-Setup',
        ],
        pricing: {
          spike: '1-Tages-Spike',
          week: '1-Wochen-Prototyp',
          twoWeek: '2-Wochen-Prototyp',
        },
        delivery: '1 Tag bis 2 Wochen (Kalenderzeit)',
        continuation:
          'Folgt ein kleines Projekt, rechne ich den Prototyping-Betrag darauf an. Sie zahlen dieselbe Arbeit nicht zweimal.',
      },
      '03': {
        title: 'Kleine Web-Apps & Websites',
        desc: 'Marketing-Websites und kleine Anwendungen, von der ersten Idee bis zum Livegang.',
        details:
          'Die meisten Projekte beginnen mit einem Gespräch darüber, was Sie wirklich brauchen. Ich helfe, die Idee zu schärfen und in einen Entwurf oder Wireframe zu bringen. Dann baue ich einen lauffähigen Prototyp und führe ihn zum fertigen Produkt, mit Backend, Frontend, Deployment und Übergabe. Es fällt nicht auseinander, sobald ich weg bin.',
        included: [
          'Konzept schärfen und Wireframes',
          'Datenbankschema und Migrationen',
          'API in .NET, gelegentlich Node oder TypeScript',
          'Frontend in Vue oder React',
          'CI/CD-Pipeline und Docker-Deployment',
          'Übergabedokumentation und ein Bereitschaftsfenster',
        ],
        pricing: {
          marketing: 'Marketing-Website (1 bis 10 Seiten)',
          singlePurpose: 'Web-App mit einem klaren Zweck',
          saasMvp: 'Kleines SaaS-MVP (mehrere Benutzer)',
        },
        delivery: 'Nebenprojekt-Tempo, meist 4 bis 16 Wochen ab dem Start',
        continuation:
          'Projekte beginnen meist mit einer bezahlten Prototyping-Phase. Haben wir schon einen Prototyp gebaut, rechne ich diesen Betrag auf das Projekt an. Sie zahlen geleistete Arbeit nicht zweimal.',
      },
      '04': {
        title: 'Wartung',
        desc: 'Bugfixes, Updates von Abhängigkeiten, kleine Features und Deployments für eine App, die Sie bereits betreiben.',
        details:
          'Für Teams oder Einzelgründer, die etwas ausgeliefert haben und es in gutem Zustand halten wollen. Sie bekommen planbare Monatsstunden für alles auf der Code-Seite. Dazu gehören Repo-Pflege, Bugfixes, Releases, kleine UI-Anpassungen, Updates von Abhängigkeiten und überschaubare Features im Stundenbudget. Es geht nur um Code. Kundenmails zu Rückerstattungen, Preisen oder Produktfragen beantworte ich nicht für Sie.',
        included: [
          'Pflege von Repo und Abhängigkeiten',
          'Bugfixes und UI-Anpassungen',
          'Deployments und Releases',
          'Kleine Features im Stundenbudget',
          'Monitoring oder Log-Review auf Anfrage',
          'Nur Code, kein Kundensupport',
        ],
        pricing: {
          light: 'Klein, 5 h / Monat',
          standard: 'Standard, 10 h / Monat',
          heavy: 'Groß, 20 h / Monat',
        },
        delivery: 'Monatlich kündbar, keine Bindung',
      },
    },
  },
  experience: {
    entries: {
      cads: {
        role: 'Softwareentwickler',
        org: 'CADS',
        years: 'Aug 2026 bis heute',
        yearsShort: '2026 bis heute',
        note: 'Vollzeit.',
      },
      codebeam: {
        role: 'Softwareentwickler',
        org: 'codebeam',
        years: 'Juni 2024 bis Juni 2026',
        yearsShort: '2024 bis 2026',
        note: 'Vollzeit, hybrid in Wels. Full-Stack-Arbeit an den SaaS-Produkten von codebeam.',
      },
      countItFulltime: {
        role: 'Softwareentwickler',
        org: 'COUNT IT Group',
        years: 'Okt 2022 bis Apr 2024',
        yearsShort: '2022 bis 2024',
        note: 'Vollzeit in Hagenberg. Blazor- und .NET-Systeme für Kunden, vor allem Zeiterfassung und Reisekosten.',
      },
      countItIntern: {
        role: 'Softwareentwickler (Praktikum)',
        org: 'COUNT IT Group',
        years: 'Mai 2022 bis Sept 2022',
        yearsShort: '2022',
        note: 'Fünf Monate, mit Fokus auf Blazor und Softwarearchitektur.',
      },
      fhTutor: {
        role: 'Tutor, Softwareentwicklung',
        org: 'FH Hagenberg',
        years: 'Okt 2019 bis Juli 2020',
        yearsShort: '2019 bis 2020',
        note: 'Grundlagen der Softwarearchitektur für Bachelor-Studierende unterrichtet.',
      },
    },
  },
  education: {
    entries: {
      fhHagenberg: {
        degree: 'BSc Software Engineering',
        org: 'FH Hagenberg',
        years: '2018 bis 2022',
        yearsShort: '2018 bis 2022',
        note: 'Fachhochschule Oberösterreich. Meine Abschlussarbeit war ein Code-Editor-Plugin für Moodle.',
      },
      wuVienna: {
        degree: 'Bachelor, nicht abgeschlossen',
        org: 'WU Wien',
        years: '2015 bis 2018',
        yearsShort: '2015 bis 2018',
        note: 'Wirtschaftsinformatik. Ich habe es probiert, Software war die bessere Wahl, und ich bin nach Hagenberg gewechselt.',
      },
      matura: {
        degree: 'Matura',
        org: 'BG/BRG Brucknerstraße',
        years: '2006 bis 2014',
        yearsShort: '2006 bis 2014',
        note: 'Wels, Österreich.',
      },
    },
  },
  contact: {
    cardHead: 'message.txt',
    big: 'Sie bauen etwas?',
    sub: 'Zwei Sätze und ein grober Zeitplan bringen die schnellste Antwort.',
    sendCta: 'senden →',
  },
  palette: {
    placeholder: 'Befehl eingeben…',
    empty: 'keine Treffer',
    selectHint: 'auswählen',
    closeHint: 'schließen',
    groups: { nav: 'nav', sys: 'sys' },
    items: {
      about: { label: 'cd ~/ueber', hint: 'über mich' },
      projects: { label: 'cd ~/projekte', hint: 'ausgewählte arbeiten' },
      services: { label: 'cd ~/leistungen', hint: 'was ich anbiete' },
      experience: { label: 'cd ~/erfahrung', hint: 'beruflicher werdegang' },
      education: { label: 'cd ~/ausbildung', hint: 'studium' },
      contact: { label: 'cd ~/kontakt', hint: 'kontakt aufnehmen' },
      theme: { label: 'farbschema umschalten' },
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
      'Preisspannen sind Richtwerte. Endgültiger Umfang und Angebot werden immer schriftlich vereinbart.',
    closeHint: 'zum Schließen',
    cta: 'Gespräch starten →',
    inquirySubject: '[{id}] {title}: Anfrage',
  },
  status: {
    shippedWith: 'ausgeliefert mit zero',
    copyright: '© {year} Maximilian Ranger',
    copyrightSuffix: 'Alle Rechte vorbehalten.',
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
      imprintObligation:
        'Informationspflicht gemäß §5 ECG, §14 UGB, sowie Offenlegungspflicht gemäß §25 MedienG.',
      imprintContactHead: 'Kontakt',
      imprintContactBody: "max{'@'}ranger.ac",

      copyrightHead: '// urheberrechtshinweis',
      copyrightBody:
        "Sämtliche Inhalte dieser Website, einschließlich Texte, Bilder, Grafiken und Designs, sind urheberrechtlich geschützt und Eigentum von Maximilian Ranger, sofern nicht anders ausgewiesen. Jede Nutzung, Vervielfältigung oder Verbreitung ohne ausdrückliche schriftliche Zustimmung ist untersagt. Anfragen zur Verwendung von Inhalten richten Sie bitte an: max{'@'}ranger.ac.",

      privacyHead: '// datenschutz',
      privacyBody:
        'Diese Website ist weitgehend statisch. Wenn Sie über den E-Mail-Link Kontakt aufnehmen, werden Ihre E-Mail-Adresse und Nachricht ausschließlich zur Bearbeitung der Anfrage verarbeitet (Art. 6 Abs. 1 lit. b DSGVO). Der Hosting-Provider kann technische Anfrage-Daten (IP, Zeit, User-Agent) zu Sicherheitszwecken kurzzeitig protokollieren. Farbschema- und Spracheinstellungen werden im Browser (localStorage) gespeichert und nie übertragen. Sie haben das Recht auf Auskunft, Berichtigung, Löschung sowie Beschwerde bei der Datenschutzbehörde Österreich (https://www.dsb.gv.at).',

      liabilityHead: '// haftung für externe links',
      liabilityBody:
        'Externe Links wurden zum Zeitpunkt der Verlinkung geprüft. Für die laufenden und künftigen Inhalte verlinkter Seiten ist ausschließlich der jeweilige Betreiber verantwortlich.',

      attributionHead: '// danksagungen',
      attributionZero:
        'Das Zero-Logo ist ein Markenzeichen von shipzero und wird hier mit Anerkennung verwendet. Diese Seite wurde mit Zero ausgeliefert:',
    },
  },
};
