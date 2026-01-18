import { Link } from 'react-router-dom'


export default function Navbar() {
return (
<nav className="flex gap-6 px-10 py-4 border-b bg-white">
<Link to="/" className="font-semibold">Home</Link>
<Link to="/about">About</Link>
</nav>
)
}