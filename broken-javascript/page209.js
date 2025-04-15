// 6 practice problem

// ১. নতুন একটা অ্যারে বানা, যেখানে প্রথম উপাদান হবে "variable", তারপরের উপাদানগুলো আসবে const technologies = ["Condition", "array", "loop"], অ্যারে Spread Operator দিয়ে কপি করে।
const technologies = ["Condition", "array", "loop"]
const newTechnologies = ['variable', ...technologies]
console.log(newTechnologies)




// ২. myFruits নামে নতুন একটা অ্যারে তৈরি কর, যেখানে const fruits = ["Apple", "Banana", "Mango"], এই অ্যারেটার উপাদানগুলো থাকবে আর শেষে papaya, orange থাকবে।
const fruits = ["Apple", "Banana", "Mango"]
const myFruits = [...fruits, "papaya", 'orange']
console.log(myFruits)




// ৩. তিনটা অ্যারে আছে const frontEnd = ["JavaScript"], const backEnd = ["Node.js"], const database = ["MongoDB"], এগুলোকে Spread Operator দিয়ে একটাতে একত্রিত কর।
const frontEnd = ["JavaScript"]
const backEnd = ["Node.js"]
const database = ["MongoDB"]
const fullStack = [...frontEnd, ...backEnd, ...database]
console.log(fullStack)




// 8. const website = { name: "MySite", type: "e-commerce", status: "active" } এই অবজেক্টে নতুন প্রোপার্টি theme: "dark" যোগ করে নতুন অবজেক্ট তৈরি কর এবং প্রিন্ট কর।
const website = {
    name: "MySite",
    type: "e-commerce",
    status: "active"
}
const updateWebInfo = {...website, theme: 'dark'}
console.log(updateWebInfo)




// ৫. const young = { name: "Arif", age: 30, country: "B Baria" } এই অবজেক্টের একটা কপি তৈরি কর এবং country বাদে বাকিসব প্রোপার্টি নতুন অবজেক্টে রেখে প্রিন্ট কর।
const young = {
    name: "Arif",
    age: 30,
    country: "B Baria"
}
const {country, ...all} = young
console.log(all)




// ৬. const car = { make: "Toyota", model: "Corolla", year: 2020 } এই অবজেক্টের একটা কপি তৈরি কর এবং year আপডেট করে 2032 করে নতুন অবজেক্ট তৈরি কর।
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
}

const copyObj = {...car, year: 2032}
console.log(copyObj)