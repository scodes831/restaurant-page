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
}


function showMenuPage() {
    const food1 = new FoodItem(classicWafflesImage, "Classic Waffles", "5.99", "Our classic waffles dusted with powdered sugar.");
    const food2 = new FoodItem(classicBerryWafflesImage, "Classic Berry Waffles", "6.99", "Our classic waffles topped with fresh berries, granola, and whipped cream.");
    const food3 = new FoodItem(bananaNutWafflesImage, "Banana Nut Waffles", "7.49", "Banana bread waffles topped with sliced banana, walnuts, and powdered sugar.");
    const food4 = new FoodItem(cherryCheesecakeWafflesImage, "Cherry Cheesecake Waffles", "7.49", "Our classic waffles topped with cream cheese, cherry topping, and whipped cream.");
    const food5 = new FoodItem(chocolateTurtleWafflesImage, "Chocolate Turtle Waffles", "7.49", "Our classic waffles topped with crushed pecans, chocolate sauce, and whipped cream.");
    const food6 = new FoodItem(waffleSundaeImage, "Waffle Sundae", "3.99", "A classic waffle topped with a scoop of vanilla ice cream, chocolate sauce, and sliced almonds.");

    const foodsArray = [];
    foodsArray.push(food1);
    foodsArray.push(food2);
    foodsArray.push(food3);
    foodsArray.push(food4);
    foodsArray.push(food5);
    foodsArray.push(food6);

    

}
//Entrees
// export function menuPage () {
//     const entreesContainer = document.createElement('div');
//     page.appendChild(entreesContainer);

//     const entreeCard1 = document.createElement('div');
//     entreesContainer.appendChild(entreeCard1);
//     const entreeImage1 = document.createElement('img');
//     entreeImage1.src = "#";
//     entreeCard1.appendChild(entreeImage1);
//     const entreeName1 = document.createElement('h2');
//     entreeCard1.appendChild(entreeName1);
//     entreeName1.textContent = "Classic Waffles"
//     entreeName1.classList.add('name');
//     const entreeDesc1 = document.createElement('h3');
//     entreeDesc1.classList.add('description');
//     entreeDesc1.textContent = "Two of our classic Belgian waffles served with real maple syrup and dusted with powdered sugar."
//     const entreePrice1 = document.createElement('h3');
//     entreePrice1.classList.add('price');
//     entreePrice1.textContent = "5.49";

//     const entreeCard2 = document.createElement('div');
//     entreesContainer.appendChild(entreeCard2);
//     const entreeImage2 = document.createElement('img');
//     entreeImage2.src = "#";
//     entreeCard2.appendChild(entreeImage2);
//     const entreeName2 = document.createElement('h2');
//     entreeCard2.appendChild(entreeName2);
//     entreeName2.textContent = "Berry Waffles"
//     entreeName2.classList.add('name');
//     const entreeDesc2 = document.createElement('h3');
//     entreeDesc2.classList.add('description');
//     entreeDesc2.textContent = "Two of our classic Belgian waffles topped with fresh strawberries and blueberries, served with real maple syrup and dusted with powdered sugar."
//     const entreePrice2 = document.createElement('h3');
//     entreePrice2.classList.add('price');
//     entreePrice2.textContent = "6.49";

//     const entreeCard3 = document.createElement('div');
//     entreesContainer.appendChild(entreeCard3);
//     const entreeImage3 = document.createElement('img');
//     entreeImage3.src = "#";
//     entreeCard3.appendChild(entreeImage3);
//     const entreeName3 = document.createElement('h2');
//     entreeCard3.appendChild(entreeName3);
//     entreeName3.textContent = "PB & Banna Waffles"
//     entreeName3.classList.add('name');
//     const entreeDesc3 = document.createElement('h3');
//     entreeDesc3.classList.add('description');
//     entreeDesc3.textContent = "Two of our classic Belgian waffles topped with bananas, walnuts, peanut butter sauce, and whipped cream. Served with real maple syrup ."
//     const entreePrice3 = document.createElement('h3');
//     entreePrice3.classList.add('price');
//     entreePrice3.textContent = "6.99";

