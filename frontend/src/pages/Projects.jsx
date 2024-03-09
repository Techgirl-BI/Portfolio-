// Projects.js

import React from 'react';
import { Card, Row, Col } from 'antd';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1 goes here.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2 goes here.',
    image: 'https://via.placeholder.com/150',
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
            <Card
              hoverable
              cover={<img alt={project.title} src={project.image} />}
            >
              <Card.Meta title={project.title} description={project.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
