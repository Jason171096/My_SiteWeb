import Card from "@components/Card";
import { dataProjects } from '@data/proyectos'
import React from "react";

export default function GridCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {dataProjects.map((project) => (
        <Card key={project.title} title={project.title} usedTech={project.usedTech} urlImage={project.urlImage}/>
      ))}
    </div>
  );
};

