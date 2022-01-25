const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:8080'
}));

const searchRoute = require('./routes')

const port = 3000;

// server setup

// Make sure the server can read the req.body object
app.use(express.json());

//Routes setup
app.use('/api/v1/', searchRoute)



app.listen(port, (err) => {
    if(err) {
        console.log('Server could not start');
        console.log(err);
        return;
    }
    console.log(`Listening on port ${port}`);

})

