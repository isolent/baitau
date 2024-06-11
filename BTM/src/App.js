import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

export default function MyApp() {
  return (
    <div id="app">
    <Router>
      <Header />
    <Routes>
          <Route path="/" element={<Home />} />
    </Routes>
    </Router>

  </div>
  )
}

