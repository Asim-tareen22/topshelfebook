'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  FaPen, FaRocket, FaCheckCircle, FaStar, FaClock,
  FaChartLine, FaGlobe, FaUsers, FaMagic, FaGem,
  FaCrown, FaTrophy, FaBook, FaEdit, FaFileAlt,
  FaSearch, FaHeart, FaAward, FaQuoteLeft, FaComments
} from 'react-icons/fa'
import Link from 'next/link'

export default function ArticleWriting() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const featuresRef = useRef<HTMLElement>(null)
  const processRef = useRef<HTMLElement>(null)
  const samplesRef = useRef<HTMLElement>(null)
  const packagesRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const whyUsRef = useRef<HTMLElement>(null)

  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 })
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 })
  const isSamplesInView = useInView(samplesRef, { once: true, amount: 0.2 })
  const isPackagesInView = useInView(packagesRef, { once: true, amount: 0.3 })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })
  const isWhyUsInView = useInView(whyUsRef, { once: true, amount: 0.3 })

  const features = [
    { icon: <FaPen />, title: 'Expert Writers', description: '50+ professional writers with expertise in every niche', gradient: 'from-red-500 to-orange-500', stats: '50+ Writers' },
    { icon: <FaRocket />, title: 'Fast Delivery', description: 'Get articles in 24-48 hours without quality compromise', gradient: 'from-purple-500 to-pink-500', stats: '24-48 Hours' },
    { icon: <FaSearch />, title: 'SEO Optimized', description: 'Articles that rank high and drive organic traffic', gradient: 'from-blue-500 to-cyan-500', stats: '100% SEO Ready' },
    { icon: <FaMagic />, title: 'Engaging Content', description: 'Compelling narratives that captivate your audience', gradient: 'from-green-500 to-emerald-500', stats: '300% Engagement' },
    { icon: <FaCheckCircle />, title: 'Plagiarism Free', description: 'Original content with Copyscape verification', gradient: 'from-yellow-500 to-orange-500', stats: '100% Original' },
    { icon: <FaAward />, title: 'Quality Assured', description: 'Unlimited revisions until satisfaction', gradient: 'from-pink-500 to-red-500', stats: 'Unlimited Revisions' }
  ]

  const processSteps = [
    { number: '01', title: 'Brief Submission', description: 'Share your topic, keywords, and requirements', icon: <FaFileAlt />, color: 'from-[#800020] to-[#a0153e]' },
    { number: '02', title: 'Writer Assignment', description: 'Matched with perfect industry specialist', icon: <FaUsers />, color: 'from-blue-600 to-purple-600' },
    { number: '03', title: 'Research & Writing', description: 'Thorough research and expert crafting', icon: <FaEdit />, color: 'from-green-600 to-emerald-600' },
    { number: '04', title: 'Quality Check', description: 'Editing, proofreading, and SEO optimization', icon: <FaCheckCircle />, color: 'from-yellow-600 to-orange-600' },
    { number: '05', title: 'Delivery', description: 'Polished article with unlimited revisions', icon: <FaRocket />, color: 'from-pink-600 to-red-600' }
  ]

  const sampleCategories = [
    { id: 'all', label: 'All Articles' },
    { id: 'tech', label: 'Technology' },
    { id: 'business', label: 'Business' },
    { id: 'health', label: 'Health' },
    { id: 'lifestyle', label: 'Lifestyle' }
  ]

  const writingSamples = [
    { id: 1, category: 'tech', title: 'The Future of AI in Healthcare', excerpt: 'Exploring how AI is revolutionizing medical diagnostics...', words: 1500, readTime: '6 min' },
    { id: 2, category: 'business', title: 'Startup Growth Strategies', excerpt: 'Proven tactics to scale from zero to millions...', words: 1200, readTime: '5 min' },
    { id: 3, category: 'health', title: 'Mindfulness: Complete Guide', excerpt: 'Science-backed benefits and daily practices...', words: 1800, readTime: '7 min' },
    { id: 4, category: 'lifestyle', title: 'Minimalist Living Benefits', excerpt: 'Transform your life with minimalism...', words: 1400, readTime: '6 min' },
    { id: 5, category: 'business', title: 'Investment Tips for Beginners', excerpt: 'Start your investment journey right...', words: 1600, readTime: '6 min' },
    { id: 6, category: 'tech', title: 'Blockchain Beyond Crypto', excerpt: 'Understanding blockchain applications...', words: 1700, readTime: '7 min' }
  ]

  const filteredSamples = selectedCategory === 'all' ? writingSamples : writingSamples.filter(sample => sample.category === selectedCategory)

  const packages = [
    { name: 'Starter', price: '$49', articles: '1 Article', features: ['500 words', 'Basic SEO', '1 Revision', '48hr Delivery', 'Plagiarism Report'], popular: false, gradient: 'from-gray-700 to-gray-900' },
    { name: 'Professional', price: '$199', articles: '5 Articles', features: ['1000 words each', 'Advanced SEO', 'Unlimited Revisions', '24-48hr Delivery', 'Keyword Research', 'Meta Descriptions', 'Priority Support'], popular: true, gradient: 'from-[#800020] to-[#5c0016]' },
    { name: 'Enterprise', price: '$499', articles: '15 Articles', features: ['1500 words each', 'Premium SEO', 'Unlimited Revisions', '24hr Delivery', 'Full Keyword Research', 'Meta Tags', 'Images Included', 'Dedicated Manager', '24/7 VIP Support'], popular: false, gradient: 'from-yellow-600 to-orange-600' }
  ]

  const testimonials = [
    { text: "Outstanding service! Traffic increased 400% in 3 months. Every article is well-researched and engaging.", author: "Sarah Mitchell", title: "Marketing Director", rating: 5, results: "400% Traffic Boost" },
    { text: "Professional writers who understand our brand. Best content investment we've made!", author: "James Rodriguez", title: "CEO, StartupHub", rating: 5, results: "50+ Articles Published" },
    { text: "Exceptional quality. SEO-optimized and reader-friendly. Engagement rates tripled!", author: "Emily Chen", title: "Content Manager", rating: 5, results: "300% Engagement" }
  ]

  const whyChooseUs = [
    { icon: <FaGem />, title: 'Premium Quality', description: 'Rigorous quality checks and editing', stat: '99.8% Score' },
    { icon: <FaClock />, title: 'On-Time Delivery', description: 'Always delivered when promised', stat: '100% On-Time' },
    { icon: <FaChartLine />, title: 'Proven Results', description: 'Drive traffic and conversions', stat: '350% ROI' },
    { icon: <FaHeart />, title: 'Client Success', description: 'Work until you\'re satisfied', stat: '98% Satisfaction' }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#800020] via-[#a0153e] to-[#5c0016]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-transparent" />
        </div>

        <div className="container mx-auto px-6 z-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-full mb-10 border border-white/20">
              <FaPen className="text-yellow-400 text-2xl" />
              <span className="font-bold text-lg">Premium Article Writing Service</span>
            </motion.div>

            <motion.h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight text-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              Words That<br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Drive Results</span>
            </motion.h1>

            <motion.p className="text-xl md:text-2xl text-white/90 mb-14 max-w-5xl mx-auto leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              Professional article writing that engages readers, ranks on Google, and grows your business
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact-us">
                <motion.button className="bg-white text-[#800020] px-12 py-6 rounded-full font-bold text-xl shadow-2xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Order Articles Now
                </motion.button>
              </Link>
              <motion.button onClick={() => samplesRef.current?.scrollIntoView({ behavior: 'smooth' })} className="border-3 border-white text-white px-12 py-6 rounded-full font-bold text-xl backdrop-blur-sm hover:bg-white/10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View Samples
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
              {[
                { icon: <FaFileAlt />, number: '10K+', label: 'Articles' },
                { icon: <FaStar />, number: '4.9/5', label: 'Rating' },
                { icon: <FaClock />, number: '24-48hr', label: 'Delivery' }
              ].map((item, i) => (
                <div key={i} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl mb-3 text-yellow-400">{item.icon}</div>
                  <div className="text-4xl font-black text-white mb-2">{item.number}</div>
                  <div className="text-white/70 font-medium">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50" ref={featuresRef}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-[#800020] mb-6">Powerful Features</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#800020] to-[#a0153e] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -10 }} className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-[#800020] transition-all">
                <div className={`text-6xl mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent flex justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#800020] mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center mb-4">{feature.description}</p>
                <div className={`text-center font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>{feature.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 px-6 bg-white" ref={processRef}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isProcessInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-[#800020] mb-6">Our Process</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#800020] to-[#a0153e] mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {processSteps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={isProcessInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: index * 0.2 }} className="flex items-center gap-8">
                <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-2xl relative`}>
                  <div className="text-4xl text-white">{step.icon}</div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#800020] text-xl shadow-lg">{step.number}</div>
                </div>
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                  <h3 className="text-2xl font-bold text-[#800020] mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLES */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white" ref={samplesRef}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isSamplesInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-[#800020] mb-6">Writing Samples</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#800020] to-[#a0153e] mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {sampleCategories.map((cat) => (
              <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === cat.id ? 'bg-[#800020] text-white shadow-lg' : 'bg-white text-gray-700 border-2 border-gray-200'}`}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSamples.map((sample, index) => (
              <motion.div key={sample.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.03, y: -10 }} className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-[#800020]">
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#800020]/10 text-[#800020] px-3 py-1 rounded-full text-sm font-semibold">{sample.words} words</span>
                    <span className="bg-[#800020]/10 text-[#800020] px-3 py-1 rounded-full text-sm font-semibold">{sample.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#800020] mb-3">{sample.title}</h3>
                  <p className="text-gray-600 mb-4">{sample.excerpt}</p>
                  <button className="text-[#800020] font-semibold flex items-center gap-2">Read More <FaRocket className="text-sm" /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-32 px-6 bg-white" ref={packagesRef}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isPackagesInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-[#800020] mb-6">Choose Your Package</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#800020] to-[#a0153e] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={isPackagesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.2 }} whileHover={{ scale: pkg.popular ? 1.05 : 1.03 }} className={`rounded-3xl overflow-hidden shadow-2xl border-2 ${pkg.popular ? 'border-[#800020] relative scale-105 z-10' : 'border-gray-100'}`}>
                {pkg.popular && <div className="bg-[#800020] text-white text-center py-2 font-black uppercase tracking-widest">Most Popular</div>}
                <div className={`p-10 bg-gradient-to-br ${pkg.gradient} text-white`}>
                  <h3 className="text-3xl font-black mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black">{pkg.price}</span>
                    <span className="text-white/70">/ {pkg.articles}</span>
                  </div>
                </div>
                <div className="p-10 bg-white">
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-5 rounded-xl font-bold text-lg transition-all ${pkg.popular ? 'bg-[#800020] text-white shadow-xl hover:bg-[#a0153e]' : 'border-2 border-[#800020] text-[#800020] hover:bg-[#800020]/5'}`}>Get Started Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 bg-gray-50" ref={testimonialsRef}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-[#800020] mb-6">Client Success</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#800020] to-[#a0153e] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.2 }} className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 relative group">
                <FaQuoteLeft className="text-5xl text-[#800020]/10 absolute top-8 left-8" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 text-lg mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#800020] rounded-full flex items-center justify-center text-white font-black text-xl">{testimonial.author[0]}</div>
                    <div>
                      <h4 className="font-bold text-[#800020]">{testimonial.author}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="text-[#800020] font-black">{testimonial.results}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 px-6 bg-white" ref={whyUsRef}>
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-[#800020] to-[#5c0016] rounded-[3rem] p-12 md:p-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-7xl font-black mb-6">Why Choose Us?</h2>
                <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                {whyChooseUs.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={isWhyUsInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: index * 0.1 }} className="text-center">
                    <div className="text-6xl text-yellow-400 mb-6 flex justify-center">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/70 mb-4">{item.description}</p>
                    <div className="text-3xl font-black text-yellow-400">{item.stat}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black text-[#800020] mb-8 leading-tight">Ready to Elevate Your Content?</h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-14 leading-relaxed">Join 1000+ satisfied clients and get high-quality, SEO-optimized articles that drive results.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact-us">
                <motion.button className="bg-[#800020] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl flex items-center justify-center gap-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <FaRocket /> Start Your Project
                </motion.button>
              </Link>
              <motion.button className="border-3 border-[#800020] text-[#800020] px-12 py-6 rounded-full font-bold text-xl hover:bg-[#800020]/5 flex items-center justify-center gap-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FaComments /> Get Free Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

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