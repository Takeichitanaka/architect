import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering – Computer Science and Engineering",
    institution: "Osaka University, Osaka",
    period: "Apr 2012 – Mar 2016",
    grade: "Grade: 3.8 / 4.0 GPA",
    description: "I earned my Bachelor's degree in Computer Science and Engineering from Osaka University, where I developed a strong foundation in software engineering, distributed systems, and cryptography. During my studies, I explored emerging technologies such as blockchain, cloud computing, and secure web architecture. My final year project focused on building a decentralized identity management system using Ethereum smart contracts.",
  },
  {
    degree: "Science with Computer Application",
    institution: "Osaka Prefectural Semboku High School, Osaka",
    period: "Apr 2009 – Mar 2012",
    grade: "91%",
    description: "I completed my high school education where I studied Science with Computer Science, building the foundation for my career in technology.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My education has been a journey of self-discovery and growth
            </p>
          </div>

          {/* Education Items */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content Card */}
                <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:-translate-y-1 hover:scale-[1.01]">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 mt-1 group-hover:bg-primary/20 transition-colors duration-300">
                          <GraduationCap className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-muted-foreground font-medium">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={18} className="text-primary" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award size={18} className="text-accent" />
                      <span className="font-semibold">{edu.grade}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
