import { useEffect, useState } from "react";

export function TypeWriter({ words, className }: { words: string[]; className?: string }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    const speed = deleting ? 50 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-[var(--neon-cyan)] ml-1 animate-pulse" />
    </span>
  );
}
