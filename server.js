const express = require("express"),
    app = express(),
    port = 8000,
    cors = require("cors"),
    server = app.listen(port,() => console.log(`Listening on port ${port}`))

app.use(cors());
app.use(express.json());
// imports file into one line
require('./server/config/config.database');
require('./server/routes/jokes.routes')(app)