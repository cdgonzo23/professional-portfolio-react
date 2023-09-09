import Portfolio from '../utils/projects'

function Projects() {
  return (
    <>
    <h2>Projects</h2>
    <ul>
      {Portfolio.map((project) => (
      <div className='card text-white bg-primary mb-3' key={project.id}>
        <div className='card-header'>{project.title}</div>
        <div style={{backgroundImage: `url(${project.src})`}}>
          {/* <img src={project.src} /> */}
          <ul>
            <a href={project.link}>Deployed App</a>
            <a href={project.github}>GitHub</a>
          </ul>
        </div>
      </div>
      ))}
    </ul>
    </>

  )
}

export default Projects