const{ MongoClient} = require("mongodb")
const express = require("express")


const app = express()
app.use(express.json())
var database

app.get("/", (req,res) => {
    res.send("type /api/details in the url to fetch data from the DataBase")
})


app.get("/api/details", (req,res)=> {
    database.collection("contact details").find({}).toArray((err,result) => {
        if (err) throw err
        res.send(result)
    })
})

app.listen(8000, () => {
    MongoClient.connect("mongodb+srv://Chaelvizhi:Chaelu@cluster0.0b0ey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    ,{useNewUrlParser : true}, (error,result) =>{
        if (error) throw error
        database = result.db("myFirstDatabase")
        console.log("connection successful")
    })
})