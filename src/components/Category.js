import React from 'react'
import groceries from './img/groceries.png'


const Category = (props) => {
    console.log(props.category)

    let category = props.category
    return(
        <div>
            <h2>
                { category.name } 
            </h2>
            <img src={groceries}></img>
        </div>
    )
}

export default Category