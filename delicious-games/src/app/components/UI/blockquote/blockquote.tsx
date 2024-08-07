export default function Blockquote({ text }: { text: string }) {
  return (
    <blockquote className="m-5 p-2.5 pl-5 max-w-[900px] rounded-[3px] border-l-[3px] border-pink-600 bg-neutral-200">
      <span className="font-serif	text-[13px] italic text-neutral-800">
        {text}
      </span>
    </blockquote>
  );
}
