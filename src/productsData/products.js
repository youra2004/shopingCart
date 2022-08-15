import photo1 from "../products/51498472915966370-1-cart.webp";
import photo2 from "../products/5619496040738316-1-cart.webp";
import photo3 from "../products/8552515751438644-1-cart.webp";
import photo4 from "../products/9197907543445676-1-cart.webp";
import photo5 from "../products/10686354557628304-1-cart.webp";
import photo6 from "../products/39876704341265610-1-cart.webp";
import photo7 from "../products/27250082398145996-1-cart.webp";
import photo8 from "../products/18644119330491310-1-cart.webp";
import classes from "../App.module.css";

export const products = [
  {
    id: "p1",
    class: `${classes.first}`,
    title: "Stay Groovy off white",
    price: "10",
    size: "XS",
    pennies: ".65",
    img: photo1,
    fullPrice: 10.65,
    amount: 1,
  },
  {
    id: "p2",
    class: `${classes.second}`,
    title: "Cactus White T-shirt",
    price: "13",
    size: "S",
    pennies: ".30",
    img: photo2,
    fullPrice: 13.3,
    amount: 1,
  },
  {
    id: "p3",
    class: `${classes.third}`,
    title: "Skater Black Sweatshirt",
    price: "25",
    size: "M",
    pennies: ".90",
    img: photo3,
    fullPrice: 25.9,
    amount: 1,
  },
  {
    id: "p4",
    class: `${classes.fourth}`,
    title: "Black Tule Oversized",
    price: "29",
    size: "ML",
    pennies: ".45",
    img: photo4,
    fullPrice: 29.45,
    amount: 1,
  },
  {
    id: "p5",
    class: `${classes.fifth}`,
    title: "Black Batman T-shirt",
    price: "10",
    size: "L",
    pennies: ".15",
    img: photo5,
    fullPrice: 10.15,
    amount: 1,
  },
  {
    id: "p6",
    class: `${classes.sixth}`,
    title: "Blue T-Shirt",
    price: "9",
    size: "XL",
    pennies: ".00",
    img: photo6,
    fullPrice: 9.0,
    amount: 1,
  },
  {
    id: "p7",
    class: `${classes.seventh}`,
    title: "Loose Black T-shirt",
    price: "14",
    size: "XXL",
    pennies: ".00",
    img: photo7,
    fullPrice: 14.0,
    amount: 1,
  },
  {
    id: "p8",
    class: `${classes.eighth}`,
    title: "Ringer Hall Pass",
    price: "10",
    size: "S",
    pennies: ".90",
    img: photo8,
    fullPrice: 10.9,
    amount: 1,
  },
];
