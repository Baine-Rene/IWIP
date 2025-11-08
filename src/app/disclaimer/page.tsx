import Navbar from "@/components/navigation/navigation";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-secondary pb-18">
        {/* Full Width Hero */}
        <div className="bg-blue-800 pt-38 pb-24 px-6">
          <div className="container  flex-col items-left space-y-3.5 lg:my-0 lg:flex-row lg:justify- lg:gap-8 mx-auto max-w-7xl lg:px-24 text-white">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-6xl md:p-0  lg:items-start gap-5 lg:flex-1">
              Disclaimer
            </h1>
            <h2 className="text-2xl font-medium tracking-tight ">Please read this disclaimer carefully before using our services</h2>
          </div>
        </div>

        {/* Intro Section */}
        <div className="flex flex-col items-center justify-center py-12 px-6">
          <div className="py-8">
            <div className="container">
              <div className="mx-auto max-w-3xl space-y-8 text-left">
                <p className="text-muted-foreground text-lg leading-7">
                  The information provided by Inspired Work in Progress (&quot;IWIP&quot;) on our website and through our services is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information provided.
                </p>
                <p className="text-muted-foreground text-lg leading-7">
                  Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of our website or reliance on any information provided. Your use of our services and your reliance on any information is solely at your own risk.
                </p>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="container">
              <div className="mx-auto max-w-3xl">
                <h3 className="text-2xl font-semibold pb-5">External Links</h3>
                <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with IWIP. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>

                <h3 className="text-2xl font-semibold py-5">Personal Advice</h3>
                <p>The information provided by IWIP is not intended to be a substitute for professional advice. You should not take actions based solely on the information provided on our website or through our services. Before making any decisions or taking any actions that might affect your career or business, you should consult with a qualified professional.</p>

                <h3 className="text-2xl font-semibold py-5">Changes to disclaimer</h3>
                <p>We reserve the right to make changes to this Disclaimer at any time. We encourage you to periodically review this page for the latest information on our disclaimers and terms. By using our services, you acknowledge that you have read and understood this Disclaimer and agree to be bound by its terms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
