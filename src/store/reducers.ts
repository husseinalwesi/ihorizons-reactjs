// src/store/reducers.ts
import { UPDATE_DATA_LIST } from './actions';

const initialState = {
  list: []
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_DATA_LIST:
      return {
        ...state,
        list: action.payload.list
      }
    default:
      return state;
  }
};

export default rootReducer;
