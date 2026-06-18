import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Star,
  Dumbbell,
  Salad,
  MessageCircle,
  CalendarCheck,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Target,
  Home as HomeIcon,
  BarChart3,
  User,
  Trophy,
  ClipboardCheck,
  Settings,
  Zap,
  Activity,
  Crosshair,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingWA } from "@/components/site/FloatingWA";
import { Reveal } from "@/components/site/Reveal";
import { wa } from "@/lib/wa";
import heroImg from "@/assets/hero.jpg";
import labHeroBg from "@/assets/lab_hero_bg.png";
import coachImg from "@/assets/coach.jpg";
import labSquadImg from "@/assets/IMG-20260613-WA0007.jpg";
import labTrophyImg from "@/assets/IMG-20260429-WA0020.jpg";
import labAthleteImg from "@/assets/3L5A0820_1.jpg";
import labGymImg from "@/assets/IMG_7354.jpg";
import labTrophyIndividualImg from "@/assets/lab_trophy_individual.jpg";
import labJagdaleImg from "@/assets/lab_jagdale.jpg";
import sattuImg from "@/assets/sattu.jpg";
import proteinImg from "@/assets/protein.jpg";
import ladooImg from "@/assets/ladoo.jpg";
import ragiImg from "@/assets/ragi.jpg";
import koduImg from "@/assets/kodu.jpg";

export const Route = createFileRoute("/")({ component: Index });

function WaButton({
  href,
  children,
  variant = "wa",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "wa" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all";
  const styles =
    variant === "wa"
      ? "bg-[var(--brand-wa)] text-black glow-wa"
      : "border border-foreground/30 text-foreground hover:bg-foreground/10";
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-teal)]">
          <span className="text-primary">●</span> {kicker}
        </p>
      )}
      <h2 className="font-display text-4xl leading-[0.95] tracking-wide sm:text-5xl md:text-6xl lg:text-7xl text-balance">
        {title}
      </h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden grain">
      <img
        src={heroImg}
        alt="Athlete training"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-top opacity-95"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <Reveal delay={0.1}>
          <h1 className="font-display text-[2.5rem] xs:text-[3rem] sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.9] tracking-wide">
            UNLOCK YOUR
            <br />
            PEAK PERFORMANCE.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-xl text-base text-zinc-300 sm:text-lg md:text-xl">
            Elite 1-on-1 Personal Coaching — Customized for You.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WaButton href={wa("Hi! I'm interested in 1on1Coaching. Please share more details.")}>
              Start Coaching →
            </WaButton>
            <WaButton href="#plans" variant="ghost">
              View Plans
            </WaButton>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-3">
            {["500+ Clients", "5★ Rated", "100% Personalized"].map((s) => (
              <span
                key={s}
                className="glass rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  const items = [
    { icon: Dumbbell, label: "Strength & Conditioning" },
    { icon: Salad, label: "Functional Fitness" },
    { icon: MessageCircle, label: "Yoga-Integrated Training" },
    { icon: CalendarCheck, label: "Personalized Programs" },
  ];
  return (
    <section id="coaching" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <img
              src={coachImg}
              alt="Anupam Jain — Performance Coach"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-6">
              <p className="font-display text-2xl tracking-wide">ANUPAM JAIN</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Performance Coach · Elite Performance Lab
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Meet Your Coach
          </p>
          <h2 className="font-display text-5xl leading-none tracking-wide sm:text-6xl md:text-7xl">
            Train Smart.
            <br />
            Perform Elite.
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Anupam Jain is a Performance Coach Specializing in Strength & Conditioning, Functional
            Fitness, and Yoga-integrated training. Through{" "}
            <span className="text-foreground font-medium">Elite Performance Lab</span> &
            <span className="text-foreground font-medium"> 1on1Coaching</span>, he helps athletes
            and individuals improve strength, performance, and overall fitness with a scientific and
            personalized approach.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {items.map(({ icon: Icon, label }) => (
              <div key={label} className="glass flex flex-col items-start gap-2 rounded-xl p-4">
                <Icon className="h-5 w-5 text-[var(--brand-teal)]" />
                <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    {
      name: "The Cut",
      featured: true,
      oldPrice: "₹5,999",
      price: "₹4,999",
      desc: "A thorough exercise routine designed to lose extra weight and gain lean muscle mass.",
      features: [
        "Custom Workout Plan",
        "Personalized Meal Plan",
        "Cardio Routine",
        "Weekly Check-ins",
        "Direct 1-1 WhatsApp Support",
      ],
      cta: "Enroll in The Cut →",
      wa: wa("Hi! I want to enroll in THE CUT program (₹4999). Please guide me further."),
    },
    {
      name: "Custom Plan",
      price: "Contact for pricing",
      desc: "A 100% personalized plan built around your specific body, goals, and schedule.",
      features: ["Full Body Assessment", "Custom Workout", "Custom Diet", "Priority Support"],
      cta: "Get Custom Plan →",
      wa: wa("Hi! I'd like to discuss a Custom Plan tailored to my goals. Please share details."),
    },
  ] as const;

  const pills = ["Women's Health", "Child Nutrition", "Sports Nutrition", "Group Classes"];

  return (
    <section id="plans" className="relative px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionTitle
          kicker="Coaching Plans"
          title="CHOOSE YOUR TRANSFORMATION"
          sub="All plans include personalized workout plans, meal guidance, and direct WhatsApp support."
        />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <div
              className={`relative h-full overflow-hidden rounded-2xl border bg-card p-7 glow-teal-hover ${"featured" in p && p.featured ? "border-primary/40" : "border-border"}`}
            >
              {"featured" in p && p.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-4xl tracking-wide sm:text-5xl">
                {p.name.toUpperCase()}
              </h3>

              {"price" in p && p.price && (
                <div className="mt-4 flex items-end gap-3">
                  {"oldPrice" in p && p.oldPrice && (
                    <span className="text-base text-muted-foreground line-through">
                      {p.oldPrice}
                    </span>
                  )}
                  <span className="font-display text-3xl text-primary">{p.price}</span>
                </div>
              )}

              {"desc" in p && p.desc && (
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              )}

              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-wa)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <WaButton href={p.wa} className="w-full">
                  {p.cta}
                </WaButton>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
          {pills.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Poshak() {
  const products = [
    {
      name: "Sattu Power",
      img: sattuImg,
      desc: "Low in glycemic index, improves digestion and high in fibre.",
      price: "Ask for Price",
    },
    {
      name: "Quinoa Flour",
      img: proteinImg,
      desc: "Gluten free, rich in antioxidants and contains all 9 essential amino acids. Manages hormonal balance, pregnancy friendly, supports skin and hair health.",
      price: "Ask for Price",
    },
    {
      name: "Energy Ladoo",
      img: ladooImg,
      desc: "Improves immunity and muscle strength and increases alertness.",
      price: "Ask for Price",
    },
    {
      name: "Ragi Flour",
      img: ragiImg,
      desc: "Strengthening bones and managing blood sugar. Low glycemic index with essential amino acids — a nutritional powerhouse.",
      price: "Ask for Price",
    },
    {
      name: "Kodu (Millet)",
      img: koduImg,
      desc: "Promotes heart health, rich in antioxidants, supports blood sugar control and a source of vitamins B.",
      price: "Ask for Price",
    },
  ];

  return (
    <section id="poshak" className="relative px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-3xl border border-[var(--brand-saffron)]/40 bg-gradient-to-br from-[var(--brand-saffron)]/15 via-background to-background px-6 py-10 text-center md:py-14">
          <div className="mx-auto mb-3 h-px w-20 bg-[var(--brand-saffron)]/60" />
          <h2 className="font-display text-5xl tracking-widest text-[var(--brand-saffron)] sm:text-6xl md:text-7xl">
            POSHAK · पोषक
          </h2>
          <div className="mx-auto mt-3 h-px w-20 bg-[var(--brand-saffron)]/60" />
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Ancient Nutrition. Modern Performance.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-base text-muted-foreground">
          Poshak brings you time-tested, natural protein foods rooted in Indian tradition — clean,
          powerful, and made for those who train hard.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 grid-cols-2 md:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-[var(--brand-saffron)]/50">
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-display text-xl tracking-wide md:text-2xl">
                  {p.name.toUpperCase()}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">{p.desc}</p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[var(--brand-saffron)]">
                  {p.price}
                </p>
                <a
                  href={wa(
                    `Hi! I want to order ${p.name} from Poshak. Please share details and pricing.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-wa)] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black glow-wa"
                >
                  Order on WhatsApp →
                </a>
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.3}>
          <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/40 p-6 text-center">
            <div className="mb-3 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-2 w-2 rounded-full bg-[var(--brand-saffron)]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
            <p className="font-display text-2xl tracking-wide">More Coming Soon</p>
            <p className="mt-2 text-xs text-muted-foreground">New products dropping shortly</p>
          </div>
        </Reveal>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
        All products are natural, locally sourced, and free from artificial additives.
      </p>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Target, title: "100% Personalized", desc: "No Cookie-Cutter Plans" },
    { icon: MessageCircle, title: "Direct WhatsApp Support", desc: "Coach Responds Personally" },
    { icon: HomeIcon, title: "Train Anywhere", desc: "Home, Gym, Or Outdoor" },
    { icon: BarChart3, title: "Weekly Progress Tracking", desc: "Accountability Built In" },
  ];
  return (
    <section id="about" className="relative px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionTitle kicker="Why Us" title="WHY CHOOSE 1ON1COACHING" />
      </Reveal>
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <div className="glass h-full rounded-2xl p-6 glow-teal-hover">
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-display text-xl tracking-wide">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: "Coach changed my whole approach. Lost the weight, kept it off, gained real strength.",
      name: "Rahul S.",
      tag: "Lost 12kg in 3 months",
    },
    {
      quote:
        "The personalized plan made all the difference. Felt heard, felt guided. Worth every rupee.",
      name: "Priya M.",
      tag: "Lean & toned in 4 months",
    },
    {
      quote: "Direct WhatsApp support is a game-changer. Coach is always there when I need a push.",
      name: "Aman K.",
      tag: "Gained 8kg lean muscle",
    },
  ];
  return (
    <section className="relative px-0 py-24 md:py-32">
      <div className="px-5 md:px-8">
        <Reveal>
          <SectionTitle title="REAL PEOPLE. REAL RESULTS." />
        </Reveal>
      </div>
      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-auto md:max-w-7xl md:grid md:grid-cols-3 md:overflow-visible md:px-8">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div className="w-[85vw] shrink-0 snap-center rounded-2xl border border-border bg-card p-6 md:w-auto">
              <div className="flex gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="font-semibold">{t.name}</span>
                <span className="rounded-full bg-[var(--brand-teal)]/20 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--brand-teal)]">
                  {t.tag}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--brand-teal)]/15 via-background to-background" />
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-6xl leading-none tracking-wide sm:text-7xl md:text-8xl lg:text-9xl">
            READY TO START?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            One step today. A healthier tomorrow.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <WaButton
              href={wa("Hi Coach! I'd like to start my fitness journey. Please share next steps.")}
              className="px-8 py-4 text-base"
            >
              Chat with Your Coach →
            </WaButton>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { icon: MapPin, text: "LIG Colony, New Palasia, Indore, MP 452011" },
              { icon: Phone, text: "+91 7489 414 311" },
              { icon: Clock, text: "Open: 8:00 AM – 8:00 PM" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="glass flex items-center gap-3 rounded-xl p-4 text-left">
                <Icon className="h-5 w-5 shrink-0 text-[var(--brand-teal)]" />
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-foreground/10"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={wa("Hi!")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-wa)] text-black glow-wa"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl tracking-wider">
            <span className="text-primary">1ON1</span>COACHING
          </div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Revolutionize Your Fitness Routine. Personal Coaching & Natural Nutrition From LIG
            Colony, New Palasia, Indore.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Quick Links
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {[
              ["Coaching", "#coaching"],
              ["Plans", "#plans"],
              ["Poshak Store", "#poshak"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-primary">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Get Started
          </p>
          <div className="mt-3">
            <WaButton href={wa("Hi! I'm interested in 1on1Coaching.")}>WhatsApp Now →</WaButton>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2025 1ON1Coaching. All rights reserved.
      </div>
    </footer>
  );
}

type Zone = "coaching" | "lab";

function ZoneSwitcher({ zone, onChange }: { zone: Zone; onChange: (z: Zone) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tabs: { id: Zone; icon: typeof User; label: string; shortLabel: string }[] = [
    { id: "coaching", icon: User, label: "1-on-1 Coaching", shortLabel: "1-on-1" },
    { id: "lab", icon: Trophy, label: "Elite Performance Lab", shortLabel: "Elite Lab" },
  ];

  return (
    <div
      className={`z-40 transition-all duration-300 ${
        scrolled
          ? "fixed top-[64px] md:top-[76px] left-0 right-0 border-b border-border bg-background/85 backdrop-blur-xl"
          : "absolute top-[64px] md:top-[76px] left-0 right-0 border-b border-black/5 bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl justify-center px-3 py-3 md:px-8">
        <div
          className={`relative inline-flex w-full max-w-xl items-center rounded-full border p-1 sm:w-auto transition-all ${
            scrolled ? "border-border bg-card/60" : "border-black/10 bg-white/40"
          }`}
        >
          {tabs.map((t) => {
            const active = zone === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onChange(t.id)}
                className={`relative flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wider transition-colors sm:gap-2 sm:px-6 sm:text-xs ${
                  active
                    ? scrolled
                      ? "text-primary-foreground font-bold"
                      : "text-white font-bold"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-slate-950/70 hover:text-slate-950"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="zone-pill"
                    className={`absolute inset-0 rounded-full ${scrolled ? "bg-primary" : "bg-slate-950"}`}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <t.icon className="relative z-10 h-4 w-4 shrink-0" />
                <span className="relative z-10 whitespace-nowrap sm:hidden">{t.shortLabel}</span>
                <span className="relative z-10 hidden whitespace-nowrap sm:inline">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LabHero() {
  return (
    <section className="relative min-h-[70svh] flex items-center justify-center overflow-hidden px-5 pt-40 pb-20 md:px-8 md:py-32">
      <img
        src={labHeroBg}
        alt="Elite sports training"
        className="absolute inset-0 h-full w-full object-cover opacity-25 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-background/95 to-background" />

      {/* Subtle sports grid overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">
            <span className="text-lime-400">●</span> Elite Performance Lab
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-[2.5rem] xs:text-[3rem] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-wide text-balance text-white">
            TRAIN FOR THE <span className="text-lime-400">WIN</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            High-performance strength, speed, and conditioning protocols engineered specifically for
            cricketers and competitive team athletes.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex justify-center">
            <a
              href={wa("Hi! I'd like to book a Team Assessment at Elite Performance Lab.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-lime-300 hover:scale-105 shadow-[0_0_30px_rgba(163,230,53,0.3)]"
            >
              Book a Team Assessment →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LabPillars() {
  const items = [
    {
      icon: ClipboardCheck,
      title: "Athlete Assessment",
      desc: "Baseline Testing Across Speed, Force Production, Mobility & Capacity.",
    },
    {
      icon: Settings,
      title: "Customized S&C",
      desc: "Training Blocks Structured Around Your Sport, Position, And Season.",
    },
    {
      icon: Zap,
      title: "Speed & Power",
      desc: "Linear Speed Mechanics, Change-Of-Direction, And Vertical Power.",
    },
    {
      icon: Activity,
      title: "Mobility & Prehab",
      desc: "Bulletproofing Joints, Fixing Imbalances, And Optimizing Recovery.",
    },
    {
      icon: Crosshair,
      title: "Cricket Conditioning",
      desc: "Rotational Power, Throwing Capacity, And High-Intensity Match Fitness.",
    },
  ];
  return (
    <section className="relative px-5 py-20 md:px-8 md:py-28 bg-gradient-to-b from-background via-slate-950/40 to-background">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">
            <span className="text-lime-400">●</span> S&C Protocols
          </p>
          <h2 className="font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl md:text-7xl">
            HOW WE BUILD ATHLETES
          </h2>
        </div>
      </Reveal>
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-gradient-to-b from-card to-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-[0_4px_30px_rgba(163,230,53,0.1)] group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 transition-colors group-hover:bg-lime-400/20">
                <Icon className="h-6 w-6 text-lime-400" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-wide text-white group-hover:text-lime-400 transition-colors">
                {title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LabPlan() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28 bg-background">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">
            <span className="text-lime-400">●</span> Program Enrollment
          </p>
          <h2 className="font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl md:text-7xl">
            THE EAPS PROTOCOL
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Elite Athlete Performance System — the gold standard for cricket & team conditioning.
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-12 items-stretch">
        {/* Left Column: Visual Athlete Card */}
        <div className="lg:col-span-5 hidden lg:block">
          <Reveal>
            <div className="relative h-full rounded-3xl overflow-hidden border border-border group min-h-[400px]">
              <img
                src={labGymImg}
                alt="Elite S&C Athlete"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block rounded-full bg-lime-400 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-black mb-3">
                  In the Lab
                </span>
                <p className="text-xl font-display tracking-wide text-white leading-tight">
                  "S&C is not about just lifting weights, it's about building robustness for the
                  40th over."
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-slate-300 font-semibold">
                    Anupam Jain · S&C Head
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: EAPS Plan Card */}
        <div className="lg:col-span-7 col-span-1">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-lime-400/40 bg-gradient-to-br from-card to-slate-950 p-8 shadow-[0_0_50px_rgba(163,230,53,0.05)] hover:border-lime-400/70 transition-all duration-300">
              <span className="absolute right-6 top-6 rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                Featured Program
              </span>
              <h3 className="font-display text-5xl tracking-wide text-white">EAPS</h3>
              <p className="mt-2 text-sm text-lime-400 font-semibold tracking-wider uppercase">
                Elite Athlete Performance System
              </p>

              <div className="mt-6 flex items-end gap-3 border-b border-border pb-6">
                <span className="font-display text-5xl text-white">₹4,999</span>
                <span className="text-sm text-slate-400 mb-1">/ month</span>
              </div>

              <p className="mt-6 text-sm text-slate-400 leading-relaxed">
                Unlock professional-grade physical prep. Workouts built specifically for batting
                speed, bowling durability, and explosive sprinting capacity on the field.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Full Athletic Bio-Assessment",
                  "Customized Rotational & Core Program",
                  "Field Agility & Sprint Mechanics",
                  "Cricket-First Shoulder & Knee Prehab",
                  "Direct Support & Progress Reviews",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-lime-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={wa(
                    "Hi! I want to enroll in the EAPS - Elite Athlete Performance System (₹4999). Please guide me further.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-lime-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(163,230,53,0.2)]"
                >
                  Enroll in EAPS →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LabGallery() {
  const shots = [
    {
      title: "MPL Runners-Up: A Proud Moment for the Team",
      desc: "Holkar Stadium team training session",
      img: labSquadImg,
      icon: User,
    },
    {
      title: "Championship Wins",
      desc: "Bhau Nivsarkar Trophy 2025-26",
      img: labTrophyImg,
      icon: Trophy,
    },
    {
      title: "MM Jagdale Trophy Champion 2025",
      desc: "Under-15 Squad — Winning Under Structured S&C Program.",
      img: labJagdaleImg,
      icon: Trophy,
    },
  ];

  return (
    <section className="px-5 py-20 md:px-8 md:py-28 bg-gradient-to-b from-background via-slate-950/20 to-background">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl md:text-7xl">
            WINNING CULTURE
          </h2>
        </div>
      </Reveal>
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shots.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-lime-400/50 hover:shadow-[0_4px_30px_rgba(163,230,53,0.1)] hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 relative">
                  <div className="absolute top-0 right-5 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-black shadow-lg">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-display text-2xl tracking-wide text-white group-hover:text-lime-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function LabTrophies() {
  const items = [
    {
      title: "MM Jagdale Trophy Champion 2025",
      desc: "Under-15 Squad — Winning Under Structured S&C Program.",
    },
    {
      title: "MPL",
      desc: "Madhya Pradesh Premier League Women's — Strength And Conditioning Coach Of Gwalior Shernis 2026.",
    },
    { title: "Bhau Nivsarkar Trophy", desc: "Winner 2025-26 — Strength & Conditioning Coach." },
    { title: "100+ Match-Ready Athletes", desc: "Cricketers Prepped Across Formats & Age Groups." },
    {
      title: "Zero-Injury Pre-Season",
      desc: "Full Team Completed Pre-season With No Soft-tissue Injuries.",
    },
  ];
  return (
    <section className="px-5 py-20 md:px-8 md:py-28 bg-background">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">
            <span className="text-lime-400">●</span> Achievements
          </p>
          <h2 className="font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl md:text-7xl">
            LAB ACHIEVEMENTS
          </h2>
        </div>
      </Reveal>
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-[var(--brand-saffron)]/30 bg-gradient-to-br from-card to-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-saffron)]/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-saffron)]/15">
                <Trophy className="h-5 w-5 text-[var(--brand-saffron)]" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-wide text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LabCoachStrip() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28 bg-gradient-to-t from-background via-slate-950/20 to-background">
      <Reveal>
        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-6 rounded-3xl border border-border bg-gradient-to-r from-card to-slate-950 p-6 md:flex-row md:p-8">
          {/* Left side: Coach Image holding Trophy */}
          <div className="relative md:w-2/5 aspect-[3/4] w-full overflow-hidden rounded-2xl border border-lime-400/25">
            <img
              src={labTrophyIndividualImg}
              alt="Coach Anupam Jain with Trophy"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] uppercase tracking-widest text-lime-400 font-bold bg-black/60 px-2.5 py-1 rounded-full">
                Indore Division Champions
              </span>
            </div>
          </div>

          {/* Right side: Biography */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
              S&C Head Coach
            </p>
            <h3 className="mt-1 font-display text-4xl tracking-wide text-white">ANUPAM JAIN</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Certified S&C Coach With 7+ Years Of Training Competitive Cricketers & Team Athletes.
              Specializes In Field Agility, Speed Mechanics, And Bulletproofing Players Against
              Joint Injuries.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
              {["S&C Certified", "Yoga-Integrated", "Functional Training"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-slate-900/60 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 md:mt-8">
              <a
                href={wa("Hi Coach! I'd like to know more about Elite Performance Lab training.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-lime-300 hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.15)]"
              >
                Talk to Coach →
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function CoachingZone() {
  return (
    <>
      <Hero />
      <About />
      <Plans />
      <Poshak />
      <WhyUs />
      <Testimonials />
      <ContactCTA />
    </>
  );
}

function LabZone() {
  return (
    <>
      <LabHero />
      <LabPillars />
      <LabPlan />
      <LabGallery />
      <LabTrophies />
      <LabCoachStrip />
    </>
  );
}

function Index() {
  const [zone, setZone] = useState<Zone>("coaching");
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar zone={zone} />
      <ZoneSwitcher zone={zone} onChange={setZone} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={zone}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {zone === "coaching" ? <CoachingZone /> : <LabZone />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
