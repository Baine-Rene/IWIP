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
                <h2 className="text-2xl font-semibold py-5" >Information Sharing and Disclosure</h2>
                <p className="">We do not sell your personal information. We may share your information in the following circumstances:</p>
                <h3>With Your Consent</h3>
                <p>We will share information when you explicitly consent to such sharing.</p>

                <h3 className="text-2xl font-semibold py-5">Service Providers</h3>
                <p>We may share information with trusted third-party service providers who assist us in operating our services, such as:</p>
                <ul className="list-disc list-inside">
                  <li>Cloud hosting providers</li>
                  <li>Payment processors</li>
                  <li>Email service providers</li>
                  <li>Analytics providers</li>
                </ul>

                <h3 className="text-2xl font-semibold py-5">Legal Requirements</h3>
                <p>We may disclose information if required by law or in response to:</p>
                <ul className="list-disc list-inside">
                  <li>Valid legal processes (subpoenas, court orders)</li>
                  <li>Government requests</li>
                  <li>Protection of our rights, property, or safety</li>
                  <li>Prevention of fraud or illegal activities</li>
                </ul>
                <h3 className="text-2xl font-semibold py-5">Business Transfers</h3>
                <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
                <h2 className="text-2xl font-semibold py-5">Data Security</h2>

                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>

                <ul className="list-disc list-inside">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                </ul>

                <p>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

                <h2>Your Privacy Rights</h2>

                <p>Depending on your location, you may have the following rights:</p>

                <h3 className="text-2xl font-semibold py-5">Access and Portability</h3>
                <ul className="list-disc list-inside">
                  <li>Request access to your personal information</li>
                  <li>Receive a copy of your data in a portable format</li>
                </ul>

                <h3 className="text-2xl font-semibold py-5">Correction and Deletion</h3>
                <ul className="list-disc list-inside">
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information (subject to legal requirements)</li>
                </ul>

                <h3 className="text-2xl font-semibold py-5">Control and Limitation</h3>
                <ul className="list-disc list-inside">
                  <li>Opt-out of marketing communications</li>
                  <li>Limit the processing of your information</li>
                  <li>Object to certain uses of your data</li>
                </ul>

                <h3 className="text-2xl font-semibold py-5">Mobile App Permissions</h3>
                <p>For our mobile applications, you can:</p>
                <ul className="list-disc list-inside">
                  <li>Manage app permissions through your device settings</li>
                  <li>Control location sharing</li>
                  <li>Disable push notifications</li>
                </ul>

                <p>To exercise these rights, contact us at privacy@inspiredworkinprogress.com.</p>

                <h2 className="text-2xl font-semibold py-5">Cookies and Tracking Technologies</h2>

                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our services</li>
                </ul>

                <p>You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.</p>

                <h2 className="text-2xl font-semibold py-5">Third-Party Links and Services</h2>

                <p>Our services may contain links to third-party websites or integrate with third-party services. This Privacy Policy does not apply to these external sites or services. We encourage you to review the privacy policies of any third-party services you use.</p>

                <h2>Children&apos;s Privacy</h2>

                <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>

                <h2 className="text-2xl font-semibold py-5">International Data Transfers</h2>

                <p>If you are located outside the United States, please note that your information may be transferred to and processed in the United States. We will ensure appropriate safeguards are in place for such transfers.</p>

                <h2>Data Retention</h2>

                <p>We will retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. We will also retain information as required by law or to resolve disputes and enforce our agreements.</p>

                <p>Specific retention periods:</p>
                <ul className="list-disc list-inside">
                  <li>Account information: Until account deletion plus 30 days</li>
                  <li>Usage data: Up to 2 years</li>
                  <li>Communications: Up to 3 years</li>
                  <li>Payment information: As required by law and payment processors</li>
                </ul>

                <h2 className="text-2xl font-semibold py-5">Changes to This Privacy Policy</h2>

                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
                <ul className="list-disc list-inside">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending an email notification (for significant changes)</li>
                  <li>Providing in-app notifications (for mobile app users)</li>
                </ul>

                <p>The &quot;Last Updated&quot; date at the top of this policy indicates when it was last revised.</p>
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
