const Experience = () => {
  const experiences = [
    {
      year: "May 2025 - Jun 2025",
      role: "Data Analytics Intern",
      company: "Forage - Virtual Internship",
      location: "Remote",
      description: "Completed comprehensive data analytics projects focusing on business intelligence and data visualization. Developed interactive Tableau dashboards and performed advanced Excel analytics for business decision-making.",
      achievements: [
        "Created dynamic Tableau dashboards for business insights",
        "Performed statistical analysis on large datasets",
        "Developed data-driven recommendations for business strategy",
        "Mastered advanced Excel functions and pivot table analysis"
      ],
      technologies: ["Tableau", "Excel", "SQL", "Python", "Statistics"],
      type: "internship"
    }
  ];


  const certifications = [
    { name: "Introduction to Front End Developer", provider: "Simplilearn", year: "Jul. 2025" },
    { name: "Tata – GenAI Powered Data Analytics Job Simulation", provider: "Forage", year: "Jun 2025" },
    { name: "Deloitte – Data Analytics Job Simulation", provider: "Forage", year: "Jun 2025" },
    { name: "Python Programming", provider: "IIT Bombay", year: "Feb 2023 – Apr 2023" }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "internship":
        return { bg: "bg-cyan/10", text: "text-cyan-dark", border: "border-cyan/20" };
      case "education":
        return { bg: "bg-purple/10", text: "text-purple-dark", border: "border-purple/20" };
      case "freelance":
        return { bg: "bg-cyan/10", text: "text-cyan-dark", border: "border-cyan/20" };
      default:
        return { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" };
    }
  };

  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 animate-fade-up">
            <div className="mb-12">
              <div className="text-label text-text-secondary mb-4">
                PROFESSIONAL JOURNEY
              </div>
              <h2 className="text-display text-foreground mb-6">
                Experience
              </h2>
              <p className="text-body-large text-text-secondary">
                A timeline of my professional growth, learning experiences, 
                and contributions to various projects and organizations.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 w-0.5 h-full bg-border"></div>
              
              {experiences.map((exp, index) => {
                const colorClass = getTypeColor(exp.type);
                
                return (
                  <div key={index} className="relative pl-16 pb-12">
                    {/* Timeline dot */}
                    <div className={`absolute left-4 top-2 w-4 h-4 ${colorClass.bg} ${colorClass.border} border-2 rounded-full`}>
                      <div className={`w-2 h-2 ${colorClass.text.replace('text-', 'bg-')} rounded-full m-0.5`}></div>
                    </div>
                    
                    <div className={`card-editorial ${colorClass.border} border`}>
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="font-playfair font-bold text-xl text-foreground mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-medium text-primary mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-text-secondary">
                            {exp.location}
                          </p>
                        </div>
                        <div className={`inline-block px-3 py-1 ${colorClass.bg} ${colorClass.text} text-sm font-medium rounded-full mt-2 sm:mt-0`}>
                          {exp.year}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-3 text-text-secondary">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-background text-text-secondary text-sm border border-border rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Sidebar */}
          <div className="animate-stagger-1">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="text-label text-text-secondary mb-4">
                  PROFESSIONAL DEVELOPMENT
                </div>
                <h3 className="text-headline text-foreground mb-6">
                  Certifications
                </h3>
              </div>

              {/* Certifications List */}
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-4 border border-border hover:shadow-editorial-hover transition-shadow cursor-default"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {cert.provider}
                        </p>
                      </div>
                      <span className="text-xs text-text-accent font-medium bg-secondary px-2 py-1 rounded">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Statistics */}
              <div className="bg-purple/10 rounded-lg-editorial p-6 border border-purple/20">
                <h4 className="font-playfair font-semibold text-lg text-foreground mb-4">
                  Experience Highlights
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Projects Completed</span>
                    <span className="font-bold text-primary">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Certifications Earned</span>
                    <span className="font-bold text-primary">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Years of Experience</span>
                    <span className="font-bold text-primary">3+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Technologies Mastered</span>
                    <span className="font-bold text-primary">20+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;