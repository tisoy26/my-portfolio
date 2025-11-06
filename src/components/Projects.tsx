import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import projectsData from "@/data/projects.json";
import { useState } from "react";
import ImageGalleryModal from "./ImageGalleryModal";
import { InfiniteScrollText } from "./ui/InfiniteScrollText";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // Main/cover image
  images?: string[]; // Additional gallery images
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectsProps {
  className?: string;
}

export default function Projects({ className }: ProjectsProps) {
  const projects: Project[] = projectsData.projects;
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState<{ images: string[]; title: string; currentIndex: number } | null>(null);
  
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;
  
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, projects.length));
  };

  const openImageModal = (project: Project) => {
    const allImages = [project.image, ...(project.images || [])].filter(Boolean);
    setSelectedProject({ 
      images: allImages, 
      title: project.title, 
      currentIndex: 0 
    });
  };

  const closeImageModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={cn("py-20 bg-black dark:bg-black overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and showcases different aspects of my development skills.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {visibleProjects.map((project, index) => (
            <ProjectRow 
              key={project.id} 
              project={project} 
              index={index} 
              onImageClick={openImageModal}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="flex justify-center mt-16">
            <button
              onClick={loadMore}
              className="inline-flex items-center px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Show More Projects
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Projects Counter */}
        <div className="text-center mt-8">
          <p className="text-sm text-neutral-500">
            Showing {visibleCount} of {projects.length} projects
          </p>
        </div>

        {/* Image Gallery Modal */}
        <ImageGalleryModal
          isOpen={selectedProject !== null}
          images={selectedProject?.images || []}
          title={selectedProject?.title || ""}
          currentIndex={selectedProject?.currentIndex || 0}
          onClose={closeImageModal}
        />
      </div>
    </section>
  );
}

interface ProjectRowProps {
  project: Project;
  index: number;
  onImageClick: (project: Project) => void;
}

function ProjectRow({ project, index, onImageClick }: ProjectRowProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Project Image Section */}
      <div className={cn(
        "relative",
        !isEven && "lg:order-2"
      )}>
        <div className="w-full h-64 lg:h-80 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-colors duration-300 group cursor-pointer"
             onClick={() => {
               if (project.image) {
                 onImageClick(project);
               }
             }}>
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  console.log('Image failed to load:', project.image);
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-white/20 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">
                    {project.images && project.images.length > 0 
                      ? `View Gallery (${(project.images.length + 1)} images)`
                      : "Click to view"
                    }
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
              <span className="text-neutral-500">No image available</span>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className={cn(
        "space-y-6",
        !isEven && "lg:order-1"
      )}>
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {project.title}
          </h3>
          <p className="text-lg text-neutral-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="relative inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] rounded-full">
              <Badge 
                variant="outline" 
                className="text-sm border-0 bg-black dark:bg-black text-neutral-300 hover:text-white transition-colors rounded-full"
              >
                {tech}
              </Badge>
            </span>
          ))}
        </div>

        {/* Features - Infinite Scroll */}
        {project.features && project.features.length > 0 && (
          <div className="py-2">
            <InfiniteScrollText features={project.features} />
          </div>
        )}

        {/* Project Links */}
        <div className="flex gap-4 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent text-white rounded-lg font-medium border border-neutral-600 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}