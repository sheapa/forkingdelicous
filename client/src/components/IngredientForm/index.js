import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import API from '../../utils/API';

function SubmitButton() {
  return <Button value='submit' placeholder='Save' content='Save' />;
}

class IngredientForm extends Component {
  handleIngredientCreate = (event) => {
    event.preventDefault();
    const ingredient = event.target.value;

    console.log(`ingredient form submit ${ingredient.name}`);

    API.saveIngredient({
      name: ingredient.name,
      unit: ingredient.unit,
      quantity: ingredient.quantity,
    }).then(() => {
      console.log('ingredient created');
    });
  };

  render() {
    return (
      <Form
        action='/api/ingredients'
        method='POST'
        id='IngredientForm'
        onSubmit={this.handleIngredientCreate}
        style={{ fontSize: '1.5em' }}
      >
        <Form.Field
          control={Input}
          label='Ingredient'
          name='ingredients.name'
          placeholder='Ingredient'
          width={12}
        />
        <Form.Field
          control={Input}
          label='Measure'
          name='ingredients.unit'
          placeholder='How to Measure?'
          width={12}
        />
        <Form.Field
          control={Input}
          label='Amount'
          name='ingredients.quantity'
          placeholder='How Much?'
          width={12}
        />
        <Form.Field control={SubmitButton}>Submit</Form.Field>
      </Form>
    );
  }
}

export default IngredientForm;
