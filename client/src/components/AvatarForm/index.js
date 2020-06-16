import React, { Component } from 'react'
import { Form, Input, TextArea, Button} from 'semantic-ui-react'
// import API from '../../utils/API'


function SubmitButton (){
    return (
      <Button value='submit' placeholder='Save' content='Save'/>
    )
}

<Form action="/uploadfile" enctype="multipart/form-data" method="POST" id="avatarForm"> 
    <Form.Field
        control={input}
        label="Avatar Upload"
        name="myFile"
        type="file"
        value="Upload an avatar image"
    />
    <Form.Field
        control={SubmitButton}>
            Submit
    </Form.Field>
</Form>;