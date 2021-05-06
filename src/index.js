// підключення бібліотек
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from '@material-ui/core';

import App from './App';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    {/* підключення "стору" з редакс*/}
    <Provider store={store}>
      {/* підключення маршрутизації */}
      <Router>
        {/* підключення головного компоненту і темізація компонентів*/}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
