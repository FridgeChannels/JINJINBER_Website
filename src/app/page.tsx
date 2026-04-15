import { PageShell } from "@/components/site/PageShell";
import { JinjieberHero } from "@/components/jinjieber/JinjieberHero";
import { JinjieberAbout } from "@/components/jinjieber/JinjieberAbout";
import { JinjieberProducts } from "@/components/jinjieber/JinjieberProducts";
import { JinjieberIndustries } from "@/components/jinjieber/JinjieberIndustries";
import { JinjieberGlobalPresence } from "@/components/jinjieber/JinjieberGlobalPresence";
import { JinjieberTestimonials } from "@/components/jinjieber/JinjieberTestimonials";
import { JinjieberContact } from "@/components/jinjieber/JinjieberContact";

export default function HomePage() {
  return (
    <PageShell currentPath="/">
      <JinjieberHero />
      <JinjieberAbout hideDeepDetails />
      <JinjieberProducts />
      <JinjieberIndustries isTeaser />
      <JinjieberGlobalPresence />
      <JinjieberTestimonials />
      <JinjieberContact />
    </PageShell>
  );
}
