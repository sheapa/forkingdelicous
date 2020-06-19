// import React from 'react'
import React, { Component } from 'react';
import axios from 'axios';
// import { get } from 'axios';
import { Card, Icon, Image, Container, Menu } from 'semantic-ui-react';
import { withRouter } from "react-router";
import MyImage from '../../Images/recipes/orcishLibrarian.jpg';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
this.props = props
    this.state = {
      // recipe: [],
      recipe: {},
    };

    // this.setPage = this.setPage.bind(this);
  }
  // componentWillReceiveProps({ location = {} }) {
  //   //the below path could be wrong??? may also need or be able to add '/recipeDisplay' to build for both starting page scenarios
  //   if (location.pathname === '/recipeCreate' && location.pathname !== this.props.location.pathname) {
  //     this.getRecipe();
  //   }
  // }

  // getRecipe() {
  //   get('/api/recipe')
  //     .then(({ data }) => {
  //       // const { recipe } = this.state;
  //       this.setState({
  //         // recipe: data.recipe,
  //         recipe: data,
  //       });
  //     });
  // }

  // setPage(page) {
  //   return () => {
  //     this.setState({ page });
  //   };
  // }
  // componentDidMount() {
  //   this.getRecipe();
  // }

  componentDidMount() {
    // console.log(this.props.match && this.props.match.params.param);
    const { match: { params }, } = this.props;
    axios
      .get(`/api/recipeDisplay/${params.algoliaObjectId}`)
      .then(({ data: recipe }) => {
        console.log('recipe', recipe);
        this.setState({ recipe });
      });

    // console.log("this is:" + params)
  }

  render() {
    const { recipe } = this.state;
    console.log(recipe)
    return (
      <Menu>
        <Container>
          <Card fluid>
            <Image src={MyImage} wrapped ui={false} />
            <Card.Header title={recipe.title}/>
            {/* title={recipe.title}</Card.Header> */}
            <Card.Meta as='div'></Card.Meta>
            <Card.Content>{recipe.ingredients}</Card.Content>
            <Card.Content>{recipe.instructions}</Card.Content>
            <Card.Content>{recipe.tips}</Card.Content>
            <Card.Content>{recipe.yeild}</Card.Content>
            <Card.Content>{recipe.categories}</Card.Content>
            <Card.Content>{recipe.feedback}</Card.Content>
            <Card.Content>{recipe.activeTime}</Card.Content>
            <Card.Content>{recipe.inActiveTime}</Card.Content>
            <Card.Content>{recipe.addons}</Card.Content>
            <Card.Content>{recipe.forkedFrom}</Card.Content>
            <Card.Content>{recipe.pubDate}</Card.Content>
            <Card.Content>{recipe.saves}</Card.Content>
            <Card.Content>{recipe.forks}</Card.Content>
            <Card.Content>{recipe.author}</Card.Content>
            <Card.Description>
              'A satisfying snack for your body and mind.'
            </Card.Description>
            <Card.Content extra>
              {/* <a> */}
              <Icon name='user' />
              16 {recipe.likes}
              {/* </a> */}
            </Card.Content>
          </Card>
        </Container>
      </Menu>
    );
  }
}
// export default RecipeCard;
export default withRouter(RecipeCard);


// const RecipeCard = ({
//   title,
//   ingredients,
//   instructions,
//   tips,
//   yeild,
//   categories,
//   feedback,
//   activeTime,
//   inActiveTime,
//   addons,
//   forkedFrom,
//   pubDate,
//   saves,
//   forks,
//   author,
//   likes}) => (

// <Menu small>
// <Container>
// <Card fluid>
//   <Image src= {MyImage} wrapped ui={false}/>
//   <Card.Header>
//     {title}
//       </Card.Header>
//   <Card.Meta as="div"></Card.Meta>
//  <Card.Content>
//    {ingredients}
//    </Card.Content>
//  <Card.Content>
//    {instructions}
//    </Card.Content>
//  <Card.Content>
//    {tips}
//    </Card.Content>
//  <Card.Content>
//    {yeild}
//    </Card.Content>
//  <Card.Content>
//    {categories}
//    </Card.Content>
//  <Card.Content>
//    {feedback}
//    </Card.Content>
//  <Card.Content>
//    {activeTime}
//    </Card.Content>
//  <Card.Content>
//    {inActiveTime}
//    </Card.Content>
//  <Card.Content>
//    {addons}
//    </Card.Content>
//  <Card.Content>
//    {forkedFrom}
//    </Card.Content>
//  <Card.Content>
//    {pubDate}
//    </Card.Content>
//  <Card.Content>
//    {saves}
//    </Card.Content>
//  <Card.Content>
//    {forks}
//    </Card.Content>
//  <Card.Content>
//    {author}
//    </Card.Content>
//   <Card.Description>'A satisfying snack for your body and mind.'</Card.Description>
//   <Card.Content extra>
//   <a>
//   <Icon name='user' />
//   16 {likes}
// </a>
//       </Card.Content>
// </Card>
// </Container>
// </Menu>
// )

// export default RecipeCard;
// export default RecipeCard;
