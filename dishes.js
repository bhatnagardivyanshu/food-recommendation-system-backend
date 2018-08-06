const Dish = require("./Dish.model");
const config = require("./config");
// constructor(name, code, cuisine, img, sweet, salty, spicy, junk)

const dishes = (module.exports = []);

// --------------------------------- ITALIAN ---------------------------------

const pizza = new Dish(
  "Pizza",
  "pizza",
  config.cuisines.italian.text,
  "https://s.hswstatic.com/gif/recipes/easy-personal-pizza-recipe-1.jpg",
  0.77,
  0.33,
  0.29,
  0.9
);
dishes.push(pizza);

const pasta = new Dish(
  "Pasta",
  "pasta",
  config.cuisines.italian.text,
  "http://del.h-cdn.co/assets/cm/15/10/54f6778de66db_-_919410edec43d0b24531a868832da-1.jpg",
  0.62,
  0.43,
  0.29,
  0.9
);
dishes.push(pasta);

const garlic_bread = new Dish(
  "Garlic Bread",
  "garlicbread",
  config.cuisines.italian.text,
  "https://i2.wp.com/kidseatbyshanai.com/wp-content/uploads/2018/03/cheesy_pullapart_garlic_bread_square2.jpg?fit=200%2C200",
  0.62,
  0.43,
  0.29,
  0.9
);
dishes.push(garlic_bread);

const italian_salad = new Dish(
  "Italian Salad",
  "italiansalad",
  config.cuisines.italian.text,
  "http://purpledonkeycooking.com/wp-content/uploads/2016/06/x201010-xl-big-italian-salad-200x200.jpg.pagespeed.ic.R7eTUnu6uU.jpg",
  0.62,
  0.43,
  0.29,
  0.9
);
dishes.push(italian_salad);

// --------------------------------- AMERICAN ---------------------------------
// constructor(name, code, cuisine, img,        sweet, salty, spicy, junk)

const burger = new Dish(
  "Burger",
  "burger",
  config.cuisines.american.text,
  "https://therecipecritic.com/wp-content/uploads/2013/08/quesoburgerthumb.jpg",
  0.81,
  0.31,
  0.47,
  0.92
);
dishes.push(burger);

const sandwich = new Dish(
  "Sandwich",
  "sandwich",
  config.cuisines.american.text,
  "https://bakingmischief.com/wp-content/uploads/2016/04/pesto-chicken-sandwiches-on-sourdough-image-square1-200x200.jpg",
  0.56,
  0.45,
  0.23,
  0.78
);
dishes.push(sandwich);

const cheese_fries = new Dish(
  "Cheese Fries",
  "cheesefries",
  config.cuisines.american.text,
  "http://www.recipe4living.com/assets/itemimages/200/200/3/default_bd964a8c7cb540e78f9eee9a50a15c38_junemediacheesefries.jpg",
  0.84,
  0.28,
  0.47,
  0.88
);
dishes.push(cheese_fries);

const waffle = new Dish(
  "Waffle",
  "waffle",
  config.cuisines.american.text,
  "https://igx.4sqi.net/img/general/200x200/34497809_gTBPdBLmefizXmEBFgVS4mpUf0t8FgX6cVcSzdCdY5g.jpg",
  0.17,
  0.89,
  0.07,
  0.81
);
dishes.push(waffle);

const chicken_wrap = new Dish(
  "Chicken Wrap",
  "chickenwrap",
  config.cuisines.american.text,
  "https://s.hswstatic.com/gif/recipes/1535821890_sun-dried-tomato-wraps-with-fried-chicken-recipe.jpg",
  0.81,
  0.21,
  0.76,
  0.62
);
dishes.push(chicken_wrap);

// --------------------------------- CHINESE ---------------------------------
// constructor(name, code, cuisine, img,        sweet, salty, spicy, junk)

const noodles = new Dish(
  "Noodles",
  "noodles",
  config.cuisines.chinese.text,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ARtDeCsq5kb7Wk9ijXlsYWbaEYWWqbLBi0e7rMV5i5i4yQjYoQ",
  0.82,
  0.09,
  0.59,
  0.69
);
dishes.push(noodles);

