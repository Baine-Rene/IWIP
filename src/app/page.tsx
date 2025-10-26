
import { Hero } from "@/components/hero";
import Navbar from "@/components/navigation/navigation";
import Features from "@/components/features";
import FAQ from "@/components/faq";
import Team from "@/components/team";
import Footer from "@/components/footer";
import { Download2 } from "@/components/download";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Features/>
      <FAQ/>
      <Team/>
      <Download2/>
      <Footer/>
    </>
  );
}
