import Wedding from "../entities/wedding";
import Expense from "../entities/expense";

export default interface WeddingService{

    createWedding(wedding:Wedding):Promise<Wedding>

    logExpense(expense:Expense):Promise<Expense>

    listAllWeddings():Promise<Wedding[]>

    listAllExpenses():Promise<Expense[]>

    retrieveWeddingByID(weddingID:number):Promise<Wedding>

    retrieveExpenseByID(expenseID:number):Promise<Expense>

    listExpensesByWeddingID(weddingID:number):Promise<Expense[]>

    updateWeddingInformation(wedding:Wedding):Promise<Wedding>

    updateExpenseInformation(expense:Expense):Promise<Expense>

    deleteWeddingByID(weddingID:number):Promise<Boolean>

    deleteExpenseByID(expenseID:number):Promise<Boolean>

}