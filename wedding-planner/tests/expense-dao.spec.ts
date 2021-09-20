import Expense from "../src/entities/expense";
import ExpenseDAO from "../src/daos/expense-dao";
import Wedding from "../src/entities/wedding";
import WeddingDAO from "../src/daos/wedding-dao";
import WeddingDAOTestImpl from "./src/wedding-dao-test-impl";
import ExpressDAOTestImpl from "./src/expense-dao-test-impl";

const weddingDAO:WeddingDAO = new WeddingDAOTestImpl();
const expenseDAO:ExpenseDAO = new ExpressDAOTestImpl();

test("Create new expense", async ()=>{
    const wedding:Wedding = await weddingDAO.createWedding(new Wedding(0,new Date().toISOString(),'Lawrenceville', "Nick", 10000.00));
    
    const result:Expense = await expenseDAO.createExpense(new Expense(0, wedding.ID, "Cake Order", 350.00, ''));
    expect(result.ID).not.toBe(0);
})

test("Get all expenses", async ()=>{
    const wedding:Wedding = await weddingDAO.createWedding(new Wedding(0,new Date().toISOString(),'Augusta', "Joe", 10000.00));
    await expenseDAO.createExpense(new Expense(0, wedding.ID, "Catering", 1500.00, ''));
    await expenseDAO.createExpense(new Expense(0, wedding.ID, "Venue", 5000.00, ''));
    
    const result:Expense[] = await expenseDAO.getAllExpenses();
    expect(result.length).toBeGreaterThanOrEqual(2);
})

test("Get expense by ID", async ()=>{
    const wedding:Wedding = await weddingDAO.createWedding(new Wedding(0,new Date().toISOString(),'Dublin', "Celinna", 10000.00));
    const expense:Expense = await expenseDAO.createExpense(new Expense(0, wedding.ID, "Dress", 3000.00, ''));

    const result:Expense = await expenseDAO.getExpenseByID(expense.ID);
    expect(result).toStrictEqual(expense);
})

test("Get all expenses for wedding by wedding ID", async ()=>{
    const wedding:Wedding = await weddingDAO.createWedding(new Wedding(0,new Date().toISOString(),'Dalton', "Charlie", 10000.00));
    await expenseDAO.createExpense(new Expense(0, wedding.ID, "Open Bar", 800.00, ''));
    await expenseDAO.createExpense(new Expense(0, wedding.ID, "Security", 300.00, ''));

    const result:Expense[] = await expenseDAO.getExpensesByWeddingID(wedding.ID);
    expect(result[0].weddingID).toBe(wedding.ID);
})

test("Update expense", async ()=>{
    const wedding:Wedding = await weddingDAO.createWedding(new Wedding(0,new Date().toISOString(),'Hampton', "Willow", 10000.00));
    const expense:Expense = await expenseDAO.createExpense(new Expense(0, wedding.ID, "Tuxedo", 1200.00, ''));
    const newExpense:Expense = new Expense(expense.ID, wedding.ID, "Tuxedo", 1000.00, '');

    const result:Expense = await expenseDAO.updateExpenseByID(newExpense);
    expect(result).toStrictEqual(newExpense);
})

test("Delete expense by ID", async ()=>{
    const wedding:Wedding = await weddingDAO.createWedding(new Wedding(0,new Date().toISOString(),'Savannah', "Da'Joun", 10000.00));
    const expense:Expense = await expenseDAO.createExpense(new Expense(0, wedding.ID, "Band", 600.00, ''));

    const result = await expenseDAO.deleteExpenseByID(expense.ID);
    expect(result).toBeTruthy();
})