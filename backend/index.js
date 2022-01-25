const express = require('express');


//const searchRoute = require('./routes/search.js')

const port = 3000;

// server setup
const app = express();

// Make sure the server can read the req.body object
//app.use(express.json());

//Routes setup
//app.use('/api/v1/search', searchRoute)

app.listen(port, (err) => {
    if(err) {
        console.log('Server could not start');
        console.log(err);
        return;
    }
    console.log(`Listening on port ${port}`);

})