import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      const response = await fetch('https://portfolio-backend-two-red-48.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage('✓ Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage('✗ ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('✗ Failed to send message. Please try again or contact me directly.');
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      href: 'https://github.com/wahidpatel05',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 
          0-.285-.01-1.04-.016-2.04-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 
          1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.93 
          0-1.31.468-2.38 1.235-3.22-.124-.304-.536-1.527.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.553 
          3.297-1.23 3.297-1.23.655 1.649.243 2.872.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.624-5.476 5.922.43.372.823 
          1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.217.694.825.576C20.565 22.092 24 17.593 24 12.297 
          24 5.67 18.627.297 12 .297z"/>
        </svg>
      ),
      alt: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/wahidpatel/',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452H16.89v-5.396c0-1.285-.025-2.938-1.791-2.938-1.791 
          0-2.065 1.401-2.065 2.847v5.487H9.479V9h3.41v1.561h.05c.476-.9 
          1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.456v6.285zM5.337 
          7.433a1.987 1.987 0 1 1 0-3.974 1.987 1.987 0 0 1 0 3.974zM7.119 
          20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 
          0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 
          24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
        </svg>
      ),
      alt: 'LinkedIn',
    },
    {
      href: 'https://www.instagram.com/wahid.patel_/',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 
          22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 
          2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 
          20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 
          16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 
          0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.88a1.12 
          1.12 0 1 1-2.25 0 1.12 1.12 0 0 1 2.25 0z"/>
        </svg>
      ),
      alt: 'Instagram',
    },
  ];

  return (
    <section id="contact" className="pt-20 pb-24 bg-zinc-900 text-zinc-100">
      <div className="container max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="headline-2 mb-4">Get in Touch</h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Whether you have a project idea, want to collaborate, or just want to say hi, my inbox is always open.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map(({ href, icon, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-800 hover:bg-indigo-600 transition"
              aria-label={alt}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Email + Phone */}
        <div className="text-lg space-y-2 mb-10">
          <p>
            📧 <a href="mailto:patel.wahid2005@gmail.com" className="hover:text-indigo-400">patel.wahid2005@gmail.com</a>
          </p>
          <p>
            📱 <a href="tel:+919372950943" className="hover:text-indigo-400">+91 93729 50943</a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="grid gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {statusMessage && (
            <p className={`text-sm ${statusMessage.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
