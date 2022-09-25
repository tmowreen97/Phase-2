import React from "react";
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/myRecipes">
          <MyRecipes/>
        </Route>
        <Route path="/addRecipe">
          <AddRecipe/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
