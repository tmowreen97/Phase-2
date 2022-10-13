import React from "react";

export default function NavBar(){
  return (
    <nav className="nav">
      <ul>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/myRecipes">My Recipes</CustomLink>
        <CustomLink href="/addRecipe">Add Recipe</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ href, children}){
  const path= window.location.pathname
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href}>
        {children}
      </a>
    </li>
  )

}
