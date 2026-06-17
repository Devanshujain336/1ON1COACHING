import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "HOME" },
  { href: "#coaching", label: "COACHING" },
  { href: "#plans", label: "PLANS" },
  { href: "#poshak", label: "POSHAK STORE" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
];

interface NavbarProps {
  zone?: "coaching" | "lab";
}

export function Navbar({ zone = "coaching" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDarkTheme = zone === "lab";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/80 border-b border-border text-foreground"
            : isDarkTheme
              ? "bg-black/20 backdrop-blur-md border-b border-white/5 text-white"
              : "bg-white/40 backdrop-blur-md border-b border-black/5 text-slate-950"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
          <a href="#home" className="flex flex-col leading-none">
            <span className="font-display text-2xl md:text-3xl tracking-wider">
              <span className="text-primary">1ON1</span>
              <span className={scrolled ? "text-foreground" : isDarkTheme ? "text-white" : "text-slate-950"}>
                COACHING
              </span>
            </span>
            <span className={`text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-0.5 ${
              scrolled
                ? "text-muted-foreground"
                : isDarkTheme
                  ? "text-slate-300/80"
                  : "text-slate-800/85"
            }`}>
              Revolutionize Your Fitness Routine
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold tracking-wider transition-colors ${
                  scrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : isDarkTheme
                      ? "text-slate-200 hover:text-white"
                      : "text-slate-800 hover:text-slate-950"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className={`lg:hidden rounded-full p-2 transition-colors ${
              scrolled ? "text-foreground" : isDarkTheme ? "text-white" : "text-slate-950"
            }`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-3">
              <span className="font-display text-2xl tracking-wider">
                <span className="text-primary">1ON1</span>COACHING
              </span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
              className="flex flex-col items-center justify-center gap-6 px-8 pt-16"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl tracking-wide text-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

