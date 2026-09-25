import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, DoctorSection, BookingBand } from "@/components/AyurSite";
export const Route = createFileRoute("/doctor")({ head: () => ({ meta: [
  { title: "Dr. Anupam Mathew, BAMS | AYUR MANNOOR" }, { name: "description", content: "Meet Dr. Anupam Mathew, BAMS, at AYUR MANNOOR Ayurvedic Clinic & Treatment Centre in Kannur." },
  { property: "og:title", content: "Dr. Anupam Mathew | AYUR MANNOOR" }, { property: "og:description", content: "Meet the practitioner at AYUR MANNOOR in Kannur, Kerala." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: () => <><PageIntro eyebrow="Our practitioner" title="Dr. Anupam Mathew" text="BAMS"/><DoctorSection/><BookingBand/></> });
