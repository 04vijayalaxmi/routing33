
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
  
function App() {
 return(
  <div>
    <BrowserRouter>
    <Navbar />
    <Switch>      
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/about" exact component={About} />
    
    </Switch>


  </BrowserRouter>
  </div >
 )
}

export default App
