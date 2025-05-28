// Projects.js

import React from 'react';
import { Card, Row, Col } from 'antd';

const projects = [
  {
    title: 'Currency Converter',
    description: "A currency converter web application that fetches real-time exchange rates via API integration. Users can input amounts and select currencies from dropdown menus to get instant conversions. Built with HTML/CSS/JavaScript and demonstrates skills in API consumption, DOM manipulation, responsive design, and asynchronous programming. Features clean UI with error handling and support for major world currencies.",
    link: 'https://currency-converter-mvuv.onrender.com',
  },
  {
    title: 'EdTech Platform',
    description: 'A coding education company website with static pages showcasing course offerings, instructor bios, and contact information. Features a clean homepage, about page, courses page with descriptions and pricing, and a contact form. Built with HTML, CSS, and basic JavaScript for form validation and interactive elements. Demonstrates responsive design, semantic markup, and fundamental web development skills with a professional, educational-focused layout.',
    link: 'https://maths-and-coding-academy.onrender.com',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="container mx-auto p-4  mt-9 w-8/12">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Projects</h2>
      <Row gutter={[16, 16]}>
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card hoverable>
  <Card.Meta title={project.title} description={project.description} />
  <a href={project.link} target="_blank" rel="noopener noreferrer">
    <button className="mt-2 text-blue-500">View Project</button>
  </a>
</Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
