import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MiningStages from './components/MiningStages';
import About from './components/About';

export default function MyApp() {
  return (
    <div id="app">
    <Router>
      <Header />
      <Home />
      <div className="Mining stages">
        <header className="App-header">
        </header>
        <main>
          <MiningStages />
        </main>
      </div>
      <About />



    </Router>

  </div>
  )
}

