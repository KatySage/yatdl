const host = "lallah.db.elephantsql.com";
const database = "eusfzpfi";
const user = "eusfzpfi";
const password = "XQL_sLzdyahQzG-g4lVsx1CBQmf-0_xB";

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

