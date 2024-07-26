export type GameCardInfo = {
  view: "grid" | "list";
  title: string;
  image: string;
  description: string;
  price: number;
  tax?: number;
  label?: string;
  rating?: number;
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

export type GetProductsResponse = {
  data: ResponseItemBoxImg[] | ResponseItemMainImg[];
};

export type Product = {
  img: string;
  title: string;
  path: string;
};
