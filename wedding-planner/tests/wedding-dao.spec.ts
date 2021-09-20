import Wedding from "../src/entities/wedding";
import WeddingDAO from "../src/daos/wedding-dao";
import WeddingDAOTestImpl from "./src/wedding-dao-test-impl";

const weddingDAO:WeddingDAO = new WeddingDAOTestImpl();

test("Create a wedding", async()=>{
    const result:Wedding = await weddingDAO.createWedding(new Wedding(0,new Date(new Date().toDateString()).toISOString(),'Atlanta', "Jarrick", 10000.00));
    expect(result.ID).not.toBe(0);
})

test("Get all weddings", async ()=>{
    await weddingDAO.createWedding(new Wedding(0,new Date(new Date().toDateString()).toISOString(),'Decatur', "Aaron", 20000.00));
    await weddingDAO.createWedding(new Wedding(0,new Date(new Date().toDateString()).toISOString(),'Jonesboro', "Jada", 15000.00));

    const result:Wedding[] = await weddingDAO.getAllWeddings();
    expect(result.length).toBeGreaterThanOrEqual(2);
})

test("Get a wedding by its ID", async ()=>{
    const wedding = await weddingDAO.createWedding(new Wedding(0,new Date(new Date().toDateString()).toISOString(),'Macon', "Lloryn", 25000.00));
    
    const result = await weddingDAO.getWeddingByID(wedding.ID);
    expect(result).toStrictEqual(wedding);
})

test("Update a wedding by its ID", async ()=>{
    const wedding = await weddingDAO.createWedding(new Wedding(0,new Date(new Date().toDateString()).toISOString(),'Savannah', "Zabian", 30000.00));
    const newWedding = new Wedding(wedding.ID, new Date(new Date().toDateString()).toISOString(), "Brunswick", "Zabian", 22500.00);

    const result = await weddingDAO.updateWeddingByID(newWedding);
    expect(result).toStrictEqual(newWedding);
})

test("Delete a wedding by its ID", async() =>{
    const wedding = await weddingDAO.createWedding(new Wedding(0,new Date(new Date().toDateString()).toISOString(),'Ellijay', "Kathryn", 30000.00));

    const result = await weddingDAO.deleteWeddingByID(wedding.ID);
    expect(result).toBeTruthy();
    })