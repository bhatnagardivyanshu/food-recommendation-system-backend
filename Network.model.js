const brain = require('brain.js');

const network = new brain.NeuralNetwork({
    hiddenLayers: [6, 3]
});

const trainingData = require('./training_data');

exports.trainNetwork = () => {
    console.log('training started at', new Date().toTimeString());
    network.train(trainingData, {
        errorThresh: 0.01,
        iterations: 10000,
        // log: true,
        logPeriod: 10,
        learningRate: 0.1
    });
    console.log('training completed at', new Date().toTimeString());
    
}