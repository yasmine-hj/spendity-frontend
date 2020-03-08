import React from 'react'
// import {Redirect} from 'react-router-dom'
import BudgetsContainer from '../containers/BudgetsContainer'

const Category = (props) => {
    console.log(props.category)

    let category = props.category
    return(
        <div>
            <h2>
                { category ? category.name : null} 
            </h2>
            <img src={category.image}></img>
            <BudgetsContainer category={category}/>
        </div>
    )
}

export default Category