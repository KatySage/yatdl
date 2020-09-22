const host = "lallah.db.elephantsql.com";
const database = "vxtvewco";
const user = "vxtvewco";
const password = "nu6M8h5-S_d1UZjRb5WmBfboe25yZSrE";

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

