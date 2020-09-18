const db = require("./conn")

class RestaurantList {
    constructor (name, rev_stars, category, distance, favorite_dish, takeout, slug, id){
        this.name = name
        this.rev_stars = rev_stars
        this.category = category
        this.distance = distance
        this.favorite_dish = favorite_dish
        this.takeout = takeout
        this.slug = slug
        this.id = id
    }
    static async getAll () {
        try {
            const response = await db.any(`SELECT DISTINCT name, restaurants.id, category, slug FROM restaurants INNER JOIN review ON restaurants.id = review.restaurant_id;`);
            return response;
        }catch (error){
            return error.message;
        }
    }
    static async getDetails (slug) {
        try{
            const response = await db.one(`SELECT name, id, category, distance, favorite_dish, takeout FROM restaurants WHERE slug= $1;`, [slug]);
            return response 
        }catch (error) {
            return error.message;
        }
    }
    static async getReviews (slug) {
        try{
            const response = await db.any(`SELECT title, rev_stars, review.review FROM restaurants INNER JOIN review ON restaurants.id = review.restaurant_id WHERE slug= $1;`, [slug]);
            return response 
        }catch (error) {
            return error.message;
        }
    }
    static async createReview (title, review, rev_stars, restaurant_id) {
        try{
            const response = await db.result(`
            INSERT INTO review (title, review, rev_stars, restaurant_id)
            VALUES ($1, $2, $3, $4);`, [title, review, rev_stars, restaurant_id]);
            return response 
        }catch (error) {
            return error.message;
        }
    }
}
module.exports = RestaurantList;