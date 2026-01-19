'use client'
import { motion } from 'framer-motion'
import { FaRocket, FaComments, FaCheckCircle, FaEdit, FaPencilAlt, FaSpellCheck, FaBook, FaQuoteLeft, FaAward, FaClock, FaUsers, FaLightbulb, FaHeadset, FaStar, FaFileAlt, FaAlignLeft, FaFont } from 'react-icons/fa'
import Link from 'next/link'

export default function EditingServices() {
  const stats = [
    { number: '5000+', label: 'Books Edited', icon: <FaBook /> },
    { number: '98%', label: 'Accuracy Rate', icon: <FaCheckCircle /> },
    { number: '500+', label: 'Happy Authors', icon: <FaUsers /> },
    { number: '24/7', label: 'Support', icon: <FaClock /> }
  ]

  const editingServices = [
    {
      icon: <FaEdit />,
      title: 'Copy-Editing',
      desc: 'Our professional book editors polish your sentences to make sure they are clear and consistent. They ensure your ideas are effectively communicated to your readers. From checking punctuation to tuning grammatical errors, we make sure to make your text sparkle with our Cheap book editing services.',
      features: ['Grammar & Punctuation', 'Consistency Check', 'Clarity Enhancement', 'Style Refinement'],
      gradient: 'from-purple-600 to-blue-600',
      delay: 0
    },
    {
      icon: <FaAlignLeft />,
      title: 'Line-Editing',
      desc: 'Want a book editing services online that can dive in and focus on the flow of your writing? Our editors can help you in that case; from smoothing transitions to sharpening dialogues, we can do it all.',
      features: ['Flow Optimization', 'Dialogue Sharpening', 'Smooth Transitions', 'Tone Consistency'],
      gradient: 'from-blue-600 to-cyan-600',
      delay: 0.2
    },
    {
      icon: <FaSpellCheck />,
      title: 'Proofreading',
      desc: 'Give your script a final polish with our Professional proofreading Services. From typos to punctuation errors and spelling mistakes, we make sure your manuscript looks flawless. We also make sure to make your text look organized with formatting.',
      features: ['Typo Detection', 'Spelling Correction', 'Formatting', 'Final Polish'],
      gradient: 'from-cyan-600 to-teal-600',
      delay: 0.4
    }
  ]

  const whyChooseUs = [
    {
      icon: <FaAward />,
      title: 'Expert Editors',
      desc: 'Bringing years of experience and expertise to the table with certified professional editors.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Customized Solutions',
      desc: 'Offering fully customized solutions tailored to your needs and preferences.'
    },
    {
      icon: <FaStar />,
      title: 'Quality Guaranteed',
      desc: 'Delivering edits that are fresh, innovative, and maintain your unique voice.'
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Support',
      desc: 'We are available 24/7 for your assistance and queries.'
    }
  ]

  const editingTypes = [
    {
      icon: <FaFileAlt />,
      title: 'Fiction Editing',
      desc: 'Character development, plot consistency, and narrative flow.'
    },
    {
      icon: <FaBook />,
      title: 'Non-Fiction Editing',
      desc: 'Fact-checking, structure optimization, and clarity enhancement.'
    },
    {
      icon: <FaFont />,
      title: 'Academic Editing',
      desc: 'Research validation, citation checking, and scholarly formatting.'
    },
    {
      icon: <FaEdit />,
      title: 'Manuscript Editing',
      desc: 'Complete manuscript review from structure to sentence level.'
    }
  ]

  const testimonials = [
    {
      text: "The editing team transformed my manuscript completely. Their attention to detail is phenomenal!",
      author: "Sarah Johnson",
      role: "Published Author",
      rating: 5
    },
    {
      text: "Professional, thorough, and incredibly helpful. They maintained my voice while polishing every sentence.",
      author: "Michael Chen",
      role: "First-time Author",
      rating: 5
    },
    {
      text: "Best editing service I've ever used. They caught errors I never would have noticed!",
      author: "Emily Rodriguez",
      role: "Novelist",
      rating: 5
    }
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
            <motion.h1 
              className="text-5xl md:text-8xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Turn Your Manuscript Into a <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">Masterpiece</span> with
              <br />
              Professional Book Editing Services
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Looking for someone to polish your rough ideas? Or are you concerned about missing some grammatical errors in your manuscript? 
              Don't worry; <span className="text-purple-400 font-semibold">Ghostwriting Squad</span>, a professional Proofreading & Editing 
              Services agency, is here to polish and turn your writing into perfection.
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
                <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="text-4xl text-purple-500 mb-3 flex justify-center">
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

      {/* ========== EXPERIENCE SECTION ========== */}
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
            <div className="inline-block bg-purple-500/20 text-purple-400 px-6 py-3 rounded-full mb-6 border border-purple-500/50">
              Experience The Exceptional
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Online Book Editing</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Do you want to fine-tune your grammar? Or do you want your writing to be more engaging? Or do you want someone to focus on 
              character development in your novel? Look no further, as our <span className="text-purple-400 font-semibold">Book Editing Company</span> will 
              make sure your voice shines on every page and captivates the hearts and minds of your readers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              From plot inconsistencies to punctuation errors, our book editing services online will make sure that your writing becomes a gem. 
              So, are you ready to <span className="text-pink-400 font-semibold">Hire Book Editors</span> and 
              <span className="text-pink-400 font-semibold"> Book Proofreading Services</span> at Ghostwriting Squad?
            </p>
          </motion.div>

          {/* Editing Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {editingTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 text-center group"
              >
                <div className="text-5xl mb-4 text-purple-500 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EDITING SERVICES SECTION ========== */}
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
              Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Core Editing</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive editing solutions tailored to perfect your manuscript
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {editingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: service.delay, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${service.gradient} p-8`}>
                  <div className="text-6xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white">{service.title}</h3>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-300 leading-relaxed mb-6">{service.desc}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Key Features:</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="p-6 border-t border-slate-700">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Why We Are One of the <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Best Editing Services</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-3">
              <FaRocket /> Get Started
            </button>
            <button className="border-2 border-purple-500 text-purple-400 px-10 py-5 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-3">
              <FaComments /> Live Chat
            </button>
          </motion.div>
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
              Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Editing Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A seamless journey from manuscript to masterpiece
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Manuscript Submission',
                desc: 'Submit your manuscript securely through our platform. We accept all major formats.'
              },
              {
                step: '02',
                title: 'Initial Review',
                desc: 'Our team reviews your work and assigns the perfect editor based on your genre and needs.'
              },
              {
                step: '03',
                title: 'Deep Editing',
                desc: 'Your dedicated editor works meticulously through your manuscript, enhancing every aspect.'
              },
              {
                step: '04',
                title: 'Quality Check',
                desc: 'A second editor reviews the work to ensure the highest quality standards.'
              },
              {
                step: '05',
                title: 'Final Delivery',
                desc: 'Receive your polished manuscript with detailed feedback and revision suggestions.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 flex-1">
                  <h3 className="text-2xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
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
              What <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Authors Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it—hear from satisfied authors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <FaQuoteLeft className="text-4xl text-purple-500 mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed italic">{testimonial.text}</p>
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
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
            <div className="inline-block bg-purple-500/20 text-purple-400 px-6 py-3 rounded-full mb-6 border border-purple-500/50">
              Affordable Pricing
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Budget-Friendly</span> Editing Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional editing services that won't break the bank
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Proofreading',
                price: '$0.015',
                unit: 'per word',
                features: ['Spelling & Grammar', 'Punctuation', 'Basic Formatting', '48-hour turnaround']
              },
              {
                name: 'Copy Editing',
                price: '$0.025',
                unit: 'per word',
                features: ['Everything in Basic', 'Style Consistency', 'Clarity Enhancement', '72-hour turnaround'],
                popular: true
              },
              {
                name: 'Line Editing',
                price: '$0.035',
                unit: 'per word',
                features: ['Everything in Copy', 'Flow Optimization', 'Dialogue Sharpening', '1-week turnaround']
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border ${
                  plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/30' : 'border-slate-700'
                } hover:border-purple-500 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
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
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105'
                    : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                }`}>
                  Choose Plan
                </button>
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
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Perfect</span> Your Manuscript?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let our expert editors transform your writing into a polished masterpiece that captivates readers!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-purple-500/50">
                Start Editing Today
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-bold text-xl hover:bg-purple-500 hover:text-white transition-all duration-300">
                Request a Sample Edit
              </button>
            </div>
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