import Hero from "@/components/hero";
import Features from "@/components/features";
import Why from "@/components/why";
import FAQ from "@/components/faq";
import { Download } from "@/components/download";
import { PageTransition } from "@/components/PageTransition";
export default function Home() {
  return (
    <>
      <PageTransition>
        <Hero />
        <Features />
        <Why />
        <FAQ />
        <Download />
      </PageTransition>
    </>
  );
}
