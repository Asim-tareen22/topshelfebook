"use client";

import { useState, memo, useCallback } from "react";
import {
  Plus,
  Minus,
  Search,
  MessageCircle,
  HelpCircle,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const FAQS_DATA = [
  {
    id: 1,
    question: "What is TopShelf eBook?",
    answer:
      "TopShelf eBook is a premium digital library platform offering unlimited access to thousands of bestselling books across all genres.",
  },
  {
    id: 2,
    question: "How does the free trial work?",
    answer:
      "Start with a 14-day free trial on any plan - no credit card required! Experience all premium features. Cancel anytime during the trial at no cost.",
  },
  {
    id: 3,
    question: "Can I switch plans anytime?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.",
  },
  {
    id: 4,
    question: "How many devices can I use?",
    answer:
      "Device limits vary by plan: Basic (1 device), Professional (5 devices), Enterprise (unlimited). All plans support automatic sync.",
  },
  {
    id: 5,
    question: "Is offline reading available?",
    answer:
      "Yes! Professional and Enterprise plans include offline reading mode. Download books and read them anywhere without internet.",
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and digital wallets. All transactions are encrypted and secure.",
  },
  {
    id: 7,
    question: "Can I cancel my subscription?",
    answer:
      "Yes, cancel anytime with one click. Your access continues until the end of your billing period. 30-day money-back guarantee.",
  },
  {
    id: 8,
    question: "Do you offer discounts?",
    answer:
      "Yes! 25% off for students and educators. Team discounts start at 15% for 5+ users. Contact sales for custom pricing.",
  },
];

const FAQItem = memo(function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS_DATA)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-colors ${
        isOpen
          ? "border-red-800 shadow-lg"
          : "border-gray-100 shadow-sm hover:border-red-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-3"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors ${
              isOpen
                ? "bg-gradient-to-br from-red-800 to-red-900 text-white"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {isOpen ? (
              <Minus className="w-4 h-4" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </div>
          <span
            className={`text-sm sm:text-base font-bold transition-colors line-clamp-2 ${
              isOpen ? "text-red-800" : "text-gray-900"
            }`}
          >
            {faq.question}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180 text-red-600" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <div className="ml-11 sm:ml-12">
            <div className="h-px bg-gray-100 mb-4" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {faq.answer}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <button className="flex items-center gap-1.5 text-xs sm:text-sm text-red-600 font-semibold hover:underline">
                <HelpCircle className="w-3.5 h-3.5" />
                Helpful?
              </button>
              <button className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 font-semibold hover:underline">
                <MessageCircle className="w-3.5 h-3.5" />
                More info
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export const FAQs = memo(function FAQs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const filteredFAQs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleToggle = useCallback((id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-800 to-red-900 rounded-full shadow-md mb-4">
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300" />
            <span className="text-white text-[10px] sm:text-xs font-bold tracking-wide uppercase">
              FAQ Center
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4">
            <span className="text-gray-900">Have </span>
            <span className="bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto mb-6 sm:mb-8">
            Find quick answers to common questions about our books and services.
          </p>

          {/* Search Bar */}
          <div className="max-w-md sm:max-w-lg mx-auto">
            <div className="flex items-center bg-white rounded-xl shadow-sm border-2 border-gray-100 focus-within:border-red-300 transition-colors">
              <Search className="w-5 h-5 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="Search your question..."
                className="w-full px-3 py-3 sm:py-3.5 text-sm sm:text-base text-gray-800 bg-transparent focus:outline-none placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* FAQ Grid - 2 Columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {filteredFAQs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-base">
              No questions found for "{searchQuery}"
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16">
          <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 text-center max-w-xl mx-auto">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6">
              Our support team is here to help you 24/7
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-red-800 to-red-900 text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
