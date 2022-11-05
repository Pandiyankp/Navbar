import React from 'react'
import './navbar.css';
import {Link} from 'react-router-dom'
import {FiMenu, FiX} from 'react-icons/fi'
import {useState} from 'react'

function Navbar() {
  const [open,setOpen] =useState(true);
  const handleClick =()=>setOpen(!open);
  const closeMenu =()=>setOpen(true);
  return (<>
  
  
<nav className='navbar'>
<Link to='/Home' className='nav-title'>Navbar</Link>
<div className='nav-icon' onClick={handleClick}>
{open ?  <FiMenu /> : <FiX/>}

</div>

<ul className={ open ? 'nav-links active' :'nav-links'} >
    <li className='nav-item' onClick={closeMenu}><Link to='/Home'className='nav-link'>Home</Link></li>
    <li className='nav-item' onClick={closeMenu}><Link to='/About' className='nav-link'>About</Link></li>
    <li className='nav-item' onClick={closeMenu}><Link to='/Contact'className='nav-link'>Contact</Link></li>
    <li className='nav-item' onClick={closeMenu}><Link to='/Service'className='nav-link'>Service</Link></li>
</ul>
    </nav>  

  </>)
}

export default Navbar