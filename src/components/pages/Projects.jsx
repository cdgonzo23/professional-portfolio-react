import Portfolio from '../utils/projects';
import GitHub from '../../assets/github.png';


function Projects() {
  return (
    <>
    <h2>Projects</h2>
    <div className='row'>
      {Portfolio.map((project) => (
      <div className='card mb-3 col-md-4 mx-2' key={project.id}>
        <div className='card-body' style={{backgroundImage: `url(${project.src})`, aspectRatio: '', backgroundSize: 'cover'}}>
          <div className='card-links'>
            <a href={project.link}>{project.title}</a>
            <a href={project.github}>
              <img src={GitHub} alt='GitHub Logo'/>
            </a>
          </div>
        </div>
      </div>
      ))}
    </div>
    </>

  )
}

export default Projects