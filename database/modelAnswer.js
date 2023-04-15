const sequelize = require('sequelize');
const connection = require('./database');

const answer = connection.define('answer', {
    body:{
        type: sequelize.TEXT,
        allowNull: false
    },
    questionid:{
        type: sequelize.INTEGER,
        allowNull: false
    }
});
answer.sync({force:false}).then(() => {console.log('table Question created'); });

module.exports = answer;