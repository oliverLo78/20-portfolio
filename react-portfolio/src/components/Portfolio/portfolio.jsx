import React from 'react';
import Card from './index';

const project = {
  name: 'Speakeasy',
  description: 'The place to get info about your favorite cocktails',
  id: '123412asf4dga23512',
};

export default function Display() {
  return (
    <div>
        <Card 
        name={project.name} 
        description={project.description} 
        id={project.id} 
        />
    </div>
  );
}
