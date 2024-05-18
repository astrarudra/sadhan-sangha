import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useStore } from './appStore';
import Home from './pages/Home';
import Ashram from './pages/Ashram';
import Satsang from './pages/Satsang';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

const componentMap = {
  Home,
  Ashram,
  Satsang,
  Gallery,
  Contact,
  Privacy
};

const App = () => {
  const [ pages ] = useStore((s) => [s.pages]);

  return (
    <div className="page">
      <Switch>
        {Object.keys(pages).map((key) => {
          const page = pages[key]
          console.log(page)
          return <Route key={page.path} path={page.path} component={componentMap[page.name]} />
        })}
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;