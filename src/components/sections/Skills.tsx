const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      subtitle: "Frontend & Backend",
      skills: ["React", "Node.js", "TypeScript", "Next.js", "Express", "MongoDB"],
      color: "purple"
    },
    {
      title: "Data Analytics",
      subtitle: "Insights & Visualization", 
      skills: ["Python", "Pandas", "Tableau", "MySQL", "Excel", "Power BI"],
      color: "cyan"
    },
    {
      title: "AI & Machine Learning",
      subtitle: "Intelligent Solutions",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "CNNs"],
      color: "purple"
    },
    {
      title: "Tools & Platforms",
      subtitle: "Development Ecosystem",
      skills: ["Git", "Docker", "AWS", "Firebase", "Vercel", "Figma"],
      color: "cyan"
    },
    {
      title: "Programming Languages",
      subtitle: "Core Technologies",
      skills: ["Python", "HTML/CSS", "JavaScript","ReactJS","MongoDB", "MySQL"],
      color: "purple"
    },
    {
      title: "Soft Skills",
      subtitle: "Professional Abilities",
      skills: ["Problem Solving", "Team Leadership", "Communication", "Project Management", "Mentoring", "Critical Thinking"],
      color: "cyan"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="text-label text-text-secondary mb-4">
            TECHNICAL EXPERTISE
          </div>
          <h2 className="text-display text-foreground mb-6">
            Core Skills
          </h2>
          <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
            A comprehensive skill set spanning full-stack development, 
            data science, and artificial intelligence
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`card-editorial group cursor-default animate-stagger-${(index % 3) + 1}`}
            >
              {/* Header */}
              <div className="mb-6">
                <div className={`inline-block px-3 py-1 rounded-full bg-${category.color}/20 text-${category.color}-dark text-sm font-medium mb-3`}>
                  {category.subtitle}
                </div>
                <h3 className="font-playfair font-bold text-xl text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/50 hover:border-primary/20 transition-colors"
                  >
                    <span className="font-medium text-text-primary">
                      {skill}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < (skillIndex >= 3 ? 4 : 5) 
                              ? `bg-${category.color}` 
                              : 'bg-border'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover Effect Indicator */}
              <div className={`mt-4 h-1 bg-${category.color}/30 rounded-full overflow-hidden`}>
                <div className={`h-full bg-${category.color} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-xl-editorial p-8 shadow-editorial">
            <h3 className="font-playfair font-semibold text-xl text-foreground mb-4">
              Always Learning
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring advanced AI concepts, 
              cloud architecture, and modern development frameworks to stay at the cutting edge.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["GraphQL", "Kubernetes", "Blockchain", "Web3", "AR/VR", "Quantum Computing"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-purple/20 text-purple-dark rounded-full text-sm font-medium border border-purple/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;