import React from 'react'

const BudgetFormCategory = props => {
    return (
        <div>
            <input type="text" onChange={props.onChange} name={props.name} value={props.value} />
        </div>
    )
}

export default BudgetFormCategory 

