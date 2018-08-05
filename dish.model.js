class Dish {

    constructor(name, code, cuisine, img, salty, sweet, spicy, junk) {
        this._name = name;
        this._code = code;
        this._cuisine = cuisine;
        this._img = img;
        this._sweet = sweet;
        this._salty = salty;
        this._spicy = spicy;
        this._junk = junk;
    }

    get name() {
        return this._name;
    }
    get code() {
        return this._code;
    }
    get cuisine() {
        return this._cuisine;
    }
    get img() {
        return this._img;
    }
    get sweet() {
        return this._sweet;
    }
    get salty() {
        return this._salty;
    }
    get spicy() {
        return this._spicy;
    }
    get junk() {
        return this._junk;
    }
    set name(name) {
        this._name = name;
    }
    set code(code) {
        this._code = code;
    }
    set cuisine(cuisine) {
        this._cuisine = cuisine;
    }
    set img(img) {
        this._img = img;
    }
    set sweet(sweet) {
        this._sweet = sweet;
    }
    set salty(salty) {
        this._salty = salty;
    }
    set spicy(spicy) {
        this._spicy = spicy;
    }
    set junk(junk) {
        this._junk = junk;
    }
    
}

module.exports = Dish;