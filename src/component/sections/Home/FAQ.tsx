"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";
import { Data } from "@/lib/constants";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "Is Technova a Web3 or crypto event?",
    answer: `Technova is not a Web3-only event. Web3 is explored as one of several opportunity layers alongside technology, finance, law, media, and community. The summit is designed to be accessible, whether you are new to these topics or already building in the space.
`,
  },
  {
    id: "2",
    question: "Who should attend Technova Summit?",
    answer:
      "Technova is open to developers, designers, creators, entrepreneurs, investors, policymakers, university students, NYSC members, early career professionals,and anyone interested in technology, innovation, and opportunity.",
  },
  {
    id: "3",
    question: "Where will Technova Summit take place?",
    answer:
      "Technova Summit will take place at the " +
      Data.Location +
      ", Ebonyi State, Nigeria.",
  },
  {
    id: "4",
    question: " Are there opportunities for networking and collaboration?",
    answer:
      "Yes. Networking is a core part of Technova. The summit is designed to connect attendees with speakers, partners, exhibitors, and fellow participants across different industries and ecosystems.",
  },
  {
    id: "5",
    question: "Is Technova only for people in Ebonyi State?",
    answer:
      "No. While Technova proudly launches from Ebonyi State, it is open to participants from across Nigeria and beyond. The summit is built to scale nationally and connect with global ecosystems.",
  },
  {
    id: "6",
    question: "How can I get involved as a speaker, partner, or sponsor?",
    answer:
      "Interested speakers, partners, and sponsors can reach out through the contact form on our website or via our official social media channels. Our team will respond with the relevant information.",
  },
  {
    id: "7",
    question: "How do I stay updated?",
    answer:
      "Follow Technova Summit on our official social media platforms and subscribe to updates on the website for announcements, speaker reveals, and ticket information.",
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState("1");
  const containerRef = useRef<HTMLDivElement | null>(null);
  useScrollTo(containerRef, "scrollToFAQ");
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <div className="min-h-screen bg-white px-3 md:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mx-auto max-w-3xl md:text-5xl font-bold text-black leading-tight">
            Everything you need to know about Technova.
          </h2>
        </div>

        {/* FAQ Items */}
        <div
          ref={containerRef}
          className="flex flex-col gap-4 bg-orange-50 rounded-3xl py-8"
        >
          <AnimatePresence mode="wait">
            {faqData.map((item) => (
              <div key={item.id}>
                <motion.div
                  className="cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                  layout
                >
                  <div className="flex items-center justify-between py-6 px-8">
                    <h3 className="text-lg font-bold text-black text-left flex-1">
                      {item.question}
                    </h3>
                    <motion.div
                      className="ml-4 shrink-0"
                      animate={{ rotate: expandedId === item.id ? 0 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 flex items-center justify-center transition-colors"
                        aria-label={
                          expandedId === item.id ? "Collapse" : "Expand"
                        }
                      >
                        {expandedId === item.id ? (
                          <Minus size={20} />
                        ) : (
                          <Plus size={20} />
                        )}
                      </button>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 px-8 pb-4 leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {item.id !== faqData[faqData.length - 1].id && (
                  <div className="h-2 bg-white" />
                )}
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
