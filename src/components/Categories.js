import React from 'react'
import Category from './Category'

const Categories = (props) => {
    const categories = props.categories.map(category => <Category key={category.id} category={category} />)

    return (
        <div className="cat-menu">
            {categories}
        </div>
    )
}

export default Categories