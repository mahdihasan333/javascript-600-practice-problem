// 6 practice problem

// ১. তোর কাছে একটা array আছে: [5, 10, 15, 20, 25]। তুই একটা প্রোগ্রাম লিখে দেখ, সব সংখ্যার যোগফল কত হয় reduce দিয়ে।
const numbers = [5, 10, 15, 20, 25];
const totalSum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(totalSum);




// ২. তুই একটা দোকানের মালিক। তোর পণ্যগুলো: [{name: 'shampoo', price: 100}, {name: 'soap', price: 50}, {name: 'toothpaste', price: 75}]। সব পণ্যের মোট দাম বের কর reduce ব্যবহার করে।
const products = [
    {name: 'shampoo', price: 100}, 
    {name: 'soap', price: 50}, 
    {name: 'toothpaste', price: 75}
]
const totalProductPrice = products.reduce((acc, curr) => acc + curr.price, 0)
console.log(totalProductPrice);




// ৩. ধর, তুই একটা product-এর list বানাইছিস: [{name: 'Pen', price: 5}, {name: 'Book', price: 50}, {name: 'Bag', price: 100}]। এবার সব পণ্যের দাম যোগ কর reduce দিয়ে।
const product = [
    {name: 'Pen', price: 5}, 
    {name: 'Book', price: 50}, 
    {name: 'Bag', price: 100}
]
const productTotalPrice = product.reduce((acc, curr) => acc + curr.price, 0)
console.log(productTotalPrice)




// 8. reduce দিয়ে [1, 2, 3, 4, 5] সব সংখ্যার গুণফল বের কর।
const number = [1, 2, 3, 4, 5]
const multiply = number.reduce((acc, curr) => acc * curr, 1)
console.log(multiply)




// ৫. [10, 20, 30, 40, 50] এই অ্যারে reduce ব্যবহার করে সর্বোচ্চ মান বের কর।
const maxNumber = [10, 20, 30, 40, 50]
const max = maxNumber.reduce((acc, curr) => Math.max(acc, curr), 0)
console.log(max)




// ৬. একটা অ্যারে বানা [100, 200, 300, 400]। reduce দিয়ে সব সংখ্যার যোগফল বের কর এবং ইনিশিয়াল ভ্যালু হিসেবে 50 ব্যবহার কর।
const numbersArray = [100, 200, 300, 400]
const sumArray = numbersArray.reduce((acc, curr) => acc + curr, 50)
console.log(sumArray)