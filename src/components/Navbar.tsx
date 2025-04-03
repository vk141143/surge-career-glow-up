
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-intellsurge-primary">Intell<span className="text-intellsurge-accent">Surge</span></h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-intellsurge-primary transition-colors">Home</Link>
          <Link to="#" className="text-gray-700 hover:text-intellsurge-primary transition-colors">About</Link>
          <Link to="#" className="text-gray-700 hover:text-intellsurge-primary transition-colors">Services</Link>
          <Link to="/blogs" className="text-gray-700 hover:text-intellsurge-primary transition-colors">Blog</Link>
          <Link to="/" className="font-semibold text-intellsurge-primary">Careers</Link>
          <Link to="#" className="text-gray-700 hover:text-intellsurge-primary transition-colors">Contact</Link>
        </div>
        <div className="flex items-center">
          <Button className="bg-intellsurge-primary hover:bg-intellsurge-accent text-white">Join Our Team</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
