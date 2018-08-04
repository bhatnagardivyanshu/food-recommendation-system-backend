module.exports = {

    prepareTrainingData: () => {
        var trainingData = [];

        for (let i = 0; i < 100; i++) {
            let input = {}, output = {};
            input['spicy'] = module.exports.getRandomNumbers(0.0, 0.2);
            input['salty'] = module.exports.getRandomNumbers(0.0, 0.4);
            input['sweet'] = module.exports.getRandomNumbers(0.4, 1.0);
            // input['cuisine'] = module.exports.getRandomNumbers(0.0, 0.2);
            input['junk'] = module.exports.getRandomNumbers(0.0, 0.9);
            input['solid'] = module.exports.getRandomNumbers(0.0, 0.9);
            input['hot'] = module.exports.getRandomNumbers(0.0, 0.9);
            input['dry'] = module.exports.getRandomNumbers(0.0, 0.9);
            input['veg'] = 1;
            input['egg'] = 0;

            output['like'] = module.exports.getRandomNumbers(0.7, 1);
            output['dislike'] = 1 - output['like'];

            // console.log(input, output);

            trainingData.push({
                input: input,
                output: output
            });

        }

        for (let i = 0; i < 100; i++) {
            let input = {}, output = {};
            input['spicy'] = module.exports.getRandomNumbers(0.2, 0.2);
            input['salty'] = module.exports.getRandomNumbers(0.4, 0.4);
            input['sweet'] = module.exports.getRandomNumbers(0.4, 1);
            // input['cuisine'] = module.exports.getRandomNumbers(0.0, 0.2);
            input['junk'] = module.exports.getRandomNumbers(0.0, 0.9);
            input['solid'] = module.exports.getRandomNumbers(0.0, 0.9);
            input['hot'] = module.exports.getRandomNumbers(0.0, 0.9);
            input['dry'] = module.exports.getRandomNumbers(0.0, 0.9);
            input['veg'] = 0;
            input['egg'] = 1;

            output['like'] = module.exports.getRandomNumbers(0.0, 0.5);
            output['dislike'] = 1 - output['like'];

            trainingData.push({
                input: input,
                output: output
            });

        }

        // console.log('trainingData', trainingData);
        return trainingData;

    },

    // get random value between two numbers
    getRandomNumbers: (max, min) => {
        let number = Math.random() * (max - min) + min;
        return parseFloat(number.toFixed(2));
    },

    getTime() {
        return new Date().toTimeString();
    }

}