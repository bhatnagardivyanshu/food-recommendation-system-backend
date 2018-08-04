class Dish {

    constructor(name, cuisine, img, sweet, salty, spicy, healthy, junk) {
        this.name = name;
        this.cuisine = cuisine;
        this.img = img;
        this.sweet = sweet;
        this.salty = salty;
        this.spicy = spicy;
        this.healthy = healthy;
        this.junk = junk;
    }

    get name() {
        return this.name;
    }
    get cuisine() {
        return this.cuisine;
    }
    get img() {
        return this.img;
    }
    get sweet() {
        return this.sweet;
    }
    get salty() {
        return this.salty;
    }
    get spicy() {
        return this.spicy;
    }
    get healthy() {
        return this.healthy;
    }
    get junk() {
        return this.junk;
    }

    set name(name) {
        this.name = name;
    }
    set cuisine(cuisine) {
        this.cuisine = cuisine;
    }
    set img(img) {
        this.img = img;
    }
    set sweet(sweet) {
        this.sweet = sweet;
    }
    set salty(salty) {
        this.salty = salty;
    }
    set spicy(spicy) {
        this.spicy = spicy;
    }
    set healthy(healthy) {
        this.healthy = healthy;
    }
    set junk(junk) {
        this.junk = junk;
    }
    
    
}

module.exports = Dish;