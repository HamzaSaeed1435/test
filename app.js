const express= require('express')
const mysql=require('mysql')
const mongoose = require('mongoose')
const User = require('./model')
try{
mongoose.connect('mongodb://localhost:27017/test', {
})}
catch (error) {
    handleError(error);
  }
const app = express()
app.use(express.json())


app.post('/register', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
       
        res.status(201).send({ user, user })
    } catch (e) {
        res.status(400).send(e)
    }
})

app.post('/users/login', async (req, res) => {
    const email=req.body.email
    const password=req.body.password
    try {
        const user = await User.findOne({ email })
        if(user.password!==password){
        res.status(400).send('failed to login')
        }
        res.status(201).send('success')
    } catch (e) {
        res.status(400).send()
    }
})

app.listen(3000,()=>{
    console.log('server is on 3000 port..')
})