"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What is Technova?",
    answer:
      "TechNova Africa's Web3 Carnival is a groundbreaking event bringing together Web3 enthusiasts, blockchain developers, innovators, and industry leaders in Ebonyi State, Nigeria. It's a celebration of decentralized technology with workshops, networking, and carnival festivities.",
  },
  {
    id: "2",
    question: "Do I need prior knowledge of Web3 to attend?",
    answer:
      "No prior knowledge is required! Technova welcomes everyone from beginners to experts. We offer beginner-friendly sessions and workshops designed to help newcomers learn the fundamentals of Web3 and blockchain technology.",
  },
  {
    id: "3",
    question: "How do I register for the event?",
    answer:
      "You can register through our official website at technova.com/register. Simply fill out the registration form with your details, and you'll receive a confirmation email with all event information and updates.",
  },
  {
    id: "4",
    question: "Is there a registration fee?",
    answer:
      "Registration fees vary depending on the ticket type. Early bird tickets are discounted, and we offer student and group discounts. Check our website for current pricing and available ticket options.",
  },
  {
    id: "5",
    question: "What can I expect at the carnival?",
    answer:
      "Expect three days packed with keynote speeches, hands-on workshops, networking sessions, product demonstrations, pitch competitions, and exciting carnival entertainment featuring music, food, and cultural performances.",
  },
  {
    id: "6",
    question: "Will there be accommodation assistance?",
    answer:
      "Yes! We're partnering with local hotels to provide discounted accommodation rates for attendees. Details and booking information will be sent to registered participants.",
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState("1");

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
        <div className="flex flex-col gap-4 bg-orange-50 rounded-3xl py-8">
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
                      className="ml-4 flex-shrink-0"
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
