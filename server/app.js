const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();
dotenv.config();

const restaurantRoute = require('./routes/restaurant');



mongoose.connect(process.env.DB_CONNECT,  { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('db connected');
});


app.use(bodyParser.json());
app.use('/restaurant',restaurantRoute);

app.listen(3000, ()=>{ console.log('server running')} );