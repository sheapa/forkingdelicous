import React, { Component } from 'react'
import InputField from '../InputField/InputField'
import SubmitButton from '../SubmitButton/SubmitButton'
import { Form, Radio, TextArea,} from 'semantic-ui-react'




class RecipeForm extends Component {
    state = {}
    
    render() {
                
    const { value } = this.state
    return (
      <Form>
          <Form.Field
            control={InputField}
            label='Ingredient'
            placeholder='Ingredient'
            width={12}
          />
        <Form.Field
            control={InputField}
            label='Ingredient'
            placeholder='Ingredient'
            width={12}
          />
        <Form.Group inline>
          <label>Servings</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Instructions'
          placeholder='Tell us what to do....'
          width={12}
        />
        <Form.Field control={SubmitButton}>Submit</Form.Field>
      </Form>
    )
  }
}

export default RecipeForm;