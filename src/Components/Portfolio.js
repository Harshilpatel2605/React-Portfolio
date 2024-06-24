import React from 'react'
import '../Styles/portfolio.css'
import portfolio1 from '../Assets/portfolio-1.png'
import portfolio2 from '../Assets/portfolio-2.png'
import portfolio3 from '../Assets/portfolio-3.png'
import portfolio4 from '../Assets/portfolio-4.png'
import portfolio5 from '../Assets/portfolio-5.png'
import portfolio6 from '../Assets/portfolio-6.png'

function Portfolio() {
    return (
        <div id='portfolio'>
            <div className='myportfolio'>My Portfolio</div>
            <div className='content'>"I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help busineses achieve their goals and create a strong online presence."</div>
            <div className='images'>
                <img alt='portfolio-1' src={portfolio1}/>
                <img alt='portfolio-2' src={portfolio2}/>
                <img alt='portfolio-3' src={portfolio3}/>
                <img alt='portfolio-4' src={portfolio4}/>
                <img alt='portfolio-5' src={portfolio5}/>
                <img alt='portfolio-6' src={portfolio6}/>
            </div>
            <button className='see-more'>See more</button>
        </div>
    )
}


export default Portfolio