import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";

const roles = ["Full Stack Developer", "Blockchain Engineer", "Web3 Specialist", "System Architect"];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === role) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayedText(
          isDeleting
            ? role.substring(0, displayedText.length - 1)
            : role.substring(0, displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-primary text-lg font-medium">Hi, I am</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient-shift bg-clip-text text-transparent">
              Takeichi Tanaka
            </h1>
          </div>

          {/* Typing Animation */}
          <div className="h-20 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
              I am a{" "}
              <span className="text-primary border-r-2 border-primary pr-1 animate-pulse">
                {displayedText}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a talented and versatile developer with a proven track record of creating innovative, 
            high-performance digital solutions. I build seamless experiences from front to back, 
            combining elegant design with strong, scalable architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="min-w-[180px]"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline-hero"
              size="lg"
              onClick={() => window.open("#", "_blank")}
              className="min-w-[180px]"
            >
              <FileText className="mr-2" />
              Check Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary hover:text-accent transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
