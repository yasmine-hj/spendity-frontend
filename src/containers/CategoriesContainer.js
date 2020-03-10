import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchCategories} from '../actions/fetchCategories'
import Categories from '../components/Categories'
import Category from '../components/Category'
import'../App.css'

class CategoriesContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchCategories()
    }

    render(){
        return (
            <div className="App">
                <h1>WELCOME TO SPENDITY!</h1>
                <p>Select a category & start budgeting!</p>
                <Categories categories={this.props.categories} />

                <Switch>
                    <Route path={`/categories/{:categoryId}/budgets`} render={(routerProps) => <Category {...routerProps} category={this.props.category.budgets}/>}/>
                </Switch>
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