//     const entreeCard4 = document.createElement('div');
//     entreesContainer.appendChild(entreeCard4);
//     const entreeImage4 = document.createElement('img');
//     entreeImage4.src = "#";
//     entreeCard4.appendChild(entreeImage4);
//     const entreeName4 = document.createElement('h2');
//     entreeCard4.appendChild(entreeName4);
//     entreeName4.textContent = "Chocolate Turtle Waffles"
//     entreeName4.classList.add('name');
//     const entreeDesc4 = document.createElement('h3');
//     entreeDesc4.classList.add('description');
//     entreeDesc4.textContent = "Two chocolate Belgian waffles topped with whipped cream, caramel sauce, pecans, and chocolate chips. Served with a side of real maple syrup."
//     const entreePrice4 = document.createElement('h3');
//     entreePrice4.classList.add('price');
//     entreePrice4.textContent = "6.99";

//     const entreeCard5 = document.createElement('div');
//     entreesContainer.appendChild(entreeCard5);
//     const entreeImage5 = document.createElement('img');
//     entreeImage5.src = "#";
//     entreeCard5.appendChild(entreeImage5);
//     const entreeName5 = document.createElement('h2');
//     entreeCard5.appendChild(entreeName5);
//     entreeName5.textContent = "Cinnamon Churro Waffles"
//     entreeName5.classList.add('name');
//     const entreeDesc5 = document.createElement('h3');
//     entreeDesc5.classList.add('description');
//     entreeDesc5.textContent = "Two of our classic Belgian waffles infused with cinnamon and topped with whipped cream, cinnamon, and churro pieces."
//     const entreePrice5 = document.createElement('h3');
//     entreePrice5.classList.add('price');
//     entreePrice5.textContent = "6.49";

//     const entreeCard6 = document.createElement('div');
//     entreesContainer.appendChild(entreeCard6);
//     const entreeImage6 = document.createElement('img');
//     entreeImage6.src = "#";
//     entreeCard6.appendChild(entreeImage6);
//     const entreeName6 = document.createElement('h2');
//     entreeCard6.appendChild(entreeName6);
//     entreeName6.textContent = "Red Velvet Waffles"
//     entreeName6.classList.add('name');
//     const entreeDesc6 = document.createElement('h3');
//     entreeDesc6.classList.add('description');
//     entreeDesc6.textContent = "Two red velvet chocolate chip waffles topped with cream cheese icing and whipped cream. Served with real maple syrup."
//     const entreePrice6 = document.createElement('h3');
//     entreePrice6.classList.add('price');
//     entreePrice6.textContent = "6.99";

//     //Sides
//     const sidesContainer = document.createElement('div');
//     page.appendChild(sidesContainer);

//     const sideCard1 = document.createElement('div');
//     sidesContainer.appendChild(sideCard1);
//     const sideImage1 = document.createElement('img');
//     sideImage1.src = "#";
//     sideCard1.appendChild(sideImage1);
//     const sideName1 = document.createElement('h2');
//     sidesContainer.appendChild(sideName1);
//     sideName1.textContent = "2 Eggs"
//     sideName1.classList.add('name');
//     const sideDesc1 = document.createElement('h3');
//     sideDesc1.classList.add('description');
//     sideDesc1.textContent = "Two eggs cooked to your preference. Add cheese for $1 extra."
//     sidesContainer.appendChild(sideDesc1);
//     const sidePrice1 = document.createElement('h3');
//     sidePrice1.classList.add('price');
//     sidePrice1.textContent = "2.99";
//     sidesContainer.appendChild(sidePrice1);
// }

//check to make sure all names, desc, and price elements are appended to container