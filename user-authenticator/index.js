const express = require('express');
const cors = require('cors');
const {Datastore} = require('@google-cloud/datastore');

const app = express();
app.use(express.json());
app.use(cors());
const datastore = new Datastore();

app.patch('/users/login', async (req,res)=>{
    const query = datastore.createQuery('User').filter('email','=',req.body.email).filter('password','=',req.body.password);
    const response = await datastore.runQuery(query);
    if(response[0].length === 0){
        res.status(422);
        res.send("Email and password combination not found");
    }
    else{
        res.status(200);
        res.send({fname:response[0][0].fname, lname:response[0][0].lname});
    }
})

app.get('/users/:email/verify', async (req,res)=>{
    const query = datastore.createQuery('User').filter('email','=',req.params.email);
    const response = await datastore.runQuery(query);
    if(response[0].length === 0){
        res.status(404);
        res.send("User not found");
    }
    else{
        res.status(200);
        res.send("User found");
    }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`Application started on port ${PORT}`));