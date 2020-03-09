import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBudget } from '..actions/addBudget'
import'../App.css'
import Logo from '../components/Logo'
import BudgetFormTitle from '../components/BudgetFormTitle'
import BudgetFormIngredients from '../components/BudgetFormIngredients'
import BudgetFormMethod from '../components/RecipeFormMethod'
import BudgetFormSubmit from '../components/RecipeFormSubmit'

export class BudgetFormContainer extends Component {

    state = {
        Category: '',
        Budgeted Amount: '',
        Currency: '',
        Notes: '',
        Start date: '',
        End date: '',
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
            Budgeted Amount: '',
            Currency: '',
            Notes: '',
            Start date: '',
            End date: '',          
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
