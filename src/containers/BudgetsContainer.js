import React from 'react'
import Budgets from '../components/Budgets'
import {fetchCategories} from '../actions/fetchCategories'
import {connect} from 'react-redux'


import'../App.css'

class BudgetsContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            c: {}
        }
    }
    componentDidMount(){
        this.props.fetchCategories()
        const categoryId=  this.props.match.params.categoryId
        console.log( (categoryId))
        this.setState({
            c : this.props.categories.find(c => {return c.id === parseInt(categoryId)})
        })
    }

    render(){
        
        //var c = this.props.categories.find(c => {return c.id === parseInt(categoryId)});
        console.log(this.state.c)
        

        return (
            <div>
                <Budgets categoryId={this.props.match.params.categoryId}
                budgets={this.props.categories.find(c => {return c.id === parseInt(this.props.match.params.categoryId)})}
                />
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

export default connect(mapStateToProps, {fetchCategories})(BudgetsContainer)
