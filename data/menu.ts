export type MenuCategory =
  | "Breakfast"
  | "Salads"
  | "Entrée"
  | "Pasta, Pizza & Snacks"
  | "Main"
  | "Desserts"
  | "Sushi & Rolls"
  | "Hot Drinks"
  | "Juices & Sodas"
  | "Beers"
  | "Cocktails"
  | "Mocktails"
  | "White Wines"
  | "Rosé Wines"
  | "Red Wines"
  | "Champagne & Sparkling"
  | "Kids";

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: MenuCategory;
  featured?: boolean;
  homepageFeatured?: boolean;
  dietary?: string[];
  served?: string;
};
export const menuItems: MenuItem[] = [
  // ---------------------------------------------------------------------------
  // BREAKFAST
  // ---------------------------------------------------------------------------

  {
    id: "fruit-platter",
    name: "Fruit Platter",
    price: 800,
    category: "Breakfast",
    served: "7:30 AM – 10:30 AM",
  },
  {
    id: "chia-seeds-banana-yogurt-oatmeal",
    name: "Chia Seeds Banana Yogurt Oatmeal",
    price: 800,
    category: "Breakfast",
    served: "7:30 AM – 10:30 AM",
  },
  {
    id: "mango-passion-banana-waffles",
    name: "Mango Passion Banana Waffles",
    price: 900,
    category: "Breakfast",
    served: "7:30 AM – 10:30 AM",
  },
  {
    id: "spinach-feta-scrambled-eggs-wrap",
    name: "Spinach Feta Scrambled Eggs Wrap",
    price: 900,
    category: "Breakfast",
    served: "7:30 AM – 10:30 AM",
  },
  {
    id: "avocado-poached-eggs-toast",
    name: "Avocado & Poached Eggs Toast",
    price: 900,
    category: "Breakfast",
    served: "7:30 AM – 10:30 AM",
  },
  {
    id: "eggs-sunny-side-up",
    name: "Eggs Sunny Side Up",
    price: 700,
    category: "Breakfast",
    served: "7:30 AM – 10:30 AM",
  },
  {
    id: "plain-omelete",
    name: "Plain Omelette",
    price: 700,
    category: "Breakfast",
    served: "7:30 AM – 10:30 AM",
  },
  {
    id: "spanish-omelete",
    name: "Spanish Omelette",
    price: 900,
    category: "Breakfast",
    served: "7:30 AM – 10:30 AM",
  },
  {
    id: "cheese-omelete",
    name: "Cheese Omelette",
    price: 1000,
    category: "Breakfast",
    served: "7:30 AM – 10:30 AM",
  },
  {
    id: "shrimps-omelete",
    name: "Shrimps Omelette",
    price: 1800,
    category: "Breakfast",
    served: "7:30 AM – 10:30 AM",
  },
  {
    id: "english-breakfast",
    name: "English Breakfast",
    price: 1800,
    category: "Breakfast",
    served: "7:30 AM – 10:30 AM",
  },

  // ---------------------------------------------------------------------------
  // SALADS
  // ---------------------------------------------------------------------------

  {
    id: "avocado-tomato-salad",
    name: "Avocado Tomato Salad",
    description:
      "Avocado, tomato, lettuce, onion, coriander and avocado dressing.",
    price: 1100,
    category: "Salads",
    dietary: ["Vegan"],
  },
  {
    id: "quinoa-haloumi-salad",
    name: "Quinoa Haloumi Salad",
    description:
      "Quinoa, grilled haloumi, avocado, pomegranate, almond flakes, baby marrow, herbs and dressing.",
    price: 1600,
    category: "Salads",
    dietary: ["Vegan", "Organic", "Gluten Free"],
  },
  {
    id: "seafood-salad",
    name: "Seafood Salad",
    description:
      "Calamari, shrimps, octopus, fish fillet, lettuce, cherry tomatoes, cucumber, red onion, avocado, lime and dressing.",
    price: 1800,
    category: "Salads",
    featured: true,
  },
  {
    id: "ceviche-salad",
    name: "Ceviche Salad",
    description:
      "Fish fillet of the day, lemon, onions, dill, chilli, habanero, tomato concasse, onion, fresh coriander, cucumber juice and matoke chips.",
    price: 1600,
    category: "Salads",
  },
  {
    id: "greek-salad",
    name: "Greek Salad",
    description:
      "Tomatoes, cucumber, onions, capsicums, feta cheese and black olives.",
    price: 1600,
    category: "Salads",
  },
  {
    id: "caprese-salad",
    name: "Caprese Salad",
    description: "Buffalo mozzarella, selected tomatoes and basil.",
    price: 1600,
    category: "Salads",
  },

  // ---------------------------------------------------------------------------
  // ENTRÉE
  // ---------------------------------------------------------------------------

  {
    id: "calamari-tempura",
    name: "Calamari Tempura",
    description: "Calamari rings and wheat flour.",
    price: 1600,
    category: "Entrée",
  },
  {
    id: "king-prawns-tempura",
    name: "King Prawns Tempura",
    description: "Served with sweet chilli sauce and sriracha mayo.",
    price: 2600,
    category: "Entrée",
    featured: true,
  },
  {
    id: "smoked-fish-carpaccio",
    name: "Smoked Fish Carpaccio",
    description:
      "Smoked fish, red onion, lime and olive oil. Served with toast and butter.",
    price: 1800,
    category: "Entrée",
  },
  {
    id: "tuna-carpaccio",
    name: "Tuna Carpaccio",
    price: 1800,
    category: "Entrée",
  },
  {
    id: "chicken-wings-bbq-guinness",
    name: "Chicken Wings BBQ Guinness",
    description: "Chicken wings, soy sauce, honey and Guinness stout.",
    price: 1600,
    category: "Entrée",
  },
  {
    id: "fish-tartare",
    name: "Fish Tartare",
    description:
      "Tuna, avocado, ginger, dill, ponzu sauce, wasabi mayo, chives and sesame seeds.",
    price: 1600,
    category: "Entrée",
  },
  {
    id: "lebanese-set",
    name: "Lebanese Set",
    description:
      "Tabouli, hummus, falafel and baba ganoush. Served with two pieces of pita bread.",
    price: 1900,
    category: "Entrée",
    dietary: ["Vegan"],
    
  },
  {
    id: "lebanese-mezze",
    name: "Lebanese Mezze",
    description: "Falafel, hummus and pita bread.",
    price: 1000,
    category: "Entrée",
  },
  {
    id: "eggplant-parmigiano",
    name: "Eggplant Parmigiano",
    description:
      "Baked eggplant, mozzarella, Parmigiano, tomato sauce and basil.",
    price: 1400,
    category: "Entrée",
  },

  // ---------------------------------------------------------------------------
  // PASTA, PIZZA & SNACKS
  // ---------------------------------------------------------------------------

  {
    id: "spaghetti-bolognese",
    name: "Spaghetti Bolognese",
    description:
      "Beef mince, tomato, garlic, onion, oregano and nutmeg sauce. Slowly cooked and garnished with Parmesan and basil.",
    price: 1400,
    category: "Pasta, Pizza & Snacks",
  },
  {
    id: "prawns-tagliatelle",
    name: "Prawns Tagliatelle",
    description:
      "Creamy tagliatelle with prawns, Parmigiano and a touch of chilli.",
    price: 2600,
    category: "Pasta, Pizza & Snacks",
  },
  {
    id: "pizza-margherita",
    name: "Pizza Margherita",
    description: "Marinara sauce, Parmesan, mozzarella and basil.",
    price: 1100,
    category: "Pasta, Pizza & Snacks",
    dietary: ["Vegan", "Organic"],
  },
  {
    id: "chicken-pizza",
    name: "Chicken Pizza",
    description: "Marinara, mozzarella, chicken breast and onions.",
    price: 1400,
    category: "Pasta, Pizza & Snacks",
  },
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    description: "Marinara, mozzarella, salami and onions.",
    price: 1400,
    category: "Pasta, Pizza & Snacks",
  },
  {
    id: "veggie-pizza",
    name: "Veggie Pizza",
    description:
      "Mozzarella, tomatoes, capsicums, carrots, broccoli, cauliflower and mushrooms.",
    price: 1200,
    category: "Pasta, Pizza & Snacks",
    dietary: ["Mild", "Organic"],
  },
  {
    id: "focaccia",
    name: "Focaccia",
    description: "Olive oil, rosemary and garlic.",
    price: 1000,
    category: "Pasta, Pizza & Snacks",
    dietary: ["Vegan", "Organic"],
  },
  {
    id: "seafood-pizza",
    name: "Seafood Pizza",
    description: "Calamari, shrimps, octopus and onions.",
    price: 1600,
    category: "Pasta, Pizza & Snacks",
  },
  {
    id: "pizza-hawai",
    name: "Pizza Hawai",
    description: "Mozzarella, tomato sauce, cooked ham and pineapple.",
    price: 1600,
    category: "Pasta, Pizza & Snacks",
  },
  {
    id: "pizza-alla-putanesca",
    name: "Pizza Alla Putanesca",
    description: "Tomato sauce, mozzarella, Parmesan, capers and anchovy.",
    price: 1800,
    category: "Pasta, Pizza & Snacks",
  },
  {
    id: "beef-cheese-burger",
    name: "Beef Cheese Burger",
    description: "Served with chips and salad.",
    price: 1600,
    category: "Pasta, Pizza & Snacks",
  },
  {
    id: "chicken-bbq-burger",
    name: "Chicken BBQ Sauce Burger",
    price: 1600,
    category: "Pasta, Pizza & Snacks",
    dietary: ["Mild"],
  },
  {
    id: "fish-burger",
    name: "Fish Burger",
    price: 1600,
    category: "Pasta, Pizza & Snacks",
  },
  {
    id: "spicy-beans-burrito",
    name: "Spicy Beans Burrito",
    description: "Black beans, avocado, lettuce, pico de gallo and seasoning.",
    price: 1000,
    category: "Pasta, Pizza & Snacks",
    dietary: ["Vegetarian"],
  },
  {
    id: "spicy-beef-burrito",
    name: "Spicy Beef Burrito",
    description:
      "Ground beef, chilli, black beans, cheddar cheese and seasoning.",
    price: 1400,
    category: "Pasta, Pizza & Snacks",
  },

  // ---------------------------------------------------------------------------
  // MAIN
  // ---------------------------------------------------------------------------

  {
    id: "swahili-fish",
    name: "Swahili Fish",
    description:
      "Slightly grilled and finished in the oven with fresh vegetables, coconut cream and coriander. Served with steamed rice.",
    price: 1800,
    category: "Main",
    featured: true,
  },
  {
    id: "fish-fillet-a-la-fresca",
    name: "Fish Fillet A La Fresca",
    description:
      "Grilled fish fillet with cherry tomatoes, olives, capers and bruschetta.",
    price: 1800,
    category: "Main",
  },
  {
    id: "sesame-crusted-yellow-fin-tuna",
    name: "Sesame Seeds Crusted Yellow Fin Tuna",
    description:
      "Pan-fried Indian Ocean tuna with sesame seeds, fresh lemon, soy sauce, green pepper and coriander. Served with steamed vegetables and unagi sauce.",
    price: 1900,
    category: "Main",
    featured: true,
  },
  {
    id: "lobster-mombasa",
    name: "Lobster Mombasa",
    description:
      "Lobster with coconut, tomatoes and coriander. Served with coconut rice.",
    price: 4200,
    category: "Main",
    featured: true,
  },
  {
    id: "thai-fish",
    name: "Thai Fish",
    description:
      "Pan-fried fish fillet finished in hoisin sauce and sesame seeds. Served with steamed rice and fresh vegetables.",
    price: 1800,
    category: "Main",
  },
  {
    id: "fish-and-chips",
    name: "Fish & Chips",
    description:
      "Fish fillet battered in wheat and corn flour, served with chips.",
    price: 1800,
    category: "Main",
  },
  {
    id: "king-prawns",
    name: "King Prawns",
    description: "Choose grilled, piri-piri or tempura.",
    price: 2800,
    category: "Main",
    featured: true,
  },
  {
    id: "fish-tataki",
    name: "Fish Tataki",
    description: "Fresh fish with unagi, horseradish sauce and sesame seeds.",
    price: 1800,
    category: "Main",
  },
  {
    id: "thai-prawns-curry",
    name: "Thai Prawns Curry",
    description:
      "Queen prawn, olive oil, soy sauce, garlic, onion, Thai curry paste and coconut milk. Served with Thai jasmine rice.",
    price: 2100,
    category: "Main",
  },
  {
    id: "octopus-grilled",
    name: "Octopus Grilled",
    price: 2100,
    category: "Main",
  },
  {
    id: "calamari-grilled",
    name: "Calamari Grilled",
    price: 2200,
    category: "Main",
  },
  {
    id: "pepper-steak",
    name: "Pepper Steak",
    description:
      "Class A tenderloin with beef stock, black pepper and creamy mushroom sauce. Served medium or medium rare.",
    price: 3600,
    category: "Main",
  },
  {
    id: "rib-eye-steak",
    name: "Rib-Eye Steak",
    description:
      "Class A rib-eye served with chimichurri and roast potatoes. Served medium or medium rare.",
    price: 4800,
    category: "Main",
  },
  {
    id: "kofta-kebab",
    name: "Kofta Kebab",
    description:
      "Beef mince prepared with onion, garlic and herbs. Grilled and served with rosemary roast potatoes, kachumbari and tzatziki.",
    price: 1800,
    category: "Main",
  },
  {
    id: "pork-belly-ribs",
    name: "Pork Belly Ribs",
    description:
      "Slow-cooked pork belly ribs with spices, honey, mustard and ketchup. Served with rosemary baby potatoes and kachumbari.",
    price: 2900,
    category: "Main",
  },
  {
    id: "chicken-breast",
    name: "Chicken Breast",
    description: "Served with sweet potato mash.",
    price: 1800,
    category: "Main",
  },

  // ---------------------------------------------------------------------------
  // DESSERTS
  // ---------------------------------------------------------------------------

  {
    id: "san-sebastian-basque-cheesecake",
    name: "San Sebastian Basque Cheesecake",
    price: 1200,
    category: "Desserts",
    featured: true,
  },
  {
    id: "garash-torte",
    name: "Garash Torte",
    price: 900,
    category: "Desserts",
    dietary: ["Gluten Free"],
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    price: 1600,
    category: "Desserts",
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    description: "Per scoop.",
    price: 400,
    category: "Desserts",
  },

  // ---------------------------------------------------------------------------
  // SUSHI & ROLLS
  // ---------------------------------------------------------------------------

  {
    id: "godzila-combo-platter",
    name: "Godzila Combo Platter",
    description: "Chef's selection for two.",
    price: 5000,
    category: "Sushi & Rolls",
    featured: true,
  },
  {
    id: "sushi-chefs-special-osaka",
    name: "Sushi Chef's Special — Osaka",
    description:
      "King prawns with garlic mayo, 8 pcs nigiri, 2 pcs king fish and 2 pcs tuna sashimi.",
    price: 2600,
    category: "Sushi & Rolls",
    featured: true,
  },
  {
    id: "rainbow-sushi-platter",
    name: "Rainbow Sushi Platter",
    price: 1800,
    category: "Sushi & Rolls",
    featured: true,
  },
  {
    id: "kapa-hosomaki",
    name: "Kapa Hosomaki",
    description: "Cucumber, 8 pcs.",
    price: 1100,
    category: "Sushi & Rolls",
    dietary: ["Vegetarian"],
  },
  {
    id: "avocado-hosomaki",
    name: "Avocado Hosomaki",
    description: "8 pcs.",
    price: 1100,
    category: "Sushi & Rolls",
    dietary: ["Vegetarian"],
  },
  {
    id: "maguro-hosomaki",
    name: "Maguro Hosomaki",
    description: "Tuna, 8 pcs.",
    price: 2100,
    category: "Sushi & Rolls",
  },
  {
    id: "tuna-sashimi",
    name: "Tuna Sashimi",
    description: "Tuna, wasabi mayo, scallions and sesame seeds, 6 pcs.",
    price: 1800,
    category: "Sushi & Rolls",
  },
  {
    id: "nigiri",
    name: "Nigiri",
    description: "Tuna, king fish or vegan mango & avocado.",
    price: 1100,
    category: "Sushi & Rolls",
  },
  {
    id: "king-fish-sashimi",
    name: "King Fish Sashimi",
    description: "6 pcs.",
    price: 1800,
    category: "Sushi & Rolls",
  },
  {
    id: "osaka-rolls",
    name: "Osaka Rolls",
    description: "King prawns with garlic mayo, 8 pcs.",
    price: 1800,
    category: "Sushi & Rolls",
  },
  {
    id: "happy-vegie-rolls",
    name: "Happy Vegie Rolls",
    description: "Rice, pineapple, cucumber, avocado, mango and sriracha mayo.",
    price: 1100,
    category: "Sushi & Rolls",
    dietary: ["Vegetarian"],
  },
  {
    id: "samara-sushi-balls",
    name: "Samara Sushi Balls",
    description:
      "Avocado, pineapple, mango, cucumber, tuna, white fish, prawns and sesame seeds.",
    price: 1800,
    category: "Sushi & Rolls",
  },
  {
    id: "dragon-rolls",
    name: "Dragon Rolls",
    price: 1800,
    category: "Sushi & Rolls",
  },

  // ---------------------------------------------------------------------------
  // HOT DRINKS
  // ---------------------------------------------------------------------------

  {
    id: "coffee-black",
    name: "Coffee Black",
    price: 350,
    category: "Hot Drinks",
  },
  {
    id: "espresso",
    name: "Espresso",
    price: 350,
    category: "Hot Drinks",
  },
  {
    id: "espresso-double",
    name: "Espresso Double",
    price: 450,
    category: "Hot Drinks",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 400,
    category: "Hot Drinks",
  },
  {
    id: "cappuccino-double",
    name: "Cappuccino Double",
    price: 600,
    category: "Hot Drinks",
  },
  {
    id: "cappuccino-non-lactose",
    name: "Cappuccino Non-Lactose",
    price: 500,
    category: "Hot Drinks",
  },
  {
    id: "cafe-late",
    name: "Café Latte",
    price: 400,
    category: "Hot Drinks",
  },
  {
    id: "cafe-late-double",
    name: "Café Latte Double",
    price: 600,
    category: "Hot Drinks",
  },
  {
    id: "ice-coffee",
    name: "Ice Coffee",
    price: 700,
    category: "Hot Drinks",
  },
  {
    id: "tea-black-green-herbal",
    name: "Tea — Black / Green / Herbal",
    price: 300,
    category: "Hot Drinks",
  },
  {
    id: "tea-black-with-milk",
    name: "Tea Black With Milk",
    price: 350,
    category: "Hot Drinks",
  },
  {
    id: "masala-tea",
    name: "Masala Tea",
    price: 500,
    category: "Hot Drinks",
  },
  {
    id: "add-lactose-free-milk",
    name: "Add Lactose-Free Milk",
    price: 100,
    category: "Hot Drinks",
  },

  // ---------------------------------------------------------------------------
  // JUICES & SODAS
  // ---------------------------------------------------------------------------

  {
    id: "fresh-juices",
    name: "Fresh Juices",
    price: 500,
    category: "Juices & Sodas",
  },
  {
    id: "sodas",
    name: "Sodas",
    price: 250,
    category: "Juices & Sodas",
  },
  {
    id: "still-water",
    name: "Still Water 0.75L",
    price: 400,
    category: "Juices & Sodas",
  },
  {
    id: "sparkling-water",
    name: "Sparkling Water 0.75L",
    price: 500,
    category: "Juices & Sodas",
  },
  {
    id: "red-bull",
    name: "Red Bull",
    price: 600,
    category: "Juices & Sodas",
  },

  // ---------------------------------------------------------------------------
  // BEERS
  // ---------------------------------------------------------------------------

  {
    id: "local-beers",
    name: "Local Beers",
    description: "Lager, Malt, Lite, Cider, Pilsner and White Cap.",
    price: 500,
    category: "Beers",
  },
  {
    id: "guinness",
    name: "Guinness",
    price: 550,
    category: "Beers",
  },
  {
    id: "corona",
    name: "Corona",
    price: 800,
    category: "Beers",
  },
  {
    id: "savanna",
    name: "Savanna",
    price: 600,
    category: "Beers",
  },
  {
    id: "hunters-gold-cider",
    name: "Hunters Gold Cider",
    price: 600,
    category: "Beers",
  },

  // ---------------------------------------------------------------------------
  // COCKTAILS
  // ---------------------------------------------------------------------------

  {
    id: "swedish-riviera",
    name: "Swedish Riviera",
    description: "Vodka, coconut water, Prosecco, lemon, honey and cinnamon.",
    price: 1600,
    category: "Cocktails",
  },
  {
    id: "tequila-sparkling-passion",
    name: "Tequila Sparkling Passion",
    description: "Tequila Blanco, passionfruit and sparkling wine.",
    price: 1600,
    category: "Cocktails",
  },
  {
    id: "spritz-veneziano",
    name: "Spritz Veneziano",
    description: "Prosecco and Aperol.",
    price: 1600,
    category: "Cocktails",
  },
  {
    id: "limoncello-spritz",
    name: "Limoncello Spritz",
    description: "Limoncello and sparkling wine.",
    price: 1600,
    category: "Cocktails",
  },
  {
    id: "sauvi-b-ginger-spritzer",
    name: "Sauvi B Ginger Spritzer",
    description: "Fresh ginger, Sauvignon Blanc, lime juice and soda water.",
    price: 1600,
    category: "Cocktails",
  },
  {
    id: "st-germain-spritz",
    name: "St. Germain Spritz",
    description: "Elderflower liqueur and sparkling wine.",
    price: 1600,
    category: "Cocktails",
  },
  {
    id: "campari-spritz",
    name: "Campari Spritz",
    description: "Campari bitter and sparkling wine.",
    price: 1600,
    category: "Cocktails",
  },
  {
    id: "mimosa",
    name: "Mimosa",
    description: "Fresh orange juice and sparkling wine.",
    price: 1600,
    category: "Cocktails",
  },
  {
    id: "spicy-cucumber-margarita",
    name: "Spicy Cucumber Margarita",
    description:
      "Tequila, lime juice, pineapple juice, honey, jalapeño, cucumber and Tajin spice.",
    price: 1400,
    category: "Cocktails",
  },
  {
    id: "negroski",
    name: "Negroski",
    description: "Vodka, Campari Rosso and vermouth.",
    price: 1400,
    category: "Cocktails",
  },
  {
    id: "negroni",
    name: "Negroni",
    description: "Gin, Campari Rosso and vermouth.",
    price: 1400,
    category: "Cocktails",
  },
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    description: "Vodka, sugar syrup, Kahlua and espresso.",
    price: 1400,
    category: "Cocktails",
  },
  {
    id: "dawa",
    name: "Dawa",
    description: "Kenya Cane, lime and honey.",
    price: 1400,
    category: "Cocktails",
  },
  {
    id: "mojito",
    name: "Mojito",
    description: "Light rum, mint, soda, lime and sugar.",
    price: 1400,
    category: "Cocktails",
  },
  {
    id: "pina-colada",
    name: "Piña Colada",
    description: "Light rum, coconut rum, coconut cream and pineapple juice.",
    price: 1400,
    category: "Cocktails",
  },
  {
    id: "blue-marlin-cocktail",
    name: "Blue Marlin",
    description: "Gin, Blue Curaçao, Southern Comfort and pineapple juice.",
    price: 1400,
    category: "Cocktails",
    featured: true,
  },
  {
    id: "bad-attitude",
    name: "Bad Attitude",
    description:
      "Rum, vodka, gin, tequila, triple sec, Amaretto, pineapple, orange and cranberry.",
    price: 1400,
    category: "Cocktails",
  },
  {
    id: "sex-on-the-beach",
    name: "Sex on the Beach",
    description: "Vodka, Southern Comfort, orange juice and cranberry juice.",
    price: 1400,
    category: "Cocktails",
  },
  {
    id: "long-island",
    name: "Long Island",
    description:
      "Light rum, gin, vodka, tequila, triple sec, lemon and Coca-Cola.",
    price: 1400,
    category: "Cocktails",
  },
  {
    id: "cucumber-gimlet",
    name: "Cucumber Gimlet",
    description: "Hendrick's Gin, lime and cucumber.",
    price: 1400,
    category: "Cocktails",
  },

  // ---------------------------------------------------------------------------
  // MOCKTAILS
  // ---------------------------------------------------------------------------

  {
    id: "shirley-temple",
    name: "Shirley Temple",
    description: "Ginger ale, lime and grenadine.",
    price: 800,
    category: "Mocktails",
  },
  {
    id: "mai-tai-mocktail",
    name: "Mai Tai Mocktail",
    description: "Orange juice, pineapple juice, orgeat syrup, mint and lime.",
    price: 800,
    category: "Mocktails",
  },
  {
    id: "banana-daiquiry",
    name: "Banana Daiquiry",
    description: "Banana, pineapple and coconut cream.",
    price: 800,
    category: "Mocktails",
  },
  {
    id: "lemon-iced-tea",
    name: "Lemon Iced Tea",
    description: "Lemon juice, black tea and honey syrup.",
    price: 800,
    category: "Mocktails",
  },
  {
    id: "rosemary-rush",
    name: "Rosemary Rush",
    description: "Rosemary, lime juice, simple syrup and soda water.",
    price: 800,
    category: "Mocktails",
  },

  // ---------------------------------------------------------------------------
  // WHITE WINES
  // ---------------------------------------------------------------------------

  {
    id: "setzer-riesling",
    name: "Setzer Riesling",
    description: "Weinviertel, Austria.",
    price: 5900,
    category: "White Wines",
  },
  {
    id: "bruce-jack-pinot-grigio",
    name: "Bruce Jack Pinot Grigio",
    description: "South Africa, Western Cape.",
    price: 4500,
    category: "White Wines",
  },
  {
    id: "bruce-jack-chenin-blanc",
    name: "Bruce Jack Chenin Blanc",
    description: "South Africa, Western Cape.",
    price: 4500,
    category: "White Wines",
  },
  {
    id: "pulpo-sauvignon-blanc",
    name: "Pulpo Sauvignon Blanc",
    description: "South Africa.",
    price: 4800,
    category: "White Wines",
  },
  {
    id: "mucho-mas-blanco",
    name: "Mucho Más Blanco N.V.",
    description: "Félix Solís, Spain.",
    price: 4900,
    category: "White Wines",
  },
  {
    id: "yealands-sauvignon-blanc",
    name: "Yealands Sauvignon Blanc",
    description: "Marlborough, New Zealand.",
    price: 5900,
    category: "White Wines",
  },
  {
    id: "petal-stem-sauvignon-blanc",
    name: "Petal & Stem Sauvignon Blanc",
    description: "Marlborough, New Zealand.",
    price: 4800,
    category: "White Wines",
  },
  {
    id: "rutini-collection-sauvignon-blanc",
    name: "Rutini Collection Sauvignon Blanc",
    description: "Mendoza, Argentina.",
    price: 7900,
    category: "White Wines",
  },
  {
    id: "villa-antinori-pinot-bianco",
    name: "Villa Antinori Pinot Bianco",
    description: "Tenuta Monteloro, Toscana.",
    price: 6500,
    category: "White Wines",
  },
  {
    id: "trumpeter-rutini-chardonnay",
    name: "Trumpeter Rutini Reserve Chardonnay",
    description: "Uco Valley, Argentina.",
    price: 6200,
    category: "White Wines",
  },
  {
    id: "house-white-wine",
    name: "House White Wine",
    description: "Glass.",
    price: 800,
    category: "White Wines",
  },

  // ---------------------------------------------------------------------------
  // ROSÉ WINES
  // ---------------------------------------------------------------------------

  {
    id: "opaline-demoiselle-rose",
    name: "Opaline Demoiselle Rosé",
    description: "France, Var.",
    price: 4300,
    category: "Rosé Wines",
  },
  {
    id: "gerard-bertrand-gris-blanc",
    name: "Gérard Bertrand Gris Blanc",
    description: "Pays d'Oc, France.",
    price: 5200,
    category: "Rosé Wines",
  },
  {
    id: "house-rose-wine",
    name: "House Rosé Wine",
    description: "Glass.",
    price: 800,
    category: "Rosé Wines",
  },

  // ---------------------------------------------------------------------------
  // RED WINES
  // ---------------------------------------------------------------------------

  {
    id: "bruce-jack-pinotage-malbec",
    name: "Bruce Jack Pinotage Malbec",
    description: "Western Cape, South Africa.",
    price: 4500,
    category: "Red Wines",
  },
  {
    id: "bruce-jack-merlot",
    name: "Bruce Jack Merlot",
    description: "Western Cape, South Africa.",
    price: 4500,
    category: "Red Wines",
  },
  {
    id: "bruce-jack-cabernet-sauvignon",
    name: "Bruce Jack Cabernet Sauvignon",
    description: "Western Cape, South Africa.",
    price: 4500,
    category: "Red Wines",
  },
  {
    id: "bruce-jack-shiraz",
    name: "Bruce Jack Shiraz",
    description: "Western Cape, South Africa.",
    price: 4500,
    category: "Red Wines",
  },
  {
    id: "rutini-cabernet-malbec",
    name: "Rutini Collection Cabernet – Malbec",
    description: "Mendoza, Argentina.",
    price: 7600,
    category: "Red Wines",
  },
  {
    id: "villa-antinori-rosso",
    name: "Villa Antinori Rosso",
    description: "Toscana, Italy.",
    price: 6700,
    category: "Red Wines",
  },
  {
    id: "mucho-mas-tinto",
    name: "Mucho Más Tinto — Black Edition N.V.",
    description: "Félix Solís, Spain.",
    price: 4800,
    category: "Red Wines",
  },
  {
    id: "house-red-wine",
    name: "House Red Wine",
    description: "Glass.",
    price: 800,
    category: "Red Wines",
  },

  // ---------------------------------------------------------------------------
  // CHAMPAGNE & SPARKLING
  // ---------------------------------------------------------------------------

  {
    id: "glass-bubbly",
    name: "Glass Bubbly",
    price: 1100,
    category: "Champagne & Sparkling",
  },
  {
    id: "moet-imperial-brut",
    name: "Moët & Chandon Imperial Brut",
    description: "France.",
    price: 19000,
    category: "Champagne & Sparkling",
  },
  {
    id: "moet-nectar-imperial",
    name: "Moët & Chandon Nectar Impérial",
    description: "Demi Sec, Champagne, France.",
    price: 28000,
    category: "Champagne & Sparkling",
  },
  {
    id: "gh-mumm-le-demi-sec",
    name: "GH Mumm Le Demi Sec",
    price: 15000,
    category: "Champagne & Sparkling",
  },
  {
    id: "fantinel-one-only-brut",
    name: "Fantinel One&Only Brut Prosecco",
    price: 6400,
    category: "Champagne & Sparkling",
  },

  // ---------------------------------------------------------------------------
  // KIDS
  // ---------------------------------------------------------------------------

  {
    id: "kids-macaroni-cheese",
    name: "Macaroni & Cheese",
    price: 850,
    category: "Kids",
    served: "12:00 PM – 8:30 PM",
  },
  {
    id: "kids-creamy-chicken-pasta",
    name: "Creamy Chicken Pasta",
    price: 900,
    category: "Kids",
    served: "12:00 PM – 8:30 PM",
  },
  {
    id: "kids-meatballs-spaghetti",
    name: "Meatballs Spaghetti",
    price: 850,
    category: "Kids",
    served: "12:00 PM – 8:30 PM",
  },
  {
    id: "kids-pizza-bolognese",
    name: "Pizza Bolognese",
    price: 900,
    category: "Kids",
    served: "12:00 PM – 8:30 PM",
  },
  {
    id: "kids-ham-pineapple-pizza",
    name: "Ham & Pineapple Pizza",
    price: 900,
    category: "Kids",
    served: "12:00 PM – 8:30 PM",
  },
  {
    id: "kids-chicken-nuggets",
    name: "Chicken Nuggets",
    price: 850,
    category: "Kids",
    served: "12:00 PM – 8:30 PM",
  },
  {
    id: "kids-cheese-focaccia",
    name: "Cheese Focaccia",
    price: 800,
    category: "Kids",
    served: "12:00 PM – 8:30 PM",
  },
  {
    id: "kids-hot-dog",
    name: "Hot Dog",
    price: 800,
    category: "Kids",
    served: "12:00 PM – 8:30 PM",
  },
  {
    id: "kids-honey-nutty-greek-yogurt",
    name: "Honey Nutty Greek Yogurt",
    price: 600,
    category: "Kids",
    served: "12:00 PM – 8:30 PM",
  },
  {
    id: "kids-fruty-sundy",
    name: "Fruty Sundy",
    price: 500,
    category: "Kids",
    served: "12:00 PM – 8:30 PM",
  },
];

export const menuCategories: MenuCategory[] = [
  "Breakfast",
  "Salads",
  "Entrée",
  "Pasta, Pizza & Snacks",
  "Main",
  "Desserts",
  "Sushi & Rolls",
  "Hot Drinks",
  "Juices & Sodas",
  "Beers",
  "Cocktails",
  "Mocktails",
  "White Wines",
  "Rosé Wines",
  "Red Wines",
  "Champagne & Sparkling",
  "Kids",
];

export const featuredDishes = menuItems.filter((item) => item.featured);
