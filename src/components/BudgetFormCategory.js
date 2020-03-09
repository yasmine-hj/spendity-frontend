import React from 'react'

const BudgetFormCategory = props => {
    return (
        <div>
            <select name="category" onChange={props.onChange} name={props.name} value={props.value}/>
            <option>Groceries</option>
            <option>Family</option>
            <option>Travel</option>
            <option>Other</option>
            <option>Utilities</option>
            <option>Transport</option>
        </div>
    )
}

export default BudgetFormCategory 

