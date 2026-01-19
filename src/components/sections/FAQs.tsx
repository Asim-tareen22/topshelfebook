'use client';

import { useState } from 'react';
import { Plus, Minus, Search, MessageCircle, HelpCircle, Sparkles, ChevronDown } from 'lucide-react';

const FAQS_DATA = [
  {
    id: 1,
    question: 'What is TopShelf eBook?',
    answer: 'TopShelf eBook is a premium digital library platform offering unlimited access to thousands of bestselling books across all genres. Our AI-powered recommendation system helps you discover your next favorite read effortlessly.',
  },
  {
    id: 2,
    question: 'How does the free trial work?',
    answer: 'Start with a 14-day free trial on any plan - no credit card required! Experience all premium features including unlimited books, HD downloads, and priority support. Cancel anytime during the trial period at no cost.',
  },
  {
    id: 3,
    question: 'Can I switch plans anytime?',
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference. Your reading progress and collections are preserved across all plan changes.",
  },
  {
    id: 4,
    question: 'How many devices can I use?',
    answer: 'Device limits vary by plan: Basic (1 device), Professional (5 devices), Enterprise (unlimited). All plans support automatic sync across devices, so you can start reading on one device and continue on another seamlessly.',
  },
  {
    id: 5,
    question: 'Is offline reading available?',
    answer: 'Yes! Professional and Enterprise plans include offline reading mode. Download books to your device and read them anywhere without an internet connection. Perfect for traveling or commuting.',
  },
  {
    id: 6,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and digital wallets. All transactions are encrypted and secure. For Enterprise plans, we also offer invoice billing.',
  },
  {
    id: 7,
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel anytime with just one click from your account settings. Your access continues until the end of your billing period. We offer a 30-day money-back guarantee if you\'re not satisfied.',
  },
  {
    id: 8,
    question: 'Do you offer student or team discounts?',
    answer: 'Yes! We offer 25% off for verified students and educators. Team discounts start at 15% for 5+ users. Contact our sales team for custom pricing for organizations and educational institutions.',
  },
  {
    id: 9,
    question: 'How often is new content added?',
    answer: 'We add new books weekly, including bestsellers, new releases, and exclusive titles. Professional and Enterprise members get early access to new releases. Our library grows by 100+ books every month.',
  },
  {
    id: 10,
    question: 'Is there customer support available?',
    answer: 'Basic plan includes email support (24-48 hour response). Professional and Enterprise plans get 24/7 priority support via email, live chat, and phone. Enterprise customers also get a dedicated account manager.',
  },
];

export function FAQs() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = FAQS_DATA.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--bg-cream-dark)]">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary-dark) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--secondary)]/10 to-[var(--primary)]/10 rounded-full blur-3xl animate-blob-2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block mb-4 animate-scale-pulse"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] rounded-full shadow-lg">
              <HelpCircle className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-[var(--foreground)] text-sm font-black tracking-wide">FAQ CENTER</span>
            </div>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 animate-fade-in"
          >
            <span className="text-gray-900">Have </span>
            <span className="bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-dark)] bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>

          <p
            className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Find quick answers to common questions about our books, services, and platform.
          </p>

          {/* Search Bar */}
          <div
            className="max-w-2xl mx-auto relative group animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center bg-white rounded-2xl shadow-xl border-2 border-[var(--primary)]/10 overflow-hidden focus-within:border-[var(--primary)]/50 transition-all">
              <Search className="w-6 h-6 text-gray-400 ml-6" />
              <input
                type="text"
                placeholder="Search your question..."
                className="w-full px-4 py-5 text-gray-800 bg-transparent focus:outline-none placeholder:text-gray-400 font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 text-center animate-fade-in"
          style={{ animationDelay: `${0.2 + (filteredFAQs.length * 0.05)}s` }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[var(--primary)]/10">
            <Sparkles className="w-12 h-12 text-[var(--primary-dark)] mx-auto mb-4" />
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you 24/7
            </p>
            <button
              className="px-8 py-4 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: typeof FAQS_DATA[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="animate-fade-in"
      style={{ animationDelay: `${0.2 + (index * 0.05)}s` }}
    >
      <div
        className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
            ? 'border-2 border-[var(--primary-dark)] shadow-xl shadow-[var(--primary)]/10'
            : 'border-2 border-gray-100 shadow-md hover:border-[var(--primary)]/30'
          }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 text-left"
        >
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isOpen ? 'bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] text-white' : 'bg-gray-50 text-gray-500 group-hover:bg-red-50'
              }`}>
              {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </div>
            <span className={`text-lg font-black transition-colors ${isOpen ? 'text-[var(--primary-dark)]' : 'text-gray-900'}`}>
              {faq.question}
            </span>
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--primary)]' : ''}`} />
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="p-6 pt-0 ml-14">
            <div className="h-px bg-gradient-to-r from-[var(--primary)]/10 via-[var(--primary)]/5 to-transparent mb-6" />
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              {faq.answer}
            </p>

            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm text-[var(--primary)] font-bold cursor-pointer hover:underline">
                <HelpCircle className="w-4 h-4" />
                Helpful?
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-bold cursor-pointer hover:underline">
                <MessageCircle className="w-4 h-4" />
                More info
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}