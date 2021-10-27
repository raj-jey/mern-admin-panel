// import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Import Components
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
// Import Pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Vehicle from './pages/Vehicle'



function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route path='/'>
            <Home />
          </Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
