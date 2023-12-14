import React from 'react'
import './intro.css'
import bg from '../../assets/Ntuthuko.jpg';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Ntu Ndlovu</span>Front-End Developer</span>
            <p className='introPara'>I am a skilled front-end developer with experience in creating visually appealing and user friendly websites.</p>
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro