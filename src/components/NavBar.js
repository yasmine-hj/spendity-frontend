import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo'

const NavBar = (props) => {

  return (
    <div class='Nav'>
      <div class='Logo'>
        <Logo/>
      </div>
      <div class='Links'>
        <Link to='/' style={{paddingRight: '30px', color: 'white'}} >Categories</Link>
        <Link to='/about' style={{paddingRight: '10px'}} style={{color: 'white'}}>About</Link>
      </div>
      <br></br>
    </div>

  )
}

export default NavBar