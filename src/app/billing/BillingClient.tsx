"use client";

import { motion } from "framer-motion";
import { CreditCard, FileText, ReceiptText, Shield, Wallet, Phone, Mail } from "lucide-react";
import NumberCounter from "@/components/ui/NumberCounter";

const BillingClient = () => {
  // Fake data for insurance providers
  const insuranceProviders = [
    { id: 1, name: "NHIF", logo: "https://via.placeholder.com/150x50?text=NHIF", accepted: true },
    { id: 2, name: "AAR Healthcare", logo: "https://via.placeholder.com/150x50?text=AAR", accepted: true },
    { id: 3, name: "Blue Cross", logo: "https://via.placeholder.com/150x50?text=BC", accepted: true },
    { id: 4, name: "CIC Insurance", logo: "https://via.placeholder.com/150x50?text=CIC", accepted: true },
    { id: 5, name: "Safaricom Insurance", logo: "https://via.placeholder.com/150x50?text=Safaricom", accepted: true },
    { id: 6, name: "Jubilee Insurance", logo: "https://via.placeholder.com/150x50?text=Jubilee", accepted: false },
  ];

  // Fake data for payment options
  const paymentOptions = [
    { id: 1, name: "M-Pesa", icon: <CreditCard className="h-8 w-8 text-blue-600" />, description: "Pay directly through M-Pesa" },
    { id: 2, name: "Bank Transfer", icon: <Wallet className="h-8 w-8 text-blue-600" />, description: "Direct bank account transfers" },
    { id: 3, name: "Insurance", icon: <Shield className="h-8 w-8 text-blue-600" />, description: "All major insurance providers accepted" },
    { id: 4, name: "Cash", icon: <FileText className="h-8 w-8 text-blue-600" />, description: "Cash payments accepted at registration" },
  ];

  // Fake data for billing information
  const billingInfo = [
    { id: 1, title: "Understanding Your Bill", description: "Learn how to read and understand your hospital bill" },
    { id: 2, title: "Payment Plans", description: "Flexible payment options for large medical bills" },
    { id: 3, title: "Financial Assistance", description: "Information about financial aid programs" },
    { id: 4, title: "Insurance Claims", description: "How to file and track insurance claims" },
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Billing & Insurance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent billing, accepted insurance plans, and flexible payment options to make healthcare accessible.
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

        {/* Accepted Insurance Providers */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-20">
          <div className="flex items-center mb-8">
            <Shield className="h-10 w-10 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Accepted Insurance Plans</h2>
          </div>
          
          <p className="text-gray-600 mb-8">
            We accept most major insurance plans in Kenya. Please contact us or your insurance provider to verify coverage before your visit.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {insuranceProviders.map((provider) => (
              <motion.div
                key={provider.id}
                className={`border rounded-xl p-4 text-center ${provider.accepted ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-100'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-12 flex items-center justify-center mb-2">
                  <span className="text-gray-800 font-medium">{provider.name}</span>
                </div>
                <div className={`text-sm font-medium ${provider.accepted ? 'text-green-600' : 'text-gray-500'}`}>
                  {provider.accepted ? 'Accepted' : 'Not Accepted'}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800">
              <strong>Note:</strong> Insurance coverage and benefits can change. We recommend verifying your coverage before receiving services.
            </p>
          </div>
        </section>

        {/* Payment Options */}
        <section className="mb-20">
          <div className="flex items-center mb-10">
            <Wallet className="h-10 w-10 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Payment Options</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={option.id}
                className="bg-white rounded-xl shadow-md p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-blue-100 rounded-lg">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{option.name}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Billing Information */}
        <section className="mb-20">
          <div className="flex items-center mb-10">
            <ReceiptText className="h-10 w-10 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Billing Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {billingInfo.map((info, index) => (
              <motion.div
                key={info.id}
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                <p className="text-gray-600 mb-4">{info.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Financial Assistance */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-10 text-white mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Financial Assistance Available</h2>
            <p className="text-xl mb-8">
              We believe quality healthcare should be accessible to everyone. Financial assistance programs are available for those who qualify.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                Apply for Assistance
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Billing FAQ */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Billing FAQ</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">When will I receive my bill?</h3>
              <p className="text-gray-600">
                You will typically receive your bill within 2-4 weeks after your service. If you have insurance, 
                the billing process may take longer as we coordinate with your insurance provider.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">How can I pay my bill?</h3>
              <p className="text-gray-600">
                You can pay your bill online, by phone, by mail, or in person at our billing office. 
                We accept M-Pesa, bank transfers, checks, and cash payments.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">What if I can't pay my bill in full?</h3>
              <p className="text-gray-600">
                We offer payment plans to help you manage your medical expenses. Contact our billing 
                office to discuss options that work for your financial situation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Why did I receive a bill if I have insurance?</h3>
              <p className="text-gray-600">
                Insurance may not cover all services or may require co-payments, deductibles, or coinsurance. 
                You may also receive a bill if your insurance information was not verified before your visit.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Billing Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our billing specialists are available to help you understand your bill, insurance coverage, 
            and payment options.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 text-blue-600 mr-3" />
              <span className="text-lg text-gray-800">+254 758 302725</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600 mr-3" />
              <span className="text-lg text-gray-800">mainaisaacwachira2000@gmail.com</span>
            </div>
          </div>
          
          <p className="text-gray-600 mt-6">
            Billing Office Hours: Monday - Friday, 8:00 AM - 6:00 PM
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BillingClient;