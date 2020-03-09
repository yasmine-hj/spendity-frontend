import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBudget } from '..actions/addBudget'
import'../App.css'
import Logo from '../components/Logo'
import BudgetFormCategory from '../components/BudgetFormCategory'
import BudgetFormAmount from '../components/BudgetFormAmount'
import BudgetFormCurrency from '../components/BudgetFormCurrency'
import BudgetFormNotes from '../components/BudgetFormNotes'
import BudgetFormStart from '../components/BudgetFormStart'
import BudgetFormEnd from '../components/BudgetFormEnd'
import BudgetFormSubmit from '../components/BudgetFormSubmit'

export class BudgetFormContainer extends Component {

    state = {
        Category: '',
        BudgetedAmount: '',
        Currency: '',
        Notes: '',
        StartDate: '',
        EndDate: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addBudget({
            budget: {
                category: this.state.category,
                amount: this.state.amount,
                currency: this.state.currency,
                notes: this.state.notes,
                start_date: this.state.startDate,
                end_date: this.state.endDate
            }
        })
        this.setState({
            Category: '',
            BudgetedAmount: '',
            Currency: '',
            Notes: '',
            StartDate: '',
            EndDate: ''       
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <Logo />
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new Budget</label>
                    <BudgetFormCategory onChange={this.handleChange} name="category" value={this.state.category} />
                    <BudgetFormAmount onChange={this.handleChange} name="amount" value={this.state.amount} />
                    <BudgetFormCurrency onChange={this.handleChange} name="currency" value={this.state.currency} />
                    <BudgetFormNotes onChange={this.handleChange} name="notes" value={this.state.notes} />
                    <BudgetFormStart onChange={this.handleChange} name="startDate" value={this.state.startDate} />
                    <BudgetFormEnd onChange={this.handleChange} name="endDate" value={this.state.endDate} />
                    <BudgetFormSubmit />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addBudget: budget => dispatch(addBudget(budget))
})
export default connect(null, mapDispatchToProps)(BudgetFormContainer)
