import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/ayur-mannoor-hero-fast.mp4.asset.json";
import heroPoster from "@/assets/ayur-mannoor-poster.jpg.asset.json";
import doctorPhoto from "@/assets/dr-anupam-mathew.jpeg.asset.json";
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
  const light = isHome && !scrolled && !open;

  return <>
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${light ? "border-transparent bg-transparent text-hero" : "border-border/70 bg-background/95 text-foreground backdrop-blur-md"}`}>
      <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:h-24 lg:grid-cols-[auto_1fr_auto] lg:px-12">
        <Link to="/" className="min-w-0 font-display text-xl leading-none tracking-wide sm:text-2xl">AYUR MANNOOR</Link>
        <nav className="mx-auto hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, to]) => <Link key={to} to={to} className="nav-link text-[11px] uppercase tracking-[0.12em]" activeProps={{ className: "nav-link is-active text-[11px] uppercase tracking-[0.12em]" }}>{label}</Link>)}
        </nav>
        <Button asChild className={`hidden h-11 rounded-none px-5 text-[11px] uppercase tracking-[0.12em] lg:inline-flex ${light ? "bg-hero text-foreground hover:bg-hero/90" : ""}`}><Link to="/contact">Book consultation</Link></Button>
        <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} className="justify-self-end lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </header>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex min-h-dvh flex-col bg-primary px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-28 text-primary-foreground lg:hidden">
      <nav className="flex flex-1 flex-col justify-center gap-4" aria-label="Mobile navigation">{nav.map(([label, to], index) => <motion.div key={to} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .04 }}><Link to={to} className="font-display text-4xl sm:text-5xl">{label}</Link></motion.div>)}</nav>
      <Button asChild variant="outline" className="h-12 rounded-none border-primary-foreground/40 bg-transparent text-primary-foreground"><Link to="/contact">Book consultation</Link></Button>
    </motion.div>}</AnimatePresence>
    <main>{children}</main>
    <Footer />
    <a href={clinic.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with AYUR MANNOOR on WhatsApp" className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105 sm:right-6"><span className="text-xs font-semibold">WA</span><span className="pointer-events-none absolute right-14 hidden whitespace-nowrap bg-primary px-3 py-2 text-xs group-hover:block">Chat with AYUR MANNOOR</span></a>
  </>;
}

function Footer() {
  return <footer className="bg-primary px-5 py-16 text-primary-foreground sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-[1500px]">
      <p className="font-display text-[clamp(3rem,9vw,9rem)] leading-[.8]">AYUR MANNOOR</p>
      <div className="mt-14 grid gap-10 border-t border-primary-foreground/20 pt-8 md:grid-cols-3">
        <p className="text-sm leading-7 text-primary-foreground/70">Ayurvedic Clinic & Treatment Centre<br/>Meenpatti, Karuvanchal, Kannur, Kerala</p>
        <nav className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm">{nav.map(([label,to]) => <Link key={to} to={to}>{label}</Link>)}</nav>
        <div className="md:text-right"><a href={clinic.phoneLink} className="font-display text-2xl">{clinic.phone}</a><p className="mt-6 text-xs text-primary-foreground/60">© AYUR MANNOOR. All rights reserved.</p></div>
      </div>
    </div>
  </footer>;
}

export function Hero() {
  const reduce = useReducedMotion();
  return <section className="relative min-h-[92svh] overflow-hidden bg-primary text-hero">
    <video className="absolute inset-0 h-full w-full object-cover object-center hero-video" autoPlay loop muted playsInline preload="metadata" poster={heroPoster.url} aria-label="AYUR MANNOOR brand film"><source src={heroVideo.url} type="video/mp4" /></video>
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="relative mx-auto flex min-h-[92svh] max-w-[1500px] items-end px-5 pb-[max(3.5rem,env(safe-area-inset-bottom))] pt-32 sm:px-8 lg:px-12 lg:pb-16">
      <div className="max-w-4xl">
        <motion.p initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .25 }} className="mb-5 text-[10px] uppercase tracking-[.22em] sm:text-xs">Ayurvedic Clinic & Treatment Centre</motion.p>
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .4 }} className="font-display text-[clamp(4rem,9vw,8.5rem)] leading-[.82]">The Art of<br/><span className="italic font-normal">Ayurvedic</span> Wellbeing</motion.h1>
        <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .8 }} className="mt-7 grid gap-6 sm:grid-cols-[minmax(0,30rem)_auto] sm:items-end"><p className="max-w-md text-sm leading-7 text-hero/85 sm:text-base">Traditional wisdom, personalized care, and a deeper connection with wellbeing.</p><div className="flex flex-wrap gap-3"><Button asChild className="h-12 rounded-none bg-hero px-5 text-foreground hover:bg-hero/90"><Link to="/contact">Book a consultation</Link></Button><Button asChild variant="outline" className="h-12 rounded-none border-hero/50 bg-transparent px-5 text-hero hover:bg-hero hover:text-foreground"><Link to="/treatments">Explore treatments</Link></Button></div></motion.div>
      </div>
      <ArrowDown className="absolute bottom-8 right-6 hidden size-5 animate-gentle-bob lg:block" aria-hidden="true" />
    </div>
  </section>;
}

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

export function HomePage() {
  const { scrollYProgress } = useScroll(); const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  return <>
    <Hero />
    <section className="section"><Reveal className="mx-auto max-w-5xl text-center"><Eyebrow>A traditional approach to modern wellbeing</Eyebrow><h2 className="display-title">Where Ayurvedic wisdom meets thoughtful, personalized care.</h2><p className="mx-auto mt-8 max-w-2xl body-copy">AYUR MANNOOR is an Ayurvedic Clinic & Treatment Centre in Meenpatti, Karuvanchal, Kannur, focused on Ayurvedic consultation and traditional wellness therapies.</p><TextLink to="/about">Discover AYUR MANNOOR</TextLink></Reveal></section>
    <section className="section bg-secondary"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><Reveal><img src={doctorPhoto.url} width={768} height={1227} loading="lazy" alt="Dr. Anupam Mathew at AYUR MANNOOR" className="aspect-[4/3] w-full object-cover object-[center_62%]"/></Reveal><Reveal className="lg:px-12"><Eyebrow>Our approach</Eyebrow><h2 className="display-title text-left">Wellness begins with balance.</h2><p className="mt-6 max-w-lg body-copy">Rooted in Ayurvedic traditions, AYUR MANNOOR provides personalized consultation and traditional therapies in a calm and welcoming environment.</p><TextLink to="/about">Explore AYUR MANNOOR</TextLink></Reveal></div></section>
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

export function DoctorSection() { return <section className="section bg-secondary"><div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><Reveal><img src={doctorPhoto.url} width={768} height={1227} loading="lazy" alt="Dr. Anupam Mathew, BAMS" className="aspect-[4/5] w-full object-cover object-top"/></Reveal><Reveal className="lg:px-16"><Eyebrow>Our practitioner</Eyebrow><h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] leading-[.85]">Dr. Anupam<br/><span className="italic">Mathew</span></h2><p className="mt-7 text-sm uppercase tracking-[.18em] text-muted-foreground">BAMS</p><TextLink to="/contact">Book a consultation</TextLink></Reveal></div></section>; }

export function GalleryStrip() { const imgs=[[details,"Ayurvedic oils and herbs"],[doctorPhoto.url,"Dr. Anupam Mathew"],[shirodhara,"Traditional Shirodhara setting"],[veranda,"Kerala wellness environment"]]; return <section className="section"><div className="mx-auto max-w-[1400px]"><Reveal className="flex items-end justify-between"><div><Eyebrow>Gallery</Eyebrow><h2 className="display-title text-left">A quiet sense of place.</h2></div><TextLink to="/gallery">View gallery</TextLink></Reveal><div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">{imgs.map(([src,alt],i)=><img key={alt} src={src} loading="lazy" alt={alt} className={`w-full object-cover transition-transform duration-700 hover:scale-[1.02] ${i%2 ? "mt-10 aspect-[3/4]" : "aspect-[3/4]"}`}/>)}</div></div></section>; }

export function BookingBand() { return <section className="section bg-accent text-accent-foreground"><Reveal className="mx-auto max-w-5xl text-center"><Eyebrow>Begin your journey</Eyebrow><h2 className="display-title">A considered first step towards balance.</h2><p className="mx-auto mt-6 max-w-xl body-copy">Connect with AYUR MANNOOR to enquire about consultation and treatments.</p><Button asChild className="mt-9 h-12 rounded-none px-7"><Link to="/contact">Book a consultation</Link></Button></Reveal></section>; }

export function PageIntro({ eyebrow, title, text, image }: { eyebrow:string; title:string; text?:string; image?:string }) { return <section className="page-intro"><div className="mx-auto grid max-w-[1400px] items-end gap-10 lg:grid-cols-[1fr_.65fr]"><Reveal><Eyebrow>{eyebrow}</Eyebrow><h1 className="font-display text-[clamp(4.5rem,10vw,10rem)] leading-[.8]">{title}</h1></Reveal>{text&&<Reveal><p className="max-w-md body-copy">{text}</p></Reveal>}</div>{image&&<img src={image} alt="" className="mx-auto mt-16 aspect-[16/7] max-h-[680px] w-full max-w-[1600px] object-cover"/>}</section>; }

export function ContactForm() {
  const [sent,setSent]=useState(false);
  function submit(e:FormEvent<HTMLFormElement>){ e.preventDefault(); const data=new FormData(e.currentTarget); const body=["Consultation enquiry",...Array.from(data.entries()).map(([k,v])=>`${k}: ${v}`)].join("\n"); window.open(`${clinic.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer"); setSent(true); }
  const fields=["Name","Phone","Email","Preferred Date","Preferred Time","Treatment"];
  return <form onSubmit={submit} className="grid gap-x-8 sm:grid-cols-2">{fields.map(x=><label key={x} className="form-field"><span>{x}</span>{x==="Treatment"?<select name={x} required defaultValue=""><option value="" disabled>Select treatment</option>{treatments.map(t=><option key={t[1]}>{t[1]}</option>)}</select>:<input name={x} required={x==="Name"||x==="Phone"} type={x==="Email"?"email":x==="Preferred Date"?"date":x==="Preferred Time"?"time":x==="Phone"?"tel":"text"}/>}</label>)}<label className="form-field sm:col-span-2"><span>Message</span><textarea name="Message" rows={4}/></label><div className="mt-8 sm:col-span-2"><Button type="submit" className="h-12 rounded-none px-7">Request consultation <ArrowRight/></Button>{sent&&<p className="mt-4 text-sm text-muted-foreground">WhatsApp has opened with your enquiry. Please press send there to contact the clinic.</p>}</div></form>;
}

export function ContactPage() { return <><PageIntro eyebrow="Contact" title="Begin your journey towards balance." text="Connect with AYUR MANNOOR to enquire about consultation and treatments."/><section className="section pt-0"><div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[.7fr_1.3fr]"><div><Eyebrow>Visit us</Eyebrow><address className="font-display text-4xl not-italic leading-tight">Meenpatti, Karuvanchal,<br/>Kannur, Kerala, India</address><a href={clinic.phoneLink} className="mt-8 flex items-center gap-3 text-lg"><Phone className="size-4"/>{clinic.phone}</a><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="outline" className="rounded-none"><a href={clinic.directions} target="_blank" rel="noreferrer">Get directions</a></Button><Button asChild variant="outline" className="rounded-none"><a href={clinic.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></Button></div></div><ContactForm/></div></section></>; }