'use client'
import { motion } from 'framer-motion'
import { FaRocket, FaComments, FaNewspaper, FaUtensils, FaFlask, FaFileAlt, FaPlane, FaHeartbeat, FaPen, FaUsers, FaAward, FaLightbulb, FaClock, FaHandshake, FaCheckCircle, FaUser, FaComment, FaBookOpen, FaHeart, FaStar, FaSearch, FaGlobe, FaPalette, FaFire } from 'react-icons/fa'
import Link from 'next/link'

export default function MagazineWriting() {
  const stats = [
    { number: '2000+', label: 'Articles Published', icon: <FaNewspaper /> },
    { number: '95%', label: 'Client Retention', icon: <FaAward /> },
    { number: '100+', label: 'Expert Writers', icon: <FaUsers /> },
    { number: '24/7', label: 'Support', icon: <FaClock /> }
  ]

  const magazineTypes = [
    {
      icon: <FaPalette />,
      title: 'Lifestyle & Culture',
      desc: 'Celebrate global lifestyles, cultural stories, and inspiring creativity. Stay connected to the world\'s evolving way of living as we explore trends, identity, art, and the way culture shapes who we are.',
      gradient: 'from-purple-600 to-pink-600',
      delay: 0
    },
    {
      icon: <FaUtensils />,
      title: 'Food & Cooking',
      desc: 'Savor delicious recipes, cooking tips, and culinary traditions. From comfort food to gourmet creations, we bring you the tastes, techniques, and stories behind every flavorful bite.',
      gradient: 'from-pink-600 to-rose-600',
      delay: 0.1
    },
    {
      icon: <FaFlask />,
      title: 'Science & Tech',
      desc: 'Explore cutting-edge innovations, discoveries, and futuristic ideas. Unlock the power of knowledge shaping our future — from AI breakthroughs to space exploration and everyday tech.',
      gradient: 'from-blue-600 to-cyan-600',
      delay: 0.2
    },
    {
      icon: <FaFileAlt />,
      title: 'Feature Article',
      desc: 'Engaging deep stories with insight, depth, and relevance. Bold voices and meaningful topics come together to spark thought, conversation, and fresh perspectives on the world around us.',
      gradient: 'from-cyan-600 to-teal-600',
      delay: 0.3
    },
    {
      icon: <FaPlane />,
      title: 'Travel & Adventure',
      desc: 'Journey through unforgettable places, people, and breathtaking experiences. Let curiosity lead you beyond the map as we uncover hidden gems and travel tales that inspire.',
      gradient: 'from-teal-600 to-green-600',
      delay: 0.4
    },
    {
      icon: <FaHeartbeat />,
      title: 'Health and Wellness',
      desc: 'Empower your mind, body, spirit, and healthy habits. Feel better, live stronger, and thrive every day with tips, practices, and science-backed guidance for whole-life well-being.',
      gradient: 'from-green-600 to-lime-600',
      delay: 0.5
    }
  ]

  const whyChooseUs = [
    {
      icon: <FaPen />,
      title: 'Expert Storytellers',
      desc: 'We are storytellers offering engaging content that captivates and inspires.'
    },
    {
      icon: <FaUsers />,
      title: 'Tailored Services',
      desc: 'Our services are tailored to your needs and target audience.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Clear & Concise',
      desc: 'Our writing is clear, concise, and impactful.'
    },
    {
      icon: <FaGlobe />,
      title: 'Wide Range',
      desc: 'We can tackle a wide range of magazine topics in any industry or niche.'
    },
    {
      icon: <FaHandshake />,
      title: 'Collaborative Approach',
      desc: 'We have a collaborative approach and work closely with you.'
    },
    {
      icon: <FaAward />,
      title: 'Unwavering Commitment',
      desc: 'We are dedicated to unwavering commitment to excellence.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Endless Support',
      desc: 'We offer endless guidance and support at every step.'
    },
    {
      icon: <FaClock />,
      title: '24/7 Available',
      desc: 'We are available for you round the clock.'
    }
  ]

  const writingFormats = [
    {
      icon: <FaUser />,
      title: 'Profile',
      desc: 'Do you want to write a profile article about an individual? We can help you in profiling their life, challenges, achievements, and influence.',
      color: 'purple'
    },
    {
      icon: <FaComment />,
      title: 'Opinion Pieces',
      desc: 'Write an opinion article and express your opinions and viewpoints on a specific topic or issue with our writers. We can help you back up your article with our research and expertise.',
      color: 'pink'
    },
    {
      icon: <FaBookOpen />,
      title: 'How-To Guides',
      desc: 'Want to write an article offering tips or step-by-step instructions for completing a task? Like a cookbook or want to help your audience master a skill? Don\'t worry! We are here for you!',
      color: 'blue'
    },
    {
      icon: <FaHeart />,
      title: 'Personal Essays',
      desc: 'Want to share your thoughts, observations, or feelings about life, society, or relationships? We can definitely help you do that.',
      color: 'rose'
    },
    {
      icon: <FaStar />,
      title: 'Reviews',
      desc: 'Whether writing a review about a product, event, service, or experience to bring awareness to your readers, we can help you craft an exceptional review article.',
      color: 'cyan'
    },
    {
      icon: <FaSearch />,
      title: 'Investigative Articles',
      desc: 'Whether you want to reveal hidden truths or expose wrongdoing, our writers can offer you insightful investigative articles backed up with thorough research, fact-checking, and ethical reporting practices.',
      color: 'teal'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { text: string; bg: string; border: string } } = {
      purple: { text: 'text-purple-500', bg: 'bg-purple-500/20', border: 'border-purple-500' },
      pink: { text: 'text-pink-500', bg: 'bg-pink-500/20', border: 'border-pink-500' },
      blue: { text: 'text-blue-500', bg: 'bg-blue-500/20', border: 'border-blue-500' },
      rose: { text: 'text-rose-500', bg: 'bg-rose-500/20', border: 'border-rose-500' },
      cyan: { text: 'text-cyan-500', bg: 'bg-cyan-500/20', border: 'border-cyan-500' },
      teal: { text: 'text-teal-500', bg: 'bg-teal-500/20', border: 'border-teal-500' }
    }
    return colors[color] || colors.purple
  }

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
              Elevate Your Brand With Our <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">Magazine Writing</span>
              <br />
              Agency USA
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Do you have unique ideas but are seeking someone who can make it as engaging as talking to your best friend? 
              Look no further as <span className="text-purple-400 font-semibold">Ghostwriting Squad</span>, with their team of the 
              most Creative Magazine Writer is here to make your magazine writing a masterpiece.
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

      {/* ========== TOP GHOSTWRITING SECTION ========== */}
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
              Top Ghostwriting Company
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Offering Exceptional <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Online Magazine Writers</span> For Your Needs
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Want to take your readers on a culinary adventure? Or do you want to talk about the latest trends? 
              Or are you fond of Writing A Magazine about travel? Don't worry; we can make every magazine writing 
              engaging, creative, and conversational.
            </p>
          </motion.div>

          {/* Magazine Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {magazineTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: type.delay, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${type.gradient} p-8`}>
                  <div className="text-6xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white">{type.title}</h3>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-300 leading-relaxed">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center mt-16"
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
            <div className="inline-block bg-pink-500/20 text-pink-400 px-6 py-3 rounded-full mb-6 border border-pink-500/50">
              Professional Services
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Ghostwriting Squad</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Seeking someone to take your content to the next level? Your search is over! Our magazine writers are here to collaborate 
              with you and create something truly extraordinary that inspires and engages your target audience.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our team of experts can write on every single topic of any industry, and that is why we end up being exceptional. 
              So, let your visions meet our literary experts and make a lasting impact on everyone!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 text-center group"
              >
                <div className="text-5xl mb-4 text-purple-500 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
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

      {/* ========== WRITING FORMATS SECTION ========== */}
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
              Experience the Magic
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Best <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Magazine Writing Services</span> in USA
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our writers hold expertise in offering magazine writing with various formats and styles to suit your audiences, 
              different topics, and purposes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {writingFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group"
              >
                {/* Icon Badge */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${getColorClasses(format.color).bg} border ${getColorClasses(format.color).border} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-3xl ${getColorClasses(format.color).text}`}>
                    {format.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{format.title}</h3>
                <p className="text-gray-400 leading-relaxed">{format.desc}</p>

                {/* Bottom accent line */}
                <div className={`mt-6 pt-6 border-t ${getColorClasses(format.color).border} border-opacity-30`}>
                  <button className={`text-sm font-semibold ${getColorClasses(format.color).text} hover:underline flex items-center gap-2`}>
                    Learn More <FaRocket className="text-xs" />
                  </button>
                </div>
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
              Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Writing Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to publication - a seamless creative journey
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Research',
                  desc: 'We dive deep into understanding your brand, audience, and objectives. Our research team gathers insights to create compelling content.',
                  icon: <FaSearch />
                },
                {
                  step: '02',
                  title: 'Concept Development',
                  desc: 'Creative brainstorming sessions where ideas come to life. We develop unique angles and story concepts tailored to your vision.',
                  icon: <FaLightbulb />
                },
                {
                  step: '03',
                  title: 'Writing & Drafting',
                  desc: 'Our expert writers craft engaging narratives that resonate with readers. Every word is carefully chosen for maximum impact.',
                  icon: <FaPen />
                },
                {
                  step: '04',
                  title: 'Review & Refinement',
                  desc: 'Multiple rounds of editing ensure perfection. We polish every sentence until it shines with clarity and creativity.',
                  icon: <FaCheckCircle />
                },
                {
                  step: '05',
                  title: 'Client Collaboration',
                  desc: 'Your feedback shapes the final product. We work closely with you to ensure complete satisfaction with the content.',
                  icon: <FaHandshake />
                },
                {
                  step: '06',
                  title: 'Final Delivery',
                  desc: 'Receive publication-ready content on time, every time. We also provide ongoing support for future needs.',
                  icon: <FaRocket />
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-black text-xl group-hover:scale-110 transition-transform duration-300">
                      {process.step}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl text-purple-500">{process.icon}</div>
                      <h3 className="text-xl font-bold">{process.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm">{process.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Let's Us Give Voice To Your <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Creative Imagination</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Get in touch anytime for all your magazine writing needs! We are working round the clock!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3">
                <FaRocket /> Get Started
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-bold text-xl hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                <FaComments /> Live Chat
              </button>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
                <FaClock className="text-4xl text-purple-500 mb-3 mx-auto" />
                <h4 className="font-bold mb-2">Quick Turnaround</h4>
                <p className="text-sm text-gray-400">Fast delivery without compromising quality</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
                <FaAward className="text-4xl text-pink-500 mb-3 mx-auto" />
                <h4 className="font-bold mb-2">Award-Winning Team</h4>
                <p className="text-sm text-gray-400">Recognized industry experts at your service</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
                <FaCheckCircle className="text-4xl text-green-500 mb-3 mx-auto" />
                <h4 className="font-bold mb-2">Satisfaction Guaranteed</h4>
                <p className="text-sm text-gray-400">Unlimited revisions until you're 100% happy</p>
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