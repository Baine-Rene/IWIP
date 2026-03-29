import Navbar from "@/components/navigation/navigation";
import Footer from "@/components/footer";
import { PageTransition } from "@/components/PageTransition";
export default function Home() {
  return (
    <>
      <PageTransition>
        <Navbar />
        <section className="bg-secondary pb-18">
          {/* Full Width Hero */}
          <div className="bg-blue-800 pt-38 pb-24 px-6">
            <div className="container  flex-col items-left space-y-3.5 lg:my-0 lg:flex-row lg:justify- lg:gap-8 mx-auto max-w-7xl lg:px-24 text-white">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-6xl md:p-0  lg:items-start gap-5 lg:flex-1">
                Events
              </h1>
              <h2 className="text-2xl font-medium tracking-tight ">
                Host and manage events directly within your community.
              </h2>
            </div>
          </div>

          {/* Intro Section */}
          <div className="flex flex-col items-center justify-center py-12 px-6">
            <div className="py-8">
              <div className="container">
                <div className="mx-auto max-w-3xl space-y-8 text-left">
                  <p className="text-muted-foreground text-lg leading-7">
                    Bring people together, track engagement, and turn every
                    event into lasting connections. We help create and manage
                    events within your online community, see who’s attending,
                    and keep the conversation going before and after the event.
                    IWIP turns events into ongoing relationships - not one -time
                    moments.
                  </p>
                  <p className="text-muted-foreground text-lg leading-7">
                    Under no circumstance shall we have any liability to you for
                    any loss or damage of any kind incurred as a result of the
                    use of our website or reliance on any information provided.
                    Your use of our services and your reliance on any
                    information is solely at your own risk.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <Footer />
      </PageTransition>
    </>
  );
}
