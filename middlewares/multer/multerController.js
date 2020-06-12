const multer  = require("multer");
const path = require("path");

// creating file storage parameters for avatar upload
const avatarStorage = multer.diskStorage({
    // sending uploaded files to images/avatar folder
    destination: function (req, file, cb) {
      cb(null, "./images/avatars")
    },  
    // naming file using form input field name property + datestamp + file extension
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
  }); 

  // creating file storage parameters for recipe image upload
const recipeStorage = multer.diskStorage({
  // sending uploaded files to images/recipes folder
  destination: function (req, file, cb) {
    cb(null, "./images/recipes")
  },  
  // naming file using form input field name property + datestamp + file extension
  filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
  }
}); 
    


 module.exports = {
    // setting storage parameters: max filesize 1mb, only images allowed
    avatarUpload: multer({
        storage: avatarStorage,
        limits: {fileSize: 1000000},
        fileFilter: function (req, file, cb) {
        checkImageFileType(file, cb);
        }
    // .single() parameter must match name parameter of input field
    }),

    recipeUpload: multer({
      storage: recipeStorage,
      limits: {fileSize: 1000000},
      fileFilter: function (req, file, cb) {
      checkImageFileType(file, cb);
      }
  // .single() parameter must match name parameter of input field
  })

 };

function checkImageFileType(file, cb) {
  // allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only");
  }
};