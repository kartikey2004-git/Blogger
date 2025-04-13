import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { ChevronRight } from "lucide-react";

const faqData = [
  {
    question: "How do I create my first blog post?",
    answer:
      "Start by setting up your blog using our platform’s easy-to-use editor. You’ll be able to write, customize, and publish blog posts that engage readers and showcase your tech expertise in no time.",
  },
  {
    question: "How can I customize my blog's layout?",
    answer:
      "Customize your blog layout with various templates, color schemes, and font options. Tailor the appearance to suit your personal brand or tech niche, making your content visually appealing to readers.",
  },
  {
    question: "How can I collaborate with other techies?",
    answer:
      "Collaborate with fellow tech enthusiasts by allowing guest posts or co-authorship on your blog. Share insights, code snippets, and project ideas to build a strong community and enhance your reach.",
  },
  {
    question: "How can users provide feedback?",
    answer:
      "Enable user comments and ratings to gather valuable feedback on your posts. This helps improve the quality of your content and fosters engagement with your tech-savvy audience.",
  },
];

const Faqs = () => {
  return (
    <Accordion
      className="flex w-full flex-col"
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      variants={{
        expanded: {
          opacity: 1,
          scale: 1,
        },
        collapsed: {
          opacity: 0,
          scale: 0.7,
        },
      }}
    >
      {faqData.map((item, index) => (
        <AccordionItem key={index} value={`faq-${index}`} className="py-2">
          <AccordionTrigger className="w-full py-0.5 text-left">
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-expanded:rotate-90" />
              <div className="ml-2">{item.question}</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="origin-left">
            <p className="pl-6 pr-2">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faqs;
