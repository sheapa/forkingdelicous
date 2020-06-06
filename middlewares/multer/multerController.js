const multer  = require("multer");
const path = require("path");

// creating file storage parameters for multer
const storage = multer.diskStorage({
    // sending uploaded files to images folder
    destination: function (req, file, cb) {
      cb(null, "./Images")
    },  
    // naming file using form input field name property + datestamp + file extension
    // file.* throwing error
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
  }); 
    
  function checkFileType(file, cb) {
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

 module.exports = {
    // setting storage parameters: max filesize 1mb, only images allowed
    Upload: multer({
        storage: storage,
        limits: {fileSize: 1000000},
        fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
        }
    // .single() parameter must match name parameter of input field
    })

 };
