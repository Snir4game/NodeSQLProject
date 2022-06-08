import Sequelize from 'sequelize';
import database from '../database';

const category = database.define('category',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    categoryName:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    categoryDescription:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default category;