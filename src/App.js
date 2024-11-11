import logo from './logo.svg';
import './App.css';
import Category from './Category';
import Productdetails from './Productdetails';
import { BrowserRouter, Switch, Route };

function App() {
 return(
  <div>
    <Category />

    <Productdetails />
    </div>
 )
}

export default App;
