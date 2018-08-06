// 1. train the network when the server starts
// 2. Requests
//      i.      get all the dishes
//      ii.     get recommendations
//      iii.    get result for a single dish


const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')

const functions = require('./functions');
const network = require('./network');

//  1. train network
network.trainNetwork();
console.log('Network is ready');


const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.status(200).json({
        'message': 'Welcome to the food recommendation app'
    });
});


// get all the dishes
app.get('/dishes', (req, res) => {

    const dishes = require('./dishes');
    res.status(200).json(dishes);

});

// get recommendations
app.get('/recommendations', (req, res) => {
    const cuisine = req.query.cuisine;
    // console.log('Recommendations with cuisine', cuisine);
    const recommendations = network.getRecommendations(cuisine);
    res.json(recommendations);
});

// get details for a dish
app.get('/dishes/:name/details', (req, res) => {
    const name = req.params.name.trim();
    const dish = network.getDishByName(name);
    if (dish) res.json(dish);
    else res.send(null);
        
});

// get prediction for a dish
app.get('/dishes/:name/predict', (req, res) => {

    const name = req.params.name.trim();
    // console.log('Predicting', name);
    const score = network.predictForDish(name);
    if (score) {
        res.json({
            score: score
        });
    }
    else {
        res.status(401).send('Uh-oh! Seems like that dish is not on our list');
    }

});


// train the program when the server starts



// assuming that the person likes junk, salty and sometimes spicy food.
// he is not into sweet food items for sure

// const testData = {"salty":0.72, "sweet":0.17, "spicy":0.73, "junk":0.63 }; // chowmein
// const testData = {"salty":0.02, "sweet":0.79, "spicy":0.03, "junk":0.63 }; // jalebi

// const testData = {
//     "spicy": 0.6,
//     "salty": 0.8,
//     "sweet": 0.1,
//     // "cuisine": 5,
//     "junk": 0.9,
//     "solid": 1,
//     "hot": 1,
//     "dry": 1,
//     "veg": 1,
//     "egg": 0,
// }

// const prediction = network.run(testData);

// console.log('result for ', testData);
// console.log(prediction);


app.listen(4000, () => {
    console.log('Listening to port 4000');
});