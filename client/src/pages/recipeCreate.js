import React, { Component } from "react";
import RecipeForm from '../components/RecipeForm';
// import API from '../utils/API'
import IngredientForm from "../components/IngredientForm"

class RecipeCreate extends Component {
state = {
recipe: [],
q: "",
message: "Create a recipe"
}

render (){
return (
<div>
<IngredientForm
 q={this.state.q}
/>
<RecipeForm
//  handleRecipeCreate={this.handleRecipeCreate}
//  handleIngredientCreate={this.handleIngredientCreate}
//  handleFormSubmit={this.handleFormSubmit}
 q={this.state.q}
/>
</div>
)
} 
}

export default RecipeCreate;
