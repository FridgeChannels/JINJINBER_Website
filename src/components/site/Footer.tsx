import Link from "next/link";
import { Mail, Globe } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white mt-auto overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-20">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-[#4f25e4] flex items-center justify-center text-white font-black text-2xl italic">J</div>
              <span className="font-bold text-2xl tracking-tightest uppercase italic">Jinjieber</span>
            </div>
            <p className="text-xl text-white/50 leading-relaxed font-medium max-w-sm">
              Global leaders in mission-critical flow control engineering and industrial infrastructure solutions.
            </p>
            <div className="flex gap-4">
               {["LinkedIn", "YouTube", "WeChat"].map(social => (
                 <a key={social} href="#" className="h-10 w-10 border border-white/10 flex items-center justify-center hover:bg-[#4f25e4] hover:border-[#4f25e4] transition-all text-[10px] font-bold uppercase tracking-widest">
                   {social[0]}
                 </a>
               ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ul className="space-y-4">
                {["Home", "Products", "Industries", "About", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-sm font-bold text-white/40 hover:text-white transition-colors"
                    >
                      {link.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 shrink-0 bg-white/5 flex items-center justify-center group-hover:bg-[#4f25e4] transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors uppercase">XHZHANG@JINJIEBER.COM</div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 shrink-0 bg-white/5 flex items-center justify-center group-hover:bg-[#4f25e4] transition-colors">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div className="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors uppercase">WWW.JINJIEBER.COM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            © {new Date().getFullYear()} JINJIEBER INDUSTRIAL GROUP. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-8">
             <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-[#4f25e4] transition-colors">
                Back to Top
             </button>
          </div>
        </div>
      </div>

      {/* Background Graphic Element */}
      <div className="absolute -bottom-24 -right-24 h-96 w-96 bg-[#4f25e4] blur-[180px] opacity-10 rounded-full" />
    </footer>
  );
};

