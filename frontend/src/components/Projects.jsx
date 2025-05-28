import React from 'react';
import { Card } from 'flowbite-react';

const Projects = () => {
  return (
    <div className='ml-96'>
      <h2 className="font-bold text-xl">Projects</h2>
      
      <Card
        className="max-w-sm overflow-hidden bg-white shadow-md rounded-lg mx-4 my-8"
      >
        <div className="p-4">
          <h5 className="text-xl font-bold text-gray-800">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mt-2 text-sm text-gray-600">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Projects;
