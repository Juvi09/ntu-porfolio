import React from 'react';
import './intro.css';
import btnImg from '../../assets/Hire call.png';
import bg from '../../assets/Pro Pic 1.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Ntu Ndlovu</span>Front-End Developer</span>
            <p className='introPara'>I am a skilled front-end developer with experience in creating visually appealing and user friendly websites.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire me' />Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro