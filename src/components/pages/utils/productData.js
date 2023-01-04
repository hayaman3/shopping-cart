/* eslint-disable global-require */
const images = {
  productImagePlaceholder: require('../../../assets/products/product1.png'),
}

const productList =[
  {
    availability:"Available",
    name:"Fake Product",
    rating:4,
    price:100.00,
    img:images.productImagePlaceholder
  },
  {
    availability:"Sale",
    name:"Fake Product",
    rating:5,
    price:90.00,
    img:images.productImagePlaceholder
  },
  {
    availability:"Sold Out",
    name:"Fake Product",
    rating:3,
    price:110.00,
    img:images.productImagePlaceholder
  },
 {
    availability:"Available",
    name:"Fake Product",
    rating:5,
    price:20.00,
    img:images.productImagePlaceholder
  }
]

export default productList;
