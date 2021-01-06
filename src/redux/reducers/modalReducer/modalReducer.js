import * as actionTypes from '../../actions/modalAction/modalAction';

const initialState = {
  action: false,
  user: undefined,
  panStatus: true,
  success: false,
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MENU_MODAL_STATE_REDUCER:
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
    case actionTypes.SET_SUCCESS_REDUCER:
      return {
        ...state,
        success: action.data,
      };
    default:
      return state;
  }
};
