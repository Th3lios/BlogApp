import * as actionTypes from '../../actions/modalAction/modalAction';

const initialState = {
  action: false,
  user: undefined,
  panStatus: true,
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MENU_MODAL_STATE:
      return {
        ...state,
        action: action.data,
      };
    case actionTypes.GET_USERS_REDUCER:
      return {
        ...state,
        user: action.data,
      };
    case actionTypes.SET_PAN_STATUS_REDUCER:
      return {
        ...state,
        panStatus: action.data,
      };
    default:
      return state;
  }
};
