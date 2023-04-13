const sequelize = require('sequelize');

const connection = new sequelize('dbQAnswer', 'root', 'myDb88_',
{
    host: '172.17.0.2',
    dialect: 'mysql'
});

module.exports = connection;