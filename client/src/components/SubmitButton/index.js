import React from 'react';
import { Button } from 'semantic-ui-react';
import 'style.css';

function SubmitButton() {
  return (
    <div className='rightAlign'>
      <Button value='submit' placeholder='Save' content='Save' />
    </div>
  );
}

export default SubmitButton;
