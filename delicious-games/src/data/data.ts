export enum Routes {
  HOME = "/",
  ABOUT = "/about-us",
  SELLERS = "/retailers",
  CONTACT = "/contact",
  BLOG = "/blog",
  CATALOGUE = "/catalog",
  MISSING_PARTS = "/missing-parts",
}

export const MENU_LINKS = [
  { page: "Our Games", link: Routes.CATALOGUE },
  { page: "About Us", link: Routes.ABOUT },
  { page: "Sellers", link: Routes.SELLERS },
  { page: "Contact Us", link: Routes.CONTACT },
  { page: "Author's Blog", link: Routes.BLOG },
];

export const FOOTER_MENU_LINKS = [
  {
    section: "Delicious Menu",
    links: [
      { page: "Our Games", link: Routes.CATALOGUE },
      { page: "About Us", link: Routes.ABOUT },
      { page: "Sellers", link: Routes.SELLERS },
      { page: "Author's Blog", link: Routes.BLOG },
    ],
  },
  {
    section: "Customer Service",
    links: [
      { page: "Contact Us", link: Routes.CONTACT },
      { page: "Missing parts", link: Routes.MISSING_PARTS },
    ],
  },
];

export enum SocialNetworksLinks {
  FACEBOOK = "https://www.facebook.com/Delicious-Games-500182953837636",
  TWITTER = "https://twitter.com/games_delicious?lang=cs",
  INSTAGRAM = "/#",
}
