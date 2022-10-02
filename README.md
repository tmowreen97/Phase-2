# Simply Delicious
## Phase 2 Project

For my Phase 2 Project, I've created a page that allows the user to store recipes, and add new ones to their collection.  
We have 4 different links accessible through *client-side routing* using the Navigation Bar: Home, About, My Recipes and Add Recipe. 
The *Home* page is simple, it just has the title of the page, ***Simply Delicious***. 
The *About* page has a small description about what the user should expect out of this web page. 
The *My Recipes* page is where all the recipes are saved. This is where my API data is displayed, each recipe has a title, an image, a list of ingredients and steps. 
The *Add Recipe* page allows the user to add a new recipe and append it onto the existing recipe list on the *My Recipes* page. The user can input a title, paste an image URL, add a list of ingredients, and a list of steps. When adding ingredients, the user first fills out the quantity of each item, the unit of each item, and then the name of the item itself. The unit is chosen from a dropdown list. The units available to choose from are: 

* each
* oz(s)
* lb(s)
* cup(s)
* tbsp(s)
* tsp(s)

Clicking the *Add Ingredient* button adds that ingredient to the list *and* generates another ingredient for the user to add if they'd like to. Once the user is done listing their ingredients, they can move on to adding steps. The steps are numbered, and are added to the recipe when the user presses the *Add Step* button. Same as the *Add Ingredient* button, when the *Add Step* button is clicked the user is able to add another step if they'd like. Once all the information for the recipe is filled out, they can click the *Submit Recipe* button to submit it. They will get an alert on the screen stating they were successful, and will be guided to the *My Recipes* page so they can see their new creation at the bottom of the list. This is done through *programmatic navigation*. 

With this single-page application, the user is able to store as many delicious recipes their heart desires!
