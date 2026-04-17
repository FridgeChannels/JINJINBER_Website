import { PageShell } from "@/components/site/PageShell";
import { JinjieberContact } from "@/components/jinjieber/JinjieberContact";

export default function ContactPage() {
  return (
    <PageShell currentPath="/contact">
      <div className="pt-10">
        <JinjieberContact />
      </div>
    </PageShell>
  );
}
