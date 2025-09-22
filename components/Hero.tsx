'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Code, Brain, Database, Cloud } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-primary-400/20"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        <Brain size={60} />
      </motion.div>
      <motion.div
        className="absolute top-32 right-20 text-blue-400/20"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.7 }}
      >
        <Database size={50} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20 text-indigo-400/20"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9 }}
      >
        <Cloud size={45} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-purple-400/20"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.1 }}
      >
        <Code size={55} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
              whileHover={{ scale: 1.02 }}
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">
                Clarence Jay
              </span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              AI Engineer & ML Researcher
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I build intelligent systems that solve real-world problems. 
            Passionate about machine learning, deep learning, and creating 
            scalable AI solutions that make a meaningful impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 text-lg font-semibold"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-3 text-lg font-semibold"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
          >
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '10+', label: 'Technologies Mastered' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/20"
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
