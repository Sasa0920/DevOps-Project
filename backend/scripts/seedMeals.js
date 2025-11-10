// backend/scripts/seedMeals.js
import mongoose from "mongoose";
import Meal from "../models/Meal.js";

mongoose.connect('mongodb://mongo:27017/mydb')
  .then(async () => {
    const meals = [
      // BREAKFAST
      {
        name: "Banana Toast",
        description: "Toast topped with peanut butter and banana slices.",
        price: 600,
        image: "http://localhost:5000/assets/BananaToast.png",
        category: "BREAKFAST"
      },
      {
        name: "Bagel with Lox",
        description: "Toasted bagel topped with smoked salmon, cream cheese, and capers.",
        price: 300,
        image: "http://localhost:5000/assets/BagelWithLox.png",
        category: "BREAKFAST"
      },
      {
        name: "Sunny Oats",
        description: "Creamy oatmeal swirled with cinnamon and honey.",
        price: 350,
        image: "http://localhost:5000/assets/SunnyOats.png",
        category: "BREAKFAST"
      },
      {
        name: "Breakfast Burrito",
        description: "Eggs, cheese, and veggies wrapped in a soft tortilla.",
        price: 450,
        image: "http://localhost:5000/assets/BreakfastBurrito.png",
        category: "BREAKFAST"
      },
      {
        name: "Eggs Benedict",
        description: "Poached eggs over toasted English muffins with hollandaise sauce.",
        price: 325,
        image: "http://localhost:5000/assets/EggsBenedict.png",
        category: "BREAKFAST"
      },
      {
        name: "Bagel Smash",
        description: "Toasted bagel with cream cheese and smoked salmon.",
        price: 420,
        image: "http://localhost:5000/assets/BagelSmash.png",
        category: "BREAKFAST"
      },

      // LUNCH
      {
        name: "Grilled Salmon Bowl",
        description: "Grilled salmon over quinoa, roasted veggies, and lemon-dill sauce.",
        price: 750,
        image: "http://localhost:5000/assets/GrilledSalmonBowl.png",
        category: "LUNCH"
      },
      {
        name: "Sushi Combo",
        description: "Assorted sushi rolls with tuna, salmon, avocado, and soy sauce.",
        price: 650,
        image: "http://localhost:5000/assets/SushiCombo.png",
        category: "LUNCH"
      },
      {
        name: "Red Chicken Curry",
        description: "A balance of creamy, sweet, and slightly spicy notes.",
        price: 500,
        image: "http://localhost:5000/assets/RedChickenCurry.png",
        category: "LUNCH"
      },
      {
        name: "Quinoa Salad",
        description: "Healthy salad with quinoa, mixed greens, and vinaigrette.",
        price: 650,
        image: "http://localhost:5000/assets/QuinoaSalad.png",
        category: "LUNCH"
      },
      {
        name: "Veggie Wrap",
        description: "A wrap filled with a mix of seasonal vegetables and hummus.",
        price: 425,
        image: "http://localhost:5000/assets/VeggieWrap.png",
        category: "LUNCH"
      },
      {
        name: "Fish Tacos",
        description: "Grilled fish tacos with cabbage slaw and lime crema.",
        price: 325,
        image: "http://localhost:5000/assets/FishTacos.png",
        category: "LUNCH"
      },

      // DINNER
      {
        name: "Pasta Primavera",
        description: "Pasta with fresh seasonal vegetables in a light sauce.",
        price: 500,
        image: "http://localhost:5000/assets/PastaPrimavera.png",
        category: "DINNER"
      },
      {
        name: "Grilled Ribeye Steak",
        description: "Juicy ribeye steak grilled to perfection.",
        price: 1200,
        image: "http://localhost:5000/assets/GrilledRibeyeSteak.png",
        category: "DINNER"
      },
      {
        name: "Shrimp Scampi",
        description: "Shrimp cooked in garlic butter sauce over linguine.",
        price: 1050,
        image: "http://localhost:5000/assets/ShrimpScampi.png",
        category: "DINNER"
      },
      {
        name: "Vegetable Stir Fry",
        description: "Crispy vegetables stir-fried in a tangy sauce.",
        price: 950,
        image: "http://localhost:5000/assets/VegetableStirFry.png",
        category: "DINNER"
      },
      {
        name: "Pesto Pasta with Shrimp",
        description: "Linguine tossed in a vibrant pesto sauce with succulent shrimp.",
        price: 1325,
        image: "http://localhost:5000/assets/PestoPastaWithShrimp.png",
        category: "DINNER"
      },
      {
        name: "Vegetarian Stuffed Peppers",
        description: "Bell peppers filled with a savory mix of quinoa, black beans, and vegetables.",
        price: 820,
        image: "http://localhost:5000/assets/VegetarianStuffedPeppers.png",
        category: "DINNER"
      },

      // DESSERTS
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
        price: 300,
        image: "http://localhost:5000/assets/ChocolateLavaCake.png",
        category: "DESSERTS"
      },
      {
        name: "Profiteroles",
        description: "Cream-filled pastry puffs drizzled with chocolate sauce.",
        price: 350,
        image: "http://localhost:5000/assets/Profiteroles.png",
        category: "DESSERTS"
      },
      {
        name: "Pavlova",
        description: "Crispy meringue with a soft, light inside, topped with fresh fruits and whipped cream.",
        price: 450,
        image: "http://localhost:5000/assets/Pavlova.png",
        category: "DESSERTS"
      },
      {
        name: "Baklava",
        description: "Layered pastry with chopped nuts and honey, a Middle Eastern delight.",
        price: 550,
        image: "http://localhost:5000/assets/Baklava.png",
        category: "DESSERTS"
      },
      {
        name: "Strawberry Shortcake",
        description: "Fluffy cake layered with fresh strawberries and whipped cream.",
        price: 225,
        image: "http://localhost:5000/assets/StrawberryShortcake.png",
        category: "DESSERTS"
      },
      {
        name: "Chocolate Mousse",
        description: "Light and airy chocolate mousse with whipped cream.",
        price: 520,
        image: "http://localhost:5000/assets/ChocolateMousse.png",
        category: "DESSERTS"
      },

      // DRINKS
      {
        name: "Iced Latte",
        description: "Cool and refreshing espresso-based iced latte.",
        price: 600,
        image: "http://localhost:5000/assets/IcedLatte.png",
        category: "DRINKS"
      },
      {
        name: "Strawberry Milkshake",
        description: "Creamy milkshake loaded with fresh strawberries and a hint of vanilla.",
        price: 650,
        image: "http://localhost:5000/assets/StrawberryMilkshake.png",
        category: "DRINKS"
      },
      {
        name: "Green Tea Smoothie",
        description: "A vibrant mix of green tea, fruits, and a splash of honey for sweetness.",
        price: 450,
        image: "http://localhost:5000/assets/GreenTeaSmoothie.png",
        category: "DRINKS"
      },
      {
        name: "Lemonade",
        description: "Freshly squeezed lemonade with a tangy kick.",
        price: 550,
        image: "http://localhost:5000/assets/Lemonade.png",
        category: "DRINKS"
      },
      {
        name: "Cappuccino",
        description: "Frothy cappuccino with a perfect balance of espresso and milk.",
        price: 720,
        image: "http://localhost:5000/assets/Cappuccino.png",
        category: "DRINKS"
      },
      {
        name: "Margarita",
        description: "Refreshing margarita with tequila, lime, and a salt rim.",
        price: 620,
        image: "http://localhost:5000/assets/Margarita.png",
        category: "DRINKS"
      }
    ];

    await Meal.deleteMany({});
    await Meal.insertMany(meals);
    console.log('Meals inserted');
    mongoose.disconnect();
  })
  .catch(console.error);
