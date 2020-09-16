const JokesController = require('../controllers/jokes.controller');


module.exports = (app) => {
    app.get('/api/jokes', JokesController.index);
    app.post('/api/create/joke', JokesController.create);
    app.get('/api/joke/:id', JokesController.show);
    //will send the old object back
    app.put('/api/update/joke/:id', JokesController.update);
    app.delete('/api/destroy/joke/:id', JokesController.destroy);
}