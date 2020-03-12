import React from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../actions/fetchCategories'
import Categories from '../components/Categories'


import'../App.css'

class CategoriesContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchCategories()
    }

    render(){
        console.log(this)
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
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)