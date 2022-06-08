import Sequelize from 'sequelize';
//import database from '../database';
import database from '../database.js';

const account = database.define('account',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: {
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false
    },
    passcode:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    isApproved: Sequelize.BOOLEAN
});

export default account;