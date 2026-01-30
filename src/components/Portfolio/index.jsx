import React from 'react';
import portfolio from './portfolio.css';
import pdf from '../../../public/assets/Website Frontend Developer Oliver.pdf'

function Project( {grpProjects} ) {
  
  return (
        
    <div className='mid-container'>
    <div className='title-map'>
      <h1
        style={{
          textAlign: 'center',
          // marginBottom: '3%',
          // marginTop: '2%',
          fontSize: '60px',
          display: 'inline-block',
        }}
      >
      Projects!
      </h1>
      <div className='map-container'>
          {grpProjects.map((project) => (
            <div className='card custom-card' key={project.id}>
              <div
                className='hover-text fade'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'space-evenly',
                }}
              >
                <p
                  style={{
                    color: '#000',
                    fontWeight: 'bold',
                    zIndex: '3',
                    fontSize: '20px',
                    textShadow:
                      '-1px 0 #d26ffc, 0 1px #d26ffc, 1px 0 #d26ffc, 0 -1px #d26ffc',
                  }}
                >
                  <b
                    style={{
                      color: '#d26ffc',
                      fontSize: '45px',
                      textDecoration: 'underline',
                      textShadow:
                        '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
                    }}
                  >
                    Technologies:
                  </b>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  {project.technologies}
                </p>
                <a
                  style={{
                    zIndex: '4',
                    fontSize: '20px',
                    backgroundColor: '#d26ffc',
                    border: '1px solid black',
                  }}
                  href={project.link}
                  className='btn btn-index'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live application
                </a>
                <a
                  style={{
                    zIndex: '4',
                    fontSize: '20px',
                    backgroundColor: '#d26ffc',
                    border: '1px solid black',
                  }}
                  href={project.github}
                  className='btn btn-index'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github Repo
                </a>
                </div>
                <div className='hover-wrapper blur card-spacing'>
                <img
                  src={project.imagePath}
                  className='card-img-top'
                  alt={project.imageAlt}
                />
                <div className='card-body card-spacing'>
                  <h5
                    className='card-title'
                    style={{ textDecoration: 'underline' }}
                  >
                    {project.title}
                  </h5>
                  <p style={{fontSize: '11px'}}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        <a
        className="fade-in-animation"
        href="/20-portfolio/assets/Oliver-Lopez-Frontend-Resume-2026.pdf"
        target="_blank"
        rel="noreferrer"
        download
        >
        Download My Resume!
        </a>

      </div>
    );
}

export default Project;

