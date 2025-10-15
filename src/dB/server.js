import { Db_name } from "../constraints.js";

import mongoose from "mongoose";


const  Server = async ()=>
{
 try {
    const connectionInstance = await mongoose.
    connect(`${process.env.MONGO_URI}/${Db_name}`)

console.log(`succesfully connected Db host : ${connectionInstance.connection.host}`)




  } 
  catch (error) {
    console.log("mongodv error is", error)
  }
}

export default Server