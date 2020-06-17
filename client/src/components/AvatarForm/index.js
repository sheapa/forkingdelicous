import React, { Component } from 'react'
import { Form, Input, Button} from 'semantic-ui-react'
// import API from '../../utils/API'


function SubmitButton (){
    return (
      <Button value='submit' placeholder='Save' content='Save'/>
    )
}
class AvatarForm extends Component {
    render () {
        return (
            <Form action="/api/uploadfile" enctype="multipart/form-data" method="POST" id="avatarForm"> 
                <Form.Field
                    control={Input}
                    label="Avatar Upload"
                    name="avatar"
                    type="file"
                />
                <Form.Field
                    control={SubmitButton}>
                        Submit
                </Form.Field>
            </Form>
        )    
    }
}

export default AvatarForm;