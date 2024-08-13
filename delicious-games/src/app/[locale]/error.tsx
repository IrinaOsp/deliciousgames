"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Error({
  error,
  reset,
  params: { locale },
}: {
  error: Error & { digest?: string };
  reset: () => void;
  params: { locale: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const { t } = useTranslation("error");

  return (
    <div className="flex flex-col gap-3 justify-center items-center mt-3">
      <h2 className="text-3xl">{t("smthWentWrong")}</h2>
      <p className="text-red-500">{"Error: " + error.message}</p>
      <button
        className="block px-2.5 py-1.5 bg-pink-600 text-white"
        onClick={() => reset()}
      >
        {t("tryAgain")}
      </button>
    </div>
  );
}
