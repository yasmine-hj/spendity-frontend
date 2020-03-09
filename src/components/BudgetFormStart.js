import React from 'react'

const BudgetFormStart = props => {
    return (
        <div>
            <input type="text" onChange={props.onChange} name={props.name} value={props.value} />
        </div>
    )
}

export default BudgetFormStart 

