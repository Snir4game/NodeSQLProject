import exp from "express";
import bp from "body-parser";
import database from "./database.js";
const apps = exp();

apps.use(bp.urlencoded({ extended: false }));
apps.use(bp.json());

import accounts from "./constrollers/Accounts.js";
import store from "./constrollers/store.js";

apps.use("/accounts", accounts);
apps.use("/store", store);


database
.sync()
.then(results => {
console.log(results);
apps.listen(port);

})
.catch(error =>{
    console.log(error);
})

const port = 3000;

// base URL
//http://localhost:3000

//Accounts
//http://localhost:3000/accounts

//Store
//http://localhost:3000/store
