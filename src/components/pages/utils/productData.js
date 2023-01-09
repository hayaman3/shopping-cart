import { v4 as uuidv4 } from 'uuid';
/* eslint-disable global-require */
const images = {
  productImagePlaceholder: require('../../../assets/products/product1.png'),
}

const productList =[
  {
    id:uuidv4(),
    availability:"Available",
    name:"Fake Product",
    rating:0,
    price:100.00,
    img:images.productImagePlaceholder
  },
  {
    id:uuidv4(),
    availability:"Sale",
    name:"Fake Product",
    rating:5,
    price:90.00,
    img:images.productImagePlaceholder
  },
  {
    id:uuidv4(),
    availability:"Sold Out",
    name:"Fake Product",
    rating:3,
    price:110.00,
    img:images.productImagePlaceholder
  },
 {
    id:uuidv4(),
    availability:"Available",
    name:"Fake Product",
    rating:2,
    price:20.00,
    img:images.productImagePlaceholder
  }
]

export default productList;