"use client";
import React from "react";
import { GridDotBackground } from "@/components/ui/grid-dot-background";

// Define custom type for CSS variables
type CSSPropertiesWithVars = React.CSSProperties & {
  '--rotate'?: string;
  '--delay'?: string;
};

export default function HeroSection() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
              Kairus Dael Demaano
            </h1>
            <p className="text-neutral-400 max-w-md mt-4 text-lg md:text-2xl font-medium">
              Web Developer
            </p>
            <p className="text-neutral-500 max-w-md mt-4 text-sm md:text-base">
              I build modern, responsive websites with clean, efficient code. Passionate about creating 
              beautiful user experiences and solving complex problems through innovative solutions.
            </p>
            <div className="flex items-center mt-8 space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-md bg-transparent border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition-colors font-medium"
              >
                View Work
              </a>
            </div>
          </div>
          
          {/* Right Column - Profile Image with Orbiting Tech Logos */}
          <div className="flex justify-center md:justify-end items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Profile Image Container */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-neutral-800 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 animate-gradient-xy"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                  KD
                </div>
              </div>
              
              {/* Orbiting Technology Logos */}
              <div className="orbit-container">
                {/* JavaScript Logo */}
                <div className="tech-logo orbit-item" style={{'--rotate': '0deg', '--delay': '0s'} as CSSPropertiesWithVars}>
                  <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center text-black font-bold text-lg">
                    JS
                  </div>
                </div>
                
                {/* React Logo */}
                <div className="tech-logo orbit-item" style={{'--rotate': '45deg', '--delay': '-2s'} as CSSPropertiesWithVars}>
                  <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                      <path d="M12 22.5c-5.52 0-10-2.24-10-5s4.48-5 10-5 10 2.24 10 5-4.48 5-10 5Zm0-8c-4.42 0-8 1.35-8 3s3.58 3 8 3 8-1.35 8-3-3.58-3-8-3Z" />
                      <path d="M12 22.5c-2.76 0-5-6.72-5-12.5S9.24 0 12 0s5 3.22 5 10-2.24 12.5-5 12.5Zm0-20c-1.65 0-3 3.12-3 7.5s1.35 7.5 3 7.5 3-3.12 3-7.5-1.35-7.5-3-7.5Z" />
                    </svg>
                  </div>
                </div>
                
                {/* Next.js Logo */}
                <div className="tech-logo orbit-item" style={{'--rotate': '90deg', '--delay': '-4s'} as CSSPropertiesWithVars}>
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg">
                    N
                  </div>
                </div>
                
                {/* PHP Logo */}
                <div className="tech-logo orbit-item" style={{'--rotate': '135deg', '--delay': '-6s'} as CSSPropertiesWithVars}>
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                    PHP
                  </div>
                </div>
                
                {/* Tailwind Logo */}
                <div className="tech-logo orbit-item" style={{'--rotate': '180deg', '--delay': '-8s'} as CSSPropertiesWithVars}>
                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                    TW
                  </div>
                </div>
                
                {/* MySQL Logo */}
                <div className="tech-logo orbit-item" style={{'--rotate': '225deg', '--delay': '-10s'} as CSSPropertiesWithVars}>
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    SQL
                  </div>
                </div>
                
                {/* Git Logo */}
                <div className="tech-logo orbit-item" style={{'--rotate': '270deg', '--delay': '-12s'} as CSSPropertiesWithVars}>
                  <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-lg">
                    Git
                  </div>
                </div>
                
                {/* jQuery Logo */}
                <div className="tech-logo orbit-item" style={{'--rotate': '315deg', '--delay': '-14s'} as CSSPropertiesWithVars}>
                  <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-lg">
                    jQ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Grid Dot Background with Beam Nexus Effect */}
      <GridDotBackground 
        dotColor="rgba(255, 255, 255, 0.15)" 
        dotSize={1.5} 
        gap={30} 
        beamColor="rgba(59, 130, 246, 0.6)"
      />
    </div>
  );
}