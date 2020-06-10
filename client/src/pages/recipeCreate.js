import React from 'react'
import InputField from '../components/InputField/InputField'
import { Card, Icon, Image } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 likes
  </a>
)

const RecipeCard = () => (
  <Card>
    <Card.Content>
    <Image src='../../assets/images/orcishLibrarian.jpg' wrapped ui={false} />
    <Card.Header>
        <InputField placeholder= 'Book Sandwhich'>
        </InputField>
        </Card.Header>
    <Card.Meta>'Recipe'</Card.Meta>
    <Card.Description>'A satisfying snack for your body and mind.'</Card.Description>
    <Card.Content extra={extra}></Card.Content> 
    </Card.Content>
  </Card>
)

export default RecipeCard

// function Form({ q, handleInputChange, handleFormSubmit }) {
//   return (
//     <form>
//       <div className="form-group">
//         <label htmlFor="Query">
//           <strong>Title</strong>
//         </label>
//         <input
//           className="form-control"
//           id="Title"
//           type="text"
//           value={q}
//           placeholder="Ready Player One"
//           name="q"
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="pull-right">
//         <button
//           onClick={handleFormSubmit}
//           type="submit"
//           className="btn btn-lg btn-danger float-right"
//         >
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Form;