
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-intellsurge-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Intell<span className="text-intellsurge-secondary">Surge</span></h2>
            <p className="text-gray-300 mb-4">Empowering innovation through intelligent technology solutions. Join our team and be part of something extraordinary.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">Cloud Computing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-300 hover:text-intellsurge-secondary transition-colors">Software Development</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={18} />
                <span className="text-gray-300">123 Tech Avenue, Innovation District, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span className="text-gray-300">careers@intellsurge.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 IntellSurge Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
