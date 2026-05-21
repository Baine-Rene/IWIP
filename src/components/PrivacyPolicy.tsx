// components/PrivacyPolicy.tsx (or .jsx)

type PolicyItem = string | { heading: string; items: string[] };

type Section = {
  title: string;
  intro?: string;
  items?: PolicyItem[];
  outro?: string;
};

const sections: Section[] = [
  {
    title: "Owner and Data Controller",
    intro:
      "Owner and Data Controller: Young Eye Tech Limited. Contact Email: iwip@gmail.com. This contact email may be updated from time to time. Users are encouraged to refer to the most recent version of this Privacy Policy for current contact details.",
  },
  {
    title: "Purpose of the Application",
    intro:
      "IWIP is intended to operate as a digital personal profile that allows Users to store, display, and share personal and professional information efficiently in physical and digital networking environments, including events, conferences, and meetings.",
  },
  {
    title: "Categories of Personal Data Collected",
    intro: "IWIP may collect the following categories of Personal Data:",
    items: [
      {
        heading: "Mandatory Information (required to create an account)",
        items: ["Email address", "Name(s)"],
      },
      {
        heading: "Optional Information (provided at the User's discretion)",
        items: [
          "Phone numbers",
          "Links to social media pages or other online profiles",
          "Biographical or descriptive information in an \"About You\" section",
          "Documents voluntarily uploaded by the User, including resumes, cover letters, or similar materials",
        ],
      },
    ],
    outro:
      "Except for email addresses and names, all other Personal Data is optional and not required for the creation or continued use of an IWIP account.",
  },
  {
    title: "Mode, Place and Storage of Data",
    intro:
      "Personal Data is processed using secure IT systems and organisational procedures strictly related to the purposes outlined in this Policy. All Personal Data collected through IWIP is stored and processed using Google Firebase, a cloud-based infrastructure service. Appropriate technical and organisational safeguards are implemented to protect Personal Data stored within this environment. Data may be processed at the Owner's operating offices and at locations where authorised service providers are based.",
  },
  {
    title: "Purposes of Processing",
    intro: "Personal Data is processed for the following purposes:",
    items: [
      "Creation and management of user accounts",
      "Operation of digital personal profiles and QR code sharing",
      "Enabling communication and information sharing between Users",
      "Hosting and sharing of User-uploaded documents",
      "Platform security, maintenance, and improvement",
      "Compliance with legal and regulatory obligations",
    ],
  },
  {
    title: "Legal Basis for Processing",
    intro: "Personal Data is processed on one or more of the following lawful bases:",
    items: [
      "The User's consent",
      "Performance of a contract with the User",
      "Compliance with legal obligations",
      "Legitimate interests pursued by the Owner",
    ],
  },
  {
    title: "Methods of Processing",
    intro:
      "The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or destruction of data. Processing is carried out using computers and IT-enabled tools following organisational procedures strictly related to the purposes indicated. In addition to the Owner, data may be accessible to authorised personnel or external parties (such as technical service providers, hosting providers, and IT companies) appointed as data processors by the Owner. The updated list of these parties may be requested from the Owner at any time.",
  },
  {
    title: "Payment and Subscription Data",
    intro:
      "Where Users subscribe to Paid Plans, IWIP may process billing-related information including billing name, billing email, billing address, transaction history, subscription status, payment method type, and currency. Full payment card details are processed by Stripe and are not stored by IWIP or Young Eye Tech Limited.",
    items: [
      "Subscription management and payment processing",
      "Fraud detection and prevention",
      "Issuance of invoices and receipts",
      "Financial record keeping for a period of five (5) years",
      "Compliance with tax and regulatory obligations",
    ],
    outro:
      "Payments are processed through Stripe, which operates under its own privacy policy. Users are encouraged to review Stripe's terms before making payments. IWIP may use automated systems for fraud detection and access suspension for failed payments.",
  },
  {
    title: "No Use of Cookies or Tracking Technologies",
    intro:
      "IWIP does not use cookies or similar tracking technologies. The Application does not deploy cookies for analytics, advertising, profiling, or tracking purposes.",
  },
  {
    title: "Data Retention",
    intro:
      "Personal Data shall be retained only for as long as necessary to fulfil the purposes for which it was collected, unless a longer retention period is required by applicable law.",
  },
  {
    title: "Data Subject Rights",
    intro:
      "Users have the right to access, correct, delete, restrict, or object to the processing of their Personal Data, and to withdraw consent where applicable. Requests may be submitted using the contact details provided in this Policy and will be addressed in accordance with applicable law.",
  },
  {
    title: "European Union Users – Safeguard",
    intro:
      "Where the General Data Protection Regulation (GDPR) applies by operation of law, IWIP shall respect the applicable rights of Users under the GDPR. Nothing in this Privacy Policy shall be interpreted as a voluntary submission by the Owner to the jurisdiction or regulatory authority of the European Union where such submission is not legally required.",
  },
  {
    title: "Data Protection Contact / PDPO Liaison",
    intro:
      "For matters relating to personal data protection or the exercise of data subject rights, Users may contact Young Eye Tech Limited at iwip@gmail.com. The Owner shall cooperate with the Personal Data Protection Office (PDPO) of Uganda where required under applicable law.",
  },
  {
    title: "Governing Law",
    intro:
      "This Privacy Policy shall be governed by and construed in accordance with the laws of the Republic of Uganda, including the Data Protection and Privacy Act, Cap.97 and the Data Protection and Privacy Regulations, 2021.",
  },
  {
    title: "Additional Information About Data Collection and Processing",
    items: [
      "Legal action: The User's Personal Data may be used for legal purposes by the Owner in court or in stages leading to possible legal action arising from improper use of the Application.",
      "System logs and maintenance: This Application and any third-party services may collect files that record interaction with the Application (such as IP addresses) for operation and maintenance purposes.",
      "Information Not Contained In This Policy: More details concerning the collection or processing of Personal Data may be requested from the Owner at any time.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    intro:
      "The Owner reserves the right to make changes to this Privacy Policy at any time by notifying Users on this page and possibly within the Application. It is strongly recommended to check this page often, referring to the date of the last modification listed at the top. Should the changes affect processing based on the User's consent, the Owner shall collect new consent where required.",
  },
];

function renderItems(items: PolicyItem[]) {
  return (
    <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-7">
      {items.map((item, i) =>
        typeof item === "string" ? (
          <li key={i}>{item}</li>
        ) : (
          <li key={i}>
            <span className="font-semibold">{item.heading}</span>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
              {item.items.map((sub, j) => (
                <li key={j}>{sub}</li>
              ))}
            </ul>
          </li>
        )
      )}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <section className="bg-secondary pb-18 font-roboto">
      {/* Hero */}
      <div className="bg-blue-800 pt-38 pb-24 px-6">
        <div className="container flex-col items-left space-y-3.5 lg:my-0 lg:flex-row lg:gap-8 mx-auto max-w-7xl lg:px-24 text-white">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-6xl md:p-0 lg:items-start gap-5 lg:flex-1">
            Privacy Policy
          </h1>
          <p className="text-2xl font-medium tracking-tight">Your privacy matters to us</p>
          <p>Last Updated: May 2026</p>
        </div>
      </div>

      {/* Intro */}
      <div className="flex flex-col items-center justify-center py-12 px-6">
        <div className="py-8">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8 text-left">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Introduction</h2>
              <p className="text-muted-foreground text-lg leading-7">
                Inspired Work in Progress (&quot;IWIP,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you
                use our mobile application or engage with our services. By using our services,
                you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="py-5">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-2xl font-semibold pb-3">{section.title}</h3>
                  {section.intro && (
                    <p className="text-muted-foreground leading-7 pb-3">{section.intro}</p>
                  )}
                  {section.items && renderItems(section.items)}
                  {section.outro && (
                    <p className="text-muted-foreground leading-7 pt-3">{section.outro}</p>
                  )}
                </div>
              ))}
              <p className="text-muted-foreground leading-7 italic">
                This privacy policy relates solely to this Application, unless otherwise stated
                within this document.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}