const About = () => {
  const education = [
  {
    year: "2021-2025",
    degree: "B.Tech, Information Technology",
    institution: "K. J. Somaiya Institute of Technology",
    location: "Mumbai, India",
  },
  {
    year: "2019-2021",
    degree: "Class XII",
    institution: "Thakur College of Science and Commerce",
    location: "Mumbai, India",
  },
  {
    year: "2019",
    degree: "Class X",
    institution: "Children’s Academy",
    location: "Mumbai, India",
  }
];


  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - About Text */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <div className="text-label text-text-secondary mb-4">
                GET TO KNOW ME
              </div>
              <h2 className="text-display text-foreground mb-6">
                About Me
              </h2>
            </div>
            
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p className="text-lg">
                I'm a passionate software developer with a strong foundation in full-stack 
                development, data analytics, and artificial intelligence. Currently completed by B.Tech in Information Technology, I've developed expertise in 
                building scalable web applications and data-driven solutions.
              </p>
              
              <p>
                My journey in technology began with a curiosity about how digital solutions 
                can solve real-world problems. From developing healthcare NLP systems to 
                creating innovative music platforms, I focus on projects that combine 
                technical excellence with meaningful impact.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring the latest in AI/ML research, 
                contributing to open-source projects, or mentoring fellow developers. 
                I believe in continuous learning and staying at the forefront of 
                technological innovation.
              </p>
            </div>

            {/* Personal Highlights */}
            <div className="bg-purple/20 rounded-lg-editorial p-6 space-y-4">
              <h3 className="font-playfair font-semibold text-lg text-foreground">
                What drives me
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Building solutions that make a positive impact on people's lives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Staying curious and continuously learning new technologies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Collaborating with teams to create innovative digital experiences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Education Timeline */}
          <div className="space-y-8 animate-stagger-1">
            <div>
              <div className="text-label text-text-secondary mb-4">
                ACADEMIC BACKGROUND
              </div>
              <h3 className="text-headline text-foreground mb-8">
                Education
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 w-0.5 h-full bg-border"></div>
              
              {education.map((item, index) => (
                <div key={index} className="relative pl-12 pb-8">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <div className="card-editorial">
                    <div className="text-sm font-medium text-primary mb-2">
                      {item.year}
                    </div>
                    <h4 className="font-playfair font-semibold text-lg text-foreground mb-2">
                      {item.degree}
                    </h4>
                    <p className="text-text-secondary font-medium">
                      {item.institution}
                    </p>
                    <p className="text-sm text-text-accent">
                      {item.location}
                    </p>
                  </div>
                </div>
                
              ))}
            </div>
            

            {/* Skills Quick Preview */}
            <div className="bg-cyan/20 rounded-lg-editorial p-6">
              <h3 className="font-playfair font-semibold text-lg text-foreground mb-4">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "HTML", "CSS", "JavaScript","ReactJS","MongoDB", "MySQL"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-background rounded-full text-sm font-medium text-text-secondary border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;