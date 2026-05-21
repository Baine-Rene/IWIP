import Navbar from "@/components/navigation/navigation";
import { PageTransition } from "@/components/PageTransition";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function Home() {
  return (
    <>
      <PageTransition>
        <Navbar />
        <PrivacyPolicy />
      </PageTransition>
    </>
  );
}