import { useState } from "react";
import { ExternalLink, Github, X, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

import signLanguageImg from "@/assets/project-sign-language.jpg";
import musicPlayerImg from "@/assets/project-music-player.jpg";
import cancerDetectionImg from "@/assets/project-cancer-detection.jpg";
import healthcareNlpImg from "@/assets/project-healthcare-nlp.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  status: "Completed" | "In Progress" | "Beta";
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "sign-language",
      title: "Sign Language Detection",
      description: "AI-powered real-time sign language recognition system using computer vision",
      longDescription: "An advanced computer vision application that uses machine learning to recognize and translate sign language gestures in real-time. The system employs convolutional neural networks (CNNs) to accurately detect hand movements and convert them into readable text, making communication more accessible for the deaf and hard-of-hearing community.",
      image: signLanguageImg,
      tags: ["AI/ML", "Computer Vision", "Accessibility"],
      techStack: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "Flask"],
      githubUrl: "#",
      date: "2024",
      status: "Completed"
    },
    {
      id: "music-player",
      title: "Music Player Web App",
      description: "Modern, responsive music streaming platform with advanced features",
      longDescription: "A full-featured music streaming web application built with React and Node.js. Features include playlist management, real-time audio visualization, user authentication, music recommendations, and a sleek, responsive interface. The backend handles file storage, user management, and provides RESTful APIs for seamless functionality.",
      image: musicPlayerImg,
      tags: ["Web App", "Full-Stack", "Entertainment"],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Web Audio API"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      status: "Completed"
    },
    {
      id: "cancer-detection",
      title: "Breast Cancer Detection",
      description: "Deep learning model for early breast cancer detection from medical imagery",
      longDescription: "A sophisticated deep learning system designed to assist medical professionals in early breast cancer detection. Using convolutional neural networks trained on medical imaging datasets, the model achieves high accuracy in identifying potential malignancies, potentially saving lives through early intervention and diagnosis.",
      image: cancerDetectionImg,
      tags: ["Healthcare", "Deep Learning", "Medical AI"],
      techStack: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
      githubUrl: "#",
      date: "2023",
      status: "Completed"
    },
    {
      id: "healthcare-nlp",
      title: "Hinglish Healthcare",
      description: "Natural language processing system for healthcare queries in Hinglish",
      longDescription: "An innovative NLP system designed to understand and process healthcare-related queries in Hinglish (Hindi-English code-mixed language). The system can interpret medical symptoms, provide preliminary health information, and assist healthcare providers in better understanding patient communications in multilingual contexts.",
      image: healthcareNlpImg,
      tags: ["NLP", "Healthcare", "Multilingual"],
      techStack: ["Python", "spaCy", "NLTK", "Transformers", "FastAPI"],
      githubUrl: "#",
      date: "2023",
      status: "Beta"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="text-label text-text-secondary mb-4">
            FEATURED WORK
          </div>
          <h2 className="text-display text-foreground mb-6">
            Projects
          </h2>
          <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
            A showcase of innovative projects spanning web development, 
            artificial intelligence, and data-driven solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer animate-stagger-${(index % 2) + 1}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-editorial overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-background/90 text-primary px-4 py-2 rounded-lg font-medium">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-playfair font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      project.status === "Completed" 
                        ? "bg-cyan/20 text-cyan-dark" 
                        : project.status === "Beta"
                        ? "bg-purple/20 text-purple-dark"
                        : "bg-purple/20 text-purple-dark"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-background border border-border rounded-full text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Preview */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-text-accent">
                      <span>Built with:</span>
                      <div className="flex space-x-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="font-medium text-text-secondary">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span>+{project.techStack.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-xl-editorial max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h3 className="font-playfair font-bold text-2xl text-foreground">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Image */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-text-secondary leading-relaxed">
                      {selectedProject.longDescription}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-text-accent" />
                        <span className="text-text-secondary">{selectedProject.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Tag className="w-4 h-4 text-text-accent" />
                        <div className="flex space-x-2">
                          {selectedProject.tags.map((tag) => (
                            <span key={tag} className="text-text-secondary">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                      <div className="space-y-2">
                        {selectedProject.techStack.map((tech) => (
                          <div key={tech} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <span className="text-text-secondary">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-3">
                      {selectedProject.liveUrl && (
                        <Button className="w-full" asChild>
                          <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live Project
                          </a>
                        </Button>
                      )}
                      {selectedProject.githubUrl && (
                        <Button variant="outline" className="w-full" asChild>
                          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;