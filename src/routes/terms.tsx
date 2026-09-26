import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, clinic } from "@/components/AyurSite";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms | AYUR MANNOOR" },
    { name: "description", content: "Information about using the AYUR MANNOOR website and contacting the clinic directly." },
    { property: "og:title", content: "Terms | AYUR MANNOOR" },
    { property: "og:description", content: "Information about using the AYUR MANNOOR website." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Terms,
});

function Terms() {
  return <><PageIntro eyebrow="Information" title="Terms"/><section className="section pt-0"><div className="mx-auto max-w-2xl space-y-8 body-copy"><p>Information on this website is for general information and does not replace a personal consultation or medical advice. Treatment suitability is discussed with the clinic individually.</p><p>This website does not accept bookings. Please call <a className="underline" href={clinic.phoneLink}>{clinic.phone}</a> or contact the clinic on WhatsApp to discuss availability. An enquiry does not confirm an appointment.</p><Link className="text-link" to="/contact">Contact AYUR MANNOOR →</Link></div></section></>;
}