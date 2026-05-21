import Navbar from "@/components/navigation/navigation";
import { PageTransition } from "@/components/PageTransition";
import TermsOfService from "@/components/TermsOfService";

export default function Home() {
  return (
    <>
      <PageTransition>
        <Navbar />
        <TermsOfService />
      </PageTransition>
    </>
  );
}