import { SET_ADD, SET_PRODUCT_ITEM, SAVE_PRODUCT_ITEM } from "./actions";

export const setAdd = (dispatch) => (add) => {
  const action = {
    type: SET_ADD,
    payload: add,
  };
  dispatch(action);
}

export const setForm = (dispatch) => (productItem) => {
  const action = {
    type: SET_PRODUCT_ITEM,
    payload: productItem,
  };
  dispatch(action);
}

export const submitForm = (dispatch) => () => {
  const action = {
    type: SAVE_PRODUCT_ITEM,
  };
  dispatch(action);
}
