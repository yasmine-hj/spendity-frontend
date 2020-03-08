import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchCategories} from '../actions/fetchCategories'
import Categories from '../components/Categories'
import Category from '../components/Category'
import NavBar from '../components/NavBar'
import Logo from '../components/Logo'

class CategoriesContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchCategories()
    }

    render(){
        return (
            <div className="App">
                <Logo />
                <NavBar></NavBar>
                <h2>WELCOME TO SPENDITY!</h2>
                <p>Select a category & start budgeting!</p>
                <Categories categories={this.props.categories} />

                <Switch>
                    <Route path='/categories/:id' render={(routerProps) => <Category {...routerProps} categories={this.props.categories}/>}/>
                    <Route path='/categories' render={(routerProps) => <Category {...routerProps} categories={this.props.categories}/>}/>
                </Switch>
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