const chilli_paneer = new Dish(
  "Chilli Paneer",
  "chillipaneer",
  config.cuisines.chinese.text,
  "https://www.mangoo.in/wp-content/uploads/2018/01/pns-Chilli-Paneer-Dry-e1519827353422-200x200.jpg",
  0.79,
  0.37,
  0.72,
  0.81
);
dishes.push(chilli_paneer);

const manchurian = new Dish(
  "Manchurian",
  "manchurian",
  config.cuisines.chinese.text,
  "https://i0.wp.com/mypullzone.9vexd6dl53at.maxcdn-edge.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10.jpg?fit=1200%2C967&resize=200%2C200",
  0.88,
  0.15,
  0.61,
  0.74
);
dishes.push(manchurian);

const spring_roll = new Dish(
  "Spring Roll",
  "springroll",
  config.cuisines.chinese.text,
  "https://tiimg.tistatic.com/fp/thumb/4/001/834/veg-spring-roll-287.jpg",
  0.72,
  0.13,
  0.66,
  0.85
);
dishes.push(spring_roll);

const chilli_potato = new Dish(
  "Chilli Potato",
  "chillipotato",
  config.cuisines.chinese.text,
  "http://whatslife.in/wp-content/uploads/2017/01/CHILLI_HONEY_POTATO_DRY-200x200.jpg",
  0.63,
  0.42,
  0.59,
  0.85
);
dishes.push(chilli_potato);

const fried_rice = new Dish(
  "Fried Rice",
  "friedrice",
  config.cuisines.chinese.text,
  "https://www.vegrecipesofindia.com/wp-content/uploads/2013/08/veg-fried-rice-recipe-thumbnail-200x200.jpg",
  0.63,
  0.12,
  0.59,
  0.85
);
dishes.push(fried_rice);

const singapore_noodles = new Dish(
  "Singapore Noodles",
  "singaporenoodles",
  config.cuisines.chinese.text,
  "https://doonatdoor.com/image/cache/BKSbazaar/111111111kkkkk/chow/Spicy-Singapore-Noodles-with-Curry-min-200x200.jpg",
  0.72,
  0.42,
  0.42,
  0.82
);
dishes.push(singapore_noodles);

// --------------------------------- NORTH INDIAN ---------------------------------
// constructor(name, code, cuisine, img,        sweet, salty, spicy, junk)

const bread_pakoda = new Dish(
  "Bread Pakoda",
  "breadpakoda",
  config.cuisines.north_indian.text,
  "https://b.zmtcdn.com/data/reviews_photos/b03/8b42e91ec9e671079d697c5f24233b03_1520064401.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  0.77,
  0.38,
  0.41,
  0.77
);
dishes.push(bread_pakoda);

const samosa = new Dish(
  "Samosa",
  "samosa",
  config.cuisines.north_indian.text,
  "https://lh3.googleusercontent.com/-44nKRo00iis/Tn9pdPez23I/AAAAAAAAAGA/1tB4CL2vd3A/s400/samosa.jpg",
  0.77,
  0.08,
  0.71,
  0.9
);
dishes.push(samosa);

const butter_chicken = new Dish(
  "Butter Chicken",
  "butterchicken",
  config.cuisines.north_indian.text,
  "http://allrecipeshub.com/wp-content/uploads/2016/03/Butter-chicken-200x200.jpg",
  0.77,
  0.38,
  0.54,
  0.88
);
dishes.push(butter_chicken);

const kachodi = new Dish(
  "Kachodi",
  "kachodi",
  config.cuisines.north_indian.text,
  "https://b.zmtcdn.com/data/reviews_photos/f38/c0ef0c24bf167f5c4179fb2bec82cf38_1520440974.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  0.82,
  0.12,
  0.77,
  0.68
);
dishes.push(kachodi);

const pao_bhaji = new Dish(
  "Pao Bhaji",
  "paobhaji",
  config.cuisines.north_indian.text,
  "https://b.zmtcdn.com/data/reviews_photos/e09/e0128797b97259af7734fce3cb384e09_1509809232.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  0.82,
  0.23,
  0.77,
  0.83
);
dishes.push(pao_bhaji);

