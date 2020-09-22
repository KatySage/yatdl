const db = require("./conn")

class TaskList {
    constructor (task, completed, user_id, id){
        this.task = task
        this.completed = completed
        this.user_id = user_id
        this.id = id
    }
    static async getAll () {
        try {
            const response = await db.any(`SELECT DISTINCT task, user_id, id, completed FROM tasks WHERE user_id = $1;`, [user_id]);
            return response;
        }catch (error){
            return error.message;
        }
    }
    static async createReview (task, user_id) {
        try{
            const response = await db.result(`
            INSERT INTO tasks (task, user_id)
            VALUES ($1, $2);`, [task, user_id]);
            return response 
        }catch (error) {
            return error.message;
        }
    }
}
module.exports = TaskList;