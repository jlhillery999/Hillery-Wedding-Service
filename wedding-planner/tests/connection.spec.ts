import {client} from './src/test_connection'

test("Should create a connection ", async ()=>{
    const result = await client.query('select * from wedding'); // fetching fata stored on a database in the cloud
    console.log(result);
});