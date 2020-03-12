import React from 'react'
import {connect} from 'react-redux'
import {addBudget} from '../actions/addBudget'
import Button from '@material-ui/core/Button';

class BudgetInput extends React.Component {
    state = {
      amount: '',
      currency: '',
      notes: '',
      startDate: '',
      endDate: ''
    }
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBudget(this.state, this.props.category.id)
        this.setState({
          amount: '',
          currency: '',
          notes: '',
          startDate: '',
          endDate: ''
        })
      }

      render(){
            console.log(this)

          return (
              <div>
                  <form className="budget-form" onSubmit={this.handleSubmit}> 
                      <label>Budgeted Amount:</label>
                      <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange}/>
                      <label>Currency:</label>
                      <input type="text" name="currency" value={this.state.currency} onChange={this.handleChange}/>
                      <label>Notes:</label>
                      <input type="text" name="notes" value={this.state.notes} onChange={this.handleChange}/>
                      <label>Start date:</label>
                      <input type="text" name="startDate" value={this.state.startDate} onChange={this.handleChange}/>
                      <label>End date:</label>
                      <input type="text" name="endDate" value={this.state.endDate} onChange={this.handleChange}/>
                      <Button variant="contained" color="primary" type="submit">Submit</Button>
                  </form>
            </div>  
          )
      }
}

export default connect(null, {addBudget})(BudgetInput)

