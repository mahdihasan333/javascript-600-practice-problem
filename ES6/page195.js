// 6 practice problem

// ১. একটা array-এর প্রথম ইনডেক্সের মান রিটার্ন করবে, এমন একটা অ্যারো ফাংশন লিখ।
const firstElement = (arr) => arr[0]
const firstIndex = [10, 20, 30, 40]
console.log(firstElement(firstIndex))




// ২. তিনটি সংখ্যা নিয়ে তাদের গুণফল রিটার্ন করে, এমন একটা অ্যারো ফাংশন লিখ।
const multiple = (num1, num2, num3) => num1 * num2 * num3
console.log(multiple(10, 20, 30))




// ৩. এমন একটি arrow function তৈরি কর, যা কোনো প্যারামিটার নেয় না শুধু "unknown" রিটার্ন করে।
const unknownReturn = () => 'unknown'
console.log(unknownReturn())




// ৪. একটি object-এর মধ্যে নাম এবং পকেটে কত টাকা আছে এমন দুইটা প্রপার্টি আছে। এখন এমন একটা অ্যারো ফাংশন লিখ, যেটা টাকার পরিমাণকে 5 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।
const person = {
    name: 'Mahdi',
    money: 1000
}
const dividedMoney = (obj) => obj.money / 5
console.log(dividedMoney())




// ৫. জাভাস্ক্রিপ্টে কোনো একটা অ্যারের শেষ উপাদান পাওয়ার জন্য শেষ উপাদানের ইনডেক্স বের করতে হয়। শেষ উপাদানের ইনডেক্স বের করার সিস্টেম হচ্ছে, অ্যারের লেংথ বের করে সেটা থেকে 1 বিয়োগ করবি। এইটা আগে একটু প্র্যাকটিস করে ফেল। তারপর একটা array-এর প্রথম ও শেষ উপাদান যোগ করে যোগফল রিটার্ন করবে, এমন একটা arrow function লিখে ফেল।
const sumFirstNumberAndLastNumber = (arr) => arr[0] + arr[arr.length - 1]
console.log(sumFirstNumberAndLastNumber([10, 20, 30, 40, 50, 60]))




// ৬. এমন একটা ফাংশন তৈরি কর, যা দুইটা সংখ্যা যোগ করবে। প্রথম সংখ্যা না থাকলে 10, আর দ্বিতীয় সংখ্যা না থাকলে 5 ধরে যোগফল দেখাবে। এইটা Arrow function দিয়ে করবি।
const addNumbers = (num1 = 10, num2 = 5) => num1 + num2
console.log(addNumbers(10, 20))
console.log(addNumbers(10))
console.log(addNumbers())