import React from 'react'
import {connect} from 'react-redux'
import {addBudget} from '../actions/addBudget'

class BudgetInput extends React.Component {
    
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBudget(this.state, this.props.budget.id)
      }

      render(){
          return (
              <div>
                  <form onSubmit={this.handleSubmit}>
                      <label>Budgeted Amount:</label>
                      <input type="integer" name="amount" value={this.state.amount} onChange={this.handleChange}/>
                      <label>Currency:</label>
                      <input type="text" name="currency" value={this.state.currency} onChange={this.handleChange}/>
                      <label>Notes:</label>
                      <input type="text" name="notes" value={this.state.notes} onChange={this.handleChange}/>
                      <label>Start date:</label>
                      <input type="text" name="startDate" value={this.state.startDate} onChange={this.handleChange}/>
                      <label>End date:</label>
                      <input type="text" name="endDate" value={this.state.endDate} onChange={this.handleChange}/>
                      <input type="submit"/>
                  </form>
              </div>
          )
      }
}

export default connect(null, {addBudget})(BudgetInput)

