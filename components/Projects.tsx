'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Code, Brain, Database, Globe } from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      title: 'Deep Learning Computer Vision System',
      description: 'Advanced image classification and object detection system using CNN architectures',
      problem: 'Need for accurate and efficient image recognition in medical diagnostics',
      approach: 'Developed a custom CNN architecture with data augmentation and transfer learning',
      tools: ['PyTorch', 'OpenCV', 'Docker', 'FastAPI'],
      results: 'Achieved 95% accuracy on medical image classification, 40% faster inference',
      impact: 'Enabled faster diagnosis in medical imaging, supporting healthcare professionals',
      category: 'Computer Vision',
      icon: Brain,
      github: 'https://github.com/yourusername/project1',
      demo: 'https://demo-project1.vercel.app',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Natural Language Processing Pipeline',
      description: 'End-to-end NLP pipeline for sentiment analysis and text classification',
      problem: 'Manual text analysis was time-consuming and inconsistent',
      approach: 'Built transformer-based models with custom preprocessing and deployment pipeline',
      tools: ['Transformers', 'Hugging Face', 'MLflow', 'Kubernetes'],
      results: 'Processed 10M+ documents, 92% accuracy, 99.9% uptime',
      impact: 'Automated customer feedback analysis, improved response time by 80%',
      category: 'NLP',
      icon: Database,
      github: 'https://github.com/yourusername/project2',
      demo: 'https://demo-project2.vercel.app',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'MLOps Platform for Model Deployment',
      description: 'Comprehensive platform for machine learning model lifecycle management',
      problem: 'Models were difficult to deploy, monitor, and maintain in production',
      approach: 'Created automated CI/CD pipeline with monitoring and A/B testing capabilities',
      tools: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Airflow'],
      results: 'Reduced deployment time by 75%, improved model reliability by 90%',
      impact: 'Enabled rapid iteration and reliable model serving for multiple teams',
      category: 'MLOps',
      icon: Globe,
      github: 'https://github.com/yourusername/project3',
      demo: 'https://demo-project3.vercel.app',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Reinforcement Learning Trading Agent',
      description: 'AI agent for algorithmic trading using deep reinforcement learning',
      problem: 'Traditional trading strategies were not adapting to market volatility',
      approach: 'Implemented DQN and PPO algorithms with custom reward functions',
      tools: ['TensorFlow', 'Gym', 'Pandas', 'NumPy', 'Redis'],
      results: 'Consistent returns in backtesting, outperformed baseline by 25%',
      impact: 'Demonstrated potential for automated trading strategies',
      category: 'Reinforcement Learning',
      icon: Code,
      github: 'https://github.com/yourusername/project4',
      demo: null,
      image: '/api/placeholder/600/400',
    },
  ]

  const categories = ['All', 'Computer Vision', 'NLP', 'MLOps', 'Reinforcement Learning']

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real-world AI solutions that demonstrate technical expertise and problem-solving abilities
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 font-medium"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-blue-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-white/80" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem & Approach */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Problem:</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Approach:</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{project.approach}</p>
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results & Impact */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Results:</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{project.results}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Impact:</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{project.impact}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              View All Projects on GitHub
              <ExternalLink className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
