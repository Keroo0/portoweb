const skills = [
  { name: "JavaScript", level: 90, category: "language" },
  { name: "Python", level: 85, category: "language" },
  { name: "TypeScript", level: 80, category: "language" },
  { name: "React", level: 88, category: "framework" },
  { name: "Node.js", level: 82, category: "framework" },
  { name: "Django", level: 75, category: "framework" },
  { name: "TailwindCSS", level: 90, category: "tool" },
  { name: "Git", level: 85, category: "tool" },
  { name: "PostgreSQL", level: 78, category: "database" },
  { name: "MongoDB", level: 75, category: "database" },
  { name: "Docker", level: 70, category: "tool" },
  { name: "TensorFlow", level: 65, category: "ml" },
];

const categoryColors: Record<string, string> = {
  language: "from-primary to-primary/60",
  framework: "from-red-600 to-red-400",
  tool: "from-gray-500 to-gray-400",
  database: "from-red-700 to-red-500",
  ml: "from-red-500 to-orange-500",
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// Keahlian</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-primary font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category]} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["REST API", "GraphQL", "AWS", "Firebase", "Linux", "Figma", "Jira", "CI/CD"].map(
              (item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-secondary rounded-full text-muted-foreground text-sm hover:text-primary hover:border-primary/30 border border-transparent transition-all duration-300"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
