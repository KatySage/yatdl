const db = require("./conn")

class LanguagesList {
    constructor (name, rank_id){
        this.name = name;
        this.rank_id = rank_id
    }
    static async getAll () {
        try {
            const response = await db.any(`UPDATE languages SET rank_id=`+req.body.rank_id+`WHERE name=`+req.body.???);
            return response;
        }catch (error){
            return error.message;
        }
    }
}
module.exports = LanguagesList;