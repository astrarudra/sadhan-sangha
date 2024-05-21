import './App.css';
import AppHeader from './appComponents/AppHeader';
import PageRouter from './PageRouter';
import AppFooter from './appComponents/AppFooter';
import { useEffect } from 'react';
import { Controller, useStore } from './appStore';
import { Box } from '@mui/material';

const App = () => {
  const [loaded] = useStore(s => [s.loaded]);
  useEffect(() => {
    Controller.init();
  }, [])
  if(!loaded) return <Box>Loading...</Box>
  return (
    <div className="App">
      <AppHeader />
      <PageRouter />
      <AppFooter />
    </div>
  );
}

export default App;
