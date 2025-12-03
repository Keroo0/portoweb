import { Code, GraduationCap, Laptop, Target } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Pendidikan",
    description: "Semester 7 Teknik Informatika, Universitas Cendekia Abditama (2022-2025)",
  },
  {
    icon: Code,
    title: "Spesialisasi",
    description: "Full-Stack Development, Machine Learning, IoT",
  },
  {
    icon: Laptop,
    title: "Experience",
    description: "3+ tahun Vibe coding, 10+ proyek selesai",
  },
  {
    icon: Target,
    title: "Goal",
    description: "Menjadi Software Engineer profesional",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// Tentang Saya</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Siapa <span className="text-gradient">Saya?</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Halo! Saya <span className="text-primary font-semibold">Dedi Abdul Rohman</span>, 
              mahasiswa Teknik Informatika semester 7 yang passionate dengan dunia programming. 
              Perjalanan coding saya dimulai sejak lulus SMA, dan sejak itu saya terus belajar dan 
              mengembangkan skill di berbagai bidang teknologi.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Saya memiliki ketertarikan khusus pada pengembangan web full-stack dan 
              machine learning. Dengan JavaScript dan Python sebagai bahasa utama, 
              saya telah membangun berbagai proyek mulai dari aplikasi web interaktif 
              hingga model prediksi data.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Di waktu luang, saya suka berkontribusi ke proyek open source, 
              mengikuti hackathon, dan membaca artikel tentang teknologi terbaru. 
              Saya percaya bahwa belajar adalah proses yang tidak pernah berhenti.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-muted-foreground text-sm">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">3+</p>
                <p className="text-muted-foreground text-sm">Years Vibe Coding</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-muted-foreground text-sm">Certifications</p>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
