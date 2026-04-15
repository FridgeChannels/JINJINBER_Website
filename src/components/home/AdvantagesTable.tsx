import { homeMockData } from "@/mock/home";
import { cn } from "@/lib/cn";

export const AdvantagesTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-[24px] bg-neutral-50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-md">
      <table className="min-w-full text-left text-sm text-zinc-600">
        <thead>
          <tr className="bg-white/90 text-xs uppercase tracking-wide text-zinc-500 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
            <th scope="col" className="px-4 py-3 font-semibold md:px-6">
              Advantage
            </th>
            <th scope="col" className="px-4 py-3 font-semibold md:px-6">
              What It Means for You
            </th>
          </tr>
        </thead>
        <tbody>
          {homeMockData.advantages.map((row) => (
            <tr
              key={row.advantage}
              className="transition-colors odd:bg-white/50 even:bg-transparent hover:bg-white/80"
            >
              <td className={cn("px-4 py-3 font-medium text-zinc-900 md:px-6")}>
                {row.advantage}
              </td>
              <td className="px-4 py-3 text-zinc-600 md:px-6">{row.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
