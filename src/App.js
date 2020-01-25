import React from 'react';
import List from './components/list/getList';
import AddList from './components/list/addList';
import ArchieveList from './components/list/archieveList';
import EditList from './components/list/editList';
import AddCard from './components/card/addCard';
import EditCard from './components/card/editCard';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/list" exact component={List} />
          <Route path="/list/add" exact component={AddList} />
          <Route path="/list/:id/archieve" exact component={ArchieveList} />
          <Route path="/list/:id/edit" exact component={EditList} />
          <Route path="/list/:id/card" exact component={AddCard} />
          <Route path="/list/:id/card/edit" exact component={EditCard} />
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
