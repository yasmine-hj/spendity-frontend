import React from 'react'
import {Route, Link} from 'react-router-dom'
import Category from './Category'

const Categories = (props) => {
    // console.log(props.categories)
    const categories = props.categories.map(category => <Category key={category.id} category={category} />)

    return (
        <div>
            {categories}
        </div>
    )

}

export default Categories