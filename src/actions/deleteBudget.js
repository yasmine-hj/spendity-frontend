export const deleteBudget = (budgetId, categoryId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/categories/${categoryId}/transactions/${budgetId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(account => dispatch({type: 'DELETE_BUDGET', category: json}))
    }
  }