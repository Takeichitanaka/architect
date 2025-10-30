import { Code2, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with cross-functional teams",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about creating innovative solutions and beautiful user experiences
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-primary font-semibold">talented and versatile developer</span> with 
                a proven track record of creating innovative, high-performance digital solutions. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I build seamless experiences from <span className="text-accent font-semibold">front to back</span>, 
                combining elegant design with strong, scalable architecture to deliver products that work 
                beautifully and perform flawlessly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans <span className="text-primary font-semibold">modern web technologies</span>, 
                blockchain integration, and system design. I'm passionate about writing clean, maintainable code 
                and solving complex problems with creativity and precision.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6 animate-slide-in-right">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="text-primary" size={24} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
