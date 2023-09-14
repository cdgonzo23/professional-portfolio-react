import Selfie from '../../assets/selfie.png'

function About() {
  return (
    <>
    <h2>About</h2>
    <img className='selfie' style={{ width: 125, height: 125 }} src={Selfie} alt="selfie"/>
    <p>
      Full-Stack Web Developer with a high level of competency in Audio Engineering. Trained at Vanderbilt University’s coding boot camp earning a certificate in Full-Stack Web Development. Extremely driven to become a Full-Stack Architect specializing in JavaScript and React while enrolling in professional level certificate classes to continue growing technical expertise.
    </p>
    </>
  )
}

export default About