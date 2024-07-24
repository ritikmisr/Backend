require('dotenv').config()
console.log("Chai aur Code");
const express = require('express');
const app=express()
const port= 3000
app.get('/', (req, res)=>{
    res.send('hello from srever');
})
app.get('/twitter',(req, res)=>{
    res.send('welcome to twitter page');
})
app.get('/login',(req, res)=>{
    res.send('welcome to login page');
})
app.listen(process.env.PORT, ()=>{
    console.log(`server is active at port ${port}`)
})