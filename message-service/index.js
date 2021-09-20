const express = require("express");
const cors = require("cors");
const {Datastore} = require("@google-cloud/datastore")

const app = express();
app.use(express.json());
app.use(cors());
const datastore = new Datastore();

app.get('/messages', async (req,res)=>{
    let query;
    if(req.query.sender != undefined && req.query.recipient != undefined)
        query = datastore.createQuery('Message').filter('sender','=',req.query.sender).filter('recipient','=',req.query.recipient);
    else if(req.query.sender != undefined)
        query = datastore.createQuery('Message').filter('sender','=',req.query.sender)
    else if(req.query.recipient != undefined)
        query = datastore.createQuery('Message').filter('recipient','=',req.query.recipient)
    else
        query = datastore.createQuery('Message')
    const response = await datastore.runQuery(query);
    if(response[0].length === 0){
        res.status(404);
        res.send("No messages found");
    }
    else{
        res.status(200);
        res.send(response[0]);
    }
})

app.get('/messages/:mid', async (req,res)=>{
    const key = datastore.key(['Message',req.params.mid]);
    const response = await datastore.get(key);
    if(response[0].length === 0){
        res.status(404);
        res.send("Message not found")
    }
    else{
        res.status(200);
        res.send(response[0][0]);
    }
})

app.post('/messages', async (req,res)=>{
    const key = datastore.key('Message');
    const message = {
        sender:req.body.sender,
        recipient:req.body.recipient,
        note:req.body.note
    };
    const response = await datastore.save({key:key,data:message});
    res.status(200);
    res.send("Successfully posted message");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`Application started on port ${PORT}`));