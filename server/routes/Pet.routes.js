const PetController = require('../controllers/pet.controller');


module.exports = (app) => {
    app.get('/api/pet', PetController.index);
    app.post('/api/create/pet', PetController.create);
    app.get('/api/pet/:id', PetController.show);
    app.put('/api/update/pet/:id', PetController.update);
    app.delete('/api/destroy/pet/:id', PetController.destroy);
}