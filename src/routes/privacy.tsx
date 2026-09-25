import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, clinic } from "@/components/AyurSite";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy | AYUR MANNOOR" },
    { name: "description", content: "How consultation enquiries are handled on the AYUR MANNOOR website." },
    { property: "og:title", content: "Privacy Policy | AYUR MANNOOR" },
    { property: "og:description", content: "Information about consultation enquiries on the AYUR MANNOOR website." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Privacy,
});

function Privacy() {
  return <><PageIntro eyebrow="Information" title="Privacy Policy"/><section className="section pt-0"><div className="mx-auto max-w-2xl space-y-8 body-copy"><p>When you complete the consultation enquiry form, your details are prepared as a WhatsApp message on your device. You choose whether to send that message. This website does not submit the form to its own enquiry database.</p><p>If you contact AYUR MANNOOR by phone or WhatsApp, your communication is handled through those services. For questions about your enquiry, contact the clinic at <a className="underline" href={clinic.phoneLink}>{clinic.phone}</a>.</p><Link className="text-link" to="/contact">Contact AYUR MANNOOR →</Link></div></section></>;
}