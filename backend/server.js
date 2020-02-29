const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongoDB database connection established succesfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const trainersRouter = require('./routes/trainers');

app.use('/trainers', trainersRouter)
app.use('/exercises', exercisesRouter); 
app.use('/users', usersRouter);

let port = process.env.PORT;
if(port == null || port == ""){
    port = 5000;
}

app.listen(port);

app.listen(port, () =>{
 console.log( `server is running on port: ${port}` );
});
