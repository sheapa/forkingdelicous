import React, { Component } from 'react';
import RecipeForm from '../components/RecipeForm';
import { Grid, Image, Container } from 'semantic-ui-react';
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
      <Container>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column columns={2}></Grid.Column>
            <Grid.Column columns={2}>
              <Image src={MyImage} wrapped ui={false} />
            </Grid.Column>
            <Form>
              <Grid.Column columns={5}>
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
            </Form>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default RecipeCreate;
