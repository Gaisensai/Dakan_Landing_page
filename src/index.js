import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';
import { createTheme, CssBaseline } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontFamily: '"Public Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);


