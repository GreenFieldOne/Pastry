const express = require('express');
const app = express();
const db = require("./database/index");
const cors = require ("cors")

//Setting the port and listening for connections

const port = 3000;


//Create an Express App


//Require application Route modules
const ssroute = require('./route/sucre');
const salroute = require('./route/sale');
const jusroute = require('./route/jus');
const cartRoutes = require('./route/cart');
const userRoutes = require('./route/user');


//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Add Routes to the middleware handling path, specifying the respective URL path
 app.use('/api/sucre', ssroute);
 app.use('/api/sale',salroute);
 app.use('/api/jus',jusroute);
 app.use('/api/cart',cartRoutes);
 app.use('/api/user',userRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})