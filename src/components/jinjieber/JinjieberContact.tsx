"use client";

import { jinjieberMock } from "@/mock/jinjieber";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export const JinjieberContact: React.FC = () => {
  const { contact } = jinjieberMock;

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <PixendSectionLabel>Contact / Request a Quote</PixendSectionLabel>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">
              {contact.title}
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 mb-10">
              {contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="mt-1 h-12 w-12 shrink-0 rounded-none bg-neutral-50 flex items-center justify-center text-[#4f25e4]">
                   <Mail className="h-5 w-5" />
                 </div>
                 <div>
                   <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Email</div>
                   <div className="font-medium text-zinc-900"><a href="mailto:enochmei2024@gmail.com" className="hover:text-[#4f25e4]">enochmei2024@gmail.com</a></div>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="mt-1 h-12 w-12 shrink-0 rounded-none bg-neutral-50 flex items-center justify-center text-[#4f25e4]">
                   <Phone className="h-5 w-5" />
                 </div>
                 <div>
                   <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">Phone</div>
                   <div className="flex flex-col gap-1 text-sm font-medium text-zinc-900 leading-snug">
                     <div>
                       <span className="text-zinc-500 mr-1">Phone:</span>
                       +1 213 824 2886
                     </div>
                     <div>
                       <span className="text-zinc-500 mr-1">Mobile:</span>
                       +1 626831 0588
                     </div>
                   </div>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="mt-1 h-12 w-12 shrink-0 rounded-none bg-neutral-50 flex items-center justify-center text-[#4f25e4]">
                   <MapPin className="h-5 w-5" />
                 </div>
                 <div>
                   <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">Headquarters</div>
                   <div className="flex flex-col gap-1 text-sm font-medium text-zinc-900 leading-snug">
                      <div>
                        <span className="text-zinc-500 mr-1">Address:</span>
                        17800 CASTLETON ST STE 665 CITY OF INDUSTRY, CA 91748, USA
                      </div>
                      <div>
                        <span className="text-zinc-500 mr-1">China Address:</span>
                        Building 3, Evergrande Financial Plaza,No.199, Xiangfu Middle Road, DongjingStreet, Yuhua District, Changsha,HunanProvince,China
                      </div>
                   </div>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="h-12 w-12 rounded-none bg-neutral-50 flex items-center justify-center text-[#4f25e4]">
                   <Globe className="h-5 w-5" />
                 </div>
                 <div>
                   <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Website</div>
                   <div className="font-medium text-zinc-900"><a href={`http://${contact.website}`} className="hover:text-[#4f25e4]">{contact.website}</a></div>
                 </div>
              </div>
            </div>
          </div>

          <div className={cn("bg-neutral-50 p-8 md:p-10", pxn.radiusMajor, pxn.shadowMajor)}>
            <div className="text-xl font-bold text-zinc-900 mb-8">Quick Quote Form</div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 md:grid-cols-2">
                <input type="text" placeholder="Your Name" className="w-full bg-white px-4 py-3 rounded-none border border-neutral-200 outline-none focus:ring-2 focus:ring-[#4f25e4]/30 transition" />
                <input type="text" placeholder="Company Name" className="w-full bg-white px-4 py-3 rounded-none border border-neutral-200 outline-none focus:ring-2 focus:ring-[#4f25e4]/30 transition" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input type="email" placeholder="Email" className="w-full bg-white px-4 py-3 rounded-none border border-neutral-200 outline-none focus:ring-2 focus:ring-[#4f25e4]/30 transition" />
                <input type="text" placeholder="Phone" className="w-full bg-white px-4 py-3 rounded-none border border-neutral-200 outline-none focus:ring-2 focus:ring-[#4f25e4]/30 transition" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input type="text" placeholder="Country" className="w-full bg-white px-4 py-3 rounded-none border border-neutral-200 outline-none focus:ring-2 focus:ring-[#4f25e4]/30 transition" />
                <select className="w-full bg-white px-4 py-3 rounded-none border border-neutral-200 outline-none focus:ring-2 focus:ring-[#4f25e4]/30 transition text-zinc-500">
                  <option value="">Select Industry</option>
                  <option>Oil & Gas</option>
                  <option>Municipal</option>
                  <option>Irrigation</option>
                  <option>Fire Protection</option>
                  <option>Power</option>
                  <option>HVAC</option>
                  <option>Other</option>
                </select>
              </div>
              <select className="w-full bg-white px-4 py-3 rounded-none border border-neutral-200 outline-none focus:ring-2 focus:ring-[#4f25e4]/30 transition text-zinc-500">
                  <option value="">Product Interest</option>
                  <option>Gate Valves</option>
                  <option>Butterfly Valves</option>
                  <option>Check Valves</option>
                  <option>Ball Valves</option>
                  <option>Pumps</option>
                  <option>Fittings</option>
                  <option>Other</option>
              </select>
              <textarea placeholder="Project Details" rows={4} className="w-full bg-white px-4 py-3 rounded-none border border-neutral-200 outline-none focus:ring-2 focus:ring-[#4f25e4]/30 transition resize-none"></textarea>
              
              <button
                type="submit"
                className={cn(
                  "mt-4 w-full inline-flex items-center justify-center bg-[#4f25e4] px-[30px] py-4 text-sm font-bold text-white",
                  pxn.radiusCta,
                  "transition-opacity duration-200 hover:opacity-90 active:opacity-80"
                )}
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
