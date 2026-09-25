import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/AyurSite";
export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact & Consultation | AYUR MANNOOR Kannur" }, { name: "description", content: "Contact AYUR MANNOOR in Meenpatti, Karuvanchal, Kannur for Ayurvedic consultation and treatment enquiries. Call +91 75599 55181." },
  { property: "og:title", content: "Contact AYUR MANNOOR" }, { property: "og:description", content: "Begin your consultation enquiry with AYUR MANNOOR in Kannur, Kerala." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ContactPage });
