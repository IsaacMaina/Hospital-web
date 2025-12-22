"use client";

import { useEffect, useRef } from "react";

interface NumberCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const NumberCounter = ({ from, to, duration = 2000, suffix = "", prefix = "" }: NumberCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const start = from || 0;
    const increment = (to - start) / (duration / 16); // 16ms is approx 60fps
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      
      if ((increment > 0 && current >= to) || (increment < 0 && current <= to)) {
        current = to;
        clearInterval(timer);
      }
      
      element.textContent = `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
    }, 16);
    
    return () => clearInterval(timer);
  }, [from, to, duration, prefix, suffix]);
  
  return <span ref={ref}>{prefix}{from}{suffix}</span>;
};

export default NumberCounter;