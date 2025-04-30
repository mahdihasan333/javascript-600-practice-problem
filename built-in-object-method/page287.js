// 5 practice problem

// ১. new Date ব্যবহার করে বর্তমানে যে মুহূর্তে কোড চলছে, সেই সময় কনসোলে দেখাও।
const date = new Date()
console.log(date)




// ২. নতুন Date অবজেক্ট বানিয়ে তার মধ্যে 2035, 6, 15, 14, 45, 30 সেট কর।
const newDate = new Date(2035, 6, 15, 14, 45, 30)
console.log(newDate)




// ৩. getFullYear ব্যবহার করে বর্তমান বছরের মান কনসোলে দেখাও।
const currentYear = new Date().getFullYear()
console.log(currentYear)




// ৪. setFullYear ব্যবহার করে একটা Date অবজেক্টের বছর 2040 সেট কর।
const year = new Date()
year.setFullYear(2040)
console.log(year)




// ৫. getDay ব্যবহার করে 2029-02-16 তারিখের সপ্তাহের দিন এবং সে দিনের নাম বের কর।
const day = new Date(2029, 2, 16)
const dayNumber = day.getDay()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[dayNumber]
console.log(dayNumber)
console.log(dayName)