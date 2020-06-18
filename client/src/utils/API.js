import axios from "axios";

export default {
// findByRecipeId: function(_id){
//     return axios.get("/api/recipe" + _id)
// },
findByRecipeId: function(_algoliaObjectId){
    return axios.get("/api/recipeDisplay/", {params: _algoliaObjectId})
},

saveRecipe: function(recipeData){
    return axios.post("/api/recipeCreate", recipeData)
},

saveIngredient: function(ingredientData){
    return axios.post("/api/ingredients", ingredientData)
}
};

// export default {
//   // Gets the user with the given id
//   getUser: function(id) {
//     return axios.get("/api/user/" + id);
//   },
//   // Deletes the user with the given id
//   deleteUser: function(id) {
//     return axios.delete("/api/user/" + id);
//   },
//   // Saves a user to the database
//   saveUser: function(userData) {
//     return axios.post("/api/user", userData);
//   }
// };

// export default {
//   // Gets the user with the given id
//   getUser: function(userName) {
//     return axios.get("/api/user/" + userName);
//   },
//   // Deletes the user with the given id
//   deleteUser: function(userName) {
//     return axios.delete("/api/user/" + userName);
//   },
//   // Saves a user to the database
//   saveUser: function(userData) {
//     return axios.post("/api/user", userData);
//   }
// };
