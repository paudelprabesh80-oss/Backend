import express from express
import mongoose from "mongoose";

const app=  express()

const port = process.env.port


mongoose.
connect(process.env.MONGO_URl, {
     useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("succesfully connect the database"))
.catch((err)=>
  console.log("the error is : ",err)
)
app.get("/", (req,res)=>
{
  res.send("the file is loaded")
})

app.listen(port, ()=>
{
console.log(`the server is running ${port}`)
})