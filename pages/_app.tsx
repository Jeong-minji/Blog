import React from "react";
import Footer from "../components/Common/Footer/Footer";
import Navigation from "../components/Common/Navigation/Navigation";

import { GlobalStyle } from "../styles/GlobalStyle";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
