import mongoose from "mongoose";

const dbconnect=async(database_url)=>{
    try{
         const DB_OPTIONS={
              dbName:"quoradb"
           }
        await mongoose.connect(database_url,DB_OPTIONS)
        console.log("database connection successfully");
    }catch(error){
        console.log("database connection fail");
    }
}


export{dbconnect}