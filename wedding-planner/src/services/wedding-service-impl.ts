import Wedding from "../entities/wedding";
import Expense from "../entities/expense";
import WeddingDAO from "../daos/wedding-dao";
import ExpenseDAO from "../daos/expense-dao";
import WeddingDAOImpl from "../daos/wedding-dao-impl";
import ExpenseDAOImpl from "../daos/expense-dao-impl";
import WeddingService from "./wedding-service";

export default class WeddingServiceImpl implements WeddingService{

    private weddingDAO:WeddingDAO = new WeddingDAOImpl();
    private expenseDAO:ExpenseDAO = new ExpenseDAOImpl();

    async createWedding(wedding: Wedding): Promise<Wedding> {
        return await this.weddingDAO.createWedding(wedding);
    }
    async logExpense(expense: Expense): Promise<Expense> {
        const wedding:Wedding = await this.weddingDAO.getWeddingByID(expense.weddingID);
        if(wedding.ID === 0)
            throw new ReferenceError(`Wedding with ID of ${expense.ID} not found`);
        else
            return await this.expenseDAO.createExpense(expense);
    }
    async listAllWeddings(): Promise<Wedding[]> {
        const weddings:Wedding[] = await this.weddingDAO.getAllWeddings();
        if(weddings[0].ID === 0)
            throw new ReferenceError("No weddings found")
        else
            return weddings;
    }
    async listAllExpenses(): Promise<Expense[]> {
        const expenses:Expense[] = await this.expenseDAO.getAllExpenses();
        if(expenses[0].ID === 0)
            throw new ReferenceError("No expenses found")
        else
            return expenses;
    }
    async retrieveWeddingByID(weddingID: number): Promise<Wedding> {
        const wedding:Wedding = await this.weddingDAO.getWeddingByID(weddingID);
        if(wedding.ID === 0)
            throw new ReferenceError(`Wedding with ID ${weddingID} not found`)
        else
            return wedding;
    }
    async retrieveExpenseByID(expenseID: number): Promise<Expense> {
        const expense:Expense = await this.expenseDAO.getExpenseByID(expenseID);
        if(expense.ID === 0)
            throw new ReferenceError(`Expense with ID ${expenseID} not found`)
        else
            return expense;
    }
    async listExpensesByWeddingID(weddingID: number): Promise<Expense[]> {
        const wedding:Wedding = await this.weddingDAO.getWeddingByID(weddingID)
        const expenses:Expense[] = await this.expenseDAO.getExpensesByWeddingID(weddingID);
        if(wedding.ID === 0)
            throw new ReferenceError(`Wedding with ID ${weddingID} not found`)
        else if(expenses[0].ID === 0)
            throw new ReferenceError(`No expenses found for wedding with ID ${weddingID}`)
        else
            return expenses;
    }
    async updateWeddingInformation(wedding: Wedding): Promise<Wedding> {
        const newWedding:Wedding = await this.weddingDAO.updateWeddingByID(wedding);
        if(newWedding.ID === 0)
            throw new ReferenceError(`Wedding with ID ${wedding.ID} not found`)
        else
            return newWedding;
    }
    async updateExpenseInformation(expense: Expense): Promise<Expense> {
        const wedding:Wedding = await this.weddingDAO.getWeddingByID(expense.weddingID);
        const newExpense:Expense = await this.expenseDAO.updateExpenseByID(expense);
        if(wedding.ID === 0)
            throw new ReferenceError(`Wedding with ID ${expense.weddingID} not found`)
        if(newExpense.ID === 0)
            throw new ReferenceError(`Expense with ID ${expense.ID} not found`)
        else
            return newExpense;
    }
    async deleteWeddingByID(weddingID: number): Promise<Boolean>{
        const bool:boolean = await this.weddingDAO.deleteWeddingByID(weddingID);
        if(!bool)
            throw new ReferenceError(`Wedding with ID ${weddingID} not found`);
        return bool;
    }
    async deleteExpenseByID(expenseID: number): Promise<Boolean>{
        const bool:boolean = await this.expenseDAO.deleteExpenseByID(expenseID);
        if(!bool)
            throw new ReferenceError(`Expense with ID ${expenseID} not found`);
        return bool;
    }

}