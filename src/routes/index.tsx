import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/AyurSite";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "AYUR MANNOOR | Ayurvedic Clinic & Treatment Centre in Kannur" },
    { name: "description", content: "AYUR MANNOOR is an Ayurvedic Clinic & Treatment Centre in Meenpatti, Karuvanchal, Kannur, offering Ayurvedic consultation and traditional wellness therapies." },
    { property: "og:title", content: "AYUR MANNOOR | Ayurvedic Clinic & Treatment Centre in Kannur" },
    { property: "og:description", content: "Traditional Ayurvedic consultation and wellness therapies in Meenpatti, Karuvanchal, Kannur." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }] }),
  component: HomePage,
});
