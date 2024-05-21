import './App.css';
import AppHeader from './appComponents/AppHeader';
import PageRouter from './PageRouter';
import AppFooter from './appComponents/AppFooter';
import { useEffect } from 'react';
import { Controller } from './appStore';
import { Box } from '@mui/material';

const App = () => {
  useEffect(() => {
    Controller.init();
  }, [])

  return (
    <div className="App">
      <AppHeader />
      <PageRouter />
      <AppFooter />
    </div>
  );
}

export default App;
