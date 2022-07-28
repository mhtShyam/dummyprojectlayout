const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    logging: false,
    host: process.env.HOST,
    dialect: process.env.USER,
    pool: {
        max: 9,
        min: 0,
        idle: 10000
    }
})

sequelize.authenticate().then((success) => {
    console.log('Connected with database');
}).catch((err) => {
    console.log('Connection Failed');
})

module.exports = {
    sequelize: sequelize
}