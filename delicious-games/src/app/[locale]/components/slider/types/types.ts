type ImageResponseData = {
  data: {
    attributes: {
      url: string;
      formats: {
        large: {
          url: string;
        };
        medium: {
          url: string;
        };
      };
    };
  };
};

export type GameResponse = {
  attributes: {
    title: string;
    path: string;
    mainPageSlider: {
      topTitle: string;
      buttonText: string;
      banner: ImageResponseData;
      bg: ImageResponseData;
    };
  };
};

export type GameDataToRender = {
  bgImg: string;
  banner: string;
  topBtn?: string;
  bottomBtn: string;
  linkToGame: string;
};
