const express = require('express')

const app = express()

app.get('/hello',(req,res)=>{
    res.send('Hello')
})

app.listen(4000, () => {
    console.log("Server started on http://localhost:4000node server.js")
})