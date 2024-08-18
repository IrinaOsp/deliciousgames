export type GameCardInfo = {
  view: "grid" | "list";
  title: string;
  image: string;
  description: string;
  price: number;
  tax?: number;
  label?: string;
  rating?: number;
  path: string;
};

type ResponseItemMainImg = {
  id: number;
  attributes: {
    title: string;
    path: string;
    images: {
      main: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
};
type ResponseItemBoxImg = {
  id: number;
  attributes: {
    title: string;
    path: string;
    images: {
      box: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
};
export type ResponseCatalogItem = {
  id: number;
  attributes: {
    description: string;
    title: string;
    path: string;
    images: {
      box: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
    price: [{ id: number; price: number; currency: string }];
  };
};

export type GetProductsResponse = {
  data: ResponseItemBoxImg[] | ResponseItemMainImg[];
};

export type Product = {
  img: string;
  title: string;
  path: string;
};

type BlogImage = {
  path: string;
  name: string;
};

export type BlogPostType = {
  path: string;
  title: { en: string; cs: string };
  date: string;
  images: BlogImage[];
  text: { en: string[]; cs: string[] };
  tags?: string[];
  relatedProductsPaths?: string[];
};
