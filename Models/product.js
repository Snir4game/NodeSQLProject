import Sequelize from 'sequelize';
import database from '../database';

const products = database.define('products',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    cid: Sequelize.INTEGER,
    productName:{
        type: Sequelize.STRING,
        allowNull:false
    },
    productImage: Sequelize.STRING,
    productPrice: Sequelize.FLOAT,
    unitInStock:{
        type: Sequelize.INTEGER,
        allowNull:true,
    },
    productDescription: Sequelize.STRING

})

export default products;