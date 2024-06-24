import React from 'react'
import '../Styles/intro.css'
import bgimage from '../Assets/image.png'
import hiremebtn from '../Assets/hireme.png'
import {Link} from 'react-scroll'
function Intro() {
    return (
        <section id='intro'>
            <div className='Description'>
                <span className='hello'>Hello,</span>
                <span className='Iam'>I'm <span className='name'>Harshil</span><br/>Web Developer</span>
                <p className='detail'>
                I am a skilled and passionate web designer with experience in creating<br/> visually appealing and user-friendly websites.
                </p>
                <Link className='hire-me'>
                    <button>
                        <img alt='hire-me' src={hiremebtn}/>
                        <div className='hire-me'>Hire me</div>
                    </button>
                </Link>
            </div>
            <img className='bg' alt='bg' src={bgimage}/>
        </section>
    )
}


export default Intro