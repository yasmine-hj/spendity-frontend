import React from 'react'
import {connect} from 'react-redux'
import {deleteBudget} from '../actions/deleteBudget'
import Button from '@material-ui/core/Button'

class Budgets extends React.Component {

    state = {}

    handleDelete = (budget) => {
        this.props.deleteBudget(budget.id, budget.category_id)
    }
    
    render() {
        const categoryName = this.props.category && this.props.category.name 

        return (
            <div>
                <div className="category-box-selected">
                    <h1>{categoryName}</h1>
                </div>
                {this.props.category && this.props.category.budgets.map(budget => { return(
                <div className='budget-form' key={budget.id} style={{background: 'white'}}>
                    <h2 style={{color: 'white'}}>Budgeted amount: {budget.amount}</h2>
                    <h3>Currency: {budget.currency}</h3>
                    <h3>Notes: {budget.notes}</h3>
                    <h3>Start date: {budget.start_date}</h3>
                    <h3>End date: {budget.end_date}</h3>
                    <Button variant="contained" color="secondary" onClick={() => this.handleDelete(budget)}>
                    Delete
                    </Button>
                    <br></br>
                </div>
                )})}
            </div>
        )
    }
}

export default connect(null, {deleteBudget})(Budgets)
