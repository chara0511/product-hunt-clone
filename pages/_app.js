import { useReducer } from "react";
import { SearchContext } from "../context/search/searchContext";
import { SearchReducer } from "../context/search/searchReducer";
import { GlobalStyle } from "../styles";
import { ENABLE_MODAL, DISABLE_MODAL } from "../types";

const MyApp = ({ Component, pageProps }) => {
  const initialState = { modal: null };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const enableModal = () => {
    dispatch({ type: ENABLE_MODAL, payload: true });
  };

  const disableModal = () => {
    dispatch({ type: DISABLE_MODAL, payload: false });
  };

  return (
    <>
      <GlobalStyle />

      <SearchContext.Provider
        value={{ modal: state.modal, enableModal, disableModal }}
      >
        <Component {...pageProps} />
      </SearchContext.Provider>
    </>
  );
};

export default MyApp;
