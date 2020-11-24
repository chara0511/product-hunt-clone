import { ENABLE_MODAL, DISABLE_MODAL, ENABLE_SEARCH_MODE, DISABLE_SEARCH_MODE } from '../../types';

export const SearchReducer = (state = {}, action) => {
  switch (action.type) {
    case ENABLE_SEARCH_MODE:
    case DISABLE_SEARCH_MODE:
      return { ...state, searchMode: action.payload };

    case ENABLE_MODAL:
    case DISABLE_MODAL:
      return { ...state, modal: action.payload };

    default:
      return state;
  }
};
