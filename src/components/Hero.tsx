import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/pp.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-mono text-sm mb-4 animate-fade-in">
              // Yoo Semua, saya adalah
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
              <span className="text-foreground">Dedi</span>{" "}
              <span className="text-gradient">Abdul</span>{" "}
               <span className="text-gradient">Rohman</span>{" "}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Mahasiswa Teknik Informatika
            </h2>
            <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Passionate developer dengan keahlian di JavaScript dan Python. 
              Suka membangun aplikasi web modern dan mengeksplorasi teknologi baru.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero">
                Lihat Projects
              </Button>
              <Button variant="heroOutline">
                Hubungi Saya
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:email@example.com"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-pulse-glow">
                <img
                  src={profileImage}
                  alt="Dedi Abdul Rohman - Mahasiswa Teknik"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg px-4 py-2 shadow-card">
                <p className="text-primary font-mono text-sm">3+ tahun</p>
                <p className="text-muted-foreground text-xs">experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
