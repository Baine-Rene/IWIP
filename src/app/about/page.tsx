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
          <div className="container flex flex-col items-left lg:my-0 lg:flex-row lg:justify-center lg:gap-8 mx-auto max-w-7xl lg:px-24 text-white">
            <h1 className="text-5xl font-bold tracking-tight md:text-5xl lg:text-6xl md:p-0 px-10  lg:items-start gap-5 lg:flex-1">
              About us
            </h1>
          </div>
        </div>

        {/* Intro Section */}
        <div className="flex flex-col items-center justify-center py-12 px-6">
          <div className="py-6">
            <div className="container">
              <div className="mx-auto max-w-3xl space-y-8 text-left">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Digitalizing the way we network, one click at a time.
                </h2>
                <p className="text-muted-foreground text-lg leading-7">
                  Inspired Work in Progress (IWIP) is a global networking organization dedicated to creating an inclusive community where professionals from diverse backgrounds can connect, collaborate, and grow together.
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="py-5">
            <div className="container">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold pb-5" >What we do</h2>
                <ul className="list-disc list-inside">
                  <li>All Links in One Place: From LinkedIn to Instagram, from your website to portfolio—bring all your important links into one professional hub.</li>
                  <li>Authenticity: We foster genuine connections based on trust and mutual respect.</li>
                  <li>Document Uploads: Showcase resumes, pitch decks, portfolios, or presentations directly on your profile.</li>
                  <li>What You’re Looking For: Let opportunities find you by highlighting what you’re seeking—whether it’s jobs, collaborations, mentors, or clients.</li>
                </ul>

                <h2 className="text-3xl font-bold py-5" >Our Mission</h2>
                <p>To redefine networking by making it smarter, more human, and more impactful, so that every connection can lead to real opportunities.</p>
                <h2 className="text-3xl font-bold py-5" >Our Vision</h2>
                <p>Build authentic, lasting connections by combining simplicity, personalization, and technology.</p>

                <h2 className="text-2xl font-semibold py-5">Our Values</h2>
                <ul className="list-disc list-inside">
                  <li>Inclusivity: We welcome professionals from all backgrounds, industries, and career stages.</li>
                  <li>Authenticity: We foster genuine connections based on trust and mutual respect.</li>
                  <li>Collaboration: We encourage knowledge sharing and partnerships that lead to innovative solutions.</li>
                  <li>Growth: We support continuous learning and development in both personal and professional spheres.</li>
                </ul>

                <h2 className="text-2xl font-semibold py-5" >What we offer</h2>
                <ul className="list-disc list-inside">
                  <li>Networking opportunities with professionals across various industries</li>
                  <li>Virtual and in-person events designed to foster meaningful connections</li>
                  <li>Resources and tools to enhance your professional development</li>
                  <li>A supportive community that celebrates diversity and inclusion</li>
                </ul>
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
