import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import { Reset } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

ReactDOM.render(
<ThemeProvider theme={theme}>
<Reset />
<App />
</ThemeProvider>, document.getElementById('root'));

