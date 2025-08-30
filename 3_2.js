let productPrice = 1000;
let discountPercent = 10;
let totalPrice = productPrice * (100-discountPercent) /100;

if (totalPrice <= 0) {
    console.log(`Price: 0`);
} else if (totalPrice <= 500) {
    console.log(`Price: ${totalPrice + 50}`);
} else {
    console.log(`Price: ${totalPrice * 90 /100}`);
}