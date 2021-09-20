import expense from "../entities/expense";
import ExpenseDAO from "./expense-dao";
import { client } from "../utils/connection";
import Expense from "../entities/expense";

export default class ExpenseDAOImpl implements ExpenseDAO{
    async createExpense(expense: expense): Promise<expense> {
        const sql:string = "insert into expense(wedding_id, reason, amount, image) values ($1,$2,$3,$4) returning id";
        const values = [expense.weddingID, expense.reason, expense.amount, expense.image];
        try{
            const result = await client.query(sql, values);
            expense.ID = result.rows[0].id;
            return expense
        } catch(err) {
            console.error(`${err.name}: ${err.message}`);
        }
    }
    async getAllExpenses(): Promise<expense[]> {
        const sql:string = "select * from expense";
        const result = await client.query(sql);
        const expenses:Expense[] = [];
        if(result.rowCount === 0)
            expenses.push(new Expense(0,0,'',-1,''));
        else{
            for(const row of result.rows){
                const expense:Expense = new Expense(
                    row.id,
                    row.wedding_id,
                    row.reason,
                    Number(row.amount),
                    row.image
                );
                expenses.push(expense);
            }
        }
        return expenses;
    }
    async getExpenseByID(expenseID: number): Promise<expense> {
        const sql:string = "select * from expense where id = $1";
        const values = [expenseID];
        const result = await client.query(sql, values);
        if(result.rowCount === 0)
            return new Expense(0,0,'',-1,'')
        const row = result.rows[0];
        const expense = new Expense(
            row.id,
            row.wedding_id,
            row.reason,
            Number(row.amount),
            row.image
        )
        return expense;
    }
    async getExpensesByWeddingID(weddingID: number): Promise<expense[]> {
        const sql:string = "select * from expense where wedding_id = $1";
        const values = [weddingID]
        const result = await client.query(sql, values);
        const expenses:Expense[] = [];
        if(result.rowCount === 0)
            expenses.push(new Expense(0,0,'',-1,''));
        else{
            for(const row of result.rows){
                const expense:Expense = new Expense(
                    row.id,
                    row.wedding_id,
                    row.reason,
                    Number(row.amount),
                    row.image
                );
                expenses.push(expense);
            }
        }
        return expenses;
    }
    async updateExpenseByID(expense: expense): Promise<expense> {
        const sql:string = 'update expense set wedding_id = $1, reason = $2, amount = $3, image = $4 where id = $5 returning *';
        const values = [expense.weddingID, expense.reason, expense.amount, expense.image, expense.ID]
        const result = await client.query(sql, values);
        if(result.rowCount === 0)
            return new Expense(0,0,'',-1,'');
        const row = result.rows[0];
        const newExpense = new Expense(
            row.id,
            row.wedding_id,
            row.reason,
            Number(row.amount),
            row.image
        )
        return newExpense;
    }
    async deleteExpenseByID(expenseID: number): Promise<boolean> {
        const sql:string = 'delete from expense where id = $1'
        const values = [expenseID];
        const result = await client.query(sql, values);
        if(result.rowCount === 0)
            return false;
        else
            return true;
    }
    
}