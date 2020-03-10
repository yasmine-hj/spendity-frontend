import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo'

const NavBar = (props) => {

  return (
    <div className='Nav'>
      <div className='Logo'>
        <Logo/>
      </div>
      <div className='Links'>
        <Link to='/categories' style={{paddingRight: '30px', color: 'white'}} >Categories</Link>
        <Link to='/about' style={{paddingRight: '10px', color: 'white'}}>About</Link>
      </div>
      <br></br>
    </div>

  )
}

export default NavBar