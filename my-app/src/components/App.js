import React from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import About from "./About";
import MyRecipes from "./MyRecipes";
import AddRecipe from "./AddRecipe";
import Home from "./Home";

function App() {
  return (
    <div className="app" >
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
