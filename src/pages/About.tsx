
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Ship-ship</h1>
          <p className="text-lg mb-6">
            Ship-ship is a leading global shipping and logistics company dedicated to providing efficient and reliable shipping solutions for businesses of all sizes. With years of experience in the industry, we have built a reputation for excellence in cargo transportation.
          </p>
          <p className="text-lg mb-6">
            Our mission is to simplify the complexities of global shipping, making international trade accessible and hassle-free for our clients. We believe in building long-term relationships with our customers by providing transparent pricing, exceptional service, and innovative logistics solutions.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
