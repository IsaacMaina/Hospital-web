import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeartPulse, Stethoscope, Baby, Scissors, FlaskConical, Syringe, Pill, Eye, Brain, Heart, User, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

// Fake department data
const departments = [
  {
    id: 1,
    name: "General Medicine",
    icon: <Stethoscope className="h-10 w-10 text-blue-600" />,
    description: "Comprehensive primary healthcare services for adults and children, including routine checkups, preventive care, and chronic disease management.",
    doctors: 15,
    image: "/departments/general-medicine-detail.jpg",
    services: ["Routine Checkups", "Chronic Disease Management", "Preventive Care", "Health Screenings"],
    doctorsList: [
      { id: 1, name: "Dr. Sarah Johnson", specialty: "Internal Medicine", experience: "15 years" },
      { id: 2, name: "Dr. Michael Chen", specialty: "Family Medicine", experience: "12 years" },
      { id: 3, name: "Dr. Emily Rodriguez", specialty: "Preventive Medicine", experience: "10 years" }
    ]
  },
  {
    id: 2,
    name: "Pediatrics",
    icon: <Baby className="h-10 w-10 text-blue-600" />,
    description: "Specialized medical care for infants, children, and adolescents, focusing on growth, development, and childhood diseases.",
    doctors: 8,
    image: "/departments/pediatrics-detail.jpg",
    services: ["Well-child Visits", "Vaccinations", "Developmental Assessments", "Pediatric Emergencies"],
    doctorsList: [
      { id: 4, name: "Dr. James Wilson", specialty: "Pediatrics", experience: "14 years" },
      { id: 5, name: "Dr. Lisa Thompson", specialty: "Neonatal Care", experience: "11 years" }
    ]
  },
  {
    id: 3,
    name: "Maternity",
    icon: <HeartPulse className="h-10 w-10 text-blue-600" />,
    description: "Comprehensive care for expectant mothers, including prenatal, delivery, and postpartum services in a comfortable environment.",
    doctors: 12,
    image: "/departments/maternity-detail.jpg",
    services: ["Prenatal Care", "Labor & Delivery", "Postpartum Care", "Newborn Care"],
    doctorsList: [
      { id: 6, name: "Dr. Robert Kim", specialty: "Obstetrics", experience: "16 years" },
      { id: 7, name: "Dr. Jennifer Lee", specialty: "Gynecology", experience: "13 years" }
    ]
  },
  {
    id: 4,
    name: "Surgery",
    icon: <Scissors className="h-10 w-10 text-blue-600" />,
    description: "Advanced surgical services with state-of-the-art equipment and minimally invasive techniques for faster recovery.",
    doctors: 10,
    image: "/departments/surgery-detail.jpg",
    services: ["General Surgery", "Minimally Invasive Surgery", "Robotic Surgery", "Surgical Consultations"],
    doctorsList: [
      { id: 8, name: "Dr. James Kamau", specialty: "General Surgery", experience: "16 years" },
      { id: 9, name: "Dr. Sarah Ochieng", specialty: "Cardiothoracic Surgery", experience: "14 years" }
    ]
  },
  {
    id: 5,
    name: "Cardiology",
    icon: <Heart className="h-10 w-10 text-blue-600" />,
    description: "Specialized care for heart and cardiovascular conditions, including diagnostic services and interventional procedures.",
    doctors: 7,
    image: "/departments/cardiology-detail.jpg",
    services: ["Cardiac Consultations", "Diagnostic Tests", "Interventional Procedures", "Cardiac Rehabilitation"],
    doctorsList: [
      { id: 10, name: "Dr. Maina Isaac Wachira", specialty: "Interventional Cardiology", experience: "15 years" },
      { id: 11, name: "Dr. Jane Mwangi", specialty: "Non-invasive Cardiology", experience: "12 years" }
    ]
  },
  {
    id: 6,
    name: "Neurology",
    icon: <Brain className="h-10 w-10 text-blue-600" />,
    description: "Comprehensive neurological care for disorders of the brain, spinal cord, and nervous system.",
    doctors: 6,
    image: "/departments/neurology-detail.jpg",
    services: ["Neurological Consultations", "Diagnostic Tests", "Treatment Plans", "Rehabilitation"],
    doctorsList: [
      { id: 12, name: "Dr. Robert Muthomi", specialty: "Neurology", experience: "18 years" },
      { id: 13, name: "Dr. Lisa Wanjiku", specialty: "Pediatric Neurology", experience: "10 years" }
    ]
  }
];

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const deptId = parseInt(params.id);
  const department = departments.find(dept => dept.id === deptId);
  
  if (!department) {
    return {
      title: "Department Not Found - MediCare Hospital",
      description: "The requested department could not be found.",
    };
  }
  
  return {
    title: `${department.name} - MediCare Hospital`,
    description: `Learn about our ${department.name} department at MediCare Hospital. ${department.description}`,
  };
}

const DepartmentPage = ({ params }: { params: { id: string } }) => {
  const deptId = parseInt(params.id);
  const department = departments.find(dept => dept.id === deptId);
  
  if (!department) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-80">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${department.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 bg-blue-600 text-white rounded-full">
                      {department.icon}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">{department.name}</h1>
                  </div>
                  <p className="text-xl text-white">{department.description}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Services */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {department.services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4"></div>
                    <p className="text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Doctors */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Doctors</h2>
              <div className="space-y-8">
                {department.doctorsList.map((doctor, index) => (
                  <div key={doctor.id} className="flex items-center border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-6">
                      <User className="h-8 w-8 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                      <p className="text-blue-600 font-medium mb-1">{doctor.specialty}</p>
                      <p className="text-gray-600">{doctor.experience} of experience</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Department Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><span className="font-bold">{department.doctors}</span> Doctors</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Monday - Sunday: 8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Accredited Department</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mt-6">
                Book Appointment
              </button>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3">Need Immediate Care?</h3>
              <p className="mb-4">
                For emergencies, please visit our emergency department or call our emergency line.
              </p>
              <button className="w-full bg-white text-blue-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Emergency Contact
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;