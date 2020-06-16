import React, { Component } from 'react'
import { Form, Input, Button} from 'semantic-ui-react'
import SubmitButton from "../SubmitButton/index.js"



// function ImageSubmit (){

// };

class ImageUploadForm extends Component {
    render () {
        return (
            <Form action="/api/uploadRecipeImage" enctype="multipart/form-data" method="POST" id="recipeImageForm"> 
                <Form.Field
                    control={Input}
                    label="Image Upload"
                    name="recipeImage"
                    type="file"
                />
                <Form.Field
                    control={SubmitButton}
                    name="ImageSubmit"
                    id="ImageSubmit">
                        Submit
                </Form.Field>
            </Form>
        )    
    }
}

export default ImageUploadForm;

