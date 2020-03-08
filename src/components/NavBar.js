import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/categories' style={{paddingRight: '10px'}}>Categories  </Link>
      {/* <Link to='/categories/budgets/new'> New Budget</Link> */}
    </div>

  )
}

export default NavBar