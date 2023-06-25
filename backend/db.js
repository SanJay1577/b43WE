import { MongoClient } from "mongodb";
import dotenv from "dotenv"
import Obj from "mongodb"
dotenv.config()
const mongoConnectString = process.env.MONGO_URL;

export async function dbConnection(){
    const client = new MongoClient(mongoConnectString);
    await client.connect();
    console.log('MongoDB connected succesfully');
    return client
}

export var ObjectId = Obj.ObjectId;
export const client = await dbConnection();