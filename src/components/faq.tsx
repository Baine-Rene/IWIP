import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "Is IWIP secure?",
    answer:
      "Yes. IWIP is built on a secure cloud infrastructure with data encryption and user-controlled privacy settings. Users decide what information to share, and all uploaded documents are protected. We are also compliance-ready to meet privacy regulations in different markets.",
  },
  {
    question: "Who is IWIP for?",
    answer: "IWIP is designed for a wide audience:",
    listItems: [
      "Students seeking to build their professional profiles",
      "Entrepreneurs looking to network and find opportunities",
      "Organizers planning events and managing communities",
    ],
  },
  {
    question: "How is IWIP different from LinkedIn or Linktree?",
    answer:
      "LinkedIn is a broad social network, and Linktree is a link-sharing tool. IWIP combines the best of both, professional identity, opportunity discovery, and community networking, while keeping it simple, personalized, and event-friendly. Our focus is on meaningful, purpose-driven connections, not just visibility.",
  },
  {
    question: "What is the long-term vision for IWIP?",
    answer:
      "Our vision is to become the go-to global networking ecosystem that bridges people, opportunities, and organizations. In the long term, IWIP will integrate AI-powered connection suggestions, event analytics, and smart community tools, making it an essential platform for professionals and organizations worldwide.",
  },
];

const FAQ = () => {
  return (
    <div className="bg-primary min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl md:text-5xl leading-[1.15]! font-bold tracking-tighter text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-xl text-muted-foreground text-white">
          Quick answers to common questions about our application.
        </p>

        <Accordion
          type="single"
          collapsible
          className="mt-8 sm:mt-10 space-y-4"
          defaultValue="question-0"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between pt-4 pb-3 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
                {faq[index].listItems && (
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {faq[index].listItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
