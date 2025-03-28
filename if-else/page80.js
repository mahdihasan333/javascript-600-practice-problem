// 9 practice problem

// ১. একটা প্রোগ্রাম লিখ। যেটা চেক করবে, বয়স 18 এর বেশি কি না এবং উচ্চতা 60 ইঞ্চির বেশি কি না। তাহলে সে গাড়ি ঠেলবে, না হয় সে গাড়িতে বসে থাকবে।
const age = 20
const height = 62
if (age > 18 && height > 60) {
  console.log('I will push the car')
} else {
  console.log('I will sit inside the car')
}




// ২. একটা প্রোগ্রাম লিখ। যা চেক করবে, একজন শিক্ষার্থী ভর্তি হওয়ার যোগ্য কি না। গণিত স্কোর 80 এর বেশি অথবা ইংরেজি স্কোর 85 এর বেশি হতে হবে। আর এইগুলোর কোনোটাই সত্যি না হলে বলবি- তোকে বিয়ে দিয়ে দিব।
const mathScore = 90
const englishScore = 92
if (mathScore > 80 || englishScore > 85) {
  console.log('I am eligible for the school')
} else {
  console.log('I will be forced to marry')
}




// ৩. একজন স্টুডেন্টের GPA যদি 5 হয় এবং পরিবারের মাসিক আয় 10000-এর কম হয়, তাহলে সে স্কলারশিপ পাবে। না হয় তাকে বেতন দিয়ে পড়তে হবে।
const gpa = 5
const monthlyIncome = 12000
if (gpa === 5 && monthlyIncome < 10000) {
  console.log('I will get a scholarship')
} else {
  console.log('I have to pay the tuition fee')
}




// ৪. একজন চাকরিপ্রার্থী পরীক্ষা দিতে পারবে, যদি তার বয়স 30-এর কম হয় এবং কাজের অভিজ্ঞতা 2 বছরের বেশি হয়। আর না হয় চাকরির পরীক্ষা দিতে পারবে না। এমন একটা প্রোগ্রাম লিখ।
const jobCandidateAge = 28
const jobExperience = 3
if (jobCandidateAge < 30 && jobExperience > 2) {
  console.log('I can apply for the job')
} else {
  console.log('I cannot apply for the job')
}




// ৫. তোর ফ্রিজের ভেতর ডিমের সংখ্যা 12-এর বেশি অথবা মুরগি না থাকে, তাহলে তুই ডিমের কোরমা রান্না করবি। আর না হলে পাউরুটি আর কলা খাবি। এমন একটা কোড লিখ।
const eggs = 14
const chicken = false
if (eggs > 12 || chicken === true) {
  console.log('I will cook egg korma.')
} else {
  console.log('I will eat bread and banana')
}




// ৬. একজন মানুষের যদি শরীরের তাপমাত্রা 100 ডিগ্রির বেশি অথবা কাশি থাকে, তাহলে সে ডাক্তারের কাছে যাবে। নচেৎ সে কাঁথা মুড়ি দিয়ে শুয়ে থাকবে। এর জন্য একটা প্রোগ্রাম লিখ।
const bodyTemperature = 101
const isCough = false
if (bodyTemperature > 100 || isCough === true) {
  console.log('I should go to the doctor')
} else {
  console.log('I can stay home and rest')
}




// ৭. একজন শিক্ষার্থীকে পরীক্ষা দিতে দেয়া হবে, যদি তার উপস্থিতি 80 শতাংশের বেশি এবং হোমওয়ার্ক জমা দেয়া থাকে। নচেৎ অটো ফেল। এই শর্তের জন্য প্রোগ্রাম লিখ।
const attendancePercentage = 70
const homework = true
if (attendancePercentage > 80 && homework === true) {
  console.log('I can take the exam')
} else {
  console.log('I am automatically failed')
}




// ৮. যদি তোর বাসার বিদ্যুৎ চলে যায় এবং মোবাইলে চার্জ না থাকে, তাহলে তুই পড়তে বসবি। না হলে ভিডিও গেম খেলবি। এর জন্য কোড লিখ।
const isElectricity = true
const mobileCharge = false
if (isElectricity === false && mobileCharge === false) {
  console.log('I should study')
} else {
  console.log('I can play video games')
}




// ৯. শার্টের দাম 1000 টাকার বেশি হলে এবং কুপন থাকলে তোকে 20 পারসেন্ট ডিসকাউন্ট দেয়া হবে। এর জন্য প্রোগ্রাম লিখ।
const price = 1700
const cupon = true
if (price > 1000 && cupon === true) {
  console.log('I will get a 20% discount on the shirt')
} else {
  console.log('I have to buy it at full price')
}