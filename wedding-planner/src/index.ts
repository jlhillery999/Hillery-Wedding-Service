import express from "express";
import cors from "cors";
import Wedding from "./entities/wedding";
import Expense from "./entities/expense";
import WeddingService from "./services/wedding-service";
import WeddingServiceImpl from "./services/wedding-service-impl";

const app = express();
app.use(express.json());
app.use(cors());

const weddingService:WeddingService = new WeddingServiceImpl();

app.post('/weddings', async (req,res)=>{
    const [date, location, name, budget] = [req.body.date, req.body.location, req.body.name, req.body.budget];
    let wedding = new Wedding(0,date,location,name,budget);
    wedding = await weddingService.createWedding(wedding);
    res.status(201);
    res.send("New Wedding Created")
})

app.post('/expenses', async (req,res)=>{
    const [weddingID, reason, amount, image] = [req.body.weddingID, req.body.reason, req.body.amount, req.body.image]
    let expense = new Expense(0,weddingID,reason,amount,image);
    try{
        expense = await weddingService.logExpense(expense);
        res.status(201);
        res.send("New Expense Logged")
    } catch(err) {
        res.status(404);
        res.send(`${err.name}: ${err.message}`);
    }
})

app.get('/weddings', async (req,res)=>{
    try{
        const weddings = await weddingService.listAllWeddings();
        res.status(200);
        res.send(weddings)
    } catch(err) {
        res.status(404);
        res.send(`${err.name}: ${err.message}`);
    }
})

app.get('/expenses', async (req,res)=>{
    try{
        const expenses = await weddingService.listAllExpenses();
        res.status(200);
        res.send(expenses);
    } catch(err) {
        res.status(404);
        res.send(`${err.name}: ${err.message}`);
    }
})

app.get('/weddings/:id', async (req,res)=>{
    try{
        const wedding = await weddingService.retrieveWeddingByID(Number(req.params.id));
        res.status(200);
        res.send(wedding);
    } catch(err) {
        res.status(404);
        res.send(`${err.name}: ${err.message}`);
    }
    
})

app.get('/expenses/:id', async (req,res)=>{
    try{
        const expense = await weddingService.retrieveExpenseByID(Number(req.params.id));
        res.status(200);
        res.send(expense)
    } catch(err) {
        res.status(404);
        res.send(`${err.name}: ${err.message}`);
    }
})

app.get('/weddings/:id/expenses', async (req,res)=>{
    try{
        const expenses = await weddingService.listExpensesByWeddingID(Number(req.params.id));
        res.status(200);
        res.send(expenses);
    } catch(err) {
        res.status(404);
        res.send(`${err.name}: ${err.message}`);
    }
})

app.put('/weddings', async (req,res)=>{
    const [ID, date, location, name, budget] = [req.body.ID, req.body.date, req.body.location, req.body.name, req.body.budget];
    let wedding = new Wedding(ID,date,location,name,budget);
    try{
        wedding = await weddingService.updateWeddingInformation(wedding);
        res.status(200);
        res.send(`Wedding with ID ${ID} has been updated`);
    } catch(err) {
        res.status(404);
        res.send(`${err.name}: ${err.message}`);
    }
})

app.put('/expenses', async (req,res)=>{
    const [ID, weddingID, reason, amount, image] = [req.body.ID, req.body.weddingID, req.body.reason, req.body.amount, req.body.image]
    let expense = new Expense(ID, weddingID, reason, amount, image);
    try{
        expense = await weddingService.updateExpenseInformation(expense);
        res.status(200);
        res.send(`Expense with ID ${ID} has been updated`);
    } catch(err) {
        res.status(404);
        res.send(`${err.name}: ${err.message}`);
    }
})

app.delete('/weddings/:id', async (req,res)=>{
    try{
        const bool:Boolean = await weddingService.deleteWeddingByID(Number(req.params.id));
        res.status(205);
        res.send(`Wedding with ID ${req.params.id} has been deleted`);
    } catch(err) {
        res.status(404);
        res.send(`${err.name}: ${err.message}`);
    }
})

app.delete('/expenses/:id', async (req,res)=>{
    try{
        const bool:Boolean = await weddingService.deleteExpenseByID(Number(req.params.id));
        res.status(205);
        res.send(`Expense with ID ${req.params.id} has been deleted`);
    } catch(err) {
        res.status(404);
        res.send(`${err.name}: ${err.message}`);
    }
})

app.listen(80, ()=>{console.log("Application Started")});