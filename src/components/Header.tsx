"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, HeartPulse, User, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // On non-home pages, always show the background
      if (pathname !== '/') {
        setScrolled(true);
      }
      // On home page, show background when scrolled more than 20px
      else if (window.scrollY > 20) {
        setScrolled(true);
      }
      // On home page, keep transparent when at top
      else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize scrolled state based on current page and scroll position
    if (pathname !== '/') {
      setScrolled(true);
    } else {
      setScrolled(window.scrollY > 20);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Doctors", href: "/doctors" },
    { name: "Departments", href: "/departments" },
    { name: "Appointments", href: "/appointments" },
    { name: "Lab & Diagnostics", href: "/lab" },
    { name: "Billing", href: "/billing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        pathname !== '/' || scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Navigation Bar - Logo, Emergency, Login */}
        <div className="hidden md:flex items-center justify-between py-2">
          <Link href="/" className="flex items-center space-x-2">
            <HeartPulse className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">MediCare Kenya</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              href="tel:+254758302725"
              className="bg-red-600 text-white px-3 py-2 rounded-full hover:bg-red-700 transition-colors flex items-center space-x-2"
              title="Emergency Contact: +254 758 302725"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm font-medium">+254 758 302725</span>
            </Link>

            {user ? (
              <div className="flex items-center space-x-2">
                <Link
                  href="/auth/dashboard"
                  className="flex items-center space-x-1 p-2 text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden md:block truncate max-w-[80px]">{user.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="p-2 text-gray-700 hover:text-blue-600"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="flex items-center space-x-1 p-2 text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap"
              >
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>

        {/* Bottom Navigation Bar - Page Links */}
        <div className="hidden md:block py-2">
          <div className="flex justify-center">
            <nav>
              <div className="flex flex-wrap gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group text-sm whitespace-nowrap ${isActive ? 'text-blue-600' : ''}`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          className="absolute -bottom-1 left-0 h-0.5 bg-blue-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex justify-between items-center py-2 md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <HeartPulse className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">MediCare Kenya</span>
          </Link>
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white shadow-lg fixed inset-0 z-50 overflow-y-auto"
          ref={mobileMenuRef}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col min-h-screen">
            <div className="flex-grow overflow-y-auto">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-3 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-4">
              <button className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors w-full">
                Emergency: +254 758 302725
              </button>

              {user ? (
                <>
                  <Link
                    href="/auth/dashboard"
                    className="text-gray-700 hover:text-blue-600 font-medium py-3 border-b border-gray-100 flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5 mr-2" />
                    {user.name} (Dashboard)
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-blue-600 font-medium py-3 border-b border-gray-100 flex items-center w-full text-left"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/auth/login"
                  className="text-gray-700 hover:text-blue-600 font-medium py-3 border-b border-gray-100 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-2" />
                  Login
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};