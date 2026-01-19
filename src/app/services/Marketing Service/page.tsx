'use client'
import { motion } from 'framer-motion'
import { FaRocket, FaComments, FaBullhorn, FaCode, FaShareAlt, FaPenFancy, FaChartLine, FaUsers, FaDollarSign, FaClock, FaHandshake, FaSearch, FaLightbulb, FaCog, FaEye, FaFileAlt, FaCheckCircle, FaStar, FaTrophy, FaFire, FaAward } from 'react-icons/fa'
import Link from 'next/link'

export default function MarketingServices() {
  const stats = [
    { number: '500%', label: 'Average ROI', icon: <FaChartLine /> },
    { number: '1000+', label: 'Books Promoted', icon: <FaBullhorn /> },
    { number: '50K+', label: 'Readers Reached', icon: <FaUsers /> },
    { number: '95%', label: 'Client Satisfaction', icon: <FaStar /> }
  ]

  const marketingServices = [
    {
      icon: <FaBullhorn />,
      title: 'Paid Advertisement',
      desc: 'Maximize reach with targeted ads that get your eBook in front of the right readers — fast and effectively.',
      features: [
        'Facebook & Instagram Ads',
        'Google Ads Campaign',
        'Amazon Book Ads',
        'Targeted Audience Reach'
      ],
      gradient: 'from-purple-600 to-blue-600',
      color: 'purple'
    },
    {
      icon: <FaCode />,
      title: 'Web Development',
      desc: 'We design sleek, responsive, and SEO-friendly websites that beautifully showcase your eBook, support sales, and reflect your personal brand.',
      features: [
        'Custom Author Website',
        'SEO Optimization',
        'Responsive Design',
        'E-commerce Integration'
      ],
      gradient: 'from-blue-600 to-cyan-600',
      color: 'blue'
    },
    {
      icon: <FaShareAlt />,
      title: 'Social Media Marketing',
      desc: 'We grow your eBook\'s online presence with smart, engaging social media campaigns that connect with your readers.',
      features: [
        'Content Strategy',
        'Platform Management',
        'Engagement Growth',
        'Influencer Outreach'
      ],
      gradient: 'from-cyan-600 to-teal-600',
      color: 'cyan'
    },
    {
      icon: <FaPenFancy />,
      title: 'Content Marketing',
      desc: 'From blogs to newsletters, we craft content that builds authority, drives traffic, and keeps your eBook in the spotlight.',
      features: [
        'Blog Writing',
        'Email Newsletters',
        'Press Releases',
        'Book Trailers'
      ],
      gradient: 'from-teal-600 to-green-600',
      color: 'teal'
    }
  ]

  const workProcess = [
    {
      step: '01',
      icon: <FaHandshake />,
      title: 'Initial Consultation',
      desc: 'The journey starts with a chat between you and the marketing team. In this stage, our team will extract all the necessary details from you, for instance, your goal, your overall marketing budget, the timeline, your target audience, and other related essential information.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      step: '02',
      icon: <FaSearch />,
      title: 'Market Research and Analysis',
      desc: 'After we absorb all the details, we dive into the world of research to understand the book\'s genre, target audience, competition, and market trends. We determine your audience\'s demographics, influential bloggers/reviewers, popular keywords, and marketing opportunities.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      step: '03',
      icon: <FaLightbulb />,
      title: 'Strategy Development and Content Creation',
      desc: 'Once the research is conducted, the team develops a tailored marketing strategy based on the findings. The strategy for EBOOK for MARKETING may include content marketing, paid advertising, email marketing, or PR efforts. Once the plan is developed, we head towards content creation.',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      step: '04',
      icon: <FaCog />,
      title: 'Platform Setup, Optimization, and Strategy Implementation',
      desc: 'Don\'t have a social media profile for your book? Don\'t worry; we can set up and optimize different digital platforms like social media pages, email marketing software, and book sales pages on platforms like Amazon. Next, we implement strategies like scheduling and posting social media updates.',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      step: '05',
      icon: <FaEye />,
      title: 'Monitoring and Optimization',
      desc: 'Want to know the performance of your campaigns? Don\'t worry. Our Book Marketing Firm will closely monitor the marketing activities using different analytical tools. Based on the findings, our team adjusts and optimizes the strategies to improve campaign effectiveness.',
      gradient: 'from-yellow-500 to-green-500'
    },
    {
      step: '06',
      icon: <FaFileAlt />,
      title: 'Reporting Analytics and Feedback',
      desc: 'We understand your deep concerns about your book\'s sale and visibility. Therefore, we make sure to keep you updated at every step of your marketing journey. We provide detailed analytics reports, summaries of key findings, feedback, and recommendations for improvement.',
      gradient: 'from-green-500 to-teal-500'
    }
  ]

  const benefits = [
    {
      icon: <FaChartLine />,
      title: 'Data-Driven Results',
      desc: 'We use analytics and insights, not guesswork'
    },
    {
      icon: <FaTrophy />,
      title: 'Proven Track Record',
      desc: 'Successfully marketed 1000+ books'
    },
    {
      icon: <FaUsers />,
      title: 'Targeted Audience',
      desc: 'Reach the readers who love your genre'
    },
    {
      icon: <FaDollarSign />,
      title: 'Maximize ROI',
      desc: 'Get the best return on your marketing investment'
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
              Boost Your Book's Reach With Our <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">Online Book Marketing</span> Service
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Do you want your story to shine bright among your audience? Look no further, as <span className="text-purple-400 font-semibold">Ghostwriting Squad</span> is 
              all set to elevate your book's visibility and boost your sales with eBook Marketing Services.
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

      {/* ========== GET READY TO BOOST SECTION ========== */}
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
              Get Ready To
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Boost Your Sales With Our <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Optimal Marketing Strategies</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto space-y-6 mb-16"
          >
            <p className="text-xl text-gray-300 leading-relaxed text-center">
              From crafting engaging social media campaigns to making meaningful connections with important influencers, we make sure 
              every strategy for your book marketing has a significant impact on your audience.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed text-center">
              In today's competitive market, having a great product is not enough for success; in fact, you need to get your product 
              into the hands of the eager audience. This is where our <span className="text-pink-400 font-semibold">eBook Marketing Agency</span> steps in!
            </p>
            <p className="text-lg text-gray-400 leading-relaxed text-center">
              Our team doesn't rely on guessing games or outdated marketing strategies; instead, we leverage the latest trends and 
              insights to boost your sales and use a tailored approach for your unique goals and audience. Therefore, we make sure 
              that our <span className="text-pink-400 font-semibold">Marketing Services For Author</span> team stays committed to elevating 
              your narrative and driving meaningful results.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 text-center group"
              >
                <div className="text-5xl mb-4 text-purple-500 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MARKETING SERVICES SECTION ========== */}
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
              Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Marketing Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive marketing solutions to amplify your book's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${service.gradient} p-8`}>
                  <div className="text-6xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">{service.desc}</p>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                      <FaRocket /> Get Started
                    </button>
                    <button className="flex-1 border-2 border-purple-500 text-purple-400 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      <FaComments /> Live Chat
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW WE WORK SECTION ========== */}
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
            <div className="inline-block bg-pink-500/20 text-pink-400 px-6 py-3 rounded-full mb-6 border border-pink-500/50">
              Bringing You Fame
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              How Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">eBook Marketing Team</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven step-by-step process to maximize your book's visibility and sales
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {workProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-black text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${process.gradient} mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-3xl text-white">
                      {process.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{process.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRICING/PACKAGES SECTION ========== */}
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Flexible</span> Marketing Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan to boost your book's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter Package',
                price: '$499',
                features: [
                  'Social Media Setup',
                  '30 Days Campaign',
                  'Basic Content Creation',
                  'Performance Report',
                  'Email Support'
                ],
                popular: false
              },
              {
                name: 'Professional Package',
                price: '$999',
                features: [
                  'Everything in Starter',
                  '60 Days Campaign',
                  'Paid Ads Management',
                  'Author Website',
                  'Weekly Analytics',
                  'Priority Support'
                ],
                popular: true
              },
              {
                name: 'Premium Package',
                price: '$1999',
                features: [
                  'Everything in Professional',
                  '90 Days Campaign',
                  'Influencer Outreach',
                  'PR & Media Coverage',
                  'Custom Strategy',
                  'Dedicated Manager',
                  '24/7 Support'
                ],
                popular: false
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
                  <span className="text-gray-400 ml-2">one-time</span>
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
              Success <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped authors achieve their marketing goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Ghostwriting Squad's marketing team tripled my book sales in just 2 months! Their strategies are incredible.",
                author: "Jessica Thompson",
                role: "Romance Author",
                rating: 5
              },
              {
                quote: "The best investment I made for my book. Professional, effective, and results-driven marketing!",
                author: "David Martinez",
                role: "Thriller Novelist",
                rating: 5
              },
              {
                quote: "From social media to paid ads, they handled everything perfectly. My book is finally getting the attention it deserves!",
                author: "Amanda Lee",
                role: "Self-Published Author",
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
            <FaAward className="text-7xl text-purple-500 mb-6 mx-auto" />
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Ready to Make Your Book a <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Bestseller</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let's create a marketing strategy that gets your book in front of thousands of eager readers!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3">
                <FaRocket /> Launch Your Campaign
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-bold text-xl hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                <FaComments /> Speak With Expert
              </button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 flex flex-wrap justify-center gap-8 items-center"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Expert Marketing Team</span>
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