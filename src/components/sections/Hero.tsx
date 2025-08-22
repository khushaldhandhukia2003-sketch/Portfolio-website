import { Button } from "@/components/ui/button";
import profileImage from "@/assets/khushal-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-hero-gradient flex items-center pt-16">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="text-label text-text-secondary mb-4">
                SOFTWARE DEVELOPER
              </div>

              <h1 className="font-playfair text-hero text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 drop-shadow-lg"> Hi, I’m Khushal Dhandhukia </h1>


              <p className="text-body-large text-text-secondary max-w-lg">
                Full-stack developer passionate about creating innovative solutions
                that bridge technology and real-world impact. Specializing in web development,
                data analytics, and machine learning.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium"
              >
                View My Work
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base font-medium"
              >
                Contact Me
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary"></div>
                <div className="text-sm text-text-secondary"></div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary"></div>
                <div className="text-sm text-text-secondary"></div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary"></div>
                <div className="text-sm text-text-secondary"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-stagger-1">
            <div className="relative">
              {/* Background Accent Shapes */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple/40 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-cyan/40 rounded-lg blur-lg -z-10"></div>
              <div className="absolute top-1/2 -right-12 w-8 h-20 bg-cyan-light/30 rounded-full blur-lg -z-10"></div>

              {/* Profile Image Container */}
              <div className="relative overflow-hidden rounded-xl-editorial shadow-glow border border-border/20">
                <img
                  src={profileImage}
                  alt="Khushal Dhandhukia - Software Developer"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;