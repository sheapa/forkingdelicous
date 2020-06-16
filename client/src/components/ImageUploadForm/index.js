import React, { Component } from 'react'
import { Form, Input, TextArea, Button} from 'semantic-ui-react'
// import API from '../../utils/API'


function SubmitButton (){
    return (
      <Button value='submit' placeholder='Save' content='Save'/>
    )
}

<Form action="/uploadRecipeImages" enctype="multipart/form-data" method="POST" id="recipeImagesForm"> 
    <Form.Field
        control={input}
        label="Image Upload"
        name="myFiles"
        type="file"
        multiple
        value="Upload recipe images"
    />
    <Form.Field
        control={SubmitButton}>
            Submit
    </Form.Field>
</Form>;