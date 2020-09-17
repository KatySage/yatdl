const db = require("./conn")

class RestaurantList {
    constructor (name, rev_stars, category, distance, favorite_dish, takeout, slug){
        this.name = name
        this.rev_stars = rev_stars
        this.category = category
        this.distance = distance
        this.favorite_dish = favorite_dish
        this.takeout = takeout
        this.slug = slug
    }
    static async getAll () {
        try {
            const response = await db.any(`SELECT DISTINCT name, category, slug FROM restaurants INNER JOIN review ON restaurants.id = review.restaurant_id;`);
            return response;
        }catch (error){
            return error.message;
        }
    }
    static async getDetails (slug) {
        try{
            const response = await db.one(`SELECT name, category, distance, favorite_dish, takeout FROM restaurants INNER JOIN review ON restaurants.id = review.restaurant_id WHERE slug= $1;`, [slug]);
            return response 
        }catch (error) {
            return error.message;
        }
    }
    static async getReviews (slug) {
        try{
            const response = await db.any(`SELECT title, rev_stars, review.review, reviewer.name, reviewer.karma FROM restaurants INNER JOIN review ON restaurants.id = review.restaurant_id INNER JOIN reviewer ON review.reviewer_id = reviewer.id WHERE slug= $1;`, [slug]);
            return response 
        }catch (error) {
            return error.message;
        }
    }
}
module.exports = RestaurantList;