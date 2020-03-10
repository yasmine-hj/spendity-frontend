import React from 'react'
import {Link} from 'react-router-dom'


const Category = (props) => {

    let category = props.category
    return(
        <div className="cat-container">
            <div className="categories-menu">
                <div className="category-box">
                     <Link to={`/categories/${category.id}/budgets`} style={{paddingRight: '50px', color: 'black'}}>{category.name} </Link>
                    <img className="icon" src = {require(`${category.image}`)}/>
                </div> 
            </div>
        </div>
    )
}

export default Category
