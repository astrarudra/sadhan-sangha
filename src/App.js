import './App.css';
import AppHeader from './appComponents/AppHeader';
import PageRouter from './PageRouter';
import AppFooter from './appComponents/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <PageRouter />
      <AppFooter />
    </div>
  );
}

export default App;
