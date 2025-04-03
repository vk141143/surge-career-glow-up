
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Employee {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const EmployeesSection = () => {
  const employees: Employee[] = [
    {
      name: "Alex Morgan",
      role: "Chief Technology Officer",
      bio: "With over 15 years of experience in tech leadership, Alex drives our technical vision and innovation strategy.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Maya Patel",
      role: "Lead AI Researcher",
      bio: "Maya specializes in machine learning algorithms and leads our research into cutting-edge AI applications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "David Chen",
      role: "Senior Software Architect",
      bio: "David designs robust software solutions that power our enterprise applications and client services.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Product",
      bio: "Sarah transforms ideas into market-ready products, focusing on user experience and business value.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=500&h=500&q=80"
    },
    {
      name: "James Wilson",
      role: "VP of Engineering",
      bio: "James oversees our development teams and ensures we deliver high-quality software on schedule.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=500&h=500&q=80"
    },
    {
      name: "Olivia Martinez",
      role: "UX Design Lead",
      bio: "Olivia creates intuitive and accessible interfaces that delight our users and simplify complex workflows.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=500&h=500&q=80"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="team">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          The talented people behind IntellSurge's innovation and success.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {employees.map((employee, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="h-16 w-16 border-2 border-intellsurge-light">
                    <AvatarImage src={employee.image} alt={employee.name} />
                    <AvatarFallback className="bg-intellsurge-primary text-white">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-intellsurge-dark">{employee.name}</h3>
                    <p className="text-intellsurge-primary font-medium">{employee.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{employee.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">Want to join our amazing team?</p>
          <a 
            href="#jobs" 
            className="px-6 py-3 bg-intellsurge-primary text-white font-semibold rounded-md hover:bg-intellsurge-accent transition-colors inline-block"
          >
            See Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmployeesSection;
