import React from 'react'
import './about.css'
import kemboi from '/src/assets/Images/kemboi.jpg';

function About() {
  return (
    <div className='aboutPage'>
    <div className="containImage">
    <img src={kemboi} alt="kemboi" className='myImage'/>
    </div>
    <div className="about-content">
        <p>
            
            Welcome to my blog, where I explore web development,
            share my tech journey, and discuss the future of AI. As a web developer,
            I dive into topics such as front-end and back-end development, responsive
            design, and UX. I also share my experiences and insights, offering
            inspiration to fellow developers. Additionally, I delve into the
            transformative potential of AI in web development, from chatbots to data
            analysis. Join me on this exciting journey as we unravel the mysteries of
            coding, embrace continuous learning, and shape the digital world of tomorrow.
        </p>
    </div>
  
   
</div>
  )
}

export default About