const Pool= require('pg').Pool
const pool= new Pool({
    user:'postgres',
    host:'localhost',
    database:'blog',
    password:'admin123',
    port:5432
})

const getBlogs=(request,response)=>{
    pool.query('select * from blogs',(error,results)=>{
      if(error){
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const createBlogs=(request,response)=>{
    const{
      title,
      description,
      author
    }=request.body;
    pool.query('insert into blogs(title, description, author,created_at)values($1,$2,$3,current_timestamp)',[title,description,author],(error,results)=>{
      if(error){
        throw error
      }
      response.status(201).send({"Status 201":"Created"})
    })
  }
  const updateBlogs=(request,response)=>{
    const{
      id,
      title,
      description,
      author
    } = request.body;
    pool.query('update blogs set title=$1,description=$2,author=$3,updated_at=current_timestamp where id=$4',
    [title,description,author,id],(error,results)=>{
      if(error){
        throw error
      }
      response.status(200).send({"Status 200":"Updated"})
    })
  }
  const deleteBlogs=(request,response)=>{
    const{id}=request.body;
    pool.query('delete from blogs where id=$1',[id],(error,results)=>{
      if(error){
        throw error
      }
      response.status(201).send({"Status 200":"Deleted"})
    })
  }
  module.exports={
      getBlogs,
      createBlogs,
      updateBlogs,
      deleteBlogs
  }