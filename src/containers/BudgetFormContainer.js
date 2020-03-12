import React from 'react'
import {fetchCategories} from '../actions/fetchCategories'
import {connect} from 'react-redux'
import'../App.css'
import BudgetInput from '../components/BudgetInput'

class BudgetFormContainer extends React.Component {
componentDidMount(){
    this.props.fetchCategories()
    const categoryId=  this.props.match.params.categoryId
    console.log( (categoryId))
    this.setState({
        c : this.props.categories.find(c => {return c.id === parseInt(categoryId)})
    })
}

  render(){
    console.log(this)
      return(
          <div className="budget-form">
            {/* <h1> New budget: </h1> */}
             <BudgetInput categoryId={this.props.match.params.categoryId}
             category={this.props.categories.find(c => {return c.id === parseInt(this.props.match.params.categoryId)})}
             />
        </div>
    )
  }
}


const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps, {fetchCategories})(BudgetFormContainer)

