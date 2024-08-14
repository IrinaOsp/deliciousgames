import "server-only";

const dictionaries = (locale: string, namespace: string) =>
  import(`../locales/${locale}/${namespace}.json`).then(
    (module) => module.default
  );

export const getDictionary = async (locale: string, namespace: string) =>
  dictionaries(locale, namespace);
