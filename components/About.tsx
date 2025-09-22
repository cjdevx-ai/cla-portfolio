'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, GraduationCap, Briefcase, Award } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const experiences = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'MS in Computer Science with focus on Machine Learning',
      details: 'Specialized in deep learning, computer vision, and natural language processing',
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: '5+ years building AI solutions',
      details: 'From research prototypes to production-scale systems',
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Published research & open source contributions',
      details: 'Contributing to the AI community through knowledge sharing',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate about creating intelligent systems that solve complex problems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I&apos;m an AI Engineer with a passion for building intelligent systems that make a real difference. 
                  With over 5 years of experience in machine learning and artificial intelligence, I&apos;ve worked 
                  on everything from research prototypes to production-scale systems.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My expertise spans across deep learning, computer vision, natural language processing, 
                  and MLOps. I believe in the power of AI to solve complex problems and improve lives, 
                  which is why I focus on creating solutions that are not just technically sound, 
                  but also ethically responsible and socially beneficial.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me reading the latest AI research papers, 
                  contributing to open-source projects, or sharing knowledge through technical writing 
                  and mentoring.
                </p>
              </div>

              {/* Key Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {[
                  'Innovation & Research',
                  'Ethical AI Practices',
                  'Continuous Learning',
                  'Collaborative Approach',
                ].map((value, index) => (
                  <motion.div
                    key={value}
                    className="flex items-center space-x-3 p-4 bg-primary-50 dark:bg-slate-800 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Profile Image & Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-blue-600 rounded-2xl flex items-center justify-center">
                  <User className="w-32 h-32 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
              </div>

              {/* Experience Cards */}
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl"
                    whileHover={{ x: 10 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <exp.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.description}</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">{exp.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center pt-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Explore My Projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
