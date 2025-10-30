import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AvaxGods - Web3 Battle Game",
    period: "Jun 2023 - Jul 2023",
    description: "With a stunning design, interactive gameplay, smart wallet pairing, live interaction with smart contracts, and the ability to battle other players in real-time, AvaxGods is the best Web3 battle-style online multiplayer card game.",
    skills: ["React", "Node.js", "Express", "Solidity", "MongoDB"],
    gradient: "from-primary/10 to-accent/10",
  },
  {
    title: "Internet Computer Platform",
    period: "June 2023",
    description: "A decentralized blockchain-based public cloud network delivering native cloud computing on an open, secure, and scalable platform that empowers the creation of apps and services without Big Tech involvement, blending Web3 and AI capabilities.",
    skills: ["Motoko", "Rust", "C/C++", "Infrastructure"],
    gradient: "from-accent/10 to-primary/10",
  },
  {
    title: "Polkadot Wallet Ecosystem",
    period: "March 2021",
    description: "Easy-to-use wallets and developer documentation for interacting with the Polkadot ecosystem. Serves as the go-to resource for building, deploying, and interacting with Polkadot through APIs, utilities, crypto tools, and user interfaces.",
    skills: ["TypeScript", "Polkadot", "Rust", "APIs"],
    gradient: "from-primary/10 to-accent/10",
  },
  {
    title: "Vexa - Project Management App",
    period: "Oct 2022 - Jan 2023",
    description: "Designed and developed a comprehensive project management app that helps users and teams stay organized. Implemented task tracking, team collaboration, time tracking, and team member invitation features to improve productivity.",
    skills: ["React Js", "MongoDB", "Node Js", "Express Js", "Redux", "NodeMailer"],
    gradient: "from-accent/10 to-primary/10",
  },
  {
    title: "Podstream - Podcast Platform",
    period: "Apr 2023 - May 2023",
    description: "Full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and JWT Auth with a seamless responsive experience.",
    skills: ["React Js", "MongoDB", "Node Js", "Express Js", "Redux"],
    gradient: "from-primary/10 to-accent/10",
  },
  {
    title: "LexyApp - AI English Tutor",
    period: "Jun 2023 - Jul 2023",
    description: "AI-powered English tutor offering personalized, adaptive lessons through interactive conversations. Features real-time feedback, gamified rewards, and supports multi-sensory learning with voice recognition and customizable themes.",
    skills: ["Docker", "AWS", "DuckDNS", "React Js", "MongoDB", "Node Js", "Express Js", "Redux", "CI/CD"],
    gradient: "from-accent/10 to-primary/10",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I have worked on a wide range of projects. Here are some of my notable works
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(45,212,191,0.2)] hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient} group-hover:h-3 transition-all duration-300`} />
                
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-primary">•</span>
                        {project.period}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Github size={16} />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2.5 py-1 text-xs rounded-md bg-secondary border border-border text-foreground hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-300 cursor-default inline-block"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
