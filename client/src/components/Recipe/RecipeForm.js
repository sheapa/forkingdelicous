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
            label='Title'
            placeholder='Title'
            width={12}
          />
           <Form.Field
          control={TextArea}
          label='Description'
          placeholder='Dish it out...'
          width={12}
        />
         <Form.Field
          control={TextArea}
          label='Instructions'
          placeholder='Tell us what to do....'
          width={12}
        />
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
          <Form.Field
            control={InputField}
            label='Tips'
            placeholder='Tips'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Categories'
            placeholder='Categories'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Feedback'
            placeholder='Feedback'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Active Time'
            placeholder='Active Time'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Inactive Time'
            placeholder='Inactive Time'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Addons'
            placeholder='Addons'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Forked From'
            placeholder='Forked From'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Images'
            placeholder='Images'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Date Published'
            placeholder='Date Published'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Likes'
            placeholder='Likes'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Saves'
            placeholder='Saves'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Forks'
            placeholder='Forks'
            width={12}
          />
          <Form.Field
            control={InputField}
            label='Author'
            placeholder='Author'
            width={12}
          />
        <Form.Group inline>
          <label>Yeild</label>
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
          <Form.Field
            control={Radio}
            label='Four'
            value='4'
            checked={value === '4'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field control={SubmitButton}>Submit</Form.Field>
      </Form>
    )
  }
}

export default RecipeForm;