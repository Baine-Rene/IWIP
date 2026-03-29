import Hero from "@/components/hero";
import Navbar from "@/components/navigation/navigation";
import Features from "@/components/features";
import Why from "@/components/why";
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
        <Why />
        <Team />
        <FAQ />
        <Download2 />
        <Footer />
      </PageTransition>
    </>
  );
}
