
import Hero from "@/components/hero";
import Navbar from "@/components/navigation/navigation";
import Features from "@/components/features";
import Features02 from "@/components/features-2";
import FAQ from "@/components/faq";
import Team from "@/components/team";
import Footer from "@/components/footer";
import { Download2 } from "@/components/download";

import { PageTransition } from "@/components/PageTransition";
export default function Home() {
  return (
    <>
      <PageTransition>
        <Navbar />
        <Hero />
        <Features />
        <Features02 />
        <Team />
        <FAQ />
        <Download2 />
        <Footer />
      </PageTransition>
    </>
  );
}
