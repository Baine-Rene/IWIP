import { PageTransition } from "@/components/PageTransition";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function Home() {
  return (
    <>
      <PageTransition>
        <PrivacyPolicy />
      </PageTransition>
    </>
  );
}