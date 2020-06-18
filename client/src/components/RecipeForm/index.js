<<<<<<< HEAD
import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import API from '../../utils/API';

function SubmitButton() {
  return <Button value='submit' placeholder='Save' content='Save' />;
}

class RecipeForm extends Component {
=======
import React, { Component } from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import API from "../../utils/API";
// import { withRouter } from "react-router-dom";

function SubmitButton() {
  return <Button value="submit" placeholder="Save" content="Save" />;
}

class RecipeForm extends Component {
  constructor(props) {
    super(props);
  }

>>>>>>> 2ca8f7bf1c4275c0f525b306c36c229b67785047
  handleFormSubmit = (event) => {
    event.preventDefault();
    // this.getRecipes();
  };

  handleRecipeCreate = (event) => {
<<<<<<< HEAD
    const recipe = event.target.value;
    document.getElementById('IngredientForm').submit();

    console.log(recipe);
=======
    event.preventDefault();
    // const recipe = event.target.value
    // document.getElementById("IngredientForm").submit();
    const recipe = this.props.recipe;
>>>>>>> 2ca8f7bf1c4275c0f525b306c36c229b67785047

    API.saveRecipe({
      title: recipe.title,
      description: recipe.description,
      instruction: recipe.instruction,
<<<<<<< HEAD
      ingredients: recipe.ingredients.id,
=======
      ingredients: this.props.ingredients,
>>>>>>> 2ca8f7bf1c4275c0f525b306c36c229b67785047
      tips: recipe.tips,
      yeild: recipe.yeild,
      categories: recipe.categories,
      feedback: recipe.feedback,
      activeTime: recipe.activeTime,
      inActiveTime: recipe.inActiveTime,
<<<<<<< HEAD
      addons: recipe.addons,
      forkedFrom: recipe.forkedFrom,
=======
      // addons: recipe.addons,
      // forkedFrom: recipe.forkedFrom,
>>>>>>> 2ca8f7bf1c4275c0f525b306c36c229b67785047
      images: recipe.images,
      pubDate: recipe.pubDate,
      likes: recipe.likes,
      saves: recipe.saves,
      forks: recipe.forks,
<<<<<<< HEAD
      author: recipe.author,
    });
    // .then(() => this.getRecipes(
    //     console.log("recipe created")
    // )
    // );
=======
      // author: recipe.author,
    }).then((recipe) => {
API.findByRecipeId({
  title: recipe.title,
  description: recipe.description,
  instruction: recipe.instruction,
  ingredients: this.props.ingredients,
  tips: recipe.tips,
  yeild: recipe.yeild,
  categories: recipe.categories,
  feedback: recipe.feedback,
  activeTime: recipe.activeTime,
  inActiveTime: recipe.inActiveTime,
  // addons: recipe.addons,
  // forkedFrom: recipe.forkedFrom,
  images: recipe.images,
  pubDate: recipe.pubDate,
  likes: recipe.likes,
  saves: recipe.saves,
  forks: recipe.forks,
  // author: recipe.author,
})
      // res.json(response)
      // console.log("this was executed")
      // this.props.history.push(`/recipeDisplay/${response.data.config.data.title}`);
    }).then(response =>{
      console.log(response);
    }

    );
>>>>>>> 2ca8f7bf1c4275c0f525b306c36c229b67785047
  };

  render() {
    return (
      <Form
<<<<<<< HEAD
        style={{ fontSize: '1.5em' }}
        action='/api/recipeCreate'
        method='POST'
        onSubmit={this.handleRecipeCreate}
      >
        <Form.Input
          label='Title'
          placeholder='Recipe Name'
          name='title'
          type='text'
=======
        action="/api/recipeCreate"
        method="POST"
        onSubmit={this.handleRecipeCreate}
      >
        <Form.Input
          label="Title"
          placeholder="Title"
          name="title"
          type="text"
>>>>>>> 2ca8f7bf1c4275c0f525b306c36c229b67785047
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={TextArea}
<<<<<<< HEAD
          label='Description'
          name='description'
          placeholder='Dish it out...'
=======
          label="Description"
          name="description"
          placeholder="Dish it out..."
>>>>>>> 2ca8f7bf1c4275c0f525b306c36c229b67785047
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={TextArea}
<<<<<<< HEAD
          label='Instructions'
          name='instruction'
          placeholder='Tell us what to do....'
=======
          label="Instructions"
          name="instruction"
          placeholder="Tell us what to do...."
>>>>>>> 2ca8f7bf1c4275c0f525b306c36c229b67785047
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={Input}
<<<<<<< HEAD
          label='Active Time'
          placeholder='How Long Will I Have to Work?'
          width={12}
        />
        <Form.Field
          control={Input}
          label='Inactive Time'
          placeholder='How Long Will I Wait?'
          width={12}
        />
        <Form.Field
          control={Input}
          label='Add-ons'
          placeholder='Add-ons'
          width={12}
        />
        <Form.Field
          control={Input}
          label='Tips'
          placeholder='Tip Jar'
          width={12}
        />
        <Form.Field
          control={Input}
          label='Categories'
          placeholder='Categories'
          width={12}
=======
          label="Active Time"
          placeholder="Active Time"
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={Input}
          label="Inactive Time"
          placeholder="Inactive Time"
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={Input}
          label="Addons"
          placeholder="Addons"
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={Input}
          label="Tips"
          placeholder="Tips"
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={Input}
          label="Categories"
          placeholder="Categories"
          width={12}
          onChange={this.props.handleRecipeInputChange}
>>>>>>> 2ca8f7bf1c4275c0f525b306c36c229b67785047
        />
        {/* <Form.Field
            control={Input}
            label='Likes'
            name="likes"
            placeholder='Likes'
            width={12}
          /> */}
        {/*
          <Form.Field
            control={InputField}
            label='Images'
            placeholder='Images'
            width={12}
          /> */}
        <Form.Field control={SubmitButton}>Submit</Form.Field>
      </Form>
    );
  }
}

<<<<<<< HEAD
export default RecipeForm;
=======
// export default withRouter(RecipeForm);
export default RecipeForm;
>>>>>>> 2ca8f7bf1c4275c0f525b306c36c229b67785047
