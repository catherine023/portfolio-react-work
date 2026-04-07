import React, { useState, useRef } from 'react'
import './Navbar.css'
import co_logo from '../../assets/co_logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => { 
    const[ menu, setMenu] =useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }
     const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }
    return (
        <div className='navbar'>
          
            <img src={co_logo} alt=" C.O" className="navbar-logo" />

            <div className='nav-mob-open' onClick={openMenu}>
                <img src={menu_open} alt="Menu" />
                
            </div>

            <ul ref = {menuRef} className="nav-menu">

              <li className = "nav-close-li">
                
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
             </li> 
                <li><AnchorLink className='anchor-link' offset={50}href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50}href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50}href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50}href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt="" />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50}href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt="" />:<></>}</li>
            </ul> 
            <AnchorLink className='anchor-link nav-connect' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
    )
}

export default Navbar;