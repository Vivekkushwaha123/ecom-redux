import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';
import Productlisting from './containers/Productlisting';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Productlisting} />
          <Route path='/product/:productId' exact component={ProductDetail} />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
