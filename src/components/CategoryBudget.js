import React from 'react'

const CategoryBudget = (props) => {
    console.log(props.category.budget)

    let budget = props.category.budget
    return(
        <div className="cat-budget-container">
            <div className="cat-budget-menu">
                <div className="cat-budget-box">
                    <h2>{budget.amount}</h2>
                    <h2>{budget.currency}</h2>
                    <h2>{budget.notes}</h2>
                    <h2>{budget.start_date}</h2>
                    <h2>{budget.end_date}</h2>
                </div> 
            </div>
        </div>
    )
}
export default CategoryBudget
