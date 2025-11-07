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
              Privacy Policy
            </h1>
            <p className="text-2xl font-medium tracking-tight ">Your privacy matters to us</p>
            <p >Last Updated: 20/06/2025</p>
          </div>
        </div>

        {/* Intro Section */}
        <div className="flex flex-col items-center justify-center py-12 px-6">
          <div className="py-8">
            <div className="container">
              <div className="mx-auto max-w-3xl space-y-8 text-left">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Introduction
                </h2>
                <p className="text-muted-foreground text-lg leading-7">
                  Inspired Work in Progress (&quot;IWIP,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at inspiredworkinprogress.com, use our mobile applications (iOS and Android), or engage with our services.
                </p>
              </div>
            </div>
          </div>

          {/* Information collected */}
          <div className="py-5">
            <div className="container">
              <div className="mx-auto max-w-3xl">
                <p>Please read this Privacy Policy carefully. By using our services, you agree to the collection and use of information in accordance with this policy.</p>
                <h2 className="text-3xl font-bold py-5" >Information We Collect</h2>
                <h3 className="text-2xl font-semibold pb-5">Personal Information You Provide</h3>

                <ul className="list-disc list-inside">
                  <li><strong>Account Information:</strong> Name, email address, username, password</li>
                  <li><strong>Profile Information:</strong> Professional background, career goals, skills, experience</li>
                  <li><strong>Contact Information:</strong> Phone number, mailing address (if provided)</li>
                  <li><strong>Payment Information:</strong> Billing details for paid services (processed securely through third-party payment processors)</li>
                  <li><strong>Communications:</strong> Messages, feedback, and correspondence with us</li>
                </ul>

                <h3 className="text-2xl font-semibold py-5">Information Collected Automatically</h3>
                <ul className="list-disc list-inside">
                  <li><strong>Usage Data:</strong> How you interact with our website and mobile apps, features used, time spent</li>
                  <li><strong>Device Information:</strong> Device type, operating system, browser type, IP address, unique device identifiers</li>
                  <li><strong>Location Data:</strong> General location information (with your permission on mobile devices)</li>
                  <li><strong>Cookies and Tracking:</strong> Information collected through cookies, web beacons, and similar technologies</li>
                </ul>

                <h3 className="text-2xl font-semibold py-5">Information from Third Parties</h3>
                <ul className="list-disc list-inside">
                  <li><strong>Social Media:</strong> If you connect social media accounts, we may receive publicly available information</li>
                  <li><strong>Professional Networks:</strong> Information from LinkedIn or other professional platforms (with your consent)</li>
                  <li><strong>Partners:</strong> Information from business partners or service providers that help us provide our services</li>
                </ul>

                <h2 className="text-2xl font-semibold py-5" >How We Use your information</h2>
                <p className="">We use the collected information for the following purposes:</p>
                <h3 className="text-2xl font-semibold py-5">Service Provision</h3>
                <ul className="list-disc list-inside">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Create and manage your account</li>
                  <li>Personalize your experience and content recommendations</li>
                  <li>Process transactions and send related information</li>
                </ul>
                <h3 className="text-2xl font-semibold py-5">Communication</h3>
                <ul className="list-disc list-inside">
                  <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send important notices about our services</li>
                </ul>
                <h3 className="text-2xl font-semibold py-5">Analytics and Improvement</h3>
                <ul className="list-disc list-inside">
                  <li>Analyze usage patterns to improve our services</li>
                  <li>Conduct research and analytics</li>
                  <li>Develop new features and services</li>
                </ul>
                <h3 className="text-2xl font-semibold py-5">Legal and Security</h3>
                <ul className="list-disc list-inside">
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud, abuse, and security threats</li>
                  <li>Enforce our terms of service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
