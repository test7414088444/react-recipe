import React from 'react';
import './App.css';
import Food from './Components/Food.js'
import Header from './Components/Header.js'
import FoodResults from './Components/FoodResults.js'
import { foodReducer } from './FoodReducer.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import RecipeDetails from './Components/RecipeDetails.js'

function App() {

  var store = createStore(foodReducer);
  store.subscribe(() => console.log('store', store.getState()));
// console.log('store', store.dispatch)
  // store.dispatch({payload: [1,2,3,4,5], type: 'ALL'})
  return (
  <Provider store={store}>
  <div className="App">
    <Router>
        <Header />
      <Switch>
      <Route exact path='/'>
        <Food />
        <FoodResults />
      </Route>
      <Route path='/details'>
        <RecipeDetails />
      </Route>
      </Switch>
    </Router>
  </div>
  </Provider>
  );
}

export default App;
