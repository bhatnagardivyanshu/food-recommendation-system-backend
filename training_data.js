exports = [
    {input: {"salty":0.83, "sweet":0.24, "spicy":0.41, "junk":0.90 }, output: {"like": 1}}, // pizza
    {input: {"salty":0.74, "sweet":0.17, "spicy":0.37, "junk":0.88 }, output: {"like": 1}}, // burger
    {input: {"salty":0.94, "sweet":0.13, "spicy":0.65, "junk":0.92 }, output: {"like": 1}}, // chhole bhature
    {input: {"salty":0.79, "sweet":0.31, "spicy":0.33, "junk":0.75 }, output: {"like": 1}}, // pasta
    {input: {"salty":0.46, "sweet":0.12, "spicy":0.23, "junk":0.07 }, output: {"like": 0}}, // sprouts
    {input: {"salty":0.28, "sweet":0.73, "spicy":0.12, "junk":0.08 }, output: {"like": 0}}, // fruit-salad
    {input: {"salty":0.68, "sweet":0.13, "spicy":0.12, "junk":0.13 }, output: {"like": 0}}, // salty,less spicy,less junk
    {input: {"salty":0.72, "sweet":0.13, "spicy":0.12, "junk":0.64 }, output: {"like": 1}}, // salty,less spicy,high junk
    {input: {"salty":0.02, "sweet":0.79, "spicy":0.03, "junk":0.63 }, output: {"like": 0}}, // jalebi
];