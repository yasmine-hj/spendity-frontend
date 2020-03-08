import React from 'react'
import {Route, Link} from 'react-router-dom'
import Category from './Category'

const Categories = (props) => {

    const categories = props.categories.map(category => <Category key={category.id} category={category} />)

    return (
        <div>
            <h3>Categories:</h3>
            {categories}
        </div>
    )

}

export default Categories