import React from 'react';
import Card from './card';

const projects = [
  {
    name: 'Speakeasy',
    description: 'The place to get info about your favorite cocktails',
    image: '/public/images/paella.jpg'
  },

]

export default function Display() {
  
  return (
        
    <div>
      {projects.map((project,i) => <Card 
        key={i}
        name={project.name} 
        description={project.description} 
        image={project.image}
        />)}
    </div>

  );
}
