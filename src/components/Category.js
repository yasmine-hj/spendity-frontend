import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const Category = (props) => {

    let category = props.category
    return(
        <div className="categories-menu">
            <div className="category-box">
                <Link to={`/categories/${category.id}/budgets`}>
                    <Button>
                        <h2>{category.name}</h2>
                        <img className="icon" src = {require(`${category.image}`)} alt={category.name}/>
                    </Button>
                </Link>    
            </div> 
        </div>
    )
}

export default Category
