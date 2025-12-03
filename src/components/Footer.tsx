import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "keroonumber01@@email.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold">
            <span className="text-foreground">&lt;</span>
            <span className="text-primary">Dev</span>
            <span className="text-foreground">/&gt;</span>
          </a>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Designed & Built by{" "}
              <span className="text-primary font-medium">Dedi Abdul Rohman</span>
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
