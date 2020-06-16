import React, { Component } from 'react'
import { Form, Input, Button} from 'semantic-ui-react'
// import API from '../../utils/API'


function ImageSubmit (){
    
};

class ImageUploadForm extends Component {
    render () {
        return (
            <Form action="/uploadRecipeImage" enctype="multipart/form-data" method="POST" id="recipeImageForm"> 
                <Form.Field
                    control={Input}
                    label="Image Upload"
                    name="recipeImage"
                    type="file"
                    value="Upload recipe images"
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

