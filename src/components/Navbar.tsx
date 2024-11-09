// components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md">
            <p className="text-white bg-slate-600 text-center text-sm font-extrabold">Follow me on LinkedIn 🙏! 
              Boost your resume with our Resume Building Course now available!</p>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link href="/">Resume Builder</Link> {/* Logo/Brand */}
        </div>
        <ul className="hidden md:flex space-x-6 text-white">
          <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link href="/templates" className="hover:text-blue-600 transition">Templates</Link></li>
          <li><Link href="/features" className="hover:text-blue-600 transition">Features</Link></li>
          <li><Link href="/pricing" className="hover:text-blue-600 transition">Pricing</Link></li>
         
        </ul>
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="text-white my-auto hover:text-blue-600 transition">Login</Link>
          <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Sign Up
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
