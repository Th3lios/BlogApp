// saga
export const SET_MENU_MODAL = 'SET_MENU_MODAL';
export const GET_USERS_SAGA = 'GET_USERS_SAGA';

// reducer
export const SET_MENU_MODAL_STATE = 'SET_MENU_MODAL_STATE';
export const GET_USERS_REDUCER = 'GET_USERS_REDUCER';

export const setMenuModal = (value) => {
  return {type: SET_MENU_MODAL, data: value};
};

export const getUsersSaga = () => {
  return {type: GET_USERS_SAGA};
};
