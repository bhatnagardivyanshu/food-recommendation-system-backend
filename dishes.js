const Dish = require('./Dish.model');
const config = require('./config');
// constructor(name, code, cuisine, img, sweet, salty, spicy, junk)

const dishes = module.exports = [];

// --------------------------------- ITALIAN ---------------------------------


const pizza = new Dish('Pizza', 'pizza', config.cuisines.italian.text, '', 0.77, 0.33, 0.29, 0.90);
dishes.push(pizza);

const pasta = new Dish('Pasta', 'pasta', config.cuisines.italian.text, '', 0.62, 0.43, 0.29, 0.90);
dishes.push(pasta);

const garlic_bread = new Dish('Garlic Bread', 'garlicbread', config.cuisines.italian.text, '', 0.62, 0.43, 0.29, 0.90);
dishes.push(garlic_bread);

const italian_salad = new Dish('Italian Salad', 'italiansalad', config.cuisines.italian.text, '', 0.62, 0.43, 0.29, 0.90);
dishes.push(italian_salad);


// --------------------------------- AMERICAN ---------------------------------
// constructor(name, code, cuisine, img,        sweet, salty, spicy, junk)

const burger = new Dish('Burger', 'burger', config.cuisines.american.text, '', 0.81, 0.31, 0.47, 0.92);
dishes.push(burger);

const sandwich = new Dish('Sandwich', 'sandwich', config.cuisines.american.text, '', 0.56, 0.45, 0.23, 0.78);
dishes.push(sandwich);

const cheese_fries = new Dish('Cheese Fries', 'cheesefries', config.cuisines.american.text, '', 0.84, 0.28, 0.47, 0.88);
dishes.push(cheese_fries);

const waffle = new Dish('Waffle', 'waffle', config.cuisines.american.text, '', 0.17, 0.89, 0.07, 0.81);
dishes.push(waffle);

const chicken_wrap = new Dish('Chicken Wrap', 'chickenwrap', config.cuisines.american.text, '', 0.81, 0.21, 0.76, 0.62);
dishes.push(chicken_wrap);


// --------------------------------- CHINESE ---------------------------------
// constructor(name, code, cuisine, img,        sweet, salty, spicy, junk)

const noodles = new Dish('Noodles', 'noodles', config.cuisines.chinese.text, '', 0.82, 0.09, 0.59, 0.69);
dishes.push(noodles);

const chilli_paneer = new Dish('Chilli Paneer', 'chillipaneer', config.cuisines.chinese.text, '', 0.79, 0.37, 0.72, 0.81);
dishes.push(chilli_paneer);

const manchurian = new Dish('Manchurian', 'manchurian', config.cuisines.chinese.text, '', 0.88, 0.15, 0.61, 0.74);
dishes.push(manchurian);

const spring_roll = new Dish('Spring Roll', 'springroll', config.cuisines.chinese.text, '', 0.72, 0.13, 0.66, 0.85);
dishes.push(spring_roll);

const chilli_potato = new Dish('Chilli Potato', 'chillipotato', config.cuisines.chinese.text, '', 0.63, 0.42, 0.59, 0.85);
dishes.push(chilli_potato);

const fried_rice = new Dish('Fried Rice', 'friedrice', config.cuisines.chinese.text, '', 0.63, 0.12, 0.59, 0.85);
dishes.push(fried_rice);

const singapore_noodles = new Dish('Singapore Noodles', 'singaporenoodles', config.cuisines.chinese.text, '', 0.72, 0.42, 0.42, 0.82);
dishes.push(singapore_noodles);

// --------------------------------- NORTH INDIAN ---------------------------------
// constructor(name, code, cuisine, img,        sweet, salty, spicy, junk)

const bread_pakoda = new Dish('Bread Pakoda', 'breadpakoda', config.cuisines.north_indian.text, '', 0.77, 0.38, 0.41, 0.77);
dishes.push(bread_pakoda);

const samosa = new Dish('Samosa', 'samosa', config.cuisines.north_indian.text, '', 0.77, 0.08, 0.71, 0.90);
dishes.push(samosa);

const butter_chicken = new Dish('Butter Chicken', 'butterchicken', config.cuisines.north_indian.text, '', 0.77, 0.38, 0.54, 0.88);
dishes.push(butter_chicken);

const kachodi = new Dish('Kachodi', 'kachodi', config.cuisines.north_indian.text, '', 0.82, 0.12, 0.77, 0.68);
dishes.push(kachodi);

const pao_bhaji = new Dish('Pao Bhaji', 'paobhaji', config.cuisines.north_indian.text, '', 0.82, 0.23, 0.77, 0.83);
dishes.push(pao_bhaji);

const dal_makhani = new Dish('Dal Makhani', 'dalmakhani', config.cuisines.north_indian.text, '', 0.82, 0.23, 0.77, 0.83);
dishes.push(dal_makhani);

const shahi_paneer = new Dish('Shahi Paneer', 'shahipaneer', config.cuisines.north_indian.text, '', 0.71, 0.41, 0.55, 0.78);
dishes.push(shahi_paneer);

const rasmalai = new Dish('Rasmalai', 'rasmalai', config.cuisines.north_indian.text, '', 0.09, 0.81, 0.05, 0.77);
dishes.push(rasmalai);

const gulab_jamun = new Dish('Gulab Jamun', 'gulabjamun', config.cuisines.north_indian.text, '', 0.03, 0.96, 0.01, 0.92);
dishes.push(gulab_jamun);

const jalebi = new Dish('Jalebi', 'jalebi', config.cuisines.north_indian.text, '', 0.06, 0.91, 0.02, 0.87);
dishes.push(jalebi);

const maggi = new Dish('Maggi', 'maggi', config.cuisines.north_indian.text, '', 0.77, 0.24, 0.59, 0.66);
dishes.push(maggi);


// --------------------------------- SOUTH INDIAN ---------------------------------
// constructor(name, code, cuisine, img,        sweet, salty, spicy, junk)

const uttapam = new Dish('Uttapam', 'uttapam', config.cuisines.south_indian.text, '', 0.82, 0.23, 0.33, 0.78);
dishes.push(uttapam);

const dosa = new Dish('Dosa', 'dosa', config.cuisines.south_indian.text, '', 0.52, 0.23, 0.19, 0.64);
dishes.push(dosa);

const idli = new Dish('Idli', 'idli', config.cuisines.south_indian.text, '', 0.49, 0.42, 0.11, 0.59);
dishes.push(idli);

const coconut_rice = new Dish('Coconut Rice', 'coconutrice', config.cuisines.south_indian.text, '', 0.41, 0.43, 0.04, 0.63);
dishes.push(coconut_rice);

const vada = new Dish('Vada', 'vada', config.cuisines.south_indian.text, '', 0.73, 0.03, 0.58, 0.81);
dishes.push(vada);


// --------------------------------- META DATA ---------------------------------

console.log('Number of Dishes = ', dishes.length);
// console.log(dishes);