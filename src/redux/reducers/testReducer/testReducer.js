import * as actionTypes from '../../actions/testAction/testAction';

const initialState = {
  value: false,
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST_ACTION:
      return {
        ...state,
        value: action.data,
      };
    default:
      return state;
  }
};
