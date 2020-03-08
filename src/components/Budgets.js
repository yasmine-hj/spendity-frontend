import React from 'react'
import {connect} from 'react-redux'
import {deleteBudget} from '../actions/deleteBudget'
class Budgets extends React.Component {
    state = {}

    handleDelete = (budget) => {
        this.props.deleteBudget(budget.id, budget.category_id)
    }

    render() {
        return (
            <div>
                {this.props.budgets && this.props.budgets.map(budget =>
                    <li key={budget.id}> {budget.amount} - {budget.currency} - {budget.notes}</li>
                    )}
            </div>
        )
    }
}


export default connect(null, {deleteBudget})(Budgets)
