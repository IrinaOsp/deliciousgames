import PageHeading from "@/app/[locale]/components/UI/pageHeading/pageHeading";

type ComponentParagraph = {
  type: "paragraph";
  children: [{ type: string; text: string }];
};
type ComponentList = {
  type: "list";
  format: "unodered";
  children: [{ type: string; children: [{ type: string; text: string }] }];
};

type ListToRenderItem = {
  type: string;
  text: string;
  nestedList?: string[];
};

export default function GameComponentsList({
  components,
  locale,
}: {
  components: ComponentParagraph[] | ComponentList[];
  locale: string;
}) {
  const listToRender: ListToRenderItem[] = components
    .map((component, ind) => {
      if (
        component.type === "paragraph" &&
        components[ind + 1] &&
        components[ind + 1].type === "list"
      ) {
        const nestedList = [];
        let currentIndex = ind + 1;

        while (
          components[currentIndex] &&
          components[currentIndex].type === "list"
        ) {
          nestedList.push(
            (components[currentIndex] as ComponentList).children[0].children[0]
              .text
          );
          currentIndex++;
        }
        return {
          type: "paragraph",
          text: component.children[0].text,
          nestedList,
        };
      }
      if (component.type === "paragraph")
        return { type: "paragraph", text: component.children[0].text };
      return null;
    })
    .filter((item) => item !== null);

  return (
    <section>
      <PageHeading
        title={locale === "cs" ? "Herní materiál:" : "Game components list:"}
        headingLvl={3}
        styles={{ fontSize: "14px", color: "white" }}
      />
      <div
        className="md:columns-3 gap-5 mb-7"
        style={{
          columnRuleColor: "rgba(230, 0, 126, 1)",
          columnRuleWidth: "1px",
          columnRuleStyle: "solid",
        }}
      >
        <ul className="w-full h-auto text-white list-disc pl-10">
          {listToRender.map((component) => (
            <li key={component.text} className="leading-6	">
              {component.text}
              <>
                {component.nestedList?.length && (
                  <ul className="list-[circle] pl-10">
                    {component.nestedList!.map((item) => (
                      <li key={item} className="">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
