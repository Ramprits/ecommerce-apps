import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";
import theme from "./theme/theme";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  rootElement
);
