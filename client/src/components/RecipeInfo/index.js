import React, {Component} from 'react';
import axios from "axios";
import RecipeCard from "../RecipeCard"


class RecipeInfo extends Component {
constructor(props) {
    super(props);

    //this code may also be wrong, not sure about the title part
    this.state = { recipe: { title: '' } };
    
    // state = {
    //     recipeData:{}
    // }
}

componentDidMount () {
        const { match: { params } } = this.props;

        console.log("this is:" + params)

        axios.get(`/api/recipeDisplay/${params.recipeId}`)
          .then(({ data: recipe }) => {
            console.log('recipeDisplay' + recipe);
            this.setState({ recipe });
          });
      };

      render (){
          //may not need this ????
          const {recipe} = this.state;

          return (
            <RecipeCard {...recipe}/> //guesing on this one ...
          );
    };
}


export default RecipeInfo;