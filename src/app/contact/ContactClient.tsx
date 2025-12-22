"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, HeartPulse, Ambulance, Building, MessageCircle } from "lucide-react";
import NumberCounter from "@/components/ui/NumberCounter";

const ContactClient = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to us for appointments, inquiries, or emergency services. We're here to help you.
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    123 Hospital Road<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Phone Numbers</h3>
                  <p className="text-gray-600 mb-2">General Inquiries: +254 758 302725</p>
                  <p className="text-gray-600">Appointments: +254 758 302725</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">mainaisaacwachira2000@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Hours of Operation</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-600 mb-2">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Emergency Section */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-12">
              <div className="flex items-center mb-4">
                <HeartPulse className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-800">Emergency Services</h3>
              </div>
              <p className="text-red-700 mb-4">
                For life-threatening emergencies, dial 999 or 112 immediately. Our emergency department is open 24/7.
              </p>
              <div className="flex items-center text-red-700">
                <Ambulance className="h-5 w-5 mr-2" />
                <span>Emergency: +254 758 302725</span>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800">
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Request</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-800 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Location Map */}
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-gray-800 p-6">Our Location</h3>
              <div className="h-64 md:h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.80926833214!2d36.78112337405955!3d-1.2920659357354946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d58f0a39%3A0xf726fc51ad591a0a!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1734887123456!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MediCare Hospital Location Map"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional Contact Options */}
        <motion.div 
          className="mt-20 bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Additional Contact Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
              <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak with a representative directly</p>
              <p className="text-lg font-bold text-blue-600">+254 758 302725</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us an email for non-urgent inquiries</p>
              <p className="text-blue-600">mainaisaacwachira2000@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactClient;