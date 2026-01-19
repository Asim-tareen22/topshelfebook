'use client'
import { motion } from 'framer-motion'
import { FaRocket, FaComments, FaBullhorn, FaNewspaper, FaLightbulb, FaCalendar, FaBuilding, FaBell, FaTrophy, FaHeart, FaPen, FaUsers, FaCheckCircle, FaStar, FaChartLine, FaGlobe, FaAward, FaFire, FaEye, FaHandshake } from 'react-icons/fa'
import Link from 'next/link'

export default function PressRelease() {
  const stats = [
    { number: '2000+', label: 'Press Releases Written', icon: <FaNewspaper /> },
    { number: '500+', label: 'Media Outlets', icon: <FaGlobe /> },
    { number: '95%', label: 'Pickup Rate', icon: <FaChartLine /> },
    { number: '24/7', label: 'Support', icon: <FaBell /> }
  ]

  const pressReleaseTypes = [
    {
      icon: <FaLightbulb />,
      title: 'Product Launch',
      desc: 'Announce your new product to the world with compelling press releases that generate buzz and excitement.',
      features: ['Media Distribution', 'SEO Optimized', 'Engaging Headlines', 'Call-to-Action'],
      gradient: 'from-purple-600 to-blue-600',
      color: 'purple'
    },
    {
      icon: <FaCalendar />,
      title: 'Event Press',
      desc: 'Promote your upcoming events and conferences with press releases that attract attendees and media coverage.',
      features: ['Event Details', 'Target Audience', 'Media Invitations', 'Follow-up Support'],
      gradient: 'from-blue-600 to-cyan-600',
      color: 'blue'
    },
    {
      icon: <FaBuilding />,
      title: 'Company Announcement',
      desc: 'Share important company news, milestones, and updates with stakeholders and the public.',
      features: ['Corporate Messaging', 'Stakeholder Focus', 'Professional Tone', 'Brand Alignment'],
      gradient: 'from-cyan-600 to-teal-600',
      color: 'cyan'
    },
    {
      icon: <FaBell />,
      title: 'Media Alert',
      desc: 'Time-sensitive alerts that notify media about breaking news or upcoming announcements.',
      features: ['Quick Turnaround', 'Urgent Messaging', 'Media Contacts', 'Real-time Updates'],
      gradient: 'from-teal-600 to-green-600',
      color: 'teal'
    },
    {
      icon: <FaTrophy />,
      title: 'Award Press',
      desc: 'Celebrate achievements, awards, and recognitions with press releases that highlight your success.',
      features: ['Achievement Focus', 'Credibility Building', 'Quote Integration', 'Media Reach'],
      gradient: 'from-green-600 to-lime-600',
      color: 'green'
    },
    {
      icon: <FaHeart />,
      title: 'Charity',
      desc: 'Promote charitable initiatives, fundraisers, and social impact stories that inspire action.',
      features: ['Emotional Appeal', 'Impact Stories', 'Donor Engagement', 'Community Focus'],
      gradient: 'from-pink-600 to-rose-600',
      color: 'pink'
    }
  ]

  const whyChooseUs = [
    {
      icon: <FaPen />,
      title: 'Expert Writers',
      desc: 'Professional journalists and PR experts with years of experience.'
    },
    {
      icon: <FaGlobe />,
      title: 'Wide Distribution',
      desc: 'Access to 500+ media outlets and news platforms.'
    },
    {
      icon: <FaChartLine />,
      title: 'Proven Results',
      desc: '95% media pickup rate for our press releases.'
    },
    {
      icon: <FaRocket />,
      title: 'Fast Turnaround',
      desc: 'Quick delivery without compromising quality.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'SEO Optimized',
      desc: 'Every press release is optimized for search engines.'
    },
    {
      icon: <FaAward />,
      title: 'Award-Winning',
      desc: 'Recognized excellence in PR and content writing.'
    }
  ]

  const processSteps = [
    {
      step: '01',
      icon: <FaHandshake />,
      title: 'Initial Consultation',
      desc: 'We discuss your news, target audience, and objectives to understand your requirements.'
    },
    {
      step: '02',
      icon: <FaPen />,
      title: 'Writing & Drafting',
      desc: 'Our expert writers craft a compelling press release with attention-grabbing headlines.'
    },
    {
      step: '03',
      icon: <FaCheckCircle />,
      title: 'Review & Approval',
      desc: 'You review the draft and we make revisions until you\'re 100% satisfied.'
    },
    {
      step: '04',
      icon: <FaBullhorn />,
      title: 'Distribution',
      desc: 'We distribute your press release to targeted media outlets and news platforms.'
    }
  ]

  const benefits = [
    'Increase brand visibility and awareness',
    'Generate media coverage and publicity',
    'Improve SEO and online presence',
    'Build credibility and authority',
    'Drive traffic to your website',
    'Attract investors and partners',
    'Engage with your target audience',
    'Announce important updates effectively'
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
                <FaBullhorn className="text-5xl text-white" />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-8xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Make Your Message <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">Impactful</span> And Reach <br />
              Your Audience
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Have a piece of big news to share? <span className="text-purple-400 font-semibold">Ghostwriting Squad</span> will make sure
              everyone hears you. Hire press release writer and tell your story in a way that's easy to understand and engages your audience.
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

      {/* ========== SPREAD YOUR STORY SECTION ========== */}
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
              Spread Your Story
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Elevate Your Brand's Visibility With Our <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Press Release Writing Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Want to launch a product? Or do you want to announce an event? Look no further! Hiring a press release writer is made
              easier with <span className="text-purple-400 font-semibold">Ghostwriting Squad</span>. Our team will help you spread your
              word to the right people.
            </p>
          </motion.div>

          {/* Press Release Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleaseTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
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
                  <p className="text-gray-300 leading-relaxed mb-6">{type.desc}</p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Key Features:</h4>
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{feature}</span>
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
              Why Choose <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Our PR Services</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver press releases that get noticed, read, and published
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
              Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Simple Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to distribution in four easy steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-black text-lg group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6 text-purple-500 group-hover:scale-110 transition-transform duration-300 flex justify-center mt-4">
                  {process.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{process.desc}</p>
              </motion.div>
            ))}
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Benefits</span> of Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how press releases can transform your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
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
              Affordable <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Pricing Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your press release needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Release',
                price: '$199',
                features: [
                  'Up to 400 words',
                  'SEO Optimization',
                  'One Revision',
                  '48-hour Delivery',
                  'Email Support'
                ]
              },
              {
                name: 'Professional Release',
                price: '$399',
                popular: true,
                features: [
                  'Up to 600 words',
                  'SEO Optimization',
                  'Distribution to 50+ Outlets',
                  'Unlimited Revisions',
                  '24-hour Delivery',
                  'Priority Support'
                ]
              },
              {
                name: 'Premium Release',
                price: '$699',
                features: [
                  'Up to 800 words',
                  'Advanced SEO',
                  'Distribution to 200+ Outlets',
                  'Unlimited Revisions',
                  'Same-day Delivery',
                  'Dedicated Account Manager',
                  'Media Follow-up'
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border ${plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/30 scale-105' : 'border-slate-700'
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
                  <span className="text-gray-400 ml-2">per release</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${plan.popular
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
              Client <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Success Stories</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
              quote: "Our product launch press release got picked up by 50+ media outlets! Incredible results!",
              author: "Sarah Johnson",
              role: "CEO, Tech Startup",
              rating: 5
            },
            {
              quote: "Professional, fast, and effective. Our event had record attendance thanks to their PR work.",
              author: "Michael Chen",
              role: "Event Manager",
              rating: 5
            },
            {
              quote: "The best press release service we've used. Great writing and even better distribution!",
              author: "Emily Rodriguez",
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
            <FaBullhorn className="text-7xl text-purple-500 mb-6 mx-auto" />
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Get Ready To Share Your Story <br />
              With The <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">World</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Reach out to us and get your story noticed! We are just one call away! Let our team write a press release for you!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3">
                <FaRocket /> Get Started
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-bold text-xl hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                <FaComments /> Live Chat
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
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Fast Turnaround Time</span>
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
