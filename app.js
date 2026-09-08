const menuItems = [
  {
    day: "Monday",
    name: "Bibimbap",
    price: 6500,
    vegetarian: true,
    description: "Rice, vegetables, and gochujang."
  },
  {
    day: "Monday",
    name: "Chicken rice",
    price: 7000,
    vegetarian: false,
    description: "Grilled chicken with steamed rice."
  },
  {
    day: "Monday",
    name: "Tofu bowl",
    price: 6000,
    vegetarian: true,
    description: "Tofu, greens, and sesame dressing."
  },
  {
    day: "Tuesday",
    name: "Mushroom pasta",
    price: 7500,
    vegetarian: true,
    description: "Pasta with mushrooms and herbs."
  },
  {
    day: "Tuesday",
    name: "Beef noodles",
    price: 8000,
    vegetarian: false,
    description: "Noodles with beef and vegetables."
  },
  {
    day: "Tuesday",
    name: "Lentil soup",
    price: 5500,
    vegetarian: true,
    description: "Lentils with bread on the side."
  },
  {
    day: "Wednesday",
    name: "Fish rice",
    price: 7500,
    vegetarian: false,
    description: "Fish with rice and seasonal greens."
  },
  {
    day: "Wednesday",
    name: "Pork cutlet",
    price: 8000,
    vegetarian: false,
    description: "Breaded pork with cabbage salad."
  },
  {
    day: "Wednesday",
    name: "Chicken noodles",
    price: 7000,
    vegetarian: false,
    description: "Chicken and noodles in broth."
  }
];

const mealList = document.querySelector("#meal-list");
const emptyMessage = document.querySelector("#empty-message");
const cardTemplate = document.querySelector("#meal-card-template");
const daySelector = document.querySelector("#day-selector");
const mealCount = document.querySelector("#meal-count");
const menuHeading = document.querySelector("#menu-heading");
const priceFormatter = new Intl.NumberFormat("ko-KR");

function renderMenu(day) {
  const meals = menuItems.filter((meal) => meal.day === day);
  mealList.replaceChildren();
  emptyMessage.hidden = meals.length > 0;
  menuHeading.textContent = `${day} meals`;
  mealCount.textContent = `${meals.length} ${meals.length === 1 ? "meal" : "meals"}`;
  emptyMessage.textContent = `No meals are available on ${day}.`;

  meals.forEach((meal) => {
    const card = cardTemplate.content.cloneNode(true);
    card.querySelector(".meal-card__name").textContent = meal.name;
    card.querySelector(".meal-card__description").textContent = meal.description;
    card.querySelector(".meal-card__price").textContent = `₩${priceFormatter.format(meal.price)}`;

    const label = card.querySelector(".meal-card__label");
    label.textContent = meal.vegetarian ? "Vegetarian" : "Contains meat";
    label.setAttribute("aria-label", meal.vegetarian ? "Vegetarian meal" : "Meal contains meat");

    mealList.append(card);
  });
}

daySelector.addEventListener("change", (event) => {
  renderMenu(event.target.value);
});

renderMenu(daySelector.value);
