import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';

const Category = (props) => {

    
    let category = props.category
    return(
        <div className="categories-menu">
            <div className="category-box">
                <Link to={`/categories/${category.id}/budgets`}style={{ textDecoration: 'none' }}>
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
