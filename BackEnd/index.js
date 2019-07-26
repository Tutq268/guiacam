const express = require('express')
const bodyParser = require('body-parser')
let app = express()


app.use(bodyParser.urlencoded({extended: false}))
app.get("/",(req,res)=>{
  res.send("test get")
})
app.post('/user',(req,res)=>{
   console.log(req.body.firstName)
  res.send("test post")
})
app.listen(8686,(req,res)=> {
  console.log("hello")
})

