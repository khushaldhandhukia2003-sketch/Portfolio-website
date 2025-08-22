import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "khushaldhandhukia2003@gmail.com",
      href: "mailto:khushal@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/khushal-dhandhukia",
      href: "https://www.linkedin.com/in/khushal-dhandhukia-2ba507368/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/khushal-dhandhukia",
      href: "https://github.com/khushaldhandhukia2003-sketch"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <div className="text-label text-text-secondary mb-4">
                GET IN TOUCH
              </div>
              <h2 className="text-display text-foreground mb-6">
                Let's Connect
              </h2>
              <p className="text-body-large text-text-secondary mb-8">
                Have a project in mind or want to discuss opportunities? 
                I'd love to hear from you. Let's create something amazing together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const colorClasses = [
                  "text-purple-dark bg-purple/10",
                  "text-cyan-dark bg-cyan/10",
                  "text-purple-dark bg-purple/10",
                  "text-primary bg-primary/10"
                ];
                const colorClass = colorClasses[index % colorClasses.length];

                return (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${colorClass}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-accent uppercase tracking-wide">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target={info.href.startsWith('http') ? "_blank" : undefined}
                          rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-text-primary hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-text-primary">{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability Status */}
            <div className="bg-cyan/10 rounded-lg-editorial p-6 border border-cyan/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-cyan rounded-full animate-pulse"></div>
                <span className="font-semibold text-foreground">Currently Available</span>
              </div>
              <p className="text-text-secondary">
                I'm actively seeking new opportunities and exciting projects. 
                Whether it's freelance work, full-time positions, or collaboration opportunities, 
                I'm ready to bring fresh ideas and technical expertise to your team.
              </p>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-purple/10 rounded-lg-editorial p-6 border border-purple/20">
              <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
                Quick Response Guarantee
              </h3>
              <p className="text-text-secondary">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to reach out directly via email or LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-stagger-1">
            <div className="bg-background rounded-xl-editorial shadow-editorial p-8 border border-border">
              <h3 className="font-playfair font-semibold text-xl text-foreground mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-text-secondary">
            © 2025 Khushal Dhandhukia. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;