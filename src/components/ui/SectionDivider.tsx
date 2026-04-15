export const SectionDivider: React.FC = () => {
  return (
    <div className="relative h-px w-full overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-300/40 to-transparent" />
    </div>
  );
};
