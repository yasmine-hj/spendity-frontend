import React from 'react'
import BudgetInput from '../components/BudgetInput'
import Budgets from '../components/Budgets'
import'../App.css'

class BudgetsContainer extends React.Component {

    render(){
        return (
            <div>
                <Budgets budgets={this.props.category && this.props.category.budgets}/>
            </div>
        )
    }
}

export default BudgetsContainer
