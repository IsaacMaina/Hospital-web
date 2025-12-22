"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NavbarOffset = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Calculate the navbar height and adjust scroll position if needed
    const navbarHeight = 100; // Approximate height of the navbar
    const isTopPosition = window.scrollY === 0;
    
    if (isTopPosition) {
      // Add a small offset to ensure content is not hidden by navbar
      window.scrollTo(0, navbarHeight);
      // Then scroll back smoothly to top to show the content properly
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 10);
    }
  }, [pathname]); // Re-run when pathname changes

  return null;
};

export default NavbarOffset;