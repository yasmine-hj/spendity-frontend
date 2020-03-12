import React from 'react'
import Budgets from '../components/Budgets'
import {fetchCategories} from '../actions/fetchCategories'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import'../App.css'
import img from '../components/img/newbudget.png'

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
        const categoryId = this.props.match.params.categoryId

        return (
            <div>
                <Budgets categoryId={this.props.match.params.categoryId}
                category={this.props.categories.find(c => {return c.id === parseInt(this.props.match.params.categoryId)})}
                />
                <img className="icon" src={img} alt="img"/>
                <Link to={`/categories/${categoryId}/budgets/new`} className='new-budget-link' style={{paddingRight: '50px', color: 'black'}}>New Budget</Link>
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

export default connect(mapStateToProps, {fetchCategories})(BudgetsContainer)
