

import * as express from 'express';
import { Application } from "express";


import { readAllHotels } from "./read-all-hotels.route";


import * as _ from 'lodash';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app: Application = express();

app.use(cookieParser());

app.use(bodyParser.json());



// REST API
app.route('/api/hotels')
    .get(readAllHotels);




// launch an HTTP Server
const httpServer = app.listen(9000, () => {
    console.log("HTTP Server running at https://localhost:" + httpServer.address().port);
});








