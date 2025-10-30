import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Language",
    skills: ["JavaScript", "TypeScript", "Solidity", "Python", "Go", "Rust"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Frontend",
    skills: ["React Js", "Redux", "Next Js", "Angular Js", "Vue.js", "Tailwind CSS", "Bootstrap"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "Backend",
    skills: ["Node Js", "Express Js", "Graph Ql", "Nestjs", "FastAPI", "Django"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "DevOps",
    skills: ["AWS", "Docker", "Jenkins", "Nginx", "Terraform", "Kubernetes", "Prometheus"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "BlockChain",
    skills: ["Ethereum", "Polygon", "BSC", "Solana", "Web3.js", "Ethers.js", "Truffle", "Hardhat"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Database",
    skills: ["MySql", "MongoDB", "PostgresSql", "Redis"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "Others",
    skills: ["Git", "GitHub", "Netlify", "VS Code", "Postman", "Adobe XD", "Figma"],
    gradient: "from-primary/20 to-primary/5",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my skills on which I have been working for the past 8 years
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className={`bg-gradient-to-br ${category.gradient} border-b border-border group-hover:border-primary/30 transition-colors`}>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 text-sm rounded-full bg-secondary border border-border text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
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
