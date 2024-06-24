import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TigerhallApolloProvider from './components/TigerhallApolloProvider';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

import './fonts/PPNeueMontreal-Bold.otf';
import './fonts/PPNeueMontreal-Book.otf';
import './fonts/PPNeueMontreal-Italic.otf';
import './fonts/PPNeueMontreal-Medium.otf';
import './fonts/PPNeueMontreal-SemiBolditalic.otf';
import './fonts/PPNeueMontreal-Thin.otf';
import './fonts/PPFormula-Extrabold.otf';
import './fonts/PPFormula-Light.otf';
import './fonts/PPFormula-Medium.otf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={'dark'} />
      <TigerhallApolloProvider>
        <App />
      </TigerhallApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
