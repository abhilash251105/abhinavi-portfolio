import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Terminal, 
  Database, 
  Award, 
  Mail, 
  Linkedin, 
  MapPin, 
  ExternalLink, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Layers,
  ChevronRight,
  Menu,
  X,
  Github,
  Monitor
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const experience = [
    {
      role: "DevOps Engineer",
      company: "KFin Technologies Limited, India",
      period: "Feb 2024 - Present",
      points: [
        "Designed enterprise-grade AWS Data Lake architectures, improving scalability by 70%.",
        "Optimized ETL pipelines (PySpark, Glue, EMR), reducing processing time by 60%.",
        "Managed 40+ AWS accounts, achieving ~30% annual cost savings.",
        "Implemented SSO pipelines via Azure AD for 1500+ users.",
        "Administered CI/CD (Jenkins, Docker, K8s) reducing deployment errors by 85%.",
        "Standardized infrastructure via IaC (Terraform, Ansible) reducing setup time by 80%."
      ]
    },
    {
      role: "Site Reliability Engineer Intern",
      company: "KFin Technologies Limited, India",
      period: "Aug 2023 - Feb 2024",
      points: [
        "Reduced downtime by 35% through proactive RCA and cloud infrastructure monitoring.",
        "Built automated mailing and ingestion pipelines using PySpark, cutting manual effort by 50%.",
        "Enhanced observability using Grafana and Prometheus, leading to a 25% reduction in MTTR."
      ]
    }
  ];

  const skillGroups = [
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      skills: ["AWS (EC2, S3, Lambda, Glue, EMR)", "Azure AD", "VPC", "Transit Gateway", "IAM"]
    },
    {
      title: "DevOps & IaC",
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      skills: ["Terraform", "Ansible", "OpenTofu", "CloudFormation", "Jenkins", "Docker", "Kubernetes"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-amber-400" />,
      skills: ["PostgreSQL", "MS SQL", "MySQL", "Oracle", "Yugabyte", "CockroachDB"]
    },
    {
      title: "Programming",
      icon: <Terminal className="w-6 h-6 text-purple-400" />,
      skills: ["Python", "PySpark", "Scala", "SQL"]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect - Associate",
    "AWS Certified Developer - Associate",
    "AWS Certified Cloud Practitioner",
    "Yugabyte Certified",
    "Open Tofu Certified"
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30 font-sans">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white">AT</span>
            </div>
            <span className="hidden sm:inline">Abhilash Tripathy</span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full transition-all">
              Hire Me
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#1e293b] border-b border-slate-800 py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg" 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Activity className="w-3 h-3" /> 2+ Years Experience
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              SRE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">DevOps</span> Engineer.
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              AWS Certified professional specializing in building scalable data pipelines, automating cloud-native environments, and driving infrastructure excellence with AWS and Azure.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2">
                Let's Talk <Mail className="w-4 h-4" />
              </a>
              <a href="#experience" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all">
                View Work
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 shadow-2xl">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="font-mono text-sm space-y-3">
                <p className="text-purple-400">const <span className="text-blue-400">profile</span> = &#123;</p>
                <p className="pl-4 text-slate-300">name: <span className="text-emerald-400">'Abhilash Tripathy'</span>,</p>
                <p className="pl-4 text-slate-300">role: <span className="text-emerald-400">'SRE | DevOps Engineer'</span>,</p>
                <p className="pl-4 text-slate-300">specialization: [<span className="text-emerald-400">'AWS'</span>, <span className="text-emerald-400">'Kubernetes'</span>, <span className="text-emerald-400">'IaC'</span>],</p>
                <p className="pl-4 text-slate-300">impact: &#123;</p>
                <p className="pl-8 text-slate-300">costSavings: <span className="text-amber-400">'70%'</span>,</p>
                <p className="pl-8 text-slate-300">automation: <span className="text-amber-400">'50% effort reduction'</span></p>
                <p className="pl-4 text-slate-300">&#125;</p>
                <p className="text-purple-400">&#125;;</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
          <div className="space-y-12">
            {experience.map((job, idx) => (
              <div key={idx} className="group relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-800 group-hover:border-blue-500 group-hover:bg-blue-500 transition-all"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                    <p className="text-blue-400 font-medium">{job.company}</p>
                  </div>
                  <span className="px-4 py-1 rounded-full bg-slate-800 text-slate-400 text-sm border border-slate-700">
                    {job.period}
                  </span>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {job.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3 text-slate-400">
                      <ChevronRight className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Ecosystem</h2>
            <p className="text-slate-400">Tools and technologies I use to build and scale infrastructure.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-800/30 border border-slate-800 hover:border-slate-700 transition-all group">
                <div className="mb-6 p-3 rounded-2xl bg-slate-800 inline-block group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-sm text-slate-400 bg-slate-900/50 px-3 py-1 rounded-lg border border-slate-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Certifications & Credentials</h2>
              <p className="text-slate-400 mb-8">
                Continuously learning and validating skills through industry-recognized certifications from AWS and emerging technology providers.
              </p>
              <div className="grid gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-2xl">
                    <Award className="w-6 h-6 text-amber-400" />
                    <span className="font-semibold text-slate-200">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-blue-600 rounded-3xl flex flex-col items-center text-center justify-center space-y-4">
                <ShieldCheck className="w-12 h-12 text-white" />
                <h4 className="text-white font-bold">Security Compliance</h4>
                <p className="text-blue-100 text-sm">80% Security Improvements</p>
              </div>
              <div className="p-8 bg-emerald-600 rounded-3xl flex flex-col items-center text-center justify-center space-y-4">
                <Cpu className="w-12 h-12 text-white" />
                <h4 className="text-white font-bold">Performance</h4>
                <p className="text-emerald-100 text-sm">70% Scalability Boost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 opacity-10">
              <Monitor className="w-64 h-64 -mb-12 -mr-12" />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Let's build something scalable.</h2>
                <p className="text-blue-100 mb-8 text-lg">
                  I'm currently open to new opportunities and collaborations in DevOps, SRE, and Cloud Infrastructure.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Email Me</p>
                      <a href="mailto:abhilashtmca2023@gmail.com" className="text-white font-bold hover:underline">abhilashtmca2023@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md text-white">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Connect</p>
                      <a href="#" className="text-white font-bold hover:underline">LinkedIn Profile</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Location</p>
                      <p className="text-white font-bold">Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold">Master of Computer Application</h4>
                    <p className="text-blue-100 text-sm">Visvesvaraya Technological University</p>
                    <p className="text-blue-200 text-xs mt-1">Aug 2021 - Sep 2023 | Bangalore</p>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div className="flex flex-col gap-2">
                    <p className="text-blue-100 text-sm font-medium">Ready to discuss your next project?</p>
                    <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                      Send a Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-800 px-6 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Abhilash Tripathy. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default App;