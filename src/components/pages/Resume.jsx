import pdf from '../../assets/Gonzales_Resume.pdf'

function Resume() {
  return (
    <>
    <h2>Resume</h2>
    <a href={pdf} download>Download Resume</a>
    <div>
      <h3>Front-End Proficincies</h3>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-End Proficincies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
      </ul>
    </div>
    </>
  )
}

export default Resume