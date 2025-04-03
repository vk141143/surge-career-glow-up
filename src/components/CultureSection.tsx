
import React from 'react';
import { Code, Heart, Lightbulb, Users, Briefcase, Globe } from 'lucide-react';

const CultureSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and explore new frontiers in technology to solve complex problems.",
      icon: <Lightbulb className="h-10 w-10 text-intellsurge-secondary" />
    },
    {
      title: "Collaboration",
      description: "We believe great ideas emerge when diverse minds work together in an environment of mutual respect.",
      icon: <Users className="h-10 w-10 text-intellsurge-secondary" />
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from coding to customer service.",
      icon: <Briefcase className="h-10 w-10 text-intellsurge-secondary" />
    },
    {
      title: "Passion",
      description: "We're genuinely excited about technology and its potential to transform lives and businesses.",
      icon: <Heart className="h-10 w-10 text-intellsurge-secondary" />
    },
    {
      title: "Impact",
      description: "We measure our success by the positive difference we make for our clients and communities.",
      icon: <Globe className="h-10 w-10 text-intellsurge-secondary" />
    },
    {
      title: "Continuous Learning",
      description: "We embrace change and constantly seek to expand our knowledge and skills.",
      icon: <Code className="h-10 w-10 text-intellsurge-secondary" />
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Culture & Values</h2>
        <p className="section-subtitle">
          At IntellSurge, our culture is defined by our shared commitment to these core values that guide everything we do.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <div key={index} className="bg-intellsurge-light p-6 rounded-lg card-hover">
              <div className="mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-intellsurge-dark">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
