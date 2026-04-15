import { PageShell } from "@/components/site/PageShell";
import { JinjieberContact } from "@/components/jinjieber/JinjieberContact";

export const metadata = {
  title: "Contact Us - Jinjieber",
  description: "Get in touch for custom valves, pumps, and flow control solutions. We aim to respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <PageShell currentPath="/contact">
      <div className="pt-10">
        <JinjieberContact />
      </div>
    </PageShell>
  );
}
