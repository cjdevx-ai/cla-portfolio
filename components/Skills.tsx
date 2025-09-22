'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Brain, 
  GitBranch, 
  Container,
  Server,
  Monitor,
  Layers,
  Zap,
  Shield
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 95, description: 'Primary language for ML/AI development' },
        { name: 'JavaScript/TypeScript', level: 85, description: 'Full-stack web development' },
        { name: 'R', level: 75, description: 'Statistical analysis and data science' },
        { name: 'SQL', level: 90, description: 'Database querying and optimization' },
        { name: 'Bash/Shell', level: 80, description: 'Automation and system administration' },
      ],
    },
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      skills: [
        { name: 'PyTorch', level: 95, description: 'Deep learning framework expertise' },
        { name: 'TensorFlow', level: 85, description: 'Production ML model development' },
        { name: 'Scikit-learn', level: 90, description: 'Traditional ML algorithms' },
        { name: 'Transformers', level: 88, description: 'NLP and transformer models' },
        { name: 'OpenCV', level: 80, description: 'Computer vision applications' },
        { name: 'Pandas/NumPy', level: 95, description: 'Data manipulation and analysis' },
      ],
    },
    {
      title: 'Data Engineering',
      icon: Database,
      skills: [
        { name: 'Apache Spark', level: 85, description: 'Big data processing' },
        { name: 'Apache Airflow', level: 80, description: 'Workflow orchestration' },
        { name: 'Apache Kafka', level: 75, description: 'Real-time data streaming' },
        { name: 'PostgreSQL', level: 90, description: 'Relational database management' },
        { name: 'MongoDB', level: 85, description: 'NoSQL database systems' },
        { name: 'Redis', level: 80, description: 'Caching and session management' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 90, description: 'SageMaker, EC2, S3, Lambda' },
        { name: 'Google Cloud', level: 85, description: 'AI Platform, BigQuery, GKE' },
        { name: 'Docker', level: 95, description: 'Containerization and deployment' },
        { name: 'Kubernetes', level: 85, description: 'Container orchestration' },
        { name: 'Terraform', level: 80, description: 'Infrastructure as code' },
        { name: 'CI/CD', level: 90, description: 'Jenkins, GitHub Actions, GitLab' },
      ],
    },
    {
      title: 'MLOps & Monitoring',
      icon: Monitor,
      skills: [
        { name: 'MLflow', level: 90, description: 'ML lifecycle management' },
        { name: 'Kubeflow', level: 80, description: 'ML workflows on Kubernetes' },
        { name: 'Prometheus', level: 85, description: 'Metrics and monitoring' },
        { name: 'Grafana', level: 80, description: 'Data visualization and dashboards' },
        { name: 'Weights & Biases', level: 88, description: 'Experiment tracking' },
        { name: 'DVC', level: 75, description: 'Data version control' },
      ],
    },
    {
      title: 'Specialized Tools',
      icon: Zap,
      skills: [
        { name: 'Jupyter/Colab', level: 95, description: 'Interactive development' },
        { name: 'Git/GitHub', level: 95, description: 'Version control and collaboration' },
        { name: 'Linux', level: 90, description: 'System administration' },
        { name: 'Nginx', level: 75, description: 'Web server and reverse proxy' },
        { name: 'Elasticsearch', level: 80, description: 'Search and analytics engine' },
        { name: 'Apache Superset', level: 70, description: 'Data visualization platform' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive expertise across the full AI/ML stack, from research to production
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                    <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.5 
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                            duration: 1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  5+
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Years of Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  50+
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Technologies Mastered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  100+
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Projects Completed
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                'AWS Machine Learning Specialty',
                'Google Cloud ML Engineer',
                'PyTorch Scholar',
                'Kaggle Expert',
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700"
                  whileHover={{ y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {cert}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
