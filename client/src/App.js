import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import About from './About/About';

import Restaurants  from './Restaurants/Restaurants';
import RestaurantDetails from './Restaurants/RestaurantDetails/RestaurantDetails';


function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path = "/" exact component={Restaurants} />
            <Route path = "/restaurant/:id" component={RestaurantDetails} />
            <Route path = "/about" component={About} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
