import { PageTransition } from "@/components/PageTransition";
import TermsOfService from "@/components/TermsOfService";

export default function Home() {
  return (
    <>
      <PageTransition>
        <TermsOfService />
      </PageTransition>
    </>
  );
}