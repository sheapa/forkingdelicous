import React, { Component } from 'react';
import RecipeForm from '../components/RecipeForm';
import { Grid, Image } from 'semantic-ui-react';
import MyImage from '../../src/assets/images/forkNpasta.jpg';
// import API from '../utils/API'
import IngredientForm from '../components/IngredientForm';

class RecipeCreate extends Component {
  state = {
    recipe: [],
    q: '',
    message: 'Create a recipe',
  };

  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid columns={1}>
            <Image src={MyImage} wrapped ui={false} />
          </Grid>
          <Grid.Column>
            <div>
              <IngredientForm q={this.state.q} />
              <RecipeForm
                //  handleRecipeCreate={this.handleRecipeCreate}
                //  handleIngredientCreate={this.handleIngredientCreate}
                //  handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default RecipeCreate;
