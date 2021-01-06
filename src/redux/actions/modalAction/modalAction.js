// saga
export const SET_MENU_MODAL_SAGA = 'SET_MENU_MODAL_REDUCER';
export const GET_USERS_SAGA = 'GET_USERS_SAGA';
export const SET_PAN_STATUS_SAGA = 'SET_PAN_STATUS_SAGA';
export const SET_SUCCESS_SAGA = 'SET_SUCCESS_SAGA';

// reducer
export const SET_MENU_MODAL_STATE_REDUCER = 'SET_MENU_MODAL_STATE_REDUCER';
export const GET_USERS_REDUCER = 'GET_USERS_REDUCER';
export const SET_PAN_STATUS_REDUCER = 'SET_PAN_STATUS_REDUCER';
export const SET_SUCCESS_REDUCER = 'SET_SUCCESS_REDUCER';

export const setMenuModal = (value) => {
  return {type: SET_MENU_MODAL_SAGA, data: value};
};

export const getUsersSaga = () => {
  return {type: GET_USERS_SAGA};
};

export const setPanStatuSaga = (value) => {
  return {type: SET_PAN_STATUS_SAGA, data: value};
};

export const setSuccessSaga = (value) => {
  return {type: SET_SUCCESS_SAGA, data: value};
};
