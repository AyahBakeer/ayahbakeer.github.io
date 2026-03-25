/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import bonnenuitImg from './images/bonnenuit.png';
import dawamiImg from './images/dawami.png';
import fawriImg from './images/fawri.png';
import rafiqImg from './images/rafiq.png';
import bonnenuitUIImg from './images/bonnenuitUI.png';
import dawamiUIImg from './images/DawamiUI.png';
import ABwhite from './images/ABwhite.png';
import ABblack from './images/ABblack.png';
import imageImg from './images/image 1.png';
import image1Img from './images/image.png';
import image2Img from './images/image 3.png';
import image3Img from './images/image 2.png';
import {
  Smartphone,
  Lightbulb,
  Palette,
  Rocket,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const SERVICES = [
  {
    title: "From Idea to App",
    description: "You don't need technical knowledge. I take your idea and turn it into a real mobile application.",
    icon: <Lightbulb className="w-6 h-6" />,
    image: imageImg
  },
  {
    title: "Clean & Easy Design",
    description: "Simple, beautiful, and easy-to-use apps that people enjoy using every day.",
    icon: <Palette className="w-6 h-6" />,
    image: image1Img
  },
  {
    title: "Launch Ready",
    description: "Your app will be ready to publish on the App Store and Google Play with full support.",
    icon: <Rocket className="w-6 h-6" />,
    image: image2Img
  },
  {
    title: "Full App Development",
    description: "Complete app development from start to finish using modern, scalable technologies.",
    icon: <Smartphone className="w-6 h-6" />,
    image: image3Img
  }
];

const APPS = [
  {
    name: "Bonnenuit",
    tagline: "Elegant Shopping",
    description: "Built and developed a modern shopping app with a focus on clean design and smooth user experience.",
    icon: bonnenuitImg,
    uiImage: bonnenuitUIImg,
    color: "bg-stone-100"
  },
  {
    name: "Dawami",
    tagline: "Location Tracking",
    description: "Developed a location-based app for tracking employee presence within defined areas.",
    icon: dawamiImg,
    uiImage: dawamiUIImg,
    color: "bg-teal-50"
  },
  {
    name: "Rafiq",
    tagline: "Your Companion",
    description: "Upgraded and improved an existing application to enhance performance and compatibility.",
    icon: rafiqImg,
    uiImage: rafiqImg,
    color: "bg-blue-50"
  },
  {
    name: "Fawri",
    tagline: "Instant Deliveries",
    description: "Worked on improving performance, fixing issues, and maintaining stability in a high-traffic mobile application.",
    icon: fawriImg,
    uiImage: fawriImg,
    color: "bg-orange-50"
  }
];

const PROCESS = ["Discovery", "Design", "Development", "Testing", "Launch"];

export default function App() {
  const [showContact, setShowContact] = useState(false);
  const { scrollY } = useScroll();
  const phoneY = useTransform(scrollY, [0, 800], [0, -400]);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <img src={ABwhite} alt="Logo" className="h-8 object-contain" />
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-brand-dark transition-colors">Services</a>
            <a href="#work" className="hover:text-brand-dark transition-colors">Work</a>
            <a href="#process" className="hover:text-brand-dark transition-colors">Process</a>
          </div>
          <button
            onClick={() => setShowContact(true)}
            className="bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding pt-32 md:pt-48 flex flex-col items-center text-center hero-gradient">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-4xl leading-[1.1]"
        >
          Built for Real Use
        </motion.h1>

        <motion.div style={{ y: phoneY }} className="z-10 mt-16 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0]
            }}
            transition={{
              opacity: { duration: 1, delay: 0.2 },
              scale: { duration: 1, delay: 0.2 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-full max-w-[260px] aspect-[9/19] bg-gray-100 rounded-[2.5rem] border-[6px] border-brand-dark phone-shadow overflow-hidden"
          >
            <div className="absolute inset-0 bg-white flex items-center justify-center p-4">
              <img src={ABwhite} alt="AB Logo" className="w-[85%] h-auto object-contain" />
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 text-brand-muted max-w-md text-sm md:text-base leading-relaxed"
        >
          From idea to production — I design, build, and optimize mobile applications that are fast, scalable, and user-focused.
        </motion.p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-brand-dark text-white section-padding rounded-[3rem] mx-4 my-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Turn Your Idea <br /> Into a Mobile App
            </h2>
            <p className="text-gray-400 max-w-xs text-sm">
              I provide end-to-end services to help you launch your product successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="glass-card group cursor-default"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="bg-white/10 p-2 rounded-lg backdrop-blur-sm mb-4 inline-block"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-400 max-w-xs">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Apps Section */}
      <section id="work" className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="font-display text-3xl font-bold mb-12 text-center">Apps I've Worked On</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
            {APPS.map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex flex-col items-center text-center cursor-default group"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-gray-200 group-hover:border-brand-dark/20 transition-colors overflow-hidden">
                  <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-sm mb-1">{app.name}</h4>
                <p className="text-xs text-brand-muted max-w-[200px] leading-relaxed">{app.description}</p>
              </motion.div>
            ))}

          </div>

          {/* Case Studies */}
          <div className="space-y-32">
            {APPS.slice(0, 2).map((app, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-center mb-12">
                  <h3 className="font-display text-3xl font-bold mb-2">{app.name}</h3>
                  <p className="text-brand-muted text-lg">{app.tagline}</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`w-full ${app.color} rounded-[3rem] p-8 md:p-16 overflow-hidden`}
                >
                  <div className="w-full flex justify-center items-center">
                    <motion.img
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                      src={app.uiImage}
                      alt={app.name}
                      className="w-full h-auto max-h-[600px] object-contain rounded-xl"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-gray-50 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl font-bold mb-16">The Process</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {PROCESS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 md:gap-12"
              >
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-brand-muted mb-2">0{idx + 1}</span>
                  <span className="text-xl md:text-2xl font-display font-bold">{step}</span>
                </div>
                {idx < PROCESS.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-gray-300 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-brand-dark text-white section-padding rounded-t-[3rem] mt-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-30 pointer-events-none select-none">
          <img src={ABblack} alt="AB Logo Background" className="w-[80vw] h-auto object-contain drop-shadow-lg" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
            You don't need to know how to code — just bring your idea.
          </h2>

          <motion.button
            onClick={() => setShowContact(true)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold flex items-center gap-3 mx-auto mb-16 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.button>
        </div>
      </footer>

      {showContact && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white text-gray-900 p-8 rounded-3xl max-w-sm w-full relative shadow-2xl"
          >
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 cursor-pointer text-xl"
            >
              ✕
            </button>
            <h3 className="font-display text-2xl font-bold mb-6">Contact Me</h3>
            <div className="space-y-6">
              <div>
                <span className="text-xs text-brand-muted font-bold uppercase tracking-wider block mb-1">Email</span>
                <a href="mailto:ayahbakeer98@gmail.com" className="text-brand-dark font-medium hover:underline block break-all text-lg">
                  ayahbakeer98@gmail.com
                </a>
              </div>
              <div>
                <span className="text-xs text-brand-muted font-bold uppercase tracking-wider block mb-1">Phone</span>
                <a href="tel:+970599324495" className="text-brand-dark font-medium hover:underline block text-lg">
                  +970 599 324 495
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
