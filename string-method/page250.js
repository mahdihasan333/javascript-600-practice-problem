// 3 practice problem

// ১. একটা string তৈরি কর, যার ভ্যালু হবে "Hi"। সেটি repeat দিয়ে 10 বার রিপিট করে কনসোল লগ কর।
const greeting = "Hi";
console.log(greeting.repeat(10));




// ২. একটা স্ট্রিং বানা "I am learning JavaScript. JavaScript is amazing!"| replace ব্যবহার করে প্রথম "JavaScript"-কে "JS" দিয়ে রিপ্লেস কর।
const jsString = "I am learning JavaScript. JavaScript is amazing!";
console.log(jsString.replace("JavaScript", "JS"));




// ৩. একটা স্ট্রিং বানা "I love apples and apples are tasty!". সব "apples"-কে "mangoes" দিয়ে রিপ্লেস কর।
const fruitsString = "I love apples and apples are tasty!";
console.log(fruitsString.replaceAll("apples", "mangoes"));