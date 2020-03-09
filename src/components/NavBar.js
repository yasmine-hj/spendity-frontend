import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/' style={{paddingRight: '10px'}}>Categories  </Link>
      <Link to='/budgets/new' style={{paddingRight: '10px'}}> New Budget </Link>
      <Link to='/about' style={{paddingRight: '10px'}}> About</Link>
    </div>

  )
}

export default NavBar