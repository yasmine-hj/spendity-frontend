import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchCategories} from '../actions/fetchCategories'
import Categories from '../components/Categories'
import Category from '../components/Category'
import Budgets from '../components/Budgets'
import CategoryBudgets from '../components/CategoryBudgets'

import BudgetsContainer from '../containers/BudgetsContainer'

import'../App.css'

class CategoriesContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchCategories()
    }

    render(){
        // console.log(this.props.categories)
        return (
            <div className="App">
                <h1>WELCOME TO SPENDITY!</h1>
                <p>Select a category & start budgeting!</p>
                <Categories categories={this.props.categories} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    // debugger
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)