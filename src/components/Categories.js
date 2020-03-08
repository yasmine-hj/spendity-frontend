import React from 'react'
import {Route, Link} from 'react-router-dom'
import Category from './Category'

const Categories = (props) => {

    return (
        <div>
            {props.categories.map(category => 
                <button key={category.id}>
                    <Link to={`/categories/${category.id}`}>{category.name}{category.image}</link>
                </button>)}
        </div>
    )

}

export default Categories