
import React, { useState } from 'react';
import { Search, Filter, MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const JobListings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Product', 'Design', 'Marketing', 'Sales', 'Customer Support'];
  
  const jobs = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-Time",
      posted: "2 days ago"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-Time",
      posted: "1 week ago"
    },
    {
      title: "AI Research Scientist",
      department: "Engineering",
      location: "Boston, MA",
      type: "Full-Time",
      posted: "3 days ago"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-Time",
      posted: "Just now"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-Time",
      posted: "5 days ago"
    },
    {
      title: "Technical Support Engineer",
      department: "Customer Support",
      location: "Austin, TX",
      type: "Full-Time",
      posted: "1 week ago"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <section className="bg-gray-50 section-padding" id="jobs">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Open Positions</h2>
        <p className="section-subtitle">
          Discover exciting career opportunities and join our team of passionate innovators.
        </p>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search positions..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter size={18} className="text-intellsurge-primary" />
            <span className="text-gray-700">Filter by:</span>
            <div className="flex flex-wrap gap-2">
              {departments.map(department => (
                <Button
                  key={department}
                  variant={selectedDepartment === department ? "default" : "outline"}
                  size="sm"
                  className={selectedDepartment === department ? 
                    "bg-intellsurge-primary hover:bg-intellsurge-accent" : 
                    "text-gray-700 hover:text-intellsurge-primary"}
                  onClick={() => setSelectedDepartment(department)}
                >
                  {department}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="border-l-4 border-intellsurge-primary p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-intellsurge-dark mb-2">{job.title}</h3>
                  <span className="inline-block bg-intellsurge-light text-intellsurge-accent text-xs font-medium px-2 py-1 rounded-full">
                    {job.department}
                  </span>
                </div>
                
                <div className="flex flex-col space-y-2 mt-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase size={16} className="mr-2" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span>Posted {job.posted}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-white hover:bg-intellsurge-light text-intellsurge-primary border border-intellsurge-primary">
                  View Position
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Don't see a position that matches your skills?</p>
          <Button className="bg-intellsurge-accent hover:bg-intellsurge-primary">Send Your Resume</Button>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
