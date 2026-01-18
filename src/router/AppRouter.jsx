import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Education from "../pages/Education.jsx";
import Experience from "../pages/Experience.jsx";
import Skills from "../pages/Skills.jsx";
import Projects from "../pages/Projects.jsx";
import CaseStudies from "../pages/CaseStudies.jsx";
import Impact from "../pages/Impact.jsx";
import Learning from "../pages/Learning.jsx";
import CareerRoadmap from "../pages/CareerRoadmap.jsx";
import CertificationTimeline from "../pages/CertificationTimeline.jsx";
import Toolbox from "../pages/Toolbox.jsx";
import Snippets from "../pages/Snippets.jsx";
import Architecture from "../pages/Architecture.jsx";
import LessonsLearned from "../pages/LessonsLearned.jsx";
import Mentorship from "../pages/Mentorship.jsx";
import Values from "../pages/Values.jsx";
import LifeGoals from "../pages/LifeGoals.jsx";
import Achievements from "../pages/Achievements.jsx";
import Blog from "../pages/Blog.jsx";
import FAQs from "../pages/FAQs.jsx";
import Hobbies from "../pages/Hobbies.jsx";
import Resume from "../pages/Resume.jsx";
import Contact from "../pages/Contact.jsx";
import Testimonials from "../pages/Testimonials.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/career-roadmap" element={<CareerRoadmap />} />
      <Route path="/certifications" element={<CertificationTimeline />} />
      <Route path="/toolbox" element={<Toolbox />} />
      <Route path="/snippets" element={<Snippets />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/lessons" element={<LessonsLearned />} />
      <Route path="/mentorship" element={<Mentorship />} />
      <Route path="/values" element={<Values />} />
      <Route path="/life-goals" element={<LifeGoals />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  );
}
