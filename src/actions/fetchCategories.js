export function fetchCategories() {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/categories')
      .then(resp => resp.json())
      .then(accounts => dispatch({
        type: 'FETCH_CATEGORIES',
        categories: json
      }))
    }
  }