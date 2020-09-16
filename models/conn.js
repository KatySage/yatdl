const host = "lallah.db.elephantsql.com";
const database = "anmpouik";
const user = "anmpouik";
const password = "gDEyyZLDEeD-bz_FSsltIenpUTO-BcAy";

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

