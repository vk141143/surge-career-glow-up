
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-intellsurge-primary">Intell<span className="text-intellsurge-accent">Surge</span></h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-intellsurge-primary transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-intellsurge-primary transition-colors">About</a>
          <a href="#" className="text-gray-700 hover:text-intellsurge-primary transition-colors">Services</a>
          <a href="#" className="text-gray-700 hover:text-intellsurge-primary transition-colors">Blog</a>
          <a href="#" className="font-semibold text-intellsurge-primary">Careers</a>
          <a href="#" className="text-gray-700 hover:text-intellsurge-primary transition-colors">Contact</a>
        </div>
        <div className="flex items-center">
          <Button className="bg-intellsurge-primary hover:bg-intellsurge-accent text-white">Join Our Team</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
