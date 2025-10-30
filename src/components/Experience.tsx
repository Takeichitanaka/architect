import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Blockchain & Full-Stack Developer",
    company: "Osaka, Japan",
    period: "2020 - present",
    description: "Architected and delivered full-stack decentralized apps (NFT, DeFi, DAO) with Solidity, React, Next.js, and Node.js. Developed and audited secure, gas-optimized smart contracts across multi-chain ecosystems. Built scalable SaaS and blockchain platforms, integrating crypto payments and Web3 APIs. Led distributed teams, enforced coding standards, and executed in-depth code reviews.",
    skills: ["Next.js", "TypeScript", "TailwindCSS", "Solidity", "Ethereum", "Polygon", "BSC", "Solana", "Web3.js", "Ethers.js", "Hardhat", "Truffle", "DeFi", "NFT", "DAO architecture"],
  },
  {
    title: "Full-Stack Developer / Software Engineer",
    company: "Tech Startups & Enterprises (Japan & Remote)",
    period: "2018 - 2019",
    description: "Engineered high-performance APIs and backend infrastructures for enterprise web apps. Delivered responsive, modular front-end systems with modern JS frameworks. Implemented CI/CD pipelines and automated testing, cutting release time and defects. Partnered with PMs and designers to ship polished, user-centric products on schedule.",
    skills: ["React", "Vue", "Angular", "Node.js/Express", "Python/Django", "REST & GraphQL APIs", "SQL/NoSQL databases", "Docker", "Git", "Agile collaboration"],
  },
  {
    title: "Junior Software Developer",
    company: "Local IT Company, Osaka",
    period: "2016 - 2017",
    description: "Supported backend and database optimization across multiple web projects. Built core skills in modern frameworks, Git, and agile development practices.",
    skills: ["jQuery", "Bootstrap", "React", "Node.js/Express", "Django", "Laravel", "Nginx/Apache setup"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My work experience as a blockchain & fullstack engineer
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in-up ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10 animate-glow-pulse hidden md:block" />

                  {/* Content Card */}
                  <div className={`bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:scale-[1.02] hover:-translate-y-1 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    {/* Header */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
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
