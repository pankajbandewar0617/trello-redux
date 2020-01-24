import React from 'react';
import List from './components/list';
import AddList from './components/addList';
import AddCard from './components/addCard';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/list" exact component={List} />
          <Route path="/list/add" component={AddList} />
          <Route path="/list/card" component={AddCard} />
          {/* <Route path="/card/> */}
          {/* <Route /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1> Trello</h1>
      <Link to="/list">
        <button>Go to List</button>
      </Link>
    </div>
  )
}

export default App;
