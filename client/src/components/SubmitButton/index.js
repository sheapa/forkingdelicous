import React from 'react';
import { Button } from 'semantic-ui-react';
import 'style.css';

function SubmitButton() {
  return (
    <Container className='rightAlign'>
      <Button
        value='submit'
        placeholder='Save'
        content='Save'
        style={{ marginLeft: '0.5em' }}
      />
    </Container>
  );
}

export default SubmitButton;
