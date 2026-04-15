import { Footer } from "./Footer";
import { Header } from "./Header";

export interface PageShellProps {
  currentPath: string;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  currentPath,
  children,
}) => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header currentPath={currentPath} />
      <main className="relative z-0 flex-1 pb-24 text-zinc-900 lg:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

