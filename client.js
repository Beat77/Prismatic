const {Client} = require ("pg")
const client = new Client("postgres://postgres:fullstack@localhost:5432/prismatic_employees")
module.exports = client