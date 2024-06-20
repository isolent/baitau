import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MiningStages from './components/MiningStages';
import About from './components/About';
import Infrastructure from "./components/Infrastructure";
import Advantages from "./components/Advantages";
import Geography from "./components/Geography";
import Partners from "./components/Partners";
import News from "./components/News";
import Vacancies from "./components/Vacancies";

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
      <Geography />
      <Infrastructure/>
      <Advantages />
      <Partners />
      <News />
      <Vacancies />


    </Router>

  </div>
  )
}

