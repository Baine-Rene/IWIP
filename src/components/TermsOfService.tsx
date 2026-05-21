// components/TermsOfService.tsx (or .jsx)

export default function TermsOfService() {
  const sections = [
    {
      title: "1. General Terms",
      content: `These Terms of Service ("Terms") govern access to and use of the IWIP mobile application and related services (collectively, the "Service"), which are owned and operated by Young Eye Tech Limited, a company duly incorporated under the laws of Uganda. By accessing, downloading, registering for, or using IWIP, you agree to be bound by these Terms. If you do not agree, you should not use the Service.`,
    },
    {
      title: "2. Purpose of the Application",
      content: `IWIP is designed to act as a digital personal profile that enables users to quickly and effectively share selected personal and professional information at events, conferences, meetings, and similar networking environments. The Application functions as a digital replacement for traditional business cards, allowing users to share their profile and documents efficiently through digital means including QR code sharing.`,
    },
    {
      title: "3. Account Registration and Information Collection",
      content: `To create an account, you are required to provide your name and email address. All other information is optional. Optional information includes phone numbers, social media links, an 'About You' section, and documents such as resumes or cover letters. You are solely responsible for ensuring that any information you provide is accurate and lawful.`,
    },
    {
      title: "4. Data Storage and Infrastructure",
      content: `All user data is stored and processed using Google Firebase, a cloud-based infrastructure service. By using the Application, you acknowledge that your data will be stored on this infrastructure. While reasonable technical and organizational safeguards are implemented, no system can be guaranteed to be completely secure.`,
    },
    {
      title: "5. License",
      content: `IWIP grants you a limited, non-exclusive, non-transferable, and revocable license to use the Application in accordance with these Terms. You may not reverse engineer, modify, copy, extract source code, or commercially exploit the Application without prior written consent.`,
    },
    {
      title: "6. User Content and Document Uploads",
      content: `You may upload documents such as resumes, cover letters, proposals, and other materials at your discretion. You represent and warrant that you have the right to upload such materials and that they do not infringe any third-party rights or violate any applicable laws. You remain solely responsible for all content you upload.`,
    },
    {
      title: "7. Subscriptions, Billing and Payments",
      content: `The app offers both a Free Plan and Paid Subscription Plans. Paid subscriptions renew automatically unless cancelled before the renewal date. All payments are processed through Stripe using Visa or Mastercard. The app does not store full card details. Refunds may be available at the company's discretion or where required by applicable consumer protection law. If a payment fails, access to paid features may be suspended.`,
    },
    {
      title: "8. No Cookies",
      content: `The app does not use cookies or similar tracking technologies for analytics, advertising, profiling, or tracking purposes.`,
    },
    {
      title: "9. Third-Party Services",
      content: `The Application relies on third-party services, including Google Firebase for hosting and infrastructure. The company is not responsible for errors, downtime, or service interruptions caused by third-party providers.`,
    },
    {
      title: "10. Termination",
      content: `The app may suspend or terminate your access if you violate these Terms, misuse the platform, engage in unlawful activity, or upload harmful or illegal content. Upon termination, you must cease all use of the Application.`,
    },
    {
      title: "11. Disclaimer of Warranties",
      content: `The Application is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties of any kind. The company does not guarantee uninterrupted availability, error-free operation, or specific networking outcomes.`,
    },
    {
      title: "12. Limitation of Liability",
      content: `To the maximum extent permitted by law, the company shall not be liable for any indirect, incidental, consequential, or special damages arising from your use of the Application. Total liability shall not exceed any amount paid by you in the preceding twelve months.`,
    },
    {
      title: "13. End User License Agreement (EULA)",
      content: `By downloading or using IWIP, you agree to use the App responsibly and only in accordance with applicable laws. You must not post harmful, abusive, or unlawful content; harass other users; or violate the rights of others. Young Eye Tech Limited has a zero-tolerance policy for objectionable content and may suspend or permanently terminate accounts without notice. Users may report issues to iwip@gmail.com.`,
    },
    {
      title: "14. Governing Law",
      content: `These Terms shall be governed by and construed in accordance with the laws of the Republic of Uganda. Any disputes arising under these Terms shall be subject to the jurisdiction of Ugandan courts.`,
    },
    {
      title: "15. Changes to These Terms",
      content: `We may update our Terms from time to time. You are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms of Service.`,
    },
  ];

  return (
    <section className="bg-secondary pb-18">
      {/* Hero */}
      <div className="bg-blue-800 pt-38 pb-24 px-6 font-roboto">
        <div className="container flex-col items-left space-y-3.5 lg:my-0 lg:flex-row lg:justify- lg:gap-8 mx-auto max-w-7xl lg:px-24 text-white">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-6xl md:p-0 lg:items-start gap-5 lg:flex-1">
            Terms of Service
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="flex flex-col items-center justify-center py-12 px-6 font-roboto">
        <div className="py-8">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8 text-left">
              <p className="text-muted-foreground text-lg leading-7">
                Last Updated: May 2026
              </p>
              <p className="text-muted-foreground text-lg leading-7">
                The information provided by Inspired Work in Progress (&quot;IWIP&quot;) on our
                website and through our services is for general informational purposes only.
                All information is provided in good faith; however, we make no representation
                or warranty of any kind, express or implied, regarding the accuracy, adequacy,
                validity, reliability, availability, or completeness of any information provided.
              </p>
              <p className="text-muted-foreground text-lg leading-7">
                Under no circumstance shall we have any liability to you for any loss or damage
                of any kind incurred as a result of the use of our website or reliance on any
                information provided. Your use of our services and your reliance on any
                information is solely at your own risk.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="py-5">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-2xl font-semibold pb-3">{section.title}</h3>
                  <p className="text-muted-foreground leading-7">{section.content}</p>
                </div>
              ))}
              <p className="text-muted-foreground leading-7 italic">
                For questions regarding these Terms of Service, please contact{" "}
                <a href="mailto:iwip@gmail.com" className="underline">iwip@gmail.com</a>.
                This email address may be updated from time to time within the Application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}