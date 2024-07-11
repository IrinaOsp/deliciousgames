export interface Partner {
  partnerName: string;
  link: string;
}

export interface CountryData {
  country: string;
  entries: Partner[];
}

// Retailers data
export const RETAILERS: CountryData[] = [
  {
    country: "Germany",
    entries: [
      { partnerName: "BNW Distribution", link: "www.spielzeug-paradies.de" },
      { partnerName: "Fun Supply", link: "www.fun-supply.com" },
      { partnerName: "Pegasus", link: "www.pegasus.de" },
      { partnerName: "Frontotep", link: "www.shop.frontotep.com" },
      {
        partnerName: "Alles fuer den Helden",
        link: "www.alles-fuer-den-helden.de",
      },
    ],
  },
  {
    country: "France",
    entries: [{ partnerName: "Intrafin", link: "www.intrafin.eu" }],
  },
  {
    country: "Belgium and Netherlands",
    entries: [
      {
        partnerName: "Jumping Turtle Games",
        link: "www.jumpingturtlegames.be",
      },
    ],
  },
  {
    country: "Spain",
    entries: [{ partnerName: "Maldito Games", link: "www.malditogames.com" }],
  },
  {
    country: "Greece",
    entries: [{ partnerName: "Kaissa Games", link: "www.kaissagames.com" }],
  },
  {
    country: "Serbia",
    entries: [{ partnerName: "Small Bother", link: "www.smallbrother.rs" }],
  },
];

// Shops data
export const SHOPS: CountryData[] = [
  {
    country: "Czech Republic",
    entries: [
      { partnerName: "SVĚT DESKOVÝCH HER", link: "www.svet-deskovych-her.cz" },
      { partnerName: "TLAMA GAMES", link: "www.tlamagames.com" },
      { partnerName: "HRAS", link: "www.hras.cz" },
    ],
  },
  {
    country: "Germany",
    entries: [
      {
        partnerName: "Happyshops (Spiele-Offensive.de)",
        link: "www.happyshops.com",
      },
      { partnerName: "FantasyWelt e.K.", link: "www.fantasywelt.de" },
      { partnerName: "Milan-Spiele", link: "www.milan-spiele.de" },
      { partnerName: "Spiele4u", link: "www.spiele4u.de" },
      {
        partnerName: "Brettspielgeschaeft.Berlin",
        link: "www.brettspielgeschaeft.berlin",
      },
      {
        partnerName: "Verflixt & Zugespielt",
        link: "www.verflixt-und-zugespielt.de",
      },
      { partnerName: "SpieleTaxi", link: "www.spieletaxi.de" },
    ],
  },
  {
    country: "France",
    entries: [{ partnerName: "Philibert", link: "www.philibertnet.com" }],
  },
  {
    country: "Belgium",
    entries: [
      { partnerName: "de Spelgezel", link: "www.spelgezel.be" },
      { partnerName: "CrowdFinder", link: "www.crowdfinder.be" },
      { partnerName: "Spelonk.be", link: "www.spelonk.be" },
    ],
  },
  {
    country: "Hungary",
    entries: [
      { partnerName: "Metagame Kártyabolt", link: "www.metagames.hu" },
      { partnerName: "GémKer-Gémklub Kft", link: "www.Gemker-Gemklub_Kft" },
    ],
  },
  {
    country: "Romania",
    entries: [
      {
        partnerName: "Wanted Games (Regatul Jocurilor)",
        link: "www.regatuljocurilor.ro",
      },
    ],
  },
  {
    country: "Slovenia",
    entries: [{ partnerName: "Trgovina in storitve", link: "www.igraj.si" }],
  },
  {
    country: "Sweden",
    entries: [
      { partnerName: "Hobbyisterna Alphaspel", link: "www.alphaspel.se" },
    ],
  },
  {
    country: "Denmark",
    entries: [{ partnerName: "Snydepels ApS", link: "www.snydepels.dk" }],
  },
  {
    country: "Finland",
    entries: [{ partnerName: "Pelipeikko Oy", link: "www.pelipeikko.fi" }],
  },
  {
    country: "Netherlands",
    entries: [{ partnerName: "Rocks Games (Speel)", link: "www.rockgames.nl" }],
  },
];

// Partners data
export const PARTNERS: CountryData[] = [
  {
    country: "Czech Republic",
    entries: [
      { partnerName: "FOX IN THE BOX", link: "www.foxinthebox.cz" },
      { partnerName: "TLAMA GAMES", link: "www.tlamagames.com" },
      { partnerName: "MINDOK", link: "www.mindok.cz" },
    ],
  },
  {
    country: "United States (+ Great Britain)",
    entries: [{ partnerName: "Rio Grande", link: "www.riograndegames.com" }],
  },
  {
    country: "Japan",
    entries: [{ partnerName: "Suki Games", link: "sukigames.sakura.ne.jp" }],
  },
  {
    country: "Korea",
    entries: [{ partnerName: "MTS Games", link: "www.mtsgames.kr" }],
  },
  {
    country: "Poland",
    entries: [{ partnerName: "Portal", link: "portalgames.pl" }],
  },
  {
    country: "Italy",
    entries: [{ partnerName: "TESLA Games", link: "www.teslagames.it" }],
  },
  {
    country: "Brazil (Portugal)",
    entries: [
      { partnerName: "Mosaico Jogos", link: "www.mosaicojogos.com.br" },
    ],
  },
  {
    country: "China",
    entries: [
      { partnerName: "The Key Studios", link: "www.thekeystudios.com" },
    ],
  },
  {
    country: "Netherlands",
    entries: [
      {
        partnerName: "Jumping Turtle Games",
        link: "www.jumpingturtlegames.be",
      },
    ],
  },
];
