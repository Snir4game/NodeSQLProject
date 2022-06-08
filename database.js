import Sequelize from 'sequelize';

const database =  new Sequelize(
    'Storedb',//the name of the database
    'root',//the database username
    'Snir4game!',// the password
    {
        dialect:'mysql',//database type  (what database we using) 
        host:'localhost',// database Hosting  (which server)
    }
);

export default database;