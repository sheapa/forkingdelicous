import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import API from '../../utils/API';

function SubmitButton() {
  return <Button value='submit' placeholder='Save' content='Save' />;
}

class IngredientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      unit: 0,
      quantity: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleIngredientCreate = this.handleIngredientCreate.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  handleIngredientCreate(event) {
    event.preventDefault();
    console.log(`this.state.name: ${this.state.name}`);
    API.saveIngredient({
      name: this.state.name,
      unit: this.state.unit,
      quantity: this.state.quantity,
    }).then(
      function (response) {
        response.data.name = this.state.name;
        this.props.addIngredient(response.data);
      }.bind(this)
    );
  }

  render() {
    return (
      // <form id="IngredientForm" onSubmit={this.handleIngredientCreate}>
      //   <input
      //     label="Ingredient name"
      //     name="name"
      //     placeholder="Ingredient"
      //     width={12}
      //     onChange={this.handleInputChange}
      //     value={this.state.name}
      //   />
      //   <input
      //     label="Ingredient unit"
      //     name="unit"
      //     placeholder="Ingredient"
      //     width={12}
      //     onChange={this.handleInputChange}
      //     value={this.state.unit}
      //   />
      //   <input
      //     label="Ingredient quantity"
      //     name="quantity"
      //     placeholder="Ingredient"
      //     width={12}
      //     onChange={this.handleInputChange}
      //     value={this.state.quantity}
      //   />
      //   <input type="submit" placeholder="Submit" />
      // </form>
      <div style={{ minWidth: '700px' }}>
        <Form
          action='/api/ingredients'
          method='POST'
          id='IngredientForm'
          onSubmit={this.handleIngredientCreate}
        >
          <Form.Field
            control={Input}
            label='Ingredient name'
            name='name'
            placeholder='Ingredient'
            width={12}
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <Form.Field
            control={Input}
            label='Ingredient unit'
            name='unit'
            placeholder='Ingredient'
            width={12}
            onChange={this.handleInputChange}
            value={this.state.unit}
          />
          <Form.Field
            control={Input}
            label='Ingredient quantity'
            name='quantity'
            placeholder='Ingredient'
            width={12}
            onChange={this.handleInputChange}
            value={this.state.quantity}
          />
          <Form.Field control={SubmitButton}>Submit</Form.Field>
        </Form>
      </div>
    );
  }
}

export default IngredientForm;
