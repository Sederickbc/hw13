const {Burger} = require('../models');
const burgersToSeed = [
  { burger_name: "Impossible Burger" },
  { burger_name: "Chicken Burger" },
  { burger_name: "Veggie Burger" },
  { burger_name: "Fish Burger" },
  { burger_name: "Bean Burger" },
  { burger_name: "Tofu Burger" },
  { burger_name: "Halal Burger" },
  { burger_name: "Cowart Special" },
  { burger_name: "Fish Burger" ,devoured: 1},
  { burger_name: "Bean Burger" ,devoured: 1},
  { burger_name: "Tofu Burger" ,devoured: 1},
  { burger_name: "Halal Burger" ,devoured: 1},
  { burger_name: "Cowart Special" ,devoured: 1}
];

Burger.bulkCreate(burgersToSeed).then(res=> console.log("success!"))