import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import API from '../../utils/API';
// import { withRouter } from "react-router-dom";

function SubmitButton() {
  return <Button value='submit' placeholder='Save' content='Save' />;
}

class RecipeForm extends Component {
  constructor(props) {
    super(props);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // this.getRecipes();
  };

  handleRecipeCreate = (event) => {
    event.preventDefault();
    // const recipe = event.target.value
    // document.getElementById("IngredientForm").submit();
    const recipe = this.props.recipe;

    API.saveRecipe({
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
      .then((recipe) => {
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
        });
        // res.json(response)
        // console.log("this was executed")
        // this.props.history.push(`/recipeDisplay/${response.data.config.data.title}`);
      })
      .then((response) => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form
        action='/api/recipeCreate'
        method='POST'
        onSubmit={this.handleRecipeCreate}
      >
        <Form.Input
          label='Title'
          placeholder='Title'
          name='title'
          type='text'
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={TextArea}
          label='Description'
          name='description'
          placeholder='Dish it out...'
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={TextArea}
          label='Instructions'
          name='instruction'
          placeholder='Tell us what to do....'
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={Input}
          label='Active Time'
          placeholder='Active Time'
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={Input}
          label='Inactive Time'
          placeholder='Inactive Time'
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={Input}
          label='Addons'
          placeholder='Addons'
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={Input}
          label='Tips'
          placeholder='Tips'
          width={12}
          onChange={this.props.handleRecipeInputChange}
        />
        <Form.Field
          control={Input}
          label='Categories'
          placeholder='Categories'
          width={12}
          onChange={this.props.handleRecipeInputChange}
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

// export default withRouter(RecipeForm);
export default RecipeForm;
