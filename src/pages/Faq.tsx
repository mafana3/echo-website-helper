
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "What shipping options do you offer?",
      answer: "We offer a comprehensive range of shipping solutions including ocean freight (FCL and LCL), air freight, and specialized cargo services. Our team can help you determine the best option based on your cargo type, destination, and timeline."
    },
    {
      question: "How do I get a shipping quote?",
      answer: "You can request a free quote through our website by filling out our quote form. Alternatively, you can contact our team directly, and we'll provide you with competitive rates based on your specific shipping requirements."
    },
    {
      question: "How can I track my shipment?",
      answer: "You can track your shipment using the tracking number provided in your shipping confirmation. Simply enter this number in our tracking system on the website, and you'll receive real-time updates on your cargo's location and status."
    },
    {
      question: "What documentation is required for international shipping?",
      answer: "The required documentation typically includes a commercial invoice, packing list, bill of lading or airway bill, and certificate of origin. Depending on the destination country and cargo type, additional permits or certificates may be necessary. Our team will guide you through the documentation process."
    },
    {
      question: "Do you handle customs clearance?",
      answer: "Yes, we provide comprehensive customs clearance services as part of our shipping solutions. Our experienced team manages all the necessary documentation and procedures to ensure smooth customs processing and timely delivery of your cargo."
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-gray-700 mb-6">
              Our team is here to provide you with the information you need about our shipping services.
            </p>
            <a 
              href="/contact" 
              className="bg-shipship-yellow text-black font-medium py-3 px-8 rounded-md hover:bg-yellow-400 transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
