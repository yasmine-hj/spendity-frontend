import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/' style={{paddingRight: '10px'}}>Categories  </Link>
      <Link to='/budgets/new'> New Budget</Link>
    </div>

  )
}

export default NavBar