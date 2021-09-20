import Wedding from "../entities/wedding";

export default interface WeddingDAO{

// CREATE
createWedding(wedding:Wedding):Promise<Wedding>

// READ
getAllWeddings():Promise<Wedding[]>
getWeddingByID(weddingID:number):Promise<Wedding>

// UPDATE
updateWeddingByID(wedding:Wedding):Promise<Wedding>

// DELETE
deleteWeddingByID(weddingID:number):Promise<boolean>

}