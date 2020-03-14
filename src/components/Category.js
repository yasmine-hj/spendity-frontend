import React from 'react'
import {Link} from 'react-router-dom'

const Category = (props) => {
    let category = props.category
    return(
        <div className="category-menu">
            <div className="category-box">
                <Link to={`/categories/${category.id}/budgets`}style={{ textDecoration: 'none' }}>
                    <h2 style={{color:"grey"}}>{category.name}</h2>
                    <img className="icon" src = {require(`${category.image}`)} alt={category.name}/>
                </Link> 
            </div> 
        </div>
    )
}

export default Category
