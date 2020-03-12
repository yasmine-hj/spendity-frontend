import React from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../actions/fetchCategories'
import Categories from '../components/Categories'
import Button from '@material-ui/core/Button';


import'../App.css'

class CategoriesContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchCategories()
    }

    render(){
        console.log(this)
        return (
            <div className="App">
                <br></br>
                <Button variant="contained" color="secondary" >SELECT A CATEGORY TO START BUDGETING!</Button>
                <br></br>
                <br></br>
                <Categories categories={this.props.categories} />
                <br></br>

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