"use client";

import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import TechInfoDetails from "./TechInfoDetails/TechInfoDetails";
import { useTranslation } from "react-i18next";

export type TechInfoProps = {
  id: number;
  dimensions?: string;
  weight?: number;
  distributionPackageDimensions?: string;
  packaging?: number;
  distributionPackWeight?: number;
  ENGeditionEAN?: number;
  CZeditionEAN?: null;
  DEeditionEAN?: null;
};

export default function TechInfo({ data }: { data: TechInfoProps }) {
  const [open, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation("gamePage");

  return (
    <div className="border border-pink-600 border-dotted">
      <button
        className="block py-4 px-2.5 uppercase text-white text-sm font-bold hover:text-pink-600"
        onClick={() => setIsOpen(!open)}
      >
        <FontAwesomeIcon
          icon={open ? faArrowDown : faArrowRight}
          className="mr-1"
        />
        {t("techInfo")}
      </button>
      <div
        ref={contentRef}
        className="transition-all overflow-hidden"
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <TechInfoDetails data={data} t={t} />
      </div>
    </div>
  );
}
