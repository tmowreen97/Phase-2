import React, { useState } from "react";
import { Switch, Route, useHistory} from 'react-router-dom';
import NavBar from "./NavBar";
import About from "./About";
import MyRecipes from "./MyRecipes";
import AddRecipe from "./AddRecipe";
import Home from "./Home";

function App() {
  const [myRecipes, setRecipes] = useState([])
  const history = useHistory()

  function handleAddRecipe(newRecipe){
    myRecipes && setRecipes([...myRecipes,newRecipe])
    alert("You've added a new recipe!")
    history.push("/myRecipes")
  }

  return (
    <div className="app" >
      <NavBar/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/myRecipes">
          <MyRecipes setRecipes={setRecipes} myRecipes={myRecipes} />
        </Route>
        <Route path="/addRecipe">
          <AddRecipe handleAddRecipe={handleAddRecipe}/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
