import React from 'react'
import {Redirect} from 'react-router-dom'
import BudgetsContainer from '../containers/BudgetsContainer'

const Category = (props) => {
    console.log(props)
    let category = props.categories.filter(category => category.id == props.match.params.id)[0]
    console.log(category)
    return(
        <div>
            <h2>{ category.name }{ category.image }</h2>
            <BudgetsContainer category={category}/><br>
        </div>
    )
}

export default Category