const express = require ('express');
const app = express ();
const client = require ('./client');
app.use (express.json())

client.connect()
app.get ('/',async (req,res,next)=> {
    res.status(200).send("Welcome to the Prismatic Employees API")
})
app.get('/employees',async(req,res,next)=> {
    try {
     const employees = await client.query (`
        SELECT * FROM employees;`)

        res.status (200).json (employees.rows)
    } catch (error){
        console.log (error)
}
})
app.post ('/api/employees',async (req,res,next)=> {
    
    const {id, name} = req.body;
    res.status(200).json ({ message: 'User Created'})
})



app.listen (3000, ()=> {
    console.log (`listening on 3000`)
})
