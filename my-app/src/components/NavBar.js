import React from "react";

function NavBar(){
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

function CustomLink({ href, children, ...props}){
  const path= window.location.pathname
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )

}

export default NavBar;