/* Reducer
* Receives action and currentState
* Returns new state
*/
function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + action.amount
  } else if (action.type === 'DECREMENT') {
    return state - action.amount
  }else {
    return state
  }
}

/* Store
* Maintains the state - stores application data
* Accepts actions from the view
** only store has access to reducer
** state is never mutated directly outside the store
*/
function createStore(reducer) {
  let state = 0

  const getState = () => (state)

  const dispatch = action => {
    // fire-and-forget
    state = reducer(state, action)
  }

  return {
    getState,
    dispatch,
  }
}


const store = createStore(reducer)

const incrementAction = {
  type: 'INCREMENT',
  amount: 3,
}

console.log(`Before dispatch: ${store.getState()}`)
// dispatch increment action - view should emit action
// dispatch sends actions to the store
store.dispatch(incrementAction)
// get Updated state
console.log('Updated State: ', store.getState())

store.dispatch(incrementAction)
console.log(`Updated State: ${store.getState()}`)

const decrementAction = {
  type: 'DECREMENT',
  amount: 4
}

console.log(`Before dispatch: ${store.getState()}`)
// dispatch decrement action
store.dispatch(decrementAction)

// log updated state
console.log(`Updated State: ${store.getState()}`)
