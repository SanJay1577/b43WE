import { MongoClient } from "mongodb";
import Obj from "mongodb"

const mongoConnectString = 'mongodb://127.0.0.1:27017/'

export async function dbConnection(){
    const client = new MongoClient(mongoConnectString);
    await client.connect();
    console.log('MongoDB connected succesfully');
    return client
}

export var ObjectId = Obj.ObjectId;
export const client = await dbConnection();