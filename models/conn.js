const host = "lallah.db.elephantsql.com";
const database = "tqxsdjvz";
const user = "tqxsdjvz";
const password = "xzw3mwuJxMJ8BUAjBFLdt2sdqx4ClV3P";

const pgp = require('pg-promise')({
    query: function(event){
        console.log("QUERY: ", event.query)
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
}
const db = pgp(options);
module.exports = db;

