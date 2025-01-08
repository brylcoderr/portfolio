import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/Shodwe.png"
            alt="Your Logo"
            width={40}
            height={40}
            className="mr-2"
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

