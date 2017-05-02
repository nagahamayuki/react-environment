import React from 'react'
import ReactDOM from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

let store = createStore(todoApp)

const todoApp = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return{
        id: action.id
      }
    default:

  }
}

class App extends React.Component{
  render(){
    return(
      <div>hello</div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)
