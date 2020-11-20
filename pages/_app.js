import { useReducer } from "react";
import FirebaseContext from "../context/firebase/FirebaseContext";
import { SearchContext } from "../context/search/searchContext";
import { SearchReducer } from "../context/search/searchReducer";
import firebase from "../firebase";
import useAuth from "../hooks/useAuth";
import { GlobalStyle } from "../styles";
import {
  ENABLE_MODAL,
  DISABLE_MODAL,
  ENABLE_SEARCH_MODE,
  DISABLE_SEARCH_MODE,
} from "../types";

const MyApp = ({ Component, pageProps }) => {
  const initialState = { productos: [], searchMode: null, modal: null };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const user = useAuth();

  const enableSearchMode = () => {
    dispatch({ type: ENABLE_SEARCH_MODE, payload: true });
  };

  const disableSearchMode = () => {
    dispatch({ type: DISABLE_SEARCH_MODE, payload: false });
  };

  const enableModal = () => {
    dispatch({ type: ENABLE_MODAL, payload: true });
  };

  const disableModal = () => {
    dispatch({ type: DISABLE_MODAL, payload: false });
  };

  return (
    <>
      <GlobalStyle />

      <FirebaseContext.Provider value={{ firebase, user }}>
        <SearchContext.Provider
          value={{
            searchMode: state.searchMode,
            modal: state.modal,
            enableModal,
            disableModal,
            enableSearchMode,
            disableSearchMode,
          }}
        >
          <Component {...pageProps} />
        </SearchContext.Provider>
      </FirebaseContext.Provider>
    </>
  );
};

export default MyApp;
