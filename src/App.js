import './App.css';
import AppHeader from './appComponents/AppHeader';
import PageRouter from './PageRouter';
import AppFooter from './appComponents/AppFooter';
import { useEffect } from 'react';
import { Controller, useStore } from './appStore';


const InitLoader = () => (<div className="d-center fs" style={{color: '#f3d9c3'}}>
  <div style={{margin: "10px"}}>
    <img src="https://i.imgur.com/HQ4lLtk.png" alt="Sadhan Sangha Ashram Logo" width="300px" height="300px" />
    <h1>Sadhan Sangha Ashram</h1>
    <div className="h-center" style={{marginTop: '5px'}}>
      <div className="loader"></div>
    </div>
  </div>
</div>)

const App = () => {
  const [loaded] = useStore(s => [s.loaded]);
  useEffect(() => {
    Controller.init();
  }, [])
  if(!loaded) return <InitLoader />;
  return (
    <div>
      <AppHeader />
      <PageRouter />
      <AppFooter />
    </div>
  );
}

export default App;
