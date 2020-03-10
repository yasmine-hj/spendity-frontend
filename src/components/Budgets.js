//container
import React from 'react'
import {connect} from 'react-redux'
import {deleteBudget} from '../actions/deleteBudget'

class Budgets extends React.Component {
    // state = {}

    // handleDelete = (budget) => {
    //     this.props.deleteBudget(budget.id, budget.category_id)
    // }

    // render() {
    //     // console.log(this.props)
    //     return (
    //         <div>
    //             {this.props.budgets && this.props.budgets.map(budget =>
    //                 <li key={budget.id}> {budget.amount} - {budget.currency} - {budget.notes}</li>
    //                 )}
    //         </div>
    //     )
    // }

    render() {
        // const budgets = this.props.budgets.map(budget => <Category key={budget.id} budget={budget} />)
        // const categories = props.categories.map(category => <Category key={category.id} category={category} />)

        console.log(this)
        return (
            <div>

                {this.props.budgets && this.props.budgets.budgets.map(budget => { return(
                    <div key={budget.id}>
                    <h2>{budget.amount}</h2>
                    <h2>{budget.currency}</h2>
                    <h2>{budget.notes}</h2>
                    <h2>{budget.start_date}</h2>
                    <h2>{budget.end_date}</h2>
                    </div>
                )})}
        <div className="cat-budget-container">
            <div className="cat-budget-menu">
                <div className="cat-budget-box">
              
                </div> 
            </div>
        </div>
            </div>
        )
    }
}


export default connect(null, {deleteBudget})(Budgets)
