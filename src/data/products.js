import androidMobile from "../data/smartphone.jpg";
import headPhone from '../data/headphone.jpg';
import LapTop from '../data/laptop.jpg';
import Tab from '../data/tab.jpg';
import SmartWatch from '../data/smartwatch.jpg';

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 699,
    image: androidMobile,
    description: "A powerful smartphone with the latest features.",
  },
  {
    id: 2,
    name: "Headphones",
    price: 199,
    image: headPhone,
    description: "Noise-cancelling over-ear headphones.",
  },
  {
    id: 3,
    name: "Laptop",
    price: 1299,
    image: LapTop,
    description: "High-performance laptop for professionals.",
  },
  {
    id: 4,
    name: "Tab",
    price: 789,
    image: Tab,
    description: "Latest model tab for students.",
  },
  {
    id: 5,
    name: "Smartwatch",
    price: 499,
    image: SmartWatch,
    description: "A modern device to keep you punctual and connected.",
  },
];

export default products;
