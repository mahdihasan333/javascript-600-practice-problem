// 8 practice problem

// ১. জাভাস্ক্রিপ্ট, অবজেক্ট ও JSON স্ট্রিংয়ের মধ্যে কী কী পার্থক্য?
// JavaScript Object
// এটি জাভাস্ক্রিপ্টের একটি বিল্ট-ইন ডাটা স্ট্রাকচার, যেখানে ডাটা থাকে key-value ফরম্যাটে।
// এখানে key বা প্রপার্টির নাম কোটেশন ছাড়াও লেখা যায় এবং value হিসেবে ফাংশন, অবজেক্ট, অ্যারে, নাম্বার, স্ট্রিং, বুলিয়ান—সব কিছু রাখা যায়।

// JSON String
// এটি একটি টেক্সট-ভিত্তিক ডাটা ফরম্যাট, যা মূলত সার্ভার ও ক্লায়েন্টের মধ্যে ডাটা ট্রান্সফারের জন্য ব্যবহৃত হয়।
// এতে সব key ও string টাইপের মান অবশ্যই ডাবল কোটেশনে থাকতে হয়, এবং value হিসেবে শুধুমাত্র স্ট্রিং, নাম্বার, বুলিয়ান, null, অ্যারে অথবা অবজেক্ট থাকতে পারে— কিন্তু ফাংশন থাকতে পারে না।


// ২. একটা অবজেক্ট বানা, যেখানে একটা user থাকবে। user এর মধ্যে name, email, address, এবং একটা order history থাকবে। সেই order history-তে অন্তত তিনটা প্রোডাক্ট থাকবে। JSON.stringify দিয়ে পুরা অবজেক্টটাকে JSON স্ট্রিংয়ে কনভার্ট কর।
const user = {
  name: "Mahdi",
  email: "mahdi@gmail.com",
  address: "Lakshmipur",
  orderHistory: [
    { product: "Laptop", price: 80000 },
    { product: "Mouse", price: 1000 },
    { product: "Keyboard", price: 2000 }
  ]
};

const jsonStringUser = JSON.stringify(user);
console.log(jsonStringUser);



// ৩. Shopping cart অবজেক্ট বানা, যার মধ্যে products (array of products), total price (সবগুলো প্রোডাক্টের টোটাল প্রাইস) এবং user details (name, id, contact) থাকবে। এরপর এটাকে JSON স্ট্রিংয়ে কনভার্ট কর
const shoppingCart = {
  userDetails: {
    id: '01',
    name: 'Mahdi Hassan',
    contact: '01576******'
  },
  products: [
    {
      id: 1,
      name: 'Laptop',
      price: 75000,
      quantity: 2
    },
    {
      id: 2,
      name: 'mouse',
      price: 1200,
      quantity: 2
    },
    {
      id: 3,
      name: 'keyboard',
      price: 2500,
      quantity: 1
    }
  ],
  totalPrice: 0
}
let totalPrice = 0
for(const product of shoppingCart.products){
  totalPrice += product.price
}
shoppingCart.totalPrice = totalPrice

const jsonString = JSON.stringify(totalPrice)
console.log(jsonStringUser)