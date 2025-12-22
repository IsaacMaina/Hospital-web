"use client";

import { motion } from "framer-motion";
import { FlaskConical, Syringe, Heart, Droplets, Eye, Brain, FileText, Clock, MapPin } from "lucide-react";
import NumberCounter from "@/components/ui/NumberCounter";

const LabClient = () => {
  // Fake data for lab tests
  const labTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      description: "Measures different blood cell types and counts to evaluate overall health and detect disorders.",
      category: "Hematology",
      price: "KSh 800",
      preparation: "No fasting required",
      duration: "Same day results"
    },
    {
      id: 2,
      name: "Lipid Panel",
      description: "Measures cholesterol and triglyceride levels to assess cardiovascular risk.",
      category: "Chemistry",
      price: "KSh 1,200",
      preparation: "12-hour fast required",
      duration: "Same day results"
    },
    {
      id: 3,
      name: "Comprehensive Metabolic Panel",
      description: "Measures 14 different blood components to evaluate organ function and chemical balance.",
      category: "Chemistry",
      price: "KSh 1,500",
      preparation: "12-hour fast required",
      duration: "Same day results"
    },
    {
      id: 4,
      name: "Thyroid Function Test",
      description: "Measures hormones that control metabolism to diagnose thyroid disorders.",
      category: "Endocrinology",
      price: "KSh 1,600",
      preparation: "No fasting required",
      duration: "1-2 days results"
    },
    {
      id: 5,
      name: "HbA1c Test",
      description: "Measures average blood sugar levels over the past 2-3 months.",
      category: "Endocrinology",
      price: "KSh 1,000",
      preparation: "No fasting required",
      duration: "Same day results"
    },
    {
      id: 6,
      name: "Urinalysis",
      description: "Analyzes urine to detect and manage various disorders including UTIs, diabetes, and kidney disease.",
      category: "Microbiology",
      price: "KSh 600",
      preparation: "Collect midstream sample",
      duration: "Same day results"
    }
  ];

  const diagnosticTests = [
    {
      id: 1,
      name: "X-Ray",
      description: "Imaging test that uses electromagnetic radiation to view internal body structures.",
      category: "Radiology",
      price: "KSh 2,000",
      preparation: "Remove metallic objects",
      duration: "Immediate results"
    },
    {
      id: 2,
      name: "MRI Scan",
      description: "Uses magnetic fields and radio waves to create detailed images of organs and tissues.",
      category: "Radiology",
      price: "KSh 15,000",
      preparation: "Remove all metallic objects, may require contrast",
      duration: "1-2 days results"
    },
    {
      id: 3,
      name: "CT Scan",
      description: "Uses X-rays to create cross-sectional images of the body.",
      category: "Radiology",
      price: "KSh 10,000",
      preparation: "May require contrast, no metallic objects",
      duration: "Same day results"
    },
    {
      id: 4,
      name: "Ultrasound",
      description: "Uses high-frequency sound waves to create images of internal organs.",
      category: "Radiology",
      price: "KSh 3,000",
      preparation: "Varies by type",
      duration: "Immediate results"
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Lab & Diagnostic Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced laboratory and diagnostic services providing accurate results for your health assessment.
          </p>
        </motion.div>

        {/* Stats Section with Number Counter */}
        <section className="py-16 bg-gray-50 mb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  <NumberCounter from={0} to={15} suffix="+" />
                </div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  <NumberCounter from={0} to={200} suffix="+" />
                </div>
                <div className="text-gray-600">Expert Doctors</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  <NumberCounter from={0} to={50} suffix="K+" />
                </div>
                <div className="text-gray-600">Happy Patients</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lab Services Section */}
        <section className="mb-20">
          <div className="flex items-center mb-10">
            <FlaskConical className="h-10 w-10 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Laboratory Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labTests.map((test, index) => (
              <motion.div
                key={test.id}
                className="bg-white rounded-xl shadow-md p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{test.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
                    {test.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{test.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Category: {test.category}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Preparation: {test.preparation}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Results: {test.duration}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Request Test
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Diagnostic Services Section */}
        <section className="mb-20">
          <div className="flex items-center mb-10">
            <Brain className="h-10 w-10 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Diagnostic Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diagnosticTests.map((test, index) => (
              <motion.div
                key={test.id}
                className="bg-white rounded-xl shadow-md p-6 hover-lift flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mr-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {test.id === 1 && <Droplets className="h-8 w-8 text-blue-600" />}
                    {test.id === 2 && <Brain className="h-8 w-8 text-blue-600" />}
                    {test.id === 3 && <Heart className="h-8 w-8 text-blue-600" />}
                    {test.id === 4 && <Eye className="h-8 w-8 text-blue-600" />}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{test.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
                      {test.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{test.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {test.category}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {test.duration}
                    </span>
                  </div>
                  
                  <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Schedule Test
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Preparation Guidelines */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Test Preparation Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Syringe className="h-6 w-6 text-blue-600 mr-2" />
                Laboratory Tests
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Fast for 12 hours before chemistry tests</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Drink plenty of water before tests</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Inform us about medications you're taking</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Wear comfortable clothing</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Brain className="h-6 w-6 text-blue-600 mr-2" />
                Diagnostic Tests
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Remove all metallic objects before imaging</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Inform us about claustrophobia for MRI scans</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Contrast may be required for some tests</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Arrive 15 minutes early for registration</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lab Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FlaskConical className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Accurate Results</h3>
            <p className="text-gray-600">State-of-the-art equipment ensures precise and reliable test results.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Turnaround</h3>
            <p className="text-gray-600">Most results available within 24 hours for timely diagnosis.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Convenient Location</h3>
            <p className="text-gray-600">Accessible lab facilities with ample parking and easy access.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LabClient;