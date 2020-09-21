'use strict';
const db = require("./conn"),
    bcrypt = require('bcryptjs');

class UserList {
    constructor (id, name, email, password){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }
    async checkPassword(hashedPassword) {
        // RETURNS TRUE OR FALSE
        return bcrypt.compareSync(this.password, hashedPassword);
    }
    async signUp () {
        try{
            const response = await db.one(`
            INSERT INTO reviewer (name, email, password)
            VALUES ($1, $2, $3)
            RETURNING id;`, [this.name, this.email, this.password])
            console.log("User was created with ID:", response.id);
            return response;
        }catch (error) {
            return error.message;
        }
    }
    async logIn () {
        try {
            const response = await db.one(`SELECT id, name, email, password FROM reviewer WHERE email=$1;`, [this.email]);
            console.log("login res is :", response);
            const isValid = await this.checkPassword(response.password)
            if (!!isValid){
                const { name, id } = response;
                return { isValid, name, user_id: id }
            } else {
                return { isValid }
            }
        } catch (error) {
            return error.message;
        }
    }
}
module.exports = UserList;