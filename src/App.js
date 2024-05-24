import './App.css';
import AppHeader from './appComponents/AppHeader';
import PageRouter from './PageRouter';
import AppFooter from './appComponents/AppFooter';
import { useEffect } from 'react';
import { Controller, useStore } from './appStore';
import { InitLoader } from './components/UIElements';
import { siteTitle } from './constants';

const App = () => {
  const [loaded] = useStore(s => [s.loaded]);
  useEffect(() => {
    Controller.init();
  }, [])
  if(!loaded) return <InitLoader text={siteTitle}/>;
  return (
    <div>
      <AppHeader />
      <PageRouter />
      <AppFooter />
    </div>
  );
}

export default App;
