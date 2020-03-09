import React from 'react'


const Category = (props) => {
    console.log(props.category)

    let category = props.category
    return(
        <div className="cat-container">
            <div className="categories-menu">
                <div className="category-box">
                    <h2>{category.name}</h2>
                    <img className="icon" src = {require(`${category.image}`)}/>
                </div> 
            </div>
        </div>
    )
}

export default Category
