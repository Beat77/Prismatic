const client = require ('./client.js');

const newEmployee = async (name) => {
    try {
        const {rows} = await client.query ('
            INSERT INTO employees (name)
            VALUES ('${employeeName}')
            RETURNING *;
            ')
    }
    catch (error) {
        console.log (error);
    
    }
}

module.exports =
newEmployee {
    
}