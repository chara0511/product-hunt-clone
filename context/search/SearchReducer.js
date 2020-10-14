import { ENABLE_MODAL, DISABLE_MODAL } from "../../types";

export const SearchReducer = (state = {}, action) => {
  switch (action.type) {
    case ENABLE_MODAL:
    case DISABLE_MODAL:
      return { ...state, modal: action.payload };

    default:
      return state;
  }
};
