const express = require('express');

const connectDB = require('./config/db');

const App = express();

const cors = require('cors');

//connect database

connectDB();

//init middleware


// App.use(bodyParser.json());
App.use(express.json({extended: false}));

App.use(cors());
// App.get('/', (req,res)=>{res.send('API runing on this port')});


const PORT = process.env.PORT || 6060;

App.use('/', require('./routes/api/task'));


App.listen(PORT, ()=>{console.log(`server start on ${PORT}`)});