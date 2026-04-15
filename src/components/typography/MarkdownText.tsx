export interface MarkdownTextProps {
  text: string;
  className?: string;
}

function splitPreserveBold(input: string): Array<{ type: "text" | "bold"; value: string }> {
  const parts: Array<{ type: "text" | "bold"; value: string }> = [];
  let rest = input;

  while (rest.length > 0) {
    const start = rest.indexOf("**");
    if (start === -1) {
      parts.push({ type: "text", value: rest });
      break;
    }

    const end = rest.indexOf("**", start + 2);
    if (end === -1) {
      parts.push({ type: "text", value: rest });
      break;
    }

    const before = rest.slice(0, start);
    const bold = rest.slice(start + 2, end);
    const after = rest.slice(end + 2);

    if (before) parts.push({ type: "text", value: before });
    if (bold) parts.push({ type: "bold", value: bold });
    rest = after;
  }

  return parts;
}

export const MarkdownText: React.FC<MarkdownTextProps> = ({ text, className }) => {
  const nodes = splitPreserveBold(text);
  return (
    <span className={className}>
      {nodes.map((n, idx) =>
        n.type === "bold" ? (
          <strong key={idx} className="font-semibold text-slate-900">
            {n.value}
          </strong>
        ) : (
          <span key={idx}>{n.value}</span>
        ),
      )}
    </span>
  );
};

