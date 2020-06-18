import React from 'react';
import { Form, Input, Button, Segment, Grid, Header } from 'semantic-ui-react';

/*   

    this is as is from the documentation. 
    you need to add handlers e.g. for submit

*/
const FormBasic = () => (
  <Grid
    textAlign='center'
    style={{ backgroundColor: 'lightblue', height: '100vh' }}
    verticalAlign='middle'
  >
    <Grid.Column style={{ maxWidth: '450px' }}>
      <Header as='h2'>It's Forking Delicious</Header>
      <Header as='h3'>Sign Up Now</Header>
      <Form>
        <Segment stacked>
          <Form.Field id='form-input-name' control={Input} label='Your Name'>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
            error={{
              content: 'Please enter a valid email address',
              pointing: 'below',
            }}
          />
          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Confirm'
          />
          <Form.Field style={{ backgroundColor: 'lightpink' }}>
            <input placeholder='Password' />
          </Form.Field>
          <Form.Field style={{ backgroundColor: 'lightpink' }}>
            <input placeholder='Confirm Password' />
          </Form.Field>
          <Button fluid type='submit' style={{ backgroundColor: 'lightgreen' }}>
            Join Now
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default FormBasic;
