import React from 'react'
import {connect} from 'react-redux'
import {deleteBudget} from '../actions/deleteBudget'

class Budgets extends React.Component {

    state = {}

    handleDelete = (budget) => {
        this.props.deleteBudget(budget.id, budget.category_id)
      }

    render() {
        console.log(this)
        const categoryName = this.props.category && this.props.category.name 
        return (
            <div>
                <h1>{categoryName}</h1>
                {this.props.category && this.props.category.budgets.map(budget => { return(
                    <div className="budget-box" key={budget.id} style={{background: 'white'}}>
                    <h2>Budgeted amount: {budget.amount}</h2>
                    <h3>Currency: {budget.currency}</h3>
                    <h3>Notes: {budget.notes}</h3>
                    <h3>Start date: {budget.start_date}</h3>
                    <h3>End date: {budget.end_date}</h3>
                    <button onClick={() => this.handleDelete(budget)}>Delete</button>
                    </div>
                )})}
            </div>
        )
    }
}


export default connect(null, {deleteBudget})(Budgets)
