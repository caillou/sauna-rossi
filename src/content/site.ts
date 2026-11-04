// All copy for the site lives here, so a volunteer can edit text without
// touching layout. The German copy is verbatim from the design handoff.
//
// Two invisible characters are written as JS escapes, because Astro escapes
// `{expr}` output and a literal "&shy;" would render as text:
//   \u00AD soft hyphen, the only place a long word may break
//   \u00A0 non-breaking space, keeps two words on one line
//
// Text with line breaks or inline links is a list of segments, see Rich.astro.

export type Segment = string | { br: true } | { text: string; href: string };

const br: Segment = { br: true };
const email = "sauna.rossi@gmail.com";
const emailLink: Segment = { text: email, href: `mailto:${email}` };

export const meta = {
  title: "Die Saunatankstelle A. Rossi",
  description:
    "Eine holzbefeuerte Sauna auf dem CAMPO Areal in Winterthur. Jeden Donnerstag 18 bis 21 Uhr, gratis.",
};

export const intro = {
  title: "Die Sauna\u00ADtankstelle",
  titleAccent: "A. Rossi",
  text: "Eine Sauna als Hommage an den Winterthurer Zapfsäulen-Pionier. Getankt wird an seiner legendären Tankstelle nicht mehr. Jetzt ist sie holzbefeuert und offen für alle. Gebaut hat sie das Basler Kunstkollektiv Hotel Regina, im Auftrag der SKKG. Am Laufen halten wir sie: ein paar Freiwillige.",
  day: "Donnerstag",
  // En dash with spaces.
  time: "18 – 21 Uhr",
  note: [
    "Gratis. Textilsauna, also mit Badebekleidung.",
    br,
    "Kinder willkommen.",
  ] as Segment[],
};

export const hero = {
  alt: "Die Saunatankstelle bei Nacht, Foto: Nelly Rodriguez",
};

export const info: { label: string; paragraphs: Segment[][] }[] = [
  {
    label: "Mitbringen",
    paragraphs: [["Badelatschen und Badetuch. Badebekleidung. Sonst nichts."]],
  },
  {
    label: "Abkühlen",
    paragraphs: [
      [
        "Kaltes Wasser aus dem Schlauch, vier rote Kübel. Wer mehr will: die Eulach fliesst gleich nebenan.",
      ],
    ],
  },
  {
    label: "Wo",
    paragraphs: [
      [
        "Auf dem CAMPO Areal, auf dem Parkplatz. Das Auto lässt du besser stehen.",
      ],
      [
        {
          // Non-breaking spaces keep street + number and zip + town together.
          text: "Zum\u00A0Park\u00A05, 8404\u00A0Winterthur",
          href: "https://www.google.com/maps/search/?api=1&query=Zum+Park+5%2C+8404+Winterthur",
        },
      ],
    ],
  },
  {
    label: "Heizen",
    paragraphs: [
      [
        "Holzbefeuert. Das Feuer brennt schon, wenn du kommst. Jemand hat es angemacht.",
      ],
    ],
  },
];

export const volunteer = {
  title: "Mithelfen?",
  text: "Wir sind ein paar Freiwillige. Es braucht immer Leute, die einheizen und das Feuer hüten, die auf- und zuschliessen, und die nachher putzen. Nichts davon ist kompliziert.",
  howLabel: "So gehts",
  how: "Komm an einem Donnerstag vorbei und frag.",
  alt: "Die Saunatankstelle auf dem CAMPO Areal",
};

export const newLocation = {
  label: "Ab März 2027",
  title: "Die Sauna braucht einen neuen Platz.",
  paragraphs: [
    [
      "Auf dem CAMPO Areal darf sie bis März 2027 stehen. Wir suchen einen Ort, an dem sie weiterleben kann, am liebsten in Hegi oder Oberi.",
    ],
    ["Du kennst einen? ", emailLink],
  ] as Segment[][],
};

// Six items. Footer.astro groups them into lines.
export const footer: Segment[][] = [
  [
    "Gebaut vom ",
    { text: "Kollektiv Hotel Regina", href: "https://hotelregina.org" },
  ],
  [
    "Ein Projekt der ",
    {
      text: "Stiftung für Kunst, Kultur und Geschichte",
      href: "https://www.skkg.ch",
    },
  ],
  [
    "Auf dem ",
    { text: "CAMPO Areal", href: "https://www.campo-winterthur.ch" },
  ],
  ["Betrieben von Freiwilligen"],
  ["Nachtfoto: Nelly Rodriguez"],
  [emailLink],
];

export const notFound = {
  title: "Hier gibt es nichts.",
  link: "Zur Sauna",
};
