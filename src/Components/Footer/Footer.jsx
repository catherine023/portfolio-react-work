import React from 'react'
import './Footer.css'
import co_logo from '../../assets/co_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    // ✅ Fixed
<div className='footer'>
  <div className="footer-top">
    <div className="footer-top-left">
      <img src={co_logo} alt="CO logo" />
      <p>I am a Full Stack Developer at New York City College of Technology</p>
    </div>
    
  </div>  {/* ← footer-top closes HERE */}

  <div className="footer-bottom">  {/* ← now a sibling, not a child */}
    <p className="footer-bottom-left">© 2025 Catherine Ochoa. All rights reserved.</p>
    <div className="footer-bottom-right">
    <a href="https://github.com/catherine023" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/catherine-ochoa2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      
    </div>
  </div>
</div>
    
  )
}

export default Footer