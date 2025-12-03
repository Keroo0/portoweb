import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/netflix.png";
import project3 from "@/assets/project-2.jpg";

const projects = [
  {
    title: "Simulas Antrian Bank",
    description:
      "Sistem simulasi antrian bank dengan React, Node.js, dan Supabase. Fitur termasuk authentication, payment gateway, dan admin dashboard.",
    image: project1,
    tags: ["React", "Node.js", "Typescript", "Supabase"],
    github: "https://github.com/Keroo0/queue-gold-flow",
    demo: "https://simulas-antrian-bank.netlify.app/",
  },
  {
    title: "KerFlix",
    description:
      "Kloningan Netflix",
    image: project2,
    tags: ["Javascript", "Firebase", "React", "css"],
    github: "https://github.com/Keroo0/netflix-clone",
    demo: "https://kerflix.netlify.app/login",
  },
  {
    title: "Sistem Pencatatan Keuangan",
    description:
      "Sebuah sistem yang bisa mencatat pengeluaran berdasarkan foto struk atau input manual berbasis OCR dan nanti di simpan di excel",
    image: project3,
    tags: ["N8N","model gemini","OCR","Excel","React","Typescript"],
    github: "https://github.com/Grd45bisa/kitapunya-expense",
    demo: "https://kitapunya.web.id/",
  },
];

const otherProjects = [
  {
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan fitur drag-and-drop dan kolaborasi tim.",
    tags: ["React", "Firebase", "DnD"],
  },
  {
    title: "Weather API Service",
    description: "REST API service untuk data cuaca dengan caching dan rate limiting.",
    tags: ["Node.js", "Express", "Redis"],
  },
  {
    title: "Portfolio Generator",
    description: "CLI tool untuk generate portfolio website dari file JSON config.",
    tags: ["Python", "Jinja2", "CLI"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Project Image */}
              <div className="flex-1 relative group">
                <div className="overflow-hidden rounded-xl border border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Project Info */}
              <div className={`flex-1 ${index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"}`}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-xl mb-4 border border-border">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-primary font-mono text-sm px-3 py-1 bg-primary/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <Github
                      size={20}
                      className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                    />
                    <ExternalLink
                      size={20}
                      className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                    />
                  </div>
                </div>
                <h4 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-muted-foreground font-mono text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

