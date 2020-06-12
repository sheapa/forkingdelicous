import React from 'react'
import SaveInput from '../components/InputField'
import { Card, Icon, Image } from 'semantic-ui-react'
import MyImage from '../../src/assets/images/orcishLibrarian.jpg'

const RecipeCard = () => (
  <Card>
    <Image src= {MyImage} wrapped ui={false} />
    <Card.Content>
    <Card.Header>
        <SaveInput placeholder= 'Book Sandwhich'>
        </SaveInput>
        </Card.Header>
    <Card.Meta>'Recipe'</Card.Meta>
    <Card.Description>'A satisfying snack for your body and mind.'</Card.Description>
    <Card.Content extra>
    <a>
    <Icon name='user' />
    16 likes
  </a>
        </Card.Content> 
    </Card.Content>
  </Card>
)

export default RecipeCard