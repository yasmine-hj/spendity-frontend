import React from 'react'
import {Route, Link} from 'react-router-dom'
import CategoryBudget from './CategoryBudget'

const CategoryBudgets = (props) => {
    console.log(props.category.budgets)
    const budgets = props.category.budgets.map(budget => <CategoryBudget key={budget.id} budget={budget} />)

    return (
        <div>
            <h3>Budgets:</h3>
            {budgets}
        </div>
    )

}

export default CategoryBudgets