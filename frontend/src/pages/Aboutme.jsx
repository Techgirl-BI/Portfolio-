// AboutMe.js

import React from 'react';
import { Card } from 'antd';

const AboutMe = () => {
  return (
    <div className="container mx-auto p-4 mt-32">
      <Card title="About Me" className="w-full max-w-lg mx-auto text-blue-400">
        <h2 className="text-2xl font-bold">Hi, I'm Racheal Onimisi</h2>
        <p className="text-lg  text-gray-700">I'm a full-stack developer passionate about creating responsive and user-friendly web applications.</p>
        <p className="text-lg text-gray-700">With experience in both front-end and back-end development, I enjoy tackling complex problems and turning them into simple and intuitive solutions.</p>
        <p className="text-lg text-gray-700">Feel free to explore my portfolio and get in touch!</p>
      </Card>
      <div className="mt-16">
      <div className="flex justify-center gap-8 text-sky-800 px-10">
        <div className="max-w-md mb-20">
          <p className="text-gray-600">
            From a young age, my fascination with technology blossomed into a
            passion for creating innovative solutions. I initiated my Full Stack
            Development journey at ITSkills center, Lagos, through an intensive
            bootcamp training. The dynamic nature of web development, embracing
            both front-end and back-end technologies, captivated me.
            Continuously learning, I stay updated with the latest industry
            trends.
          </p>
        </div>
        <div className="max-w-md">
          <p className="text-sky-800">
            As a Full Stack Developer, I specialize in building responsive user
            interfaces with HTML, CSS, and JavaScript, and thrive in developing
            robust server-side applications using Node.js and Express, with
            experience in databases like MongoDB and SQL.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
