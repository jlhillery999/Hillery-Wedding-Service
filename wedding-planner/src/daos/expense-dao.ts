import Expense from "../entities/expense";

export default interface ExpenseDAO{
    
    // CREATE
    createExpense(expense:Expense):Promise<Expense>

    // READ
    getAllExpenses():Promise<Expense[]>
    getExpenseByID(expenseID:number):Promise<Expense>
    getExpensesByWeddingID(weddingID:number):Promise<Expense[]>

    // UPDATE
    updateExpenseByID(expense:Expense):Promise<Expense>

    // DELETE
    deleteExpenseByID(expenseID:number):Promise<boolean>

}