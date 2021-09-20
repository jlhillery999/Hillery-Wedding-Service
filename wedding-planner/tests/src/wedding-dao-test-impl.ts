import Wedding from "../../src/entities/wedding";
import WeddingDAO from "../../src/daos/wedding-dao";
import { client } from "./test_connection";

export default class WeddingDAOTestImpl implements WeddingDAO{
    async createWedding(wedding: Wedding): Promise<Wedding> {
        const sql:string = "insert into wedding(wedding_date, wedding_location, person_name, budget) values ($1, $2, $3, $4) returning id"
        const values = [wedding.date, wedding.location, wedding.name, wedding.budget]
        const result = await client.query(sql, values);
        wedding.ID = result.rows[0].id;
        return wedding;
    }

    async getAllWeddings(): Promise<Wedding[]> {
        const sql:string = "select * from wedding";
        const result = await client.query(sql);
        const weddings:Wedding[] = [];
        if(result.rowCount === 0)
            weddings.push(new Wedding(0, '01-01-1900', '', '', -1))
        else{
            for(const row of result.rows){
                const wedding:Wedding = new Wedding(
                    row.id,
                    row.wedding_date,
                    row.wedding_location,
                    row.person_name,
                    Number(row.budget)
                )
                weddings.push(wedding);
            }
            return weddings;
        }
    }

    async getWeddingByID(weddingID: number): Promise<Wedding> {
        const sql:string = "select * from wedding where id = $1";
        const values = [weddingID];
        const result = await client.query(sql, values);
        if(result.rowCount === 0)
            return new Wedding(0, '01-01-1900', '', '', -1)
        const row = result.rows[0];
        const wedding:Wedding = new Wedding(
            row.id,
            row.wedding_date,
            row.wedding_location,
            row.person_name,
            Number(row.budget)
        )
        return wedding;
    }

    async updateWeddingByID(wedding: Wedding): Promise<Wedding> {
        const sql:string = "update wedding set wedding_date = $1, wedding_location = $2, person_name = $3, budget = $4 where id = $5 returning *";
        const values = [wedding.date, wedding.location, wedding.name, wedding.budget, wedding.ID];
        const result = await client.query(sql, values);
        if(result.rowCount === 0)
            return new Wedding(0, '01-01-1900', '', '', -1)
        const row = result.rows[0];
        const newWedding:Wedding = new Wedding(
            row.id,
            row.wedding_date,
            row.wedding_location,
            row.person_name,
            Number(row.budget)
        )
        return newWedding;
    }

    async deleteWeddingByID(weddingID: number): Promise<boolean> {
        const sql:string = "delete from wedding where id = $1";
        const values = [weddingID];
        const result = await client.query(sql, values);
        if(result.rowCount === 0)
            return false;
        else
            return true;
    }
    
}

afterAll(async ()=>{
    client.end(); // should close connections once test is over;
})