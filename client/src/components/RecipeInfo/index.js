import React, {Component} from 'react';
import axios from "axios";
import RecipeCard from "../RecipeCard"


class RecipeInfo extends Component {
constructor(props) {
    super(props);

    //this code may also be wrong, not sure about the title part
    this.state = { 
        recipe: {} 
    };
    
    // state = {
    //     recipeData:{}
    // }
}

// getData(){
//     axios.get(`/api/recipeDisplay/${params.recipeId}`)
//       .then(({ data: recipe }) => {
//         console.log('recipeDisplay' + recipe);
//         this.setState({ recipe });
//       });
//     }
    
// componentDidUpdate(prevProps){
//     if (this.props.recipeId !== prevProps.recipeId) {
//         this.fetchData(this.props.recipeId);
//         axios.get(`/api/recipeDisplay/${params.recipeId}`)
//         .then(({ data: recipe }) => {
//             console.log('recipeDisplay' + recipe);
//             this.setState({ recipe });
//         });
//     }
        
        
//     }
    
    
componentDidMount () {
        // console.log(this.props.match && this.props.match.params.param);
        const { match: { params } } = this.props;
        axios.get(`/api/recipeDisplay/${params.recipeId}`)
        .then(({ data: recipe }) => {
            console.log('recipeDisplay' + recipe);
            this.setState({ recipe });
        });
        
        console.log("this is:" + params)

      };

      render (){
          //may not need this ????
          const {recipe} = this.state;

          return (
            <RecipeCard props={recipe}/> //guesing on this one ...
          );
    };
}


export default RecipeInfo;