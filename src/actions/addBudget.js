export const addBudget = (budget, categoryId) => {
    console.log('b')
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/categories/${categoryId}/budgets`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(budget)
      })
      .then(response => response.json())
      .then(category => {
        console.log('c')
          if (category.error) {
            alert(category.error)
          } else {
            dispatch({type: 'ADD_BUDGET', payload: category})
          }
        }
      )
    }
    console.log('d')
  }