"use client";

import { HeartPulse, Stethoscope, Syringe, FileText, Calendar, BookOpen, AlertTriangle, Shield, Star, Download, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";
import NumberCounter from "@/components/ui/NumberCounter";

const HealthResourcesContent = () => {
  // Health articles
  const healthArticles = [
    {
      id: 1,
      title: "Understanding Heart Health",
      excerpt: "Learn about maintaining a healthy heart through diet, exercise, and lifestyle changes.",
      category: "Cardiology",
      readTime: "5 min read",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Managing Diabetes Effectively",
      excerpt: "Essential tips for controlling blood sugar levels and maintaining a healthy lifestyle with diabetes.",
      category: "Endocrinology",
      readTime: "7 min read",
      date: "2024-01-12"
    },
    {
      id: 3,
      title: "Pediatric Wellness Guide",
      excerpt: "Comprehensive guide to child health, nutrition, and developmental milestones.",
      category: "Pediatrics",
      readTime: "6 min read",
      date: "2024-01-10"
    },
    {
      id: 4,
      title: "Mental Health Awareness",
      excerpt: "Understanding mental health challenges and strategies for maintaining psychological well-being.",
      category: "Psychology",
      readTime: "8 min read",
      date: "2024-01-08"
    }
  ];

  // Wellness categories
  const wellnessCategories = [
    {
      name: "Nutrition",
      description: "Healthy eating guidelines and nutritional advice",
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      resources: 24
    },
    {
      name: "Exercise",
      description: "Fitness routines and physical activity recommendations",
      icon: <HeartPulse className="h-10 w-10 text-blue-600" />,
      resources: 18
    },
    {
      name: "Prevention",
      description: "Disease prevention and health screening guidelines",
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      resources: 32
    },
    {
      name: "Mental Health",
      description: "Resources for emotional and psychological well-being",
      icon: <AlertTriangle className="h-10 w-10 text-blue-600" />,
      resources: 15
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Health Resources & Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access valuable health information, educational materials, and wellness resources to support your journey to better health.
          </p>
        </motion.div>

        {/* Stats Section */}
        <section className="py-16 bg-white rounded-xl shadow-md mb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 50, label: "Health Articles", icon: FileText, suffix: "+" },
                { value: 100, label: "Educational Resources", icon: BookOpen, suffix: "+" },
                { value: 25, label: "Wellness Programs", icon: HeartPulse, suffix: "+" },
                { value: "24/7", label: "Support Access", icon: HeartPulse, suffix: "" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {typeof stat.value === 'number' ? (
                      <NumberCounter from={0} to={stat.value} suffix={stat.suffix} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wellness Categories */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Wellness Categories
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive health and wellness resources organized by category.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wellnessCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex justify-center mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{category.name}</h3>
                <p className="text-gray-600 text-center mb-4">{category.description}</p>
                <div className="text-center">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {category.resources} resources
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Health Articles */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Latest Health Articles
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest health and wellness articles written by medical professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {healthArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-6">{article.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                    <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Health Tools */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-10 text-white mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl font-bold mb-6">Interactive Health Tools</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Use our interactive tools to assess your health, calculate risks, and track your wellness journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/20 p-6 rounded-xl">
                <HeartPulse className="h-10 w-10 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">BMI Calculator</h3>
                <p className="text-blue-100">Calculate your Body Mass Index</p>
              </div>
              <div className="bg-white/20 p-6 rounded-xl">
                <Stethoscope className="h-10 w-10 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">Risk Assessment</h3>
                <p className="text-blue-100">Assess your health risks</p>
              </div>
              <div className="bg-white/20 p-6 rounded-xl">
                <Syringe className="h-10 w-10 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">Vaccination Tracker</h3>
                <p className="text-blue-100">Track your immunizations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Informed</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest health tips, medical insights, and wellness advice delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-r-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthResourcesContent;