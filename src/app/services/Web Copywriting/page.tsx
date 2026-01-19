'use client'
import { motion } from 'framer-motion'
import { FaRocket, FaComments, FaPen, FaLaptopCode, FaShoppingCart, FaEnvelope, FaFileAlt, FaBullseye, FaChartLine, FaUsers, FaClock, FaStar, FaAward, FaCheckCircle, FaLightbulb, FaFire, FaMagic, FaQuoteLeft, FaHandshake, FaEye, FaCog, FaHome, FaNewspaper, FaGlobe, FaTrophy, FaHeart, FaDollarSign } from 'react-icons/fa'
import Link from 'next/link'

export default function WebCopywriting() {
  const stats = [
    { number: '5000+', label: 'Pages Written', icon: <FaPen /> },
    { number: '250%', label: 'Avg Conversion Boost', icon: <FaChartLine /> },
    { number: '800+', label: 'Happy Clients', icon: <FaUsers /> },
    { number: '98%', label: 'Client Satisfaction', icon: <FaStar /> }
  ]

  const copywritingServices = [
    {
      icon: <FaHome />,
      title: 'Homepage Copy',
      desc: 'Compelling homepage content that captures attention, communicates your value proposition, and guides visitors to take action.',
      features: ['Hero Headlines', 'Value Propositions', 'Trust Builders', 'Clear CTAs'],
      gradient: 'from-purple-600 to-blue-600',
      color: 'purple'
    },
    {
      icon: <FaBullseye />,
      title: 'Landing Pages',
      desc: 'High-converting landing page copy designed to turn visitors into customers with persuasive messaging and strategic layout.',
      features: ['Lead Generation', 'Product Launch', 'Event Registration', 'A/B Test Optimized'],
      gradient: 'from-blue-600 to-cyan-600',
      color: 'blue'
    },
    {
      icon: <FaDollarSign />,
      title: 'Sales Pages',
      desc: 'Persuasive sales copy that overcomes objections, builds desire, and drives conversions for your products or services.',
      features: ['Benefit-Focused', 'Objection Handling', 'Social Proof', 'Urgency & Scarcity'],
      gradient: 'from-cyan-600 to-teal-600',
      color: 'cyan'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Copy',
      desc: 'Engaging email sequences that nurture leads, build relationships, and drive sales through strategic storytelling.',
      features: ['Welcome Series', 'Nurture Campaigns', 'Sales Emails', 'Newsletter Content'],
      gradient: 'from-teal-600 to-green-600',
      color: 'teal'
    },
    {
      icon: <FaShoppingCart />,
      title: 'Product Pages',
      desc: 'Conversion-focused product descriptions that highlight benefits, address concerns, and motivate purchases.',
      features: ['Feature-Benefit Copy', 'Emotional Appeals', 'SEO Optimized', 'Trust Signals'],
      gradient: 'from-green-600 to-lime-600',
      color: 'green'
    },
    {
      icon: <FaFileAlt />,
      title: 'About Pages',
      desc: 'Authentic about page copy that tells your brand story, builds trust, and creates emotional connections.',
      features: ['Brand Story', 'Mission & Values', 'Team Bios', 'Social Proof'],
      gradient: 'from-pink-600 to-rose-600',
      color: 'pink'
    },
    {
      icon: <FaNewspaper />,
      title: 'Blog Posts',
      desc: 'Engaging blog content that educates, entertains, and establishes your authority while driving organic traffic.',
      features: ['SEO Optimized', 'Thought Leadership', 'Engagement Focused', 'CTA Integration'],
      gradient: 'from-orange-600 to-red-600',
      color: 'orange'
    },
    {
      icon: <FaGlobe />,
      title: 'Website Copy',
      desc: 'Complete website copywriting that maintains consistent brand voice across all pages and drives business goals.',
      features: ['Brand Voice', 'UX Focused', 'Conversion Optimized', 'Full Site Audit'],
      gradient: 'from-indigo-600 to-purple-600',
      color: 'indigo'
    }
  ]

  const whyChooseUs = [
    {
      icon: <FaMagic />,
      title: 'Conversion-Focused',
      desc: 'Every word is strategically crafted to drive action and increase conversions.'
    },
    {
      icon: <FaEye />,
      title: 'Audience-Centric',
      desc: 'Deep research into your target audience to speak directly to their needs.'
    },
    {
      icon: <FaBullseye />,
      title: 'Brand Alignment',
      desc: 'Copy that perfectly reflects your brand voice, values, and personality.'
    },
    {
      icon: <FaChartLine />,
      title: 'Data-Driven',
      desc: 'Copywriting backed by psychology, data, and proven conversion principles.'
    },
    {
      icon: <FaClock />,
      title: 'Quick Turnaround',
      desc: 'Fast delivery without compromising on quality or effectiveness.'
    },
    {
      icon: <FaAward />,
      title: 'Award-Winning',
      desc: 'Recognized excellence in copywriting and content creation.'
    }
  ]

  const processSteps = [
    {
      step: '01',
      icon: <FaHandshake />,
      title: 'Discovery & Research',
      desc: 'We dive deep into your business, target audience, competitors, and unique value proposition to understand what makes you different.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      step: '02',
      icon: <FaLightbulb />,
      title: 'Strategy Development',
      desc: 'Creating a comprehensive copywriting strategy aligned with your business goals, brand voice, and conversion objectives.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      step: '03',
      icon: <FaPen />,
      title: 'Writing & Crafting',
      desc: 'Our expert copywriters create compelling, persuasive copy that resonates with your audience and drives action.',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      step: '04',
      icon: <FaEye />,
      title: 'Review & Refinement',
      desc: 'Multiple rounds of editing and refinement to ensure every word serves a purpose and maximizes impact.',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      step: '05',
      icon: <FaCheckCircle />,
      title: 'Final Delivery',
      desc: 'Receive polished, ready-to-publish copy with formatting guidelines and implementation recommendations.',
      gradient: 'from-yellow-500 to-green-500'
    }
  ]

  const copywritingPrinciples = [
    { principle: 'Clear & Concise', desc: 'No fluff, just powerful messaging' },
    { principle: 'Benefit-Driven', desc: 'Focus on what matters to customers' },
    { principle: 'Emotionally Engaging', desc: 'Connect on a human level' },
    { principle: 'Action-Oriented', desc: 'Every page has a purpose' },
    { principle: 'SEO-Friendly', desc: 'Optimized for search engines' },
    { principle: 'Brand Consistent', desc: 'Unified voice across all pages' },
    { principle: 'Conversion-Focused', desc: 'Designed to drive results' },
    { principle: 'Trust-Building', desc: 'Establish credibility and authority' }
  ]

  const conversionMetrics = [
    { metric: 'Conversion Rate', value: '+250%', icon: <FaChartLine />, color: 'text-green-500' },
    { metric: 'Engagement Time', value: '+180%', icon: <FaClock />, color: 'text-blue-500' },
    { metric: 'Bounce Rate', value: '-45%', icon: <FaEye />, color: 'text-purple-500' },
    { metric: 'ROI Increase', value: '+320%', icon: <FaDollarSign />, color: 'text-yellow-500' }
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full">
                <FaPen className="text-5xl text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-8xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Words That <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">Convert</span>
              <br />
              Professional Web Copywriting <br />
              Services
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform your website into a conversion machine with <span className="text-purple-400 font-semibold">Ghostwriting Squad's</span> expert 
              web copywriting. We craft compelling copy that engages your audience, builds trust, and drives sales.
            </motion.p>

            <motion.div 
              className="flex flex-col md:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center gap-3">
                <FaRocket /> Get Started
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-10 py-5 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-3">
                <FaComments /> Live Chat
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                  <div className="text-4xl text-purple-500 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-gray-400 mt-2 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== CONVERSION METRICS ========== */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {conversionMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 text-center group"
              >
                <div className={`text-5xl mb-3 ${item.color} group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                  {item.icon}
                </div>
                <div className="text-3xl font-black text-white mb-1">{item.value}</div>
                <div className="text-gray-400 text-sm">{item.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COPYWRITING SERVICES ========== */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-purple-500/20 text-purple-400 px-6 py-3 rounded-full mb-6 border border-purple-500/50">
              <FaFire className="inline mr-2" />
              Our Copywriting Services
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Professional Copy</span> For Every Page
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From homepage to checkout, we create persuasive copy that guides visitors through your funnel and turns them into customers.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copywritingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group overflow-hidden"
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>

                {/* Content */}
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-3xl text-white">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">{service.desc}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500 flex-shrink-0 text-xs" />
                        <span className="text-gray-400 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Copywriters</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine psychology, storytelling, and conversion optimization to create copy that sells
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 text-center group"
              >
                <div className="text-5xl mb-6 text-purple-500 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Copywriting Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that delivers high-converting copy every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-black text-lg group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${process.gradient} mb-4 mt-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-3xl text-white">
                    {process.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3">{process.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COPYWRITING PRINCIPLES ========== */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Copywriting Principles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The foundation of every successful copy we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {copywritingPrinciples.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.principle}</h3>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING SECTION ========== */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Flexible <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Pricing Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect copywriting solution for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Single Page',
                price: '$499',
                unit: 'per page',
                features: [
                  'Up to 500 words',
                  'Conversion-focused copy',
                  'SEO optimization',
                  '2 revisions',
                  '5-day delivery',
                  'Email support'
                ]
              },
              {
                name: 'Website Package',
                price: '$1,999',
                unit: '5 pages',
                popular: true,
                features: [
                  'Homepage + 4 pages',
                  'Up to 2,500 words total',
                  'Brand voice guide',
                  'SEO optimization',
                  'Unlimited revisions',
                  '10-day delivery',
                  'Priority support',
                  'Content strategy session'
                ]
              },
              {
                name: 'Enterprise',
                price: '$4,999',
                unit: 'full website',
                features: [
                  'Unlimited pages',
                  'Comprehensive site audit',
                  'Custom brand voice',
                  'Advanced SEO strategy',
                  'Unlimited revisions',
                  '3-week delivery',
                  'Dedicated copywriter',
                  'Ongoing support',
                  'A/B testing copy',
                  'Conversion optimization'
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border ${
                  plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/30 scale-105' : 'border-slate-700'
                } hover:border-purple-500 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-sm font-bold">
                    🔥 MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.unit}</p>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{plan.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 shadow-lg'
                    : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                }`}>
                  Choose Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Client <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from businesses that invested in professional copywriting
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Our conversion rate tripled after the homepage redesign! Their copy is powerful, persuasive, and perfectly on-brand.",
                author: "Michael Roberts",
                role: "CEO, Tech Startup",
                rating: 5
              },
              {
                quote: "Best investment we made! The landing page copy they wrote generated 5x more leads than our previous version.",
                author: "Sarah Anderson",
                role: "Marketing Director",
                rating: 5
              },
              {
                quote: "Professional, strategic, and results-driven. Our product pages now convert 4x better!",
                author: "James Wilson",
                role: "E-commerce Owner",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <FaQuoteLeft className="text-4xl text-purple-500 mb-4" />
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FaTrophy className="text-7xl text-purple-500 mb-6 mx-auto" />
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Ready To <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Transform</span> Your <br />
              Website With Powerful Copy?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let's create copy that connects with your audience, builds trust, and drives conversions. Get started today!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3">
                <FaRocket /> Start Your Project
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-bold text-xl hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                <FaComments /> Get Free Consultation
              </button>
            </div>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 flex flex-wrap justify-center gap-8 items-center"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Conversion-Focused</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Unlimited Revisions</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== ANIMATIONS ========== */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  )
}