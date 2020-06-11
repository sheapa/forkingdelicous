import React, {Component} from 'react'
import { Input, Select } from 'semantic-ui-react'
import SubmitButton from '../SubmitButton/SubmitButton'

// const SubmitButton = () => (
//   <Button
//               attached='bottom'
//               content='Click'
//               onClick={this.handleClick}
//               onKeyPress={this.handleKeyPress}
//             />
  
//   )

  const unitOptions = [
    { key: 'imperial', text: 'Imperial', value: 'lb' },
    { key: 'metric', text: 'Metric', value: 'g' },
    { key: 'personalTase', text: 'Personal Taste', value: 'Personal Taste' },
  ]

class InputField extends Component {
render () {
  return (
    <Input type='text' placeholder='add relevent content' action>
      <input />
      <Select compact options={unitOptions} defaultValue='imperial'/>
      <SubmitButton>Save</SubmitButton>
      {/* can add in code to make this button function with an onClick event, but I think it ineeds to be converted into a class component */}
    </Input>
  )
}
}

export default InputField;