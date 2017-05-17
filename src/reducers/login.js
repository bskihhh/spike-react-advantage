/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {LOGIN} from '../actions/const';

const initialState = {};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {

    case `${LOGIN}_PENDING`:
    return {isLoading: true, hasError: false}

    case `${LOGIN}_FULFILLED`:
    return {isLoading: false, data: action.payload, hasError: false}

    case `${LOGIN}_REJECTED`:
    return {isLoading: false, error: action.payload, hasError: true}

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
