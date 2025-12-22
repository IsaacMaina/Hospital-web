import Link from "next/link";
import { HeartPulse, MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <HeartPulse className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">MediCare</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing exceptional healthcare services with compassion and cutting-edge technology since 1995.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-700">
                <span className="font-bold">f</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center cursor-pointer hover:bg-blue-500">
                <span className="font-bold">t</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center cursor-pointer hover:bg-blue-800">
                <span className="font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/doctors" className="text-gray-400 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link href="/departments" className="text-gray-400 hover:text-white transition-colors">Departments</Link></li>
              <li><Link href="/appointments" className="text-gray-400 hover:text-white transition-colors">Appointments</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Departments</h3>
            <ul className="space-y-2">
              <li><Link href="/departments/general-medicine" className="text-gray-400 hover:text-white transition-colors">General Medicine</Link></li>
              <li><Link href="/departments/pediatrics" className="text-gray-400 hover:text-white transition-colors">Pediatrics</Link></li>
              <li><Link href="/departments/maternity" className="text-gray-400 hover:text-white transition-colors">Maternity</Link></li>
              <li><Link href="/departments/surgery" className="text-gray-400 hover:text-white transition-colors">Surgery</Link></li>
              <li><Link href="/departments/pharmacy" className="text-gray-400 hover:text-white transition-colors">Pharmacy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">123 Hospital Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">+254 758 302725</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">info@medicare-hospital.co.ke</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">Mon-Sun: 24/7 Emergency<br />Mon-Fri: 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MediCare Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};