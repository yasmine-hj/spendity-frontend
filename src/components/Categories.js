import React from 'react'
import Category from './Category'

class Categories extends React.Component{

    state = {
        sort: 'Name'
    }

    handleChange = (event) => {
        this.setState({
        sort: event.target.value
        })
    }

    render(){
        let categories =  this.props.categories.map(category => <Category key={category.id} category={category} />)
        
        if (this.state.sort === 'Name'){
            categories = categories.sort(function(a,b){
                var categoryA = a.props.category.name.toUpperCase();
                var categoryB = b.props.category.name.toUpperCase();
                if (categoryA < categoryB){
                    return -1;
                }
                if (categoryA > categoryB){
                    return 1
                }
                return 0
            })   
        }

        else if(this.state.sort === 'Budget'){   
            categories = categories.sort(function(a,b){
                var totalBudgetA = a.props.category.budgets.reduce(function(x, y){
                    return x + y.amount;}, 0);
                var totalBudgetB = b.props.category.budgets.reduce(function(x, y){
                    return x + y.amount;}, 0);
                return   totalBudgetB - totalBudgetA
            })
        }
         
        return (
            <div className="menu">
                <label>Sort by: </label>
                <select onChange={this.handleChange}>
                    <option>Name</option>
                    <option>Budget</option>
                </select>
                <br/>
                <br/>
                <div className="cat-menu">
                    {categories}
                </div>
            </div>
        )
    }
}

export default Categories