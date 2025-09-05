import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  const sitemap = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Project', href: '#project' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact me', href: '#contact' },
  ];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/wahidpatel05', icon: <FaGithub size={20} /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wahidpatel/', icon: <FaLinkedin size={20} /> },
    { label: 'Instagram', href: 'https://www.instagram.com/wahid.patel_/', icon: <FaInstagram size={20} /> },
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-10 border-t border-zinc-800">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        {/* Left - Logo / Name */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold text-zinc-100">Wahid Patel</h2>
          <p className="text-sm text-zinc-500">Frontend Developer | Vice Chairperson ACM</p>
        </div>

        {/* Middle - Sitemap */}
        <nav className="mb-6 md:mb-0">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {sitemap.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-indigo-400 transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right - Social Links */}
        <div className="flex justify-center gap-5">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Wahid Patel. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
