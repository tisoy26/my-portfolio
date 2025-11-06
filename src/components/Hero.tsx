import { cn } from "@/lib/utils";
import profileImage from "@/assets/images/my-profile.png";
import { Badge } from "./ui/badge";
import { ScrollReveal } from "./ui/ScrollReveal";

interface HeroProps {
  className?: string;
  name?: string;
  description?: string;
}

export default function Hero({ 
  className,
  name = "Joseph Dave",
  description = "Passionate about creating beautiful, functional, and user-centered digital experiences."
}: HeroProps) {
  return (
    <div id="about" className={cn("relative flex min-h-screen h-auto lg:h-screen w-full items-center justify-center bg-white dark:bg-black m-0 p-0 py-20 lg:py-0", className)}>
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      
      {/* Radial gradient overlay for faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 lg:px-8 gap-8 lg:gap-16 pt-24 lg:pt-0">
        
        {/* Profile Image - First on Mobile, Second on Desktop */}
        <ScrollReveal direction="right" delay={0.2} className="flex-1 flex justify-center lg:justify-end items-end pb-8 lg:pb-16 lg:order-2">
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px]">
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-black">
              <img 
                src={profileImage} 
                alt={`${name} - Profile`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Text Content - Second on Mobile, First on Desktop */}
        <div className="flex-1 text-center lg:text-left space-y-6 lg:order-1">
          {/* Greeting with name and role */}
          <ScrollReveal direction="left" delay={0}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-neutral-700 dark:text-neutral-300 mb-2">Hello I'm</span>
                <span className="block bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-4">
                  {name}
                </span>
                <span className="flex items-center justify-center lg:justify-start text-neutral-700 dark:text-neutral-300 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl gap-4">
                  <span className="relative inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] rounded-full">
                    <Badge variant="outline" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl px-6 py-3 font-semibold border-0 bg-white dark:bg-black rounded-full">
                      Web Developer
                    </Badge>
                  </span>
                </span>
              </h1>
            </div>
          </ScrollReveal>
          
          {/* Description */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-3">
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>
          </ScrollReveal>
          
          {/* Call-to-action buttons */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="px-8 py-3 bg-white text-neutral-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-neutral-200 text-center">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-semibold rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 text-center">
                Get In Touch
              </a>
            </div>
          </ScrollReveal>
          
          {/* Social links or stats */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="flex justify-center lg:justify-start space-x-6 pt-2">
              <div className="text-center">
                <p className="text-2xl font-bold text-neutral-700 dark:text-neutral-300">1+</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-neutral-700 dark:text-neutral-300">10+</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-neutral-700 dark:text-neutral-300">15+</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Happy Clients</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}