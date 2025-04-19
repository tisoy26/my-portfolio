"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to detect when to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "backdrop-blur-sm bg-neutral-900/70 shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              Kairus
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#about" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md transition-colors">
                About
              </Link>
              <Link href="/#projects" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md transition-colors">
                Projects
              </Link>
              <Link href="/#contact" className="text-neutral-300 hover:text-white px-3 py-2 rounded-md transition-colors">
                Contact
              </Link>
              <Link 
                href="/#resume" 
                className="bg-white text-neutral-900 hover:bg-neutral-200 px-4 py-2 rounded-md font-medium transition-colors"
              >
                Resume
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-900">
            <Link 
              href="/#about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-300 hover:text-white block px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link 
              href="/#projects" 
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-300 hover:text-white block px-3 py-2 rounded-md"
            >
              Projects
            </Link>
            <Link 
              href="/#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-300 hover:text-white block px-3 py-2 rounded-md"
            >
              Contact
            </Link>
            <Link 
              href="/#resume" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-neutral-900 block px-3 py-2 rounded-md font-medium"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}