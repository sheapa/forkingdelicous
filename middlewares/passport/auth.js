function auth(req,res,next) {
    if (!req.user) {
      res.json({msg: "What the Fork! You forgot to login!"});
    } else {
      // User is authenticated and can access protected routes.
      next();
    }
  }
  
  
  module.exports = auth;