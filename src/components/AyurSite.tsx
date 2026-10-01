import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/ayur-mannoor-hero-fast.mp4";
import heroWebm from "@/assets/ayur-mannoor-hero.webm";
import heroMobile from "@/assets/hero-video-mobile.mp4";
import heroMobileWebm from "@/assets/hero-video-mobile.webm";
import heroPoster from "@/assets/ayur-mannoor-poster.jpg";
import doctorPhoto from "@/assets/dr-anupam-mathew.jpeg";
import clinicExterior from "@/assets/clinic_exterior.jpeg";
import clinicReception from "@/assets/clinic_reception.jpeg";
import clinicLoungeOne from "@/assets/clinic_lounge_1.jpeg";
import clinicLoungeTwo from "@/assets/clinic_lounge_2.jpeg";
import clinicTreatmentRoom from "@/assets/clinic_treatment_room.jpeg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import shirodhara from "@/assets/shirodhara.jpg";
import details from "@/assets/ayurveda-details.jpg";
import veranda from "@/assets/kerala-veranda.jpg";

export const clinic = {
  phone: "+91 75599 55181",
  phoneLink: "tel:+917559955181",
  whatsapp: "https://wa.me/917559955181",
  directions: "https://www.google.com/maps/search/?api=1&query=AYUR+MANNOOR+Meenpatti+Karuvanchal+Kannur",
};

export const treatments = [
  ["01", "Ayurvedic Consultation", "Personalized consultation grounded in Ayurvedic principles.", details],
  ["02", "Pain Management", "A considered approach shaped around individual needs.", treatmentRoom],
  ["03", "Panchakarma", "Traditional therapies designed around individualized care.", veranda],
  ["04", "Ayurvedic Massage", "Traditional oil therapies in a calm setting.", treatmentRoom],
  ["05", "Shirodhara", "A measured stream of warm oil, delivered with care.", shirodhara],
  ["06", "Steam Therapy", "A traditional supporting therapy for holistic wellbeing.", details],
] as const;

