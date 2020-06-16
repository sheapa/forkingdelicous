import React from 'react'
// import SaveInput from '../components/InputField'
import { Card, Icon, Image, Container, Menu } from 'semantic-ui-react'
import MyImage from '../../Images/recipes/orcishLibrarian.jpg'

const RecipeCard = () => (
  <Menu small>
  <Container>
  <Card fluid>
    <Image src= {MyImage} wrapped ui={false}/>
    <Card.Header>
        </Card.Header>
    <Card.Meta as="div">'Recipe'</Card.Meta>
   <Card.Content>
     ingredients
     </Card.Content>
   <Card.Content>
     instructions
     </Card.Content>
   <Card.Content>
     tips
     </Card.Content>
   <Card.Content>
     yeild
     </Card.Content>
   <Card.Content>
     categories
     </Card.Content>
   <Card.Content>
     feedback
     </Card.Content>
   <Card.Content>
     activeTime
     </Card.Content>
   <Card.Content>
     inActiveTime
     </Card.Content>
   <Card.Content>
     addons
     </Card.Content>
   <Card.Content>
     forkedFrom
     </Card.Content>
   <Card.Content>
     pubDate
     </Card.Content>
   <Card.Content>
     saves
     </Card.Content>
   <Card.Content>
     forks
     </Card.Content>
   <Card.Content>
     author
     </Card.Content>
    <Card.Description>'A satisfying snack for your body and mind.'</Card.Description>
    <Card.Content extra>
    <a>
    <Icon name='user' />
    16 likes
  </a>
        </Card.Content> 
  </Card>
  </Container>
  </Menu>
)

export default RecipeCard;