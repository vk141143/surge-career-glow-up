
import React from 'react';
import { HeartPulse, Plane, BookOpen, Coffee, DollarSign, Battery } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <HeartPulse className="h-8 w-8 text-intellsurge-primary" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance. Plus mental health support and wellness programs."
    },
    {
      icon: <Plane className="h-8 w-8 text-intellsurge-primary" />,
      title: "Flexible Time Off",
      description: "Generous PTO policy to ensure you have time to rest, recharge, and explore the world."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-intellsurge-primary" />,
      title: "Learning & Development",
      description: "Annual learning budget for conferences, courses, books, and other professional development."
    },
    {
      icon: <Coffee className="h-8 w-8 text-intellsurge-primary" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options to help you thrive both personally and professionally."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-intellsurge-primary" />,
      title: "Competitive Compensation",
      description: "Attractive salary packages with equity options and regular performance-based bonuses."
    },
    {
      icon: <Battery className="h-8 w-8 text-intellsurge-primary" />,
      title: "Parental Leave",
      description: "Generous parental leave policy for all parents, regardless of gender or family status."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Benefits & Perks</h2>
        <p className="section-subtitle">
          We believe in taking care of our team members and providing everything you need to do your best work.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-intellsurge-primary card-hover">
              <div className="inline-block p-3 bg-intellsurge-light rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-intellsurge-primary to-intellsurge-accent rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Ready to grow with us?</h3>
              <p className="text-white/90">
                Join our team and help us shape the future of technology.
              </p>
            </div>
            <a 
              href="#jobs" 
              className="px-8 py-3 bg-white text-intellsurge-primary font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              Browse Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
