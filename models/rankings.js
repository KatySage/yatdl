const db = require("./conn")

class RankingsList {
    constructor (rank_text, rank_num, name){
        this.rank_text = rank_text;
        this.rank_num = rank_num;
        this.name = name
    }
    static async getAll () {
        try {
            const response = await db.any(`SELECT * FROM rankings;`);
            return response;
        }catch (error){
            return error.message;
        }
    }
}
module.exports = RankingsList;