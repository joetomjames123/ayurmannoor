import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, clinic } from "@/components/AyurSite";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy | AYUR MANNOOR" },
    { name: "description", content: "How direct phone and WhatsApp enquiries work on the AYUR MANNOOR website." },
    { property: "og:title", content: "Privacy Policy | AYUR MANNOOR" },
    { property: "og:description", content: "Information about phone and WhatsApp enquiries with AYUR MANNOOR." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Privacy,
});

function Privacy() {
  return <><PageIntro eyebrow="Information" title="Privacy Policy"/><section className="section pt-0"><div className="mx-auto max-w-2xl space-y-8 body-copy"><p>This website does not provide an online enquiry or booking form. To contact AYUR MANNOOR, use the phone or WhatsApp links.</p><p>If you contact AYUR MANNOOR by phone or WhatsApp, your communication is handled through those services. For questions about your enquiry, contact the clinic at <a className="underline" href={clinic.phoneLink}>{clinic.phone}</a>.</p><Link className="text-link" to="/contact">Contact AYUR MANNOOR →</Link></div></section></>;
}