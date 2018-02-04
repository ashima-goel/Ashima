const express = require('express')
const config = require('./config')

const app = express()

app.get('/hello',(req,res)=>{
    res.send('Hello')
})

app.listen(config.PORT, () => {
    console.log("Server started on http://localhost:"+config.PORT)
})