const dal_makhani = new Dish(
  "Dal Makhani",
  "dalmakhani",
  config.cuisines.north_indian.text,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfolVbD4UMRGFx6veIyJyHS7EnMeSHDTi4amAM0xXpkqOP-j0HA",
  0.82,
  0.23,
  0.77,
  0.83
);
dishes.push(dal_makhani);

const shahi_paneer = new Dish(
  "Shahi Paneer",
  "shahipaneer",
  config.cuisines.north_indian.text,
  "https://i.pinimg.com/236x/20/b0/11/20b011bc15af6582ceb79b856f5c2962--side-dish-recipes-dishes-recipes.jpg",
  0.71,
  0.41,
  0.55,
  0.78
);
dishes.push(shahi_paneer);

const rasmalai = new Dish(
  "Rasmalai",
  "rasmalai",
  config.cuisines.north_indian.text,
  "https://doonatdoor.com/image/cache/BKSbazaar/1stopnshop/traditional_rasmalai_recipe-200x200.jpg",
  0.09,
  0.81,
  0.05,
  0.77
);
dishes.push(rasmalai);

const gulab_jamun = new Dish(
  "Gulab Jamun",
  "gulabjamun",
  config.cuisines.north_indian.text,
  "http://s2.grouprecipes.com/images/recipes/200/2a08407e2a61fd5e5d634a5b43f5a84a.jpg",
  0.03,
  0.96,
  0.01,
  0.92
);
dishes.push(gulab_jamun);

const jalebi = new Dish(
  "Jalebi",
  "jalebi",
  config.cuisines.north_indian.text,
  "https://www.merisaheli.com/wp-content/uploads/2018/03/easy-to-ways-sweet-jalebi-at-home-1-16267-aps-jal1.jpg",
  0.06,
  0.91,
  0.02,
  0.87
);
dishes.push(jalebi);

const maggi = new Dish(
  "Maggi",
  "maggi",
  config.cuisines.north_indian.text,
  "http://sahakarisupermarketudaipur.com/wp-content/uploads/2017/08/MAGGI-NOODLES-MASALA-150GM_resize.jpeg",
  0.77,
  0.24,
  0.59,
  0.66
);
dishes.push(maggi);

// --------------------------------- SOUTH INDIAN ---------------------------------
// constructor(name, code, cuisine, img,        sweet, salty, spicy, junk)

const uttapam = new Dish(
  "Uttapam",
  "uttapam",
  config.cuisines.south_indian.text,
  "https://doonatdoor.com/image/cache/BKSbazaar/111111111Bakerywala/pizza/uttapam-min-200x200.jpg",
  0.82,
  0.23,
  0.33,
  0.78
);
dishes.push(uttapam);

const dosa = new Dish(
  "Dosa",
  "dosa",
  config.cuisines.south_indian.text,
  "https://i1.wp.com/www.geetascuisine.com/wp-content/uploads/2016/02/Quinoa-Mix-Daal-Dosa_15.jpg?fit=427%2C640&resize=200%2C200",
  0.52,
  0.23,
  0.19,
  0.64
);
dishes.push(dosa);

const idli = new Dish(
  "Idli",
  "idli",
  config.cuisines.south_indian.text,
  "https://b.zmtcdn.com/data/pictures/chains/3/68543/f2179a68f239d642ba8651ad9c1e78fa.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  0.49,
  0.42,
  0.11,
  0.59
);
dishes.push(idli);

const coconut_rice = new Dish(
  "Coconut Rice",
  "coconutrice",
  config.cuisines.south_indian.text,
  "http://www.chefd.in/image/cache/catalog/Products/Coconut-Rice-Dish-200x200.jpg",
  0.41,
  0.43,
  0.04,
  0.63
);
dishes.push(coconut_rice);

const vada = new Dish(
  "Vada",
  "vada",
  config.cuisines.south_indian.text,
  "http://www.addykart.com/image/cache/catalog/MADRAS/vadaSambar-200x200.jpg",
  0.73,
  0.03,
  0.58,
  0.81
);
dishes.push(vada);

// --------------------------------- META DATA ---------------------------------

console.log("Number of Dishes = ", dishes.length);
// console.log(dishes);
