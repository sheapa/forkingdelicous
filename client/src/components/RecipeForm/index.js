import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import API from '../../utils/API';

function SubmitButton() {
  return <Button value='submit' placeholder='Save' content='Save' />;
}

class RecipeForm extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getRecipes();
  };

  handleRecipeCreate = (event) => {
    const recipe = event.target.value;
    document.getElementById('IngredientForm').submit();

    console.log(recipe);

    API.saveRecipe({
      title: recipe.title,
      description: recipe.description,
      instruction: recipe.instruction,
      ingredients: recipe.ingredients.id,
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
      author: recipe.author,
    });
    // .then(() => this.getRecipes(
    //     console.log("recipe created")
    // )
    // );
  };

  render() {
    return (
      <Form
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
          width={12}
        />
        <Form.Field
          control={TextArea}
          label='Description'
          name='description'
          placeholder='Dish it out...'
          width={12}
        />
        <Form.Field
          control={TextArea}
          label='Instructions'
          name='instruction'
          placeholder='Tell us what to do....'
          width={12}
        />
        <Form.Field
          control={Input}
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

export default RecipeForm;
