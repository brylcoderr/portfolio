import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a href="https://github.com/brylcoderr " className="text-2xl hover:text-primary transition-colors">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/brylcoder" className="text-2xl hover:text-primary transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/dpshubham" className="text-2xl hover:text-primary transition-colors">
          <FaTwitter />
        </a>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  )
}
