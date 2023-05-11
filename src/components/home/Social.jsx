import React from 'react'
import fiverrIcon from "../../assets/fiverr-icon.svg"
import upworkIcon from "../../assets/upwork.svg"

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.behance.net/faizaijazi" className="home__social-icon" target="_blank">
            <i class="uil uil-behance"></i>
        </a>
        
        <a href="https://www.fiverr.com/faiz_aijazi" className="home__social-icon" target="_blank">
          <img src={fiverrIcon} alt="" />
        </a>
        
        <a href="https://www.upwork.com/freelancers/faizaijazi" className="home__social-icon" target="_blank">
          <img src={upworkIcon} alt="" />
        </a>

    </div>
  )
}

export default Social
