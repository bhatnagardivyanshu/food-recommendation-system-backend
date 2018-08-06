// order salty, sweet, spicy, junk
exports.data = [

    // salty
    
    // {input: [0.83, 0.24, 0.41, 0.90 ], output: {like: 1}},
    // {input: [0.28, 0.73, 0.12, 0.08 ], output: {like: 0}},
    // {input: [0.74, 0.17, 0.37, 0.88 ], output: {like: 1}},
    // {input: [0.79, 0.31, 0.33, 0.75 ], output: {like: 1}},
    // {input: [0.46, 0.12, 0.23, 0.07 ], output: {like: 0}},
    // {input: [0.94, 0.13, 0.65, 0.92 ], output: {like: 1}},
    // {input: [0.68, 0.13, 0.12, 0.13 ], output: {like: 0}},
    // {input: [0.72, 0.13, 0.12, 0.64 ], output: {like: 1}},
    // {input: [0.02, 0.79, 0.03, 0.63 ], output: {like: 0}},

    // balanced
    // salty, sweet, spicy, junk
    {input: [0.83, 0.24, 0.41, 0.90 ], output: {like: 1}},
    {input: [0.76, 0.31, 0.39, 0.70 ], output: {like: 1}},
    {input: [0.28, 0.73, 0.12, 0.08 ], output: {like: 0}},
    {input: [0.74, 0.17, 0.37, 0.88 ], output: {like: 1}},
    {input: [0.79, 0.31, 0.33, 0.75 ], output: {like: 1}},
    {input: [0.46, 0.12, 0.23, 0.07 ], output: {like: 0}},
    {input: [0.94, 0.13, 0.65, 0.92 ], output: {like: 1}},
    {input: [0.68, 0.13, 0.12, 0.13 ], output: {like: 0}},
    {input: [0.72, 0.13, 0.12, 0.64 ], output: {like: 1}},
    {input: [0.02, 0.79, 0.03, 0.63 ], output: {like: 0}},
    
    // sweet

    // {input: [0.83, 0.24, 0.41, 0.90 ], output: {like: 0}},
    // {input: [0.28, 0.73, 0.12, 0.08 ], output: {like: 1}},
    // {input: [0.74, 0.17, 0.37, 0.88 ], output: {like: 0}},
    // {input: [0.79, 0.31, 0.33, 0.75 ], output: {like: 0}},
    // {input: [0.46, 0.12, 0.23, 0.07 ], output: {like: 1}},
    // {input: [0.94, 0.13, 0.65, 0.92 ], output: {like: 0}},
    // {input: [0.68, 0.13, 0.12, 0.13 ], output: {like: 1}},
    // {input: [0.72, 0.13, 0.12, 0.64 ], output: {like: 0}},
    // {input: [0.02, 0.79, 0.03, 0.63 ], output: {like: 1}},

    
];


// exports.data = [
//     {input: {_salty:0.83, _sweet:0.24, _spicy:0.41, _junk:0.90 }, output: {like: 1}}, // pizza
//     {input: {_salty:0.74, _sweet:0.17, _spicy:0.37, _junk:0.88 }, output: {like: 1}}, // burger
//     {input: {_salty:0.94, _sweet:0.13, _spicy:0.65, _junk:0.92 }, output: {like: 1}}, // chhole bhature
//     {input: {_salty:0.79, _sweet:0.31, _spicy:0.33, _junk:0.75 }, output: {like: 1}}, // pasta
//     {input: {_salty:0.46, _sweet:0.12, _spicy:0.23, _junk:0.07 }, output: {like: 0}}, // sprouts
//     {input: {_salty:0.28, _sweet:0.73, _spicy:0.12, _junk:0.08 }, output: {like: 0}}, // fruit-salad
//     {input: {_salty:0.68, _sweet:0.13, _spicy:0.12, _junk:0.13 }, output: {like: 0}}, // salty,less spicy,less junk
//     {input: {_salty:0.72, _sweet:0.13, _spicy:0.12, _junk:0.64 }, output: {like: 1}}, // salty,less spicy,high junk
//     {input: {_salty:0.02, _sweet:0.79, _spicy:0.03, _junk:0.63 }, output: {like: 0}}, // jalebi
// ];