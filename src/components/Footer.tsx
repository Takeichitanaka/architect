import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Takeichi", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border animate-fade-in-up">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block cursor-default">
                Strong Dev
              </h3>
              <p className="text-muted-foreground">
                Building innovative solutions with passion and precision.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h4 className="text-lg font-semibold text-foreground">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                  </a>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                alex28030707@gmail.com
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 Strong Dev. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with <Heart className="text-accent" size={16} fill="currentColor" /> by Takeichi Tanaka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
