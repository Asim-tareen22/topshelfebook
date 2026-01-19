'use client';

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Globe, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="bg-background">
      <HeroSection />
      
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column: Info */}
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full font-bold mb-6">
                  <MessageSquare className="w-4 h-4" />
                  <span>Get in Touch</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)] mb-6">
                  Let's Start a <span className="text-[var(--primary-dark)]">Conversation</span>
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed max-w-xl">
                  Whether you're an author ready to publish or a reader with a question, we're here to help you every step of the way.
                </p>
              </div>

              <div className="grid gap-8">
                {[
                  { icon: Mail, title: 'Email Us', content: 'support@topshelf.com', sub: 'We reply within 24 hours' },
                  { icon: Phone, title: 'Call Us', content: '+1 (555) 000-0000', sub: 'Mon-Fri 9am - 6pm EST' },
                  { icon: MapPin, title: 'Visit Us', content: '123 Literary Ave, Book City, NY 10001', sub: 'Appointments recommended' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-6 p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-[var(--primary)] hover:bg-white hover:shadow-xl transition-all duration-300 group">
                      <div className="w-16 h-16 rounded-2xl bg-[var(--primary)] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-500 text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                        <div className="text-xl font-black text-[var(--primary)] mb-1">{item.content}</div>
                        <div className="text-gray-500">{item.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h4 className="font-bold text-[var(--primary)] mb-6">Follow Our Journey</h4>
                <div className="flex gap-4">
                  {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all hover:-translate-y-1">
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative z-10 animate-fade-in-up">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 uppercase ml-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 uppercase ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 uppercase ml-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 uppercase ml-1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Book Publishing"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[var(--primary)] focus:bg-white outline-none transition-all placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[var(--primary)] text-white py-5 rounded-2xl font-black text-xl hover:bg-[var(--primary-dark)] transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0"
                  >
                    {status === 'sending' ? 'Sending...' : status === 'sent' ? (
                      <>
                        <CheckCircle2 className="w-6 h-6" /> Sent Successfully
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--primary)]/5 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  );
}

// 1. Hero Section - MAROON
function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black mb-6 animate-fade-in-up">
          Contact <span className="text-accent">Us</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-0 animate-fade-in-up [animation-delay:200ms]">
          Real humans are waiting to hear from you.
        </p>
      </div>
    </section>
  );
}

// 2. Map Section - WHITE
function MapSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1684343200000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-90 hover:brightness-100 transition-all duration-700"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 animate-float hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Globe className="text-[var(--primary)] w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-black text-[var(--primary)]">Global HQ</div>
                  <div className="text-sm text-gray-500">New York City, USA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-bold mb-6 border border-accent/20">
                <Globe className="w-4 h-4" />
                <span>Our Locations</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)] mb-6">
                Visit Our <span className="text-[var(--primary-dark)]">Offices</span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                We're a remote-first team with hubs in major literary centers across the globe.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { city: 'New York', address: '123 Literary Ave, NY 10001', time: '9:00 AM - 6:00 PM' },
                { city: 'London', address: '45 Book Street, EC1A 1BB', time: '9:00 AM - 5:30 PM' },
                { city: 'Sydney', address: '78 Story Way, NSW 2000', time: '8:30 AM - 5:00 PM' }
              ].map((office, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all group cursor-default">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-[var(--primary)] text-xl mb-1">{office.city}</h4>
                      <p className="text-gray-500">{office.address}</p>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">
                      <Clock className="w-4 h-4" /> Local Time
                    </div>
                    <div className="text-[var(--primary)] font-bold">{office.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-3 text-[var(--primary)] font-black text-xl hover:gap-5 transition-all group">
              View all locations <ArrowRight className="w-6 h-6 text-accent group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}