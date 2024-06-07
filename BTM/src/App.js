import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';

export default function MyApp() {
  return (
    <div id="app">
    <Router>
      <Header />
    </Router>
  </div>
  )
}

