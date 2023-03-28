const sequelize = require('sequelize');

const connection = new sequelize('dbQAnswer', 'root', '@PassDataCom99',
{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;