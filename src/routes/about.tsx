import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, BookingBand } from "@/components/AyurSite";
import veranda from "@/assets/kerala-veranda.jpg";
import details from "@/assets/ayurveda-details.jpg";
import doctor from "@/assets/dr-anupam-mathew.jpeg.asset.json";
export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "About AYUR MANNOOR | Ayurveda in Kannur" }, { name: "description", content: "Discover the thoughtful approach to Ayurvedic care at AYUR MANNOOR in Karuvanchal, Kannur." },
  { property: "og:title", content: "About AYUR MANNOOR" }, { property: "og:description", content: "Personalized Ayurvedic consultation and traditional therapies in a calm setting in Kannur." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: About });
function About(){ return <><PageIntro eyebrow="About AYUR MANNOOR" title="Wellness begins with balance." text="Rooted in Ayurvedic traditions, AYUR MANNOOR provides personalized consultation and traditional therapies in a calm and welcoming environment." image={doctor.url}/><section className="section"><div className="mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-2"><div><p className="eyebrow">Our approach</p><h2 className="display-title text-left">Thoughtful care, rooted in tradition.</h2><p className="mt-8 body-copy">An Ayurvedic Clinic & Treatment Centre in Meenpatti, Karuvanchal, Kannur, focused on individual consultation and traditional wellness therapies.</p><Link to="/treatments" className="text-link">Explore treatments →</Link></div><img src={details} width={1104} height={1408} loading="lazy" alt="Illustrative Ayurvedic herbs and oils" className="aspect-[4/5] w-full object-cover"/></div></section><BookingBand/></>; }
