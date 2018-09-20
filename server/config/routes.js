var controller = require('../controllers/controller');

module.exports = function(app){
  app.get('/authors', function(req, res) {
      console.log("IN ROUTES");
      controller.index(req,res);
  });

  app.post('/authors/new', function(req,res){
      controller.create(req,res);
  });

  app.get('/authors/show/:id', function(req,res){
      controller.getOne(req,res);
  });

  app.put('/authors/update/:id', function(req,res){
     console.log("IN ROUTES EDIT")
      controller.update(req,res);
  });

  app.delete('/animals/delete/:id', function(req, res) {
      controller.deleteOne(req,res)
  });

}
