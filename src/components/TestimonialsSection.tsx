
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working at IntellSurge has been the highlight of my career. The culture of innovation and continuous learning keeps me inspired every day.",
      name: "Sarah Johnson",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "What I love most about IntellSurge is that every team member's voice matters. My ideas have directly impacted our products and the way we work.",
      name: "Michael Chen",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "The growth opportunities at IntellSurge are incredible. In just two years, I've expanded my skills significantly and advanced my career path.",
      name: "Priya Patel",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What Our Team Says</h2>
        <p className="section-subtitle">
          Hear directly from our talented team members about their experiences working at IntellSurge.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm card-hover flex flex-col h-full">
              <div className="flex-grow">
                <div className="mb-6 text-intellsurge-primary">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-intellsurge-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between bg-intellsurge-light p-8 rounded-lg mt-16">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Want to join our team?</h3>
            <p className="text-gray-600">
              We're always looking for talented individuals to help us shape the future.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#jobs" 
              className="px-6 py-3 bg-intellsurge-primary text-white font-semibold rounded-md hover:bg-intellsurge-accent transition-colors text-center"
            >
              View Open Positions
            </a>
            <a 
              href="#" 
              className="px-6 py-3 border border-intellsurge-primary text-intellsurge-primary font-semibold rounded-md hover:bg-intellsurge-light transition-colors text-center"
            >
              Learn About Our Culture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
