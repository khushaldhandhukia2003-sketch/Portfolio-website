import { Code, Database, Brain, Palette, Cloud, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack applications with modern frameworks and scalable architecture",
      features: ["React & Node.js", "Responsive Design", "API Integration", "Performance Optimization"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics",
      features: ["Data Visualization", "Statistical Analysis", "Dashboard Creation", "Reporting Solutions"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by cutting-edge artificial intelligence",
      features: ["Computer Vision", "Natural Language Processing", "Predictive Models", "Deep Learning"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies",
      features: ["AWS/Firebase", "DevOps", "Microservices", "Container Deployment"]
    },
    {
      icon: Users,
      title: "Consulting & Mentoring",
      description: "Technical guidance and knowledge transfer for teams and individuals",
      features: ["Code Review", "Architecture Planning", "Team Training", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="text-label text-text-secondary mb-4">
            WHAT I OFFER
          </div>
          <h2 className="text-display text-foreground mb-6">
            Services
          </h2>
          <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
            Comprehensive technology solutions from concept to deployment, 
            tailored to meet your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = [
              { bg: "bg-purple/10", icon: "text-purple-dark", border: "border-purple/20" },
              { bg: "bg-cyan/10", icon: "text-cyan-dark", border: "border-cyan/20" },
              { bg: "bg-purple/10", icon: "text-purple-dark", border: "border-purple/20" },
            ];
            const colorClass = colorClasses[index % 3];

            return (
              <div
                key={service.title}
                className={`card-editorial border ${colorClass.border} animate-stagger-${(index % 3) + 1}`}
              >
                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClass.bg} rounded-lg-editorial mb-6`}>
                  <IconComponent className={`w-8 h-8 ${colorClass.icon}`} />
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-foreground mb-2">
                      {service.title.toUpperCase()}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Accent */}
                <div className={`mt-6 pt-4 border-t ${colorClass.border}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-text-accent uppercase tracking-wide">
                      Available
                    </span>
                    <div className={`w-2 h-2 ${colorClass.bg} rounded-full`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-purple/10 rounded-xl-editorial p-8 border border-purple/20">
            <h3 className="font-playfair font-semibold text-2xl text-foreground mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-text-secondary mb-6 max-w-xl mx-auto">
              Ready to transform your ideas into reality? Let's discuss how we can 
              create innovative solutions that drive results.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;