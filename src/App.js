import Header from './components/Header';
import './App.css';
import Gallery from './components/Gallery';
import configJson from './assets/config.json'

function App() {
  console.log("configJson", configJson)
  return (
    <div className="App">
      <Header />
      <Gallery gallery={configJson.gallery}/>
    </div>
  );
}

export default App;
