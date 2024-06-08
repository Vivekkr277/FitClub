import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"

function Footer() {
  return (
    <div className='Footer-container'>
      <hr/>
      <div className="footer">
        <div className="social-links"> 
        <a href="https://github.com/Vivekkr277"><img src={Github}alt="" /></a>
        <a href="https://www.instagram.com/kr__vivek_/"> <img src={Instagram} alt="" /></a>
        <a  href="https://www.linkedin.com/in/vivekkr277//"><img src={LinkedIn} alt="" /></a> 
        </div>
        <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
      </div>
   
<div className="blur blur-f-1"></div>
<div className="blur blur-f-2"></div>

      <p className='developer'
    
      >Developed By :- Vivek Kumar Pandit </p>
     
    </div>
    
  )
}

export default Footer
