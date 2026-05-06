const express = require("express");
const fs=require("fs");

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname));

app.post("/submit-form",(req,res) =>{

  const newMessage={
    name:req.body.name,
    email: req.body.email,
    message: req.body.message};

  let messages =[];

  if (fs.existsSync("messages.json")){
    const data=fs.readFileSync("messages.json");
    messages=JSON.parse(data);}

  messages.push(newMessage);

  fs.writeFileSync("messages.json",JSON.stringify(messages,null,2));

  res.send("Message saved!")
});

app.listen(3000,()=>{
  console.log("Server running on port 3000");});
      
