import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/yatrika/Navbar";
import { Hero } from "@/components/yatrika/Hero";
import { Categories } from "@/components/yatrika/Categories";
import { Regions } from "@/components/yatrika/Regions";
import { Destinations } from "@/components/yatrika/Destination";
import { CTA } from "@/components/yatrika/CTA";
import { Footer } from "@/components/yatrika/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yatrika — Cinematic travel experiences" },
      {
        name: "description",
        content:
          "Explore cinematic travel destinations, curated journeys, and premium escapes with Yatrika.",
      },
      { property: "og:title", content: "Yatrika — Cinematic travel experiences" },
      {
        property: "og:description",
        content: "Discover premium travel escapes with cinematic style and expert planning.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <Regions />
      <Destinations />
      <CTA />
      <Footer />
    </main>
  );
}
