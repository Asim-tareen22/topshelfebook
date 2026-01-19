'use client'
import { motion } from 'framer-motion'
import { FaRocket, FaComments, FaSearch, FaChartLine, FaPen, FaGlobe, FaLightbulb, FaKey, FaFileAlt, FaShoppingCart, FaTags, FaDesktop, FaNewspaper, FaBullseye, FaCheckCircle, FaStar, FaUsers, FaClock, FaAward, FaTrophy, FaFire, FaMagic, FaQuoteLeft, FaEye, FaHandshake, FaCog, FaChartBar } from 'react-icons/fa'
import Link from 'next/link'

export default function SEOWriting() {
  const stats = [
    { number: '10K+', label: 'SEO Articles Written', icon: <FaPen /> },
    { number: '300%', label: 'Avg Traffic Increase', icon: <FaChartLine /> },
    { number: '1000+', label: 'Happy Clients', icon: <FaUsers /> },
    { number: '#1', label: 'Google Rankings', icon: <FaTrophy /> }
  ]

  const seoServices = [
    {
      icon: <FaNewspaper />,
      title: 'SEO Blog Writing',
      desc: 'Engaging, keyword-optimized blog posts that rank high on search engines and drive organic traffic to your website.',
      features: ['Keyword Research', 'SEO Optimization', 'Engaging Content', 'Link Building'],
      gradient: 'from-purple-600 to-blue-600',
      color: 'purple'
    },
    {
      icon: <FaDesktop />,
      title: 'Website Content',
      desc: 'Compelling website copy that converts visitors into customers while improving your search engine rankings.',
      features: ['Homepage Copy', 'About Pages', 'Service Pages', 'SEO Friendly'],
      gradient: 'from-blue-600 to-cyan-600',
      color: 'blue'
    },
    {
      icon: <FaShoppingCart />,
      title: 'Product Descriptions',
      desc: 'Persuasive product descriptions optimized for both search engines and conversions to boost your sales.',
      features: ['Keyword Rich', 'Benefit Focused', 'Unique Content', 'Conversion Optimized'],
      gradient: 'from-cyan-600 to-teal-600',
      color: 'cyan'
    },
    {
      icon: <FaTags />,
      title: 'Meta Descriptions',
      desc: 'Click-worthy meta descriptions and title tags that improve your CTR and search engine visibility.',
      features: ['Character Optimized', 'Compelling CTAs', 'Keyword Placement', 'SERP Optimization'],
      gradient: 'from-teal-600 to-green-600',
      color: 'teal'
    },
    {
      icon: <FaFileAlt />,
      title: 'Landing Pages',
      desc: 'High-converting landing page copy optimized for both search engines and user experience.',
      features: ['Conversion Focus', 'SEO Optimized', 'Persuasive Copy', 'A/B Test Ready'],
      gradient: 'from-green-600 to-lime-600',
      color: 'green'
    },
    {
      icon: <FaPen />,
      title: 'Article Writing',
      desc: 'In-depth, authoritative articles that establish your expertise and rank for competitive keywords.',
      features: ['Long-form Content', 'Expert Research', 'E-A-T Focused', 'Backlink Worthy'],
      gradient: 'from-pink-600 to-rose-600',
      color: 'pink'
    },
    {
      icon: <FaKey />,
      title: 'Keyword Research',
      desc: 'Comprehensive keyword research to identify high-value opportunities for your content strategy.',
      features: ['Competitor Analysis', 'Search Volume Data', 'Keyword Difficulty', 'Long-tail Keywords'],
      gradient: 'from-orange-600 to-red-600',
      color: 'orange'
    },
    {
      icon: <FaBullseye />,
      title: 'Content Strategy',
      desc: 'Data-driven content strategies that align with your business goals and SEO objectives.',
      features: ['Content Calendar', 'Topic Clusters', 'SEO Roadmap', 'Performance Tracking'],
      gradient: 'from-indigo-600 to-purple-600',
      color: 'indigo'
    }
  ]

  const whyChooseUs = [
    {
      icon: <FaSearch />,
      title: 'SEO Expertise',
      desc: 'Deep understanding of search engine algorithms and ranking factors.'
    },
    {
      icon: <FaPen />,
      title: 'Quality Content',
      desc: 'Engaging, well-researched content that readers and search engines love.'
    },
    {
      icon: <FaChartLine />,
      title: 'Proven Results',
      desc: 'Track record of improving rankings and driving organic traffic.'
    },
    {
      icon: <FaKey />,
      title: 'Keyword Mastery',
      desc: 'Strategic keyword placement that feels natural and converts.'
    },
    {
      icon: <FaClock />,
      title: 'Fast Delivery',
      desc: 'Quick turnaround without compromising on quality or optimization.'
    },
    {
      icon: <FaAward />,
      title: 'White-Hat SEO',
      desc: 'Ethical SEO practices that ensure long-term sustainable results.'
    }
  ]

  const processSteps = [
    {
      step: '01',
      icon: <FaHandshake />,
      title: 'Discovery & Analysis',
      desc: 'We analyze your niche, competitors, target audience, and current SEO performance to create a winning strategy.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      step: '02',
      icon: <FaKey />,
      title: 'Keyword Research',
      desc: 'In-depth keyword research to identify high-value, low-competition keywords that drive qualified traffic.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      step: '03',
      icon: <FaLightbulb />,
      title: 'Content Planning',
      desc: 'Strategic content planning with topic clusters, content pillars, and a clear SEO roadmap.',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      step: '04',
      icon: <FaPen />,
      title: 'SEO Writing',
      desc: 'Our expert writers craft engaging, keyword-optimized content that ranks and converts.',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      step: '05',
      icon: <FaCog />,
      title: 'Optimization',
      desc: 'On-page SEO optimization including meta tags, headers, internal linking, and schema markup.',
      gradient: 'from-yellow-500 to-green-500'
    },
    {
      step: '06',
      icon: <FaChartBar />,
      title: 'Performance Tracking',
      desc: 'Continuous monitoring and reporting on rankings, traffic, and conversions with ongoing optimization.',
      gradient: 'from-green-500 to-teal-500'
    }
  ]

  const benefits = [
    'Increase organic traffic',
    'Improve search rankings',
    'Boost domain authority',
    'Higher conversion rates',
    'Better user engagement',
    'Reduced bounce rates',
    'Long-term ROI',
    'Brand visibility',
    'Competitive advantage',
    'Quality backlinks',
    'Mobile optimization',
    'Voice search ready'
  ]

  const seoMetrics = [
    { metric: 'Avg Position', value: 'Top 3', icon: <FaTrophy />, color: 'text-yellow-500' },
    { metric: 'Traffic Growth', value: '+300%', icon: <FaChartLine />, color: 'text-green-500' },
    { metric: 'Page 1 Rankings', value: '85%', icon: <FaStar />, color: 'text-purple-500' },
    { metric: 'CTR Improvement', value: '+150%', icon: <FaEye />, color: 'text-blue-500' }
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
                <FaSearch className="text-5xl text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-8xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Dominate Search Rankings With <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">Expert SEO Writing</span>
              <br />
              Services
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Boost your online visibility and drive organic traffic with <span className="text-purple-400 font-semibold">Ghostwriting Squad's</span> professional 
              SEO writing services. We create content that ranks, engages, and converts—helping your business grow sustainably.
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

      {/* ========== SEO METRICS SECTION ========== */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {seoMetrics.map((item, index) => (
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

      {/* ========== SEO SERVICES SECTION ========== */}
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
              Our SEO Writing Services
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Comprehensive SEO</span> Content Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From blog posts to product descriptions, we create SEO-optimized content that drives results across all digital channels.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoServices.map((service, index) => (
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

      {/* ========== WHY CHOOSE US SECTION ========== */}
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
              Why Choose Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">SEO Writers</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical SEO knowledge with creative writing skills to deliver exceptional results
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
              Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">SEO Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that delivers consistent rankings and traffic growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${process.gradient} mb-4 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-3xl text-white">
                    {process.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Benefits</span> of SEO Writing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your digital presence with professional SEO content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group"
              >
                <FaCheckCircle className="text-green-500 text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 text-sm">{benefit}</span>
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
              Affordable <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">SEO Writing</span> Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan to boost your search rankings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter SEO',
                price: '$0.08',
                unit: 'per word',
                features: [
                  'Basic keyword research',
                  'SEO-optimized content',
                  'Meta descriptions',
                  '1 revision',
                  '5-day delivery',
                  'Email support'
                ]
              },
              {
                name: 'Professional SEO',
                price: '$0.12',
                unit: 'per word',
                popular: true,
                features: [
                  'Advanced keyword research',
                  'Topic cluster strategy',
                  'Meta tags & headers',
                  'Internal linking',
                  'Unlimited revisions',
                  '3-day delivery',
                  'Priority support',
                  'Performance report'
                ]
              },
              {
                name: 'Enterprise SEO',
                price: '$0.18',
                unit: 'per word',
                features: [
                  'Comprehensive SEO audit',
                  'Custom content strategy',
                  'Competitor analysis',
                  'Schema markup',
                  'Unlimited revisions',
                  '24-hour delivery',
                  'Dedicated SEO manager',
                  'Monthly analytics',
                  'Link building support'
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
                
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.unit}</span>
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
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400">
              💡 <span className="text-purple-400 font-semibold">Minimum order: 500 words</span> | Volume discounts available for 10,000+ words
            </p>
          </motion.div>
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
              Success <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our SEO writing has transformed businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Our organic traffic increased by 400% in just 6 months! Their SEO writing is absolutely top-notch.",
                author: "Jennifer Martinez",
                role: "E-commerce Business Owner",
                rating: 5
              },
              {
                quote: "Finally ranking on page 1 for our target keywords! Professional, knowledgeable, and results-driven.",
                author: "David Thompson",
                role: "SaaS Startup Founder",
                rating: 5
              },
              {
                quote: "The ROI from their SEO content is incredible. Our lead generation has tripled!",
                author: "Sarah Chen",
                role: "Marketing Director",
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
            <FaChartLine className="text-7xl text-purple-500 mb-6 mx-auto" />
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Ready To <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Rank Higher</span> <br />
              And Drive More Traffic?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let's create SEO-optimized content that puts you on the first page of Google and attracts your ideal customers!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3">
                <FaRocket /> Start Ranking Today
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-bold text-xl hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                <FaComments /> Get Free SEO Audit
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
                <span>White-Hat SEO Only</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>100% Original Content</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Money-Back Guarantee</span>
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