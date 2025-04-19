import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

// Define custom type for CSS variables
type CSSPropertiesWithVars = React.CSSProperties & {
  '--rotate'?: string;
  '--delay'?: string;
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section with Grid Background */}
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
        
        {/* Grid Background with Circulating Color Effect */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "animate-grid-color",
            "bg-grid-neutral"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Hello! I'm Kairus, a passionate web developer and designer with expertise in building
              modern, responsive websites and applications. I focus on creating clean, efficient code
              and beautiful user experiences.
            </p>
            <p className="text-lg mb-4">
              My technical skills include JavaScript, React, Next.js, TypeScript, and Tailwind CSS.
              I believe in constantly learning and adapting to new technologies to stay at the forefront
              of web development.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new design trends, contributing to open source
              projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <div className="h-48 bg-neutral-200 dark:bg-neutral-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  A full-stack e-commerce solution with product management, cart functionality, and secure checkout.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-sm">Tailwind</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project →</a>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <div className="h-48 bg-neutral-200 dark:bg-neutral-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  A modern portfolio website with animated background effects and responsive design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-sm">TypeScript</span>
                  <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-sm">Tailwind</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project →</a>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <div className="h-48 bg-neutral-200 dark:bg-neutral-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  A productivity app for managing tasks with categories, priorities, and reminders.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-sm">Firebase</span>
                  <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded text-sm">CSS</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                your.email@example.com
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-neutral-900 text-neutral-400 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Kairus Dael Demaano. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ using Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
