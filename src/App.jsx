import AppRouter from '../router/AppRouter'
import Navbar from './Navbar'


export default function App() {
return (
<div className="min-h-screen bg-gray-50 text-gray-900">
<Navbar />
<AppRouter />
</div>
)
}