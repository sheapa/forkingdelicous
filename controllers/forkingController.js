// *** May be used later. I had to disable the MVC to simplify the code for creating sessions and implementing authentication. 


const db = require("../models");

//   // Defining methods for the forkingController ** Creating/Managing/Deleting User Profiles
  module.exports = {
//     findByUserName: function(req, res) {
//       db.User
//         .findByEmail(req.params.userName)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     findById: function(req, res) {
//       db.User
//         .findById(req.params.id)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     create: function(req, res) {
//       db.User
//         .create(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     update: function(req, res) {
//       db.User
//         .findOneAndUpdate({ _id: req.params.id }, req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     remove: function(req, res) {
//       db.User
//         .findById({ _id: req.params.id })
//         .then(dbModel => dbModel.remove())
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
    findByRecipeId: function(req, res) {
        db.Recipe
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
//     //no findAll - no longer correct syntax. Not req.query because we are finding all so just an empty object needed
//     findAllRecipes: function(req, res) {
//         db.Recipe
//         .find({})
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err))
//     },
    createRecipe: function(req, res) {
        db.Recipe
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
//       updateRecipe: function(req, res) {
//         db.Recipe
//           .findOneAndUpdate({ _id: req.params.id }, req.body)
//           .then(dbModel => res.json(dbModel))
//           .catch(err => res.status(422).json(err));
//       },
//       removeRecipe: function(req, res) {
//         db.Recipe
//           .findById({ _id: req.params.id })
//           .then(dbModel => dbModel.remove())
//           .then(dbModel => res.json(dbModel))
//           .catch(err => res.status(422).json(err));
//       }
  }
