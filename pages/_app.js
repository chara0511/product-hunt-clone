import { GlobalStyle } from "../styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
