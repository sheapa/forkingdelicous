import React, { Component } from "react";
import RecipeForm from '../components/RecipeForm';
import API from '../utils/API'

class RecipeCreate extends Component {
state = {
recipe: [],
q: "",
message: "Create a recipe"
}

getRecipes = () => {
    API.findByRecipeId(this.state.q)
      .then(res =>
        this.setState({
            recipe: res.data
        })
      )
      .catch(() =>
        this.setState({
            recipe: [],
          message: "No New Recipes Found, Try a Different Query"
        })
      );
  };

handleFormSubmit = event => {
    event.preventDefault();
    this.getRecipes();
  };

handleRecipeCreate = (event) => {
    const recipe = event.target.value

console.log(recipe)

    API.saveRecipe({
        // id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        instruction: recipe.instruction,
        ingredients: {
            name: recipe.ingredients.name,
            quantity: 420,
            unit: "recipe.ingredients.unit"
        },
        tips: recipe.tips,
        yeild: recipe.yeild,
        categories: recipe.categories,
        feedback: recipe.feedback,
        activeTime: recipe.activeTime,
        inActiveTime: recipe.inActiveTime,
        addons: recipe.addons,
        forkedFrom: recipe.forkedFrom,
        images: recipe.images,
        pubDate: recipe.pubDate,
        likes: recipe.likes,
        saves: recipe.saves,
        forks: recipe.forks,
        author: recipe.author
    }).then(() => this.getRecipes(
        console.log("recipe created")
    )
    );
  };

render (){
return (
<RecipeForm
 handleRecipeCreate={this.handleRecipeCreate}
 handleFormSubmit={this.handleFormSubmit}
 q={this.state.q}
/>
)
}
} 

export default RecipeCreate;
