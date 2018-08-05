const brain = require('brain.js');
const config = require('./config');
const _ = require('lodash');
const dishes = require('./dishes');

const network = new brain.NeuralNetwork({
    hiddenLayers: [6, 3]
});

const trainingData = _.shuffle(require('./training_data').data);

const predictScore = (dish) => {
    const score = parseFloat(network.run(dish).like);
    return parseInt(score * 100);
}

const prepareInput = (dish) => {
    // console.log('preparing input for', dish);
    return [dish._salty,dish._sweet,dish._spicy,dish._junk];
}

const getDishByName = (name) => {
    const index = _.findIndex(dishes, (dish) => dish.code == name);
    return dishes[index] || null;
}


exports.trainNetwork = () => {
    // console.log(trainingData);
    // console.log('training started at', new Date().toTimeString());
    network.train(trainingData, {
        errorThresh: 0.01,
        iterations: 100000,
        // log: true,
        logPeriod: 10,
        learningRate: 0.1
    });
    // console.log('training completed at', new Date().toTimeString());
    
}

exports.getRecommendations = () => {

    return dishes.filter( (dish) => {

        const input = prepareInput(dish);
        const score = predictScore(input);
        dish['score'] = score;

        return score > config.minScoreForRecommendation;
            
    });
    
}

exports.predictForDish = (name) => {
    const dish = getDishByName(name);
    if (dish) {
        const input = prepareInput(dish);
        return predictScore(input);
    }
    return null;
}