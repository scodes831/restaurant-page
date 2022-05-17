require('./menu.css');

import classicWafflesImage from './images/classic-waffles.jpg';
import classicBerryWafflesImage from './images/classic-berry-waffles.jpg';
import bananaNutWafflesImage from './images/banana-nut-waffles.jpg';
import cherryCheesecakeWafflesImage from './images/cherry-cheesecake-waffles.jpg';
import chocolateTurtleWafflesImage from './images/chocolate-turtle-waffles.jpg';
import waffleSundaeImage from './images/waffle-sundae.jpg';

const page = document.getElementById('content');

class FoodItem {
    constructor(image, name, price, description) {
        this.image = image,
        this.name = name,
        this.price = price,
        this.description = description
    }

    makeCard() {
        let card = document.createElement('div');
        card.classList.add('food-card');
        page.appendChild(card);
        let image = document.createElement('img');
        image.classList.add('food-image');
        card.appendChild(image);
        image.src = this.image;
        image.alt = "Waffles";
        let foodInnerContainer = document.createElement('div');
        foodInnerContainer.classList.add('food-inner-container');
        card.appendChild(foodInnerContainer);
        let name = document.createElement('h2');
        name.classList.add('food-name');
        foodInnerContainer.appendChild(name);
        name.textContent = this.name;
        let price = document.createElement('h3');
        price.classList.add('food-price');
        foodInnerContainer.appendChild(price);
        price.textContent = this.price;
        let desc = document.createElement('p');
        desc.classList.add('food-description');
        foodInnerContainer.appendChild(desc);
        desc.textContent = this.description;
    }

}

class FoodItems {
    constructor() {
        this.foodItems = []
    }

    newFood(image, name, price, description) {
        let food = new FoodItem(image, name, price, description)
        this.foodItems.push(food);
        return food;
    }

    get allFoods() {
        return this.foodItems
    }
}

export function showMenuPage() {

    let entrees = new FoodItems()

    entrees.newFood(classicWafflesImage, "Classic Waffles", "5.99", "Our classic waffles dusted with powdered sugar.");
    entrees.newFood(classicBerryWafflesImage, "Classic Berry Waffles", "6.99", "Our classic waffles topped with fresh berries, granola, and whipped cream.");
    entrees.newFood(bananaNutWafflesImage, "Banana Nut Waffles", "7.49", "Banana bread waffles topped with sliced banana, walnuts, and powdered sugar.");
    entrees.newFood(cherryCheesecakeWafflesImage, "Cherry Cheesecake Waffles", "7.49", "Our classic waffles topped with cream cheese, cherry topping, and whipped cream.");
    entrees.newFood(chocolateTurtleWafflesImage, "Chocolate Turtle Waffles", "7.49", "Our classic waffles topped with crushed pecans, chocolate sauce, and whipped cream.");
    entrees.newFood(waffleSundaeImage, "Waffle Sundae", "3.99", "A classic waffle topped with a scoop of vanilla ice cream, chocolate sauce, and sliced almonds.");
    console.log(entrees.allFoods);

    entrees.allFoods.forEach(food => {
        food.makeCard();
    })
}


