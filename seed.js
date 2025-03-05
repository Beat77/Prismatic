const client = require ("./client")

const seed = async ()=> {
    await client.connect()
  try {
    await client.query (`
      DROP TABLE IF EXISTS employees;  `)
     await client.query(`
        CREATE TABLE employees (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) );`) 

  }  catch (error) {
    console.log (error)
  }
  const numOfSeeds = 10
  try {
    for (let i=0;i<numOfSeeds;i++){
        await client.query (`
            INSERT INTO employees (name)
            VALUES ($1);`,[`name ${i}`])
    }
    
  } catch (error){
    console.log (error)
  }
  await client.end ()
}
seed ()