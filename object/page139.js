// 6 practice problem

// ১. ধর, তোর একটা headphone অবজেক্ট আছে, যার মধ্যে brand: "Sony", price: 3000, আর color: "red"। Object.freeze() মেথড ব্যবহার করে অবজেক্টটা freeze কর। এরপর আরেকটা নতুন প্রোেপাটি যোেগ করতে চেষ্টা কর। দেখ, কাজ করে কি না।
const headphone = {
    brand: "Sony",
    price: 3000,
    color: "red"
}
Object.freeze(headphone)
headphone.wireless = true
console.log(headphone)




// ২. const player = { name Messi, goals 800, club Inter Miami }; Object. freeze() মেথড ব্যবহার করে অবজেক্ট ফ্রিজ কর। তারপর নতুন প্রোপার্টি যোগ করে দেখ, কাজ করে কি না।
const player = {
    name: "Messi",
    goals: 800,
    club: "Inter Miami"
}
Object.freeze(player)
player.awards = 7
console.log(player)




// ৩. const book = { title Harry Potter, author JK Rowling, pages 500 }; Object.seal() ব্যবহার করে অবজেক্ট সিল কর। তারপর author প্রোপার্টি চেঞ্জ করে দেখ।
const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 500
}
Object.seal(book)
book.author = "New Author"
console.log(book)




// ৪. একটা gadget অবজেক্ট বানা, যার মধ্যে name iPhone. price 120000, আর color Black থাকবে। delete ব্যবহার করে price ডিলিট কর।
const gadget = {
    name: "iPhone",
    price: 120000,
    color: "Black"
}
delete gadget.price
console.log(gadget)




// ৫. একটা animal অবজেক্ট বানা, যার মধ্যে name Tiger, location Sundarban থাকবে। এখন এমন কিছু কর, যাতে টাইগারের লোকেশন চেইঞ্জ করা না যায়।
const animal = {
    name: "Tiger",
    location: "Sundarban"
}
Object.freeze(animal)
animal.location = "Dhaka"
console.log(animal)




// ৬. const food = { name Pizza. price 500, size Large); এমন কিছু কর, যাতে food-এর মধ্যে নতুন প্রোপার্টি যোগ করা যাবে না। তবে চাইলে দাম বাড়ানো বা কমানো যাবে।
const food = {
    name: "Pizza",
    price: 500,
    size: "Large"
}
Object.seal(food)
food.price = 600
console.log(food)