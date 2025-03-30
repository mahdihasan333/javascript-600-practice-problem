// 7 practice problem

// ১. তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে ক্যাশব্যাক 500 টাকা। আর তার কম কেনাকাটা করলে ক্যাশব্যাক 0 টাকা। এখন এই জিনিসটা এক লাইনে লিখ। ভেরিয়েবলের নাম হবে cashback, আর মান সেট করবি টার্নারি অপারেটর ইউজ করে।
const amount = 600
const cashback = (amount > 3000) ? 'cashback 500 tk' : 0
console.log(cashback)




// ২. তোর বয়স যদি 15-এর বেশি হয়, তাহলে "Teenager" দেখাবে। আর যদি কম হয়, তাহলে "Child" দেখাবে। এটা টার্নারি অপারেটর দিয়ে এক লাইনে লিখ।
const age = 21
const ageCategory = (age > 15)? 'Teenager' : 'Child'
console.log(ageCategory)




// ৩. যদি isLoggedIn-এর মান true হয়, তাহলে "Welcome back"-কে message হিসেবে সেট করবি। আর যদি false হয়, তাহলে "Please login"-কে message হিসেবে সেট করবি। এই জিনিসটা টার্নারি অপারেটর দিয়ে এক লাইনে লিখ।
const isLoggedIn = true
const message = (isLoggedIn)? 'Welcome back' : 'Please login'
console.log(message)




// ৪. তোর গাড়ির তেলের ট্যাংক যদি full হয়, তাহলে "Ready for a long drive" দেখাবি। আর না হলে "Fill the tank" দেখাবি।
const isTankFull = true
const tankStatus = (isTankFull)? 'Ready for a long drive' : 'Fill the tank'
console.log(tankStatus)




// ৫. তুই যদি পরীক্ষায় পাস করিস, তাহলে "Party time" দেখাবি। আর যদি ফেল করিস, তাহলে "Next Semester e serious study korbo" দেখাবি। এক লাইনে টার্নারি অপারেটর দিয়ে কর।
const isPassed = false
const examResult = isPassed ? "Party time" : 'Next Semester e serious study korbo'
console.log(examResult)




// ৬. যদি sunny ভেরিয়েবলের মান false হয়, তাহলে "Stay home"-কে কনসোল লগ করবি।
const isSunny = false
const weatherStatus = isSunny ? "I will buy this item" : "Stay home"
console.log(weatherStatus)




// ৭. যদি Expensive ভেরিয়েবলের মান false হয়, তাহলে কনসোল লগ করবি "I will buy this item."
const expensive = false
const itemStatus = expensive ? "Stay home" : "I will buy this item"
console.log(itemStatus)