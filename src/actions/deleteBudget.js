export const deleteBudget = (budgetId, categoryId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/categories/${categoryId}/budgets/${budgetId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(category => dispatch({type: 'DELETE_BUDGET', payload: category}))
    }
  }