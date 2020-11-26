import * as actionTypes from '../../actions/modalAction/modalAction';

const initialState = {
  action: false,
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MENU_MODAL_STATE:
      return {
        ...state,
        action: action.data,
      };
    default:
      return state;
  }
};
