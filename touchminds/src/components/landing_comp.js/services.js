import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  return (
    <section className="p-10 bg-blue-200" style={{ width: '50%', margin: '0 auto' }}>
      <h3 className="text-xl font-bold text-white">Our Services</h3>
      <Accordion defaultActiveKey="0" className="mt-4">
        {[
          { title: "Visual Branding", content: "Your brand is more than just a logo; it's the essence of your business." },
          { title: "Creative Campaign", content: "We create compelling campaigns that engage and convert." },
          { title: "UI/UX Design", content: "We design user-friendly and visually appealing interfaces." },
          { title: "Development", content: "We build scalable and high-performing applications." }
        ].map((service, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{service.title}</Accordion.Header>
            <Accordion.Body>{service.content}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};

export default Services;