"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageHeading from "@/app/[locale]/components/UI/pageHeading/pageHeading";
import Videos from "./Videos/Videos";

export default function AsidePanel({ locale }: { locale: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery) return;
    router.push(
      `/blog?journal_blog_search=${encodeURIComponent(searchQuery.trim())}`
    );
  };

  return (
    <aside className="border-l-[1px] w-60 border-zinc-300 p-5 max-md:hidden">
      <PageHeading
        title="Vyhledávání v blogu"
        headingLvl={3}
        styles={{ fontSize: "16px" }}
      />
      <form onSubmit={handleSubmit} className="flex">
        <Input
          type="text"
          placeholder={locale === "cs" ? "hledaný výraz" : "search"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit" className="bg-sky-800">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </form>
      <PageHeading
        title={locale === "cs" ? "Videa:" : "Videos:"}
        headingLvl={3}
        styles={{ fontSize: "26px", marginTop: "30px" }}
      />
      <Videos locale={locale} />
    </aside>
  );
}
