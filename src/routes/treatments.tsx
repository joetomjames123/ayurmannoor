import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, TreatmentsPreview, BookingBand } from "@/components/AyurSite";
export const Route = createFileRoute("/treatments")({ head: () => ({ meta: [
  { title: "Ayurvedic Treatments | AYUR MANNOOR Kannur" }, { name: "description", content: "Explore Ayurvedic consultation, pain management, Panchakarma, massage, Shirodhara and steam therapy at AYUR MANNOOR." },
  { property: "og:title", content: "Ayurvedic Treatments | AYUR MANNOOR" }, { property: "og:description", content: "Traditional Ayurvedic therapies, thoughtfully delivered in Kannur, Kerala." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: () => <><PageIntro eyebrow="Our treatments" title="Care in its most considered form." text="Traditional therapies, thoughtfully delivered and shaped around individualized care."/><TreatmentsPreview full/><BookingBand/></> });
