
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CultureSection from '@/components/CultureSection';
import JobListings from '@/components/JobListings';
import BenefitsSection from '@/components/BenefitsSection';
import ApplicationProcess from '@/components/ApplicationProcess';
import TestimonialsSection from '@/components/TestimonialsSection';
import EmployeesSection from '@/components/EmployeesSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CultureSection />
        <EmployeesSection />
        <JobListings />
        <BenefitsSection />
        <ApplicationProcess />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
