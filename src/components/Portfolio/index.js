import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'STKR',
      description: 'JavaScript/HTML/CSS',
      link: "https://naf15.github.io/STKR/",
      repo: "https://github.com/naf15/STKR"
    },
    {
      name: 'currency-converter',
      description: 'JavaScript/HTML/CSS',
      link: "https://duncanbyrne.github.io/Currency-Converter/",
      repo: "https://github.com/DuncanByrne/Currency-Converter"
    },
    {
      name: 'note-taker',
      description: 'JavaScript/HTML/CSS',
      link: "https://notetakerapphw.herokuapp.com/notes",
      repo: "https://github.com/DuncanByrne/Note-Taker"
    },
    {
      name: 'library-congress',
      description: 'JavaScript/HTML/CSS',
      link: "https://duncanbyrne.github.io/library-of-congress/index.html",
      repo: "https://github.com/DuncanByrne/library-of-congress"
    },
   
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
