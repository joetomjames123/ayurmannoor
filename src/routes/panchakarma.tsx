import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, BookingBand } from "@/components/AyurSite";
import treatmentRoom from "@/assets/treatment-room.jpg";
import shirodhara from "@/assets/shirodhara.jpg";
export const Route = createFileRoute("/panchakarma")({ head: () => ({ meta: [
  { title: "Panchakarma Experience | AYUR MANNOOR Kannur" }, { name: "description", content: "Explore the Panchakarma experience at AYUR MANNOOR, an Ayurvedic Clinic & Treatment Centre in Kannur, Kerala." },
  { property: "og:title", content: "Panchakarma | AYUR MANNOOR" }, { property: "og:description", content: "A deeper journey towards balance with individualized Ayurvedic care." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Panchakarma });
function Panchakarma(){return <><PageIntro eyebrow="The Panchakarma experience" title="A deeper journey towards balance." text="Explore traditional Ayurvedic therapies designed around individualized care and holistic wellbeing." image={treatmentRoom}/><section className="section"><div className="mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-2"><img src={shirodhara} width={1104} height={1408} loading="lazy" alt="Traditional Shirodhara setting" className="aspect-[4/5] w-full object-cover"/><div className="lg:px-12"><p className="eyebrow">Individualized care</p><h2 className="display-title text-left">Tradition, with intention.</h2><p className="mt-8 body-copy">Learn more about Panchakarma and which therapies may be appropriate for you during a consultation.</p></div></div></section><BookingBand/></>}
