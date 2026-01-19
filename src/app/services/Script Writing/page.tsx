'use client'
import { motion } from 'framer-motion'
import { FaRocket, FaComments, FaVideo, FaYoutube, FaMicrophone, FaTv, FaFilm, FaGraduationCap, FaPen, FaCheckCircle, FaLightbulb, FaUsers, FaClock, FaAward, FaStar, FaChartLine, FaPlay, FaTheaterMasks, FaBullhorn, FaQuoteLeft, FaFire, FaMagic, FaEye, FaHandshake } from 'react-icons/fa'
import Link from 'next/link'

export default function ScriptWriting() {
  const stats = [
    { number: '3000+', label: 'Scripts Written', icon: <FaPen /> },
    { number: '500+', label: 'Happy Clients', icon: <FaUsers /> },
    { number: '98%', label: 'Client Satisfaction', icon: <FaStar /> },
    { number: '24/7', label: 'Support', icon: <FaClock /> }
  ]

  const scriptTypes = [
    {
      icon: <FaVideo />,
      title: 'Video Scripts',
      desc: 'Captivating video scripts that tell your story effectively and keep your audience engaged from start to finish.',
      features: ['Promotional Videos', 'Explainer Videos', 'Brand Stories', 'Corporate Videos'],
      gradient: 'from-purple-600 to-blue-600',
      color: 'purple'
    },
    {
      icon: <FaYoutube />,
      title: 'YouTube Scripts',
      desc: 'Engaging YouTube scripts optimized for viewer retention, SEO, and channel growth with compelling narratives.',
      features: ['Vlogs & Reviews', 'Tutorials & How-Tos', 'Entertainment Content', 'Educational Videos'],
      gradient: 'from-red-600 to-rose-600',
      color: 'red'
    },
    {
      icon: <FaMicrophone />,
      title: 'Podcast Scripts',
      desc: 'Well-structured podcast scripts with natural flow, engaging dialogue, and perfect pacing for audio storytelling.',
      features: ['Interview Scripts', 'Solo Episodes', 'Narrative Podcasts', 'Panel Discussions'],
      gradient: 'from-blue-600 to-cyan-600',
      color: 'blue'
    },
    {
      icon: <FaTv />,
      title: 'Commercial Scripts',
      desc: 'Persuasive commercial scripts that sell your product or service in 30, 60, or 90 seconds with maximum impact.',
      features: ['TV Commercials', 'Radio Ads', 'Online Ads', 'Product Demos'],
      gradient: 'from-cyan-600 to-teal-600',
      color: 'cyan'
    },
    {
      icon: <FaFilm />,
      title: 'Documentary Scripts',
      desc: 'Compelling documentary scripts that inform, educate, and inspire with powerful storytelling and research.',
      features: ['Historical Docs', 'Nature & Wildlife', 'Social Issues', 'Biography Docs'],
      gradient: 'from-teal-600 to-green-600',
      color: 'teal'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Training Videos',
      desc: 'Clear and concise training video scripts that educate employees and customers with easy-to-follow instructions.',
      features: ['Employee Training', 'Safety Videos', 'Onboarding', 'E-Learning Content'],
      gradient: 'from-green-600 to-lime-600',
      color: 'green'
    },
    {
      icon: <FaTheaterMasks />,
      title: 'Drama & Film Scripts',
      desc: 'Cinematic scripts for short films, web series, and feature films with strong characters and compelling plots.',
      features: ['Short Films', 'Web Series', 'Feature Films', 'Drama Scripts'],
      gradient: 'from-pink-600 to-purple-600',
      color: 'pink'
    },
    {
      icon: <FaBullhorn />,
      title: 'Social Media Scripts',
      desc: 'Snappy, attention-grabbing scripts for social media videos that stop the scroll and drive engagement.',
      features: ['Instagram Reels', 'TikTok Scripts', 'Facebook Videos', 'LinkedIn Content'],
      gradient: 'from-orange-600 to-red-600',
      color: 'orange'
    }
  ]

  const whyChooseUs = [
    {
      icon: <FaPen />,
      title: 'Expert Scriptwriters',
      desc: 'Professional writers with years of experience in various script formats and genres.'
    },
    {
      icon: <FaMagic />,
      title: 'Creative Excellence',
      desc: 'Innovative storytelling that captivates audiences and delivers your message effectively.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Industry Standards',
      desc: 'Scripts formatted to industry standards, ready for production immediately.'
    },
    {
      icon: <FaClock />,
      title: 'Fast Turnaround',
      desc: 'Quick delivery without compromising on quality or creativity.'
    },
    {
      icon: <FaUsers />,
      title: 'Collaborative Approach',
      desc: 'We work closely with you to ensure your vision comes to life.'
    },
    {
      icon: <FaAward />,
      title: 'Award-Winning',
      desc: 'Recognized excellence in scriptwriting and content creation.'
    }
  ]

  const processSteps = [
    {
      step: '01',
      icon: <FaHandshake />,
      title: 'Brief & Consultation',
      desc: 'We discuss your project goals, target audience, key messages, and creative vision to understand your requirements.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      step: '02',
      icon: <FaLightbulb />,
      title: 'Concept Development',
      desc: 'Our creative team brainstorms ideas, develops concepts, and creates a compelling narrative structure for your script.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      step: '03',
      icon: <FaPen />,
      title: 'Script Writing',
      desc: 'Expert scriptwriters craft your script with engaging dialogue, visual descriptions, and perfect pacing.',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      step: '04',
      icon: <FaEye />,
      title: 'Review & Revision',
      desc: 'You review the script and we make unlimited revisions until you\'re 100% satisfied with the final product.',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      step: '05',
      icon: <FaCheckCircle />,
      title: 'Final Delivery',
      desc: 'Receive your polished, production-ready script in your preferred format with all necessary documentation.',
      gradient: 'from-yellow-500 to-green-500'
    }
  ]

  const benefits = [
    'Professionally written scripts',
    'Engaging storytelling',
    'Industry-standard formatting',
    'Unlimited revisions',
    'Fast turnaround time',
    'SEO-optimized content',
    'Target audience focused',
    'Visual storytelling expertise',
    'Character development',
    'Compelling narratives',
    'Clear call-to-actions',
    'Production-ready scripts'
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
                <FaFilm className="text-5xl text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-8xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Transform Your Ideas Into <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">Compelling Scripts</span>
              <br />
              That Captivate Audiences
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From YouTube videos to commercials, podcasts to documentaries—<span className="text-purple-400 font-semibold">Ghostwriting Squad</span> crafts 
              professional scripts that bring your vision to life and engage your audience from the first word to the last.
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

      {/* ========== SCRIPT TYPES SECTION ========== */}
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
              <FaFire className="inline mr-2" />
              Our Script Writing Services
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Professional Scripts For <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Every Medium & Purpose</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Whether you need a script for video content, podcasts, commercials, or films—we've got you covered with 
              expertly crafted scripts that deliver results.
            </p>
          </motion.div>

          {/* Script Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scriptTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group overflow-hidden"
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${type.gradient}`}></div>

                {/* Content */}
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${type.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-3xl text-white">
                      {type.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">{type.desc}</p>
                  
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
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
              Why Choose <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Our Scriptwriters</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine creativity, expertise, and strategic thinking to deliver scripts that exceed expectations
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
              Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Creative Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to final script in five strategic steps
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
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
              What You <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Get</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every script comes with these premium benefits
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
              Flexible <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Pricing Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your script writing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Script',
                price: '$299',
                duration: 'up to 2 minutes',
                features: [
                  'Up to 300 words',
                  'Basic script structure',
                  '2 Revisions',
                  '48-hour delivery',
                  'Email support'
                ]
              },
              {
                name: 'Professional Script',
                price: '$599',
                duration: 'up to 5 minutes',
                popular: true,
                features: [
                  'Up to 750 words',
                  'Advanced storytelling',
                  'Unlimited revisions',
                  'Visual descriptions',
                  '24-hour delivery',
                  'Priority support',
                  'Format flexibility'
                ]
              },
              {
                name: 'Premium Script',
                price: '$999',
                duration: 'up to 10 minutes',
                features: [
                  'Up to 1500 words',
                  'Complex narratives',
                  'Unlimited revisions',
                  'Character development',
                  'Same-day delivery',
                  'Dedicated scriptwriter',
                  'Production consultation',
                  'Multiple formats'
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
                <p className="text-gray-400 text-sm mb-4">{plan.duration}</p>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-gray-400 ml-2">per script</span>
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
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
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
              What Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from satisfied content creators and businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "The YouTube script they wrote for my channel tripled my views! Exceptional quality and perfect pacing.",
                author: "Alex Morgan",
                role: "YouTuber - 500K Subscribers",
                rating: 5
              },
              {
                quote: "Our commercial script was pure perfection. It captured our brand voice and drove amazing conversions!",
                author: "Rachel Stevens",
                role: "Marketing Director",
                rating: 5
              },
              {
                quote: "Professional, creative, and delivered on time. The podcast script was exactly what we needed!",
                author: "James Wilson",
                role: "Podcast Host",
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
            <FaPlay className="text-7xl text-purple-500 mb-6 mx-auto" />
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Ready To Bring Your <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Vision To Life?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let's create a script that captivates your audience and achieves your goals. Get started today!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3">
                <FaRocket /> Start Your Project
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-bold text-xl hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                <FaComments /> Chat With Us
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
                <span>Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Unlimited Revisions</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>24/7 Support</span>
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