const nav = [
  ["Home", "/"], ["About", "/about"], ["Treatments", "/treatments"],
  ["Panchakarma", "/panchakarma"], ["Our Doctor", "/doctor"],
  ["Gallery", "/gallery"], ["Contact", "/contact"],
] as const;

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });
  const isHome = path === "/";
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);
  const light = isHome && !scrolled && !open;

  return <>
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${open ? "border-primary-foreground/20 bg-primary text-primary-foreground" : light ? "border-transparent bg-transparent text-hero" : "border-border/70 bg-background/95 text-foreground backdrop-blur-md"}`}>
      <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 pt-[env(safe-area-inset-top)] sm:px-8 lg:h-24 lg:grid-cols-[auto_1fr_auto] lg:px-12">
        <Link to="/" className="min-w-0 font-display text-xl leading-none tracking-wide sm:text-2xl">AYUR MANNOOR</Link>
        <nav className="mx-auto hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, to]) => <Link key={to} to={to} className="nav-link text-[11px] uppercase tracking-[0.12em]" activeProps={{ className: "nav-link is-active text-[11px] uppercase tracking-[0.12em]" }}>{label}</Link>)}
        </nav>
        <Button asChild className={`hidden h-11 rounded-none px-5 text-[11px] uppercase tracking-[0.12em] lg:inline-flex ${light ? "bg-hero text-foreground hover:bg-hero/90" : ""}`}><a href={clinic.phoneLink}>Call the clinic</a></Button>
        <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} className="justify-self-end lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </header>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex h-dvh flex-col overflow-y-auto bg-primary px-6 pb-[max(6rem,env(safe-area-inset-bottom))] pt-[calc(6.5rem+env(safe-area-inset-top))] text-primary-foreground lg:hidden">
      <nav className="flex flex-1 flex-col justify-center gap-3 py-4" aria-label="Mobile navigation">{nav.map(([label, to], index) => <motion.div key={to} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .04 }}><Link to={to} className="block py-1 font-display text-4xl sm:text-5xl">{label}</Link></motion.div>)}</nav>
      <Button asChild variant="outline" className="h-12 shrink-0 rounded-none border-primary-foreground/40 bg-transparent text-primary-foreground"><a href={clinic.phoneLink}>Call the clinic</a></Button>
    </motion.div>}</AnimatePresence>
    <main>{children}</main>
    <Footer />
    {!open && <><div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-border bg-background pb-[env(safe-area-inset-bottom)] shadow-lift md:hidden"><a href={clinic.phoneLink} className="flex h-14 items-center justify-center gap-2 border-r border-border text-sm font-semibold"><Phone className="size-4" aria-hidden="true"/>Call</a><a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="flex h-14 items-center justify-center gap-2 text-sm font-semibold"><MessageCircle className="size-4" aria-hidden="true"/>WhatsApp</a></div><a href={clinic.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with AYUR MANNOOR on WhatsApp" className="group fixed bottom-6 right-6 z-30 hidden h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105 md:grid"><MessageCircle className="size-5" aria-hidden="true"/><span className="pointer-events-none absolute right-14 hidden whitespace-nowrap bg-primary px-3 py-2 text-xs group-hover:block">Chat with AYUR MANNOOR</span></a></>}
  </>;
}

function Footer() {
  return <footer className="bg-primary px-5 py-16 text-primary-foreground sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-[1500px]">
      <p className="font-display text-[clamp(3rem,9vw,9rem)] leading-[.8]">AYUR MANNOOR</p>
      <div className="mt-14 grid gap-10 border-t border-primary-foreground/20 pt-8 md:grid-cols-3">
        <p className="text-sm leading-7 text-primary-foreground/70">Ayurvedic Clinic & Treatment Centre<br/>Meenpatti, Karuvanchal, Kannur, Kerala</p>
        <nav className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm">{nav.map(([label,to]) => <Link key={to} to={to}>{label}</Link>)}</nav>
        <div className="md:text-right"><a href={clinic.phoneLink} className="font-display text-2xl">{clinic.phone}</a><p className="mt-6 text-xs text-primary-foreground/60">© AYUR MANNOOR. All rights reserved.</p><div className="mt-4 flex gap-5 text-xs text-primary-foreground/70 md:justify-end"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms</Link></div></div>
      </div>
    </div>
  </footer>;
}

export function Hero() {
  const reduce = useReducedMotion();
  return <section className="relative min-h-[92svh] overflow-hidden bg-primary text-hero">
    <video className="absolute inset-0 h-full w-full object-cover object-center hero-video" autoPlay loop muted playsInline preload="auto" poster={heroPoster} aria-label="AYUR MANNOOR brand film"><source media="(max-width: 640px)" src={heroMobileWebm} type="video/webm" /><source media="(max-width: 640px)" src={heroMobile} type="video/mp4" /><source src={heroWebm} type="video/webm" /><source src={heroVideo} type="video/mp4" /></video>
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="relative mx-auto flex min-h-[92svh] max-w-[1500px] items-end px-5 pb-[max(5.5rem,env(safe-area-inset-bottom))] pt-32 sm:px-8 md:pb-16 lg:px-12">
      <div className="max-w-4xl">
        <motion.p initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .25 }} className="mb-5 text-[10px] uppercase tracking-[.22em] sm:text-xs">Ayurvedic Clinic & Treatment Centre</motion.p>
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .4 }} className="font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[.86]">The Art of<br/><span className="italic font-normal">Ayurvedic</span> Wellbeing</motion.h1>
        <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .8 }} className="mt-7 grid gap-6 sm:grid-cols-[minmax(0,30rem)_auto] sm:items-end"><p className="max-w-md text-sm leading-7 text-hero/85 sm:text-base">Traditional wisdom, personalized care, and a deeper connection with wellbeing.</p><div className="flex flex-wrap gap-3"><Button asChild className="h-12 rounded-none bg-hero px-5 text-foreground hover:bg-hero/90"><a href={clinic.phoneLink}>Call the clinic</a></Button><Button asChild variant="outline" className="h-12 rounded-none border-hero/50 bg-transparent px-5 text-hero hover:bg-hero hover:text-foreground"><Link to="/treatments">Explore treatments</Link></Button></div></motion.div>
      </div>
      <ArrowDown className="absolute bottom-8 right-6 hidden size-5 animate-gentle-bob lg:block" aria-hidden="true" />
    </div>
  </section>;
}

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

export function HomePage() {
  const { scrollYProgress } = useScroll(); const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  return <>
    <Hero />
    <section className="section"><Reveal className="mx-auto max-w-5xl text-center"><Eyebrow>A traditional approach to modern wellbeing</Eyebrow><h2 className="display-title">Where Ayurvedic wisdom meets thoughtful, personalized care.</h2><p className="mx-auto mt-8 max-w-2xl body-copy">AYUR MANNOOR is an Ayurvedic Clinic & Treatment Centre in Meenpatti, Karuvanchal, Kannur, focused on Ayurvedic consultation and traditional wellness therapies.</p><TextLink to="/about">Discover AYUR MANNOOR</TextLink></Reveal></section>
    <section className="section bg-secondary"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><Reveal><img src={clinicReception} loading="lazy" alt="Reception at AYUR MANNOOR clinic" className="aspect-[4/3] w-full object-cover"/></Reveal><Reveal className="lg:px-12"><Eyebrow>Our approach</Eyebrow><h2 className="display-title text-left">Wellness begins with balance.</h2><p className="mt-6 max-w-lg body-copy">Rooted in Ayurvedic traditions, AYUR MANNOOR provides personalized consultation and traditional therapies in a calm and welcoming environment.</p><TextLink to="/about">Explore AYUR MANNOOR</TextLink></Reveal></div></section>
    <TreatmentsPreview />
    <section className="relative min-h-[78vh] overflow-hidden text-hero"><motion.img style={{ y }} src={treatmentRoom} width={1408} height={1008} loading="lazy" alt="Illustrative Kerala-inspired Ayurvedic treatment room" className="absolute inset-0 h-[115%] w-full object-cover"/><div className="absolute inset-0 bg-image-overlay"/><div className="section relative mx-auto flex min-h-[78vh] max-w-[1400px] items-end"><Reveal className="max-w-3xl"><Eyebrow>The Panchakarma experience</Eyebrow><h2 className="font-display text-[clamp(3.6rem,7vw,7.5rem)] leading-[.9]">A deeper journey towards balance.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-hero/85">Explore traditional Ayurvedic therapies designed around individualized care and holistic wellbeing.</p><TextLink to="/panchakarma" light>Explore Panchakarma</TextLink></Reveal></div></section>
    <DoctorSection />
    <section className="section"><div className="mx-auto max-w-[1400px]"><Reveal><Eyebrow>Why AYUR MANNOOR</Eyebrow><h2 className="display-title max-w-4xl text-left">A thoughtful approach to wellbeing.</h2></Reveal><div className="mt-16 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">{["Personalized Care","Traditional Wisdom","Holistic Wellbeing","A Calm Environment"].map((x,i)=><div key={x} className="border-b border-border py-8 sm:px-6 sm:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"><span className="text-xs text-accent-foreground">0{i+1}</span><h3 className="mt-6 font-display text-3xl">{x}</h3></div>)}</div></div></section>
    <GalleryStrip />
    <section className="section bg-secondary"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2"><Reveal><Eyebrow>Patient experiences</Eyebrow><h2 className="display-title text-left">What our visitors say.</h2><p className="mt-6 body-copy">Read current patient experiences on Google, where ratings and review counts remain up to date.</p><a href={clinic.directions} target="_blank" rel="noreferrer" className="text-link">View Google Reviews <ArrowRight/></a></Reveal><Reveal className="border-l border-border lg:pl-16"><Eyebrow>Visit AYUR MANNOOR</Eyebrow><address className="font-display text-[clamp(2.5rem,5vw,5rem)] not-italic leading-[.95]">Meenpatti, Karuvanchal,<br/>Kannur, Kerala, India</address><div className="mt-8 flex flex-wrap gap-3"><Button asChild className="rounded-none"><a href={clinic.directions} target="_blank" rel="noreferrer">Get directions</a></Button><Button asChild variant="outline" className="rounded-none"><a href={clinic.phoneLink}>Call us</a></Button></div></Reveal></div></section>
    <BookingBand />
  </>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="mb-7 text-[10px] font-semibold uppercase tracking-[.22em] text-accent-foreground">{children}</p>; }
function TextLink({ to, children, light=false }: { to: string; children: React.ReactNode; light?: boolean }) { return <Link to={to} className={`text-link ${light ? "text-hero after:bg-hero" : ""}`}>{children}<ArrowRight/></Link>; }

export function TreatmentsPreview({ full=false }: { full?: boolean }) {
  const [active, setActive] = useState(0);
  const activeTreatment = treatments[active] ?? treatments[0];
  return <section className="section"><div className="mx-auto max-w-[1400px]"><Reveal><Eyebrow>Our treatments</Eyebrow><h2 className="display-title max-w-4xl text-left">Traditional therapies, thoughtfully delivered.</h2></Reveal><div className="relative mt-14 lg:grid lg:grid-cols-[1fr_360px] lg:gap-16"><div>{treatments.map(([n,name,desc],i)=><Button variant="ghost" key={name} onMouseEnter={()=>setActive(i)} onClick={()=>setActive(i)} className="group grid h-auto w-full grid-cols-[3rem_minmax(0,1fr)_auto] items-start gap-2 rounded-none border-t border-border px-0 py-6 text-left last:border-b hover:bg-transparent sm:grid-cols-[5rem_minmax(0,1fr)_auto]"><span className="pt-2 text-xs text-muted-foreground">{n}</span><span><span className="block font-display text-[clamp(1.7rem,3vw,3rem)] font-normal transition-transform group-hover:translate-x-1">{name}</span><span className={`mt-2 block overflow-hidden text-sm font-normal leading-6 text-muted-foreground transition-all ${active===i||full ? "max-h-20 opacity-100" : "max-h-0 opacity-0 lg:max-h-20 lg:opacity-100"}`}>{desc}</span></span><ArrowRight className="mt-2 size-5 transition-transform group-hover:translate-x-1"/></Button>)}</div><AnimatePresence mode="wait"><motion.img key={active} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} src={activeTreatment[3]} alt={`${activeTreatment[1]} illustrative setting`} className="sticky top-32 hidden aspect-[3/4] h-[480px] w-full object-cover lg:block"/></AnimatePresence></div></div></section>;
}

export function DoctorSection() { return <section className="section bg-secondary"><div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><Reveal><img src={doctorPhoto} width={768} height={1227} loading="lazy" alt="Dr. Anupam Mathew, BAMS" className="aspect-[4/5] w-full object-cover object-top"/></Reveal><Reveal className="lg:px-16"><Eyebrow>Our practitioner</Eyebrow><h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] leading-[.85]">Dr. Anupam<br/><span className="italic">Mathew</span></h2><p className="mt-7 text-sm uppercase tracking-[.18em] text-muted-foreground">BAMS</p><Button asChild className="mt-8 rounded-none"><a href={clinic.phoneLink}>Call for a consultation <ArrowRight/></a></Button></Reveal></div></section>; }

export function GalleryStrip() { const imgs=[[clinicExterior,"Exterior of AYUR MANNOOR clinic"],[clinicReception,"Reception at AYUR MANNOOR"],[clinicLoungeOne,"Seating area at AYUR MANNOOR"],[clinicLoungeTwo,"Clinic lounge at AYUR MANNOOR"],[clinicTreatmentRoom,"Treatment room at AYUR MANNOOR"]]; return <section className="section"><div className="mx-auto max-w-[1400px]"><Reveal className="flex flex-wrap items-end justify-between gap-6"><div><Eyebrow>Gallery</Eyebrow><h2 className="display-title text-left">A quiet sense of place.</h2></div><TextLink to="/gallery">View gallery</TextLink></Reveal><div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">{imgs.map(([src,alt],i)=><img key={alt} src={src} loading="lazy" alt={alt} className={`w-full object-cover transition-transform duration-700 hover:scale-[1.02] ${i===0 ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto md:h-full" : "aspect-[4/3]"}`}/>)}</div></div></section>; }

export function BookingBand() { return <section className="section bg-accent text-accent-foreground"><Reveal className="mx-auto max-w-5xl text-center"><Eyebrow>Begin your journey</Eyebrow><h2 className="display-title">A considered first step towards balance.</h2><p className="mx-auto mt-6 max-w-xl body-copy">Speak with AYUR MANNOOR about consultation and treatments by phone or WhatsApp.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild className="h-12 rounded-none px-7"><a href={clinic.phoneLink}>Call the clinic</a></Button><Button asChild variant="outline" className="h-12 rounded-none px-7"><a href={clinic.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></Button></div></Reveal></section>; }

export function PageIntro({ eyebrow, title, text, image }: { eyebrow:string; title:string; text?:string; image?:string }) { return <section className="page-intro"><div className="mx-auto grid max-w-[1400px] items-end gap-7 md:gap-10 lg:grid-cols-[1fr_.65fr]"><Reveal><Eyebrow>{eyebrow}</Eyebrow><h1 className="font-display text-[3.75rem] leading-[.86] sm:text-[5.5rem] lg:text-[clamp(6rem,8vw,10rem)]">{title}</h1></Reveal>{text&&<Reveal><p className="max-w-md body-copy">{text}</p></Reveal>}</div>{image&&<img src={image} alt="" className="mx-auto mt-10 aspect-[4/3] max-h-[680px] w-full max-w-[1600px] object-cover sm:mt-16 sm:aspect-[16/7]"/>}</section>; }

export function ContactPage() { return <><PageIntro eyebrow="Contact" title="Begin your journey towards balance." text="Contact AYUR MANNOOR directly by phone or WhatsApp to enquire about consultation and treatments."/><section className="section pt-0"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center"><div><Eyebrow>Visit us</Eyebrow><address className="font-display text-4xl not-italic leading-tight">Meenpatti, Karuvanchal,<br/>Kannur, Kerala, India</address><a href={clinic.phoneLink} className="mt-8 flex items-center gap-3 text-lg"><Phone className="size-4"/>{clinic.phone}</a><div className="mt-8 flex flex-wrap gap-3"><Button asChild className="rounded-none"><a href={clinic.phoneLink}>Call the clinic</a></Button><Button asChild variant="outline" className="rounded-none"><a href={clinic.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></Button><Button asChild variant="outline" className="rounded-none"><a href={clinic.directions} target="_blank" rel="noreferrer">Get directions</a></Button></div></div><img src={clinicExterior} alt="Exterior of AYUR MANNOOR clinic in Karuvanchal" loading="lazy" className="aspect-[4/3] w-full object-cover object-center"/></div></section></>; }