const express= require('express')
const bodyParser= require('body-parser')
//const { request, response } = require('express')
//const { Pool } = require('pg')
const db=require('./dbConnection')
const app=express()
const port=3000


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended:true,
  })
)
app.get('/blogs',db.getBlogs)
app.post('/blogs',db.createBlogs)
app.put('/blogs',db.updateBlogs)
app.delete('/blogs',db.deleteBlogs)

app.get('/',(request,response)=> {
  response.json({info:'Blog Api GET Request'})
})
app.listen(port,()=> {
  console.log(`Running on ${port}`)
})