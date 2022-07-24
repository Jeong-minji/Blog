import React from "react";
import Navigation from "../components/Common/Navigation/Navigation";

import { GlobalStyle } from "../styles/GlobalStyle";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};

export default App;
