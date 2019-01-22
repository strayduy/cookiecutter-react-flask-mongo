import { GET_ASYNC_DATA,
         GET_ASYNC_DATA_SUCCESS } from '../actions/actionTypes';

const initialState = {
  exampleState: {
    hasLoadedMessage: false,
    message: ''
  }
};

export default function exampleState(state = initialState.exampleState, action) {
    switch (action.type) {
        case GET_ASYNC_DATA: {
            const newState = Object.assign({}, state);
            newState.hasLoadedMessage = false;
            return newState;
        }
        case GET_ASYNC_DATA_SUCCESS: {
            const newState = Object.assign({}, state);
            newState.message = action.message;
            newState.hasLoadedMessage = true;
            return newState;
        }
        default:
            return state;
    }
}
