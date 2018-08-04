const brain = require('brain.js');
const fs = require('fs');

const functions = require('./functions');

const network = new brain.NeuralNetwork();

const trainingData = [];

// this.trainingData = functions.prepareTrainingData();


this.trainingData = [
    {input: {"salty":0.30, "sweet":0.80, "spicy":0.12 }, output: {"like": 0.80}},
    {input: {"salty":0.17, "sweet":0.74, "spicy":0.15 }, output: {"like": 0.75}},
    {input: {"salty":0.13, "sweet":0.94, "spicy":0.09 }, output: {"like": 0.97}},
    {input: {"salty":0.31, "sweet":0.69, "spicy":0.21 }, output: {"like": 0.69}},
    {input: {"salty":0.62, "sweet":0.46, "spicy":0.38 }, output: {"like": 0.34}},
    {input: {"salty":0.73, "sweet":0.38, "spicy":0.49 }, output: {"like": 0.25}},
]

// console.log(this.trainingData[0]);

console.log('training started at', functions.getTime())

network.train(this.trainingData);

console.log('training finished at', functions.getTime())

const testData = {"salty":0.12, "sweet":0.47, "spicy":0.97};

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

const prediction = network.run(testData);

console.log('result for ', testData);
console.log(prediction);
