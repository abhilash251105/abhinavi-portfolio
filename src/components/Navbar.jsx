import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 px-10 py-4 border-b bg-black text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/education">Education</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
