export const getStrapiURL = () => `${process.env.NEXT_PUBLIC_STRAPI_URL}`;

export const getStrapiMedia = (url: string | null) => {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
};
