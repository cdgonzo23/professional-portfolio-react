import Selfie from '../../assets/selfie.png'

function About() {
  return (
    <>
    <h2>About</h2>
    <img className='selfie' style={{ width: 125, height: 125 }} src={Selfie} alt="selfie"/>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus totam quia ullam quasi quae debitis nostrum, labore corrupti temporibus fugiat! Cupiditate eos, earum inventore laudantium nostrum dicta possimus. Autem, ducimus.
    </p>
    </>
  )
}

export default About