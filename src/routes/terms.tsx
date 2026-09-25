import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, clinic } from "@/components/AyurSite";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms | AYUR MANNOOR" },
    { name: "description", content: "Information about using the AYUR MANNOOR website and consultation enquiry form." },
    { property: "og:title", content: "Terms | AYUR MANNOOR" },
    { property: "og:description", content: "Information about using the AYUR MANNOOR website." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Terms,
});

function Terms() {
  return <><PageIntro eyebrow="Information" title="Terms"/><section className="section pt-0"><div className="mx-auto max-w-2xl space-y-8 body-copy"><p>Information on this website is for general information and does not replace a personal consultation or medical advice. Treatment suitability is discussed with the clinic individually.</p><p>Submitting the enquiry form opens WhatsApp with a prepared message; your enquiry is not sent until you confirm it there. Sending an enquiry does not confirm an appointment. Please call <a className="underline" href={clinic.phoneLink}>{clinic.phone}</a> for urgent scheduling questions.</p><Link className="text-link" to="/contact">Contact AYUR MANNOOR →</Link></div></section></>;
}