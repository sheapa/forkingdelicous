import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
  
class SubmitButton extends Component {
    state = {}

    // handleClick = () => this.updateLog('Button received click with mouse')
    // handleKeyPress = (e) => {
    //     if (e.charCode === 32 || e.charCode === 13) {
    //         // Prevent the default action to stop scrolling when space is pressed
    //         e.preventDefault()
    //         this.updateLog('Button received click with keyboard')
    //     }
    // }
    
    // updateLog = (message) =>
    // this.setState((prevState) => ({ log: [message, ...prevState.log] }))
    
    render(){
        return(
                <Button
                            // attached='bottom'
                            // content='Click'
                            // onClick={this.handleClick}
                            // onKeyPress={this.handleKeyPress}
                          />
        )}
}

export default SubmitButton;