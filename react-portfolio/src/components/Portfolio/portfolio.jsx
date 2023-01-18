import React from 'react';
import Card from './card';

const projects = [
  {
    name: 'Speakeasy',
    description: 'The place to get info about your favorite cocktails',
    id: '1',
    imageUrl: ''
  },
  {
    name: 'Speakeasy',
    description: 'The place to get info about your favorite cocktails',
    id: '2',
  }
]

export default function Display() {
  console.log(projects);
  return (
    // {numbers.map((number) =>
    //   <ListItem key={number.toString()}
    //             value={number} />
    // )}
    <div>
      {projects.map((project,i) => <Card 
        key={i}
        name={project.name} 
        description={project.description} 
        id={project.id} 
        imageUrl={project.imageUrl}
        />)}
    </div>
  );
}
