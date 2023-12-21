import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/";
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.getElementById("root"),
);
