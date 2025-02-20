import Link from 'next/link'
import ThemeSwitcher from '../ui/ThemeSwitcher'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar fixed top-0 z-50 bg-base-100 bg-opacity-70 backdrop-blur-md"
    >
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          <img src="/logo.gif" alt="Logo" className="h-10" />
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <ThemeSwitcher />
        <a 
          href="/resume.pdf" 
          className="btn btn-primary ml-4"
          download
        >
          Resume
        </a>
      </div>
    </motion.nav>
  )
}
