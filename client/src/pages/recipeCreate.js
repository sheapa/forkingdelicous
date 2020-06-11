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

handleBookSave = id => {
    const recipe = this.state.recipe.find(recipe => recipe.id === id);

    API.saveBook({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        instruction: recipe.instruction,
        ingredients: recipe.ingredients,
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
//  handleInputChange={this.handleInputChange}
 handleFormSubmit={this.handleFormSubmit}
 q={this.state.q}

/>
)
}
} 

export default RecipeCreate;
