<<<<<<< HEAD
// import React, {Component} from 'react';
// import { Menu } from 'semantic-ui-react'


// export default class MenuExampleBasic extends Component {
//     state = {}
  
//     handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
//     render() {
//       const { activeItem } = this.state
  
//       return (
//         <Menu>
//           <Menu.Item
//             name='editorials'
//             active={activeItem === 'editorials'}
//             onClick={this.handleItemClick}
//           >
//             Editorials
//           </Menu.Item>
  
//           <Menu.Item
//             name='reviews'
//             active={activeItem === 'reviews'}
//             onClick={this.handleItemClick}
//           >
//             Reviews
//           </Menu.Item>
  
//           <Menu.Item
//             name='upcomingEvents'
//             active={activeItem === 'upcomingEvents'}
//             onClick={this.handleItemClick}
//           >
//             Upcoming Events
//           </Menu.Item>
//         </Menu>
//       )
//     }
//   }
//     // return (
//     //     <Navbar bg="light" expand="lg">
//     //     <Navbar.Brand href="#home">Forkingdelicious</Navbar.Brand>
//     //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     //     <Navbar.Collapse id="basic-navbar-nav">
//     //       <Nav className="mr-auto">
//     //         <Nav.Link href="#home">Home</Nav.Link>
//     //         <Nav.Link href="#link">Link</Nav.Link>
//     //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//     //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//     //           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//     //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//     //           <NavDropdown.Divider />
//     //           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//     //         </NavDropdown>
//     //       </Nav>
//     //       <Form inline>
//     //         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//     //         <Button variant="outline-success">Search</Button>
//     //       </Form>
//     //     </Navbar.Collapse>
//     //   </Navbar>
//     // )
// }

// export default NavigationBar;
=======
import React from 'react';
import { Button, Form, Grid, Image, Header, Segment } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { Link } from 'react-router-dom';
import { ConfigContext } from '../App';

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </div>
    );
  }
}
>>>>>>> c363848c12f5228878acb20fe8762e1467f5b34d
