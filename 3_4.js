let products = [
  { price: 300, discount: 5 },
  { price: 1000, discount: 20 },
  { price: 700, discount: 5 },
  { price: 1500, discount: 25 },
  { price: 550, discount: 10 },
];
let totalPrice = 0;

function calculateTotal() {
  products.forEach(function (product, index) {
    let priceAfter = (product.price * (100 - product.discount)) / 100;
    totalPrice += priceAfter;
  });
  console.log(`Total price after discount: $${totalPrice}`);
}

calculateTotal();
