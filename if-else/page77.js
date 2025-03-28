// 6 practice problem

// ১. তোর আম্মু বলছে, 6 টার আগে বাসায় ফিরলে তোকে নাস্তা খাওয়াবে। আর দেরি করলে ঝাড়ুর বাড়ি দিবে। এই শর্তের জন্য কোড কর।
const time = 5
if(time < 6) {
    console.log("I will get snacks!")
}
else {
    console.log("I will get beaten with a broom")
}




// ২. একটা মোবাইল অ্যাপে যদি লগইন সফল হয়, তাহলে "Welcome!" দেখাবে। যদি ব্যর্থ হয়, "Get Lost!" দেখাবে। এই শর্তের জন্য প্রোগ্রাম লিখ।
const loggedId = true;
if(loggedId === true) {
    console.log("Welcome!")
}
else {
    console.log("Get Lost!")
}




// ৩. তুই যদি 5 কি. মি. দৌড়াস, তাহলে তোকে চকলেট খেতে দিবে। যদি না দৌড়াস, তাহলে তোর মোটা ভুঁড়ি হবে। এই শর্তের জন্য প্রোগ্রাম লিখ।
const run = 5
if(run === 5) {
    console.log("I will get chocolate")
}
else {
    console.log("I will get a fat belly")
}




// ৪. ধর, তোর বাবা বলেছে, যদি তুই পরীক্ষায় ৪০-এর বেশি পেয়ে পাস করিস, তাহলে তোকে বাইক কিনে দিবে। কিন্তু যদি কম হয়, তাহলে বাইক দিবে না। একটা প্রোগ্রাম লিখে দেখ, তুই বাইক পাবি কি না, যদি তোর নাম্বার 85 হয়।
const myMarks = 85
if(myMarks > 40) {
    console.log("I will get a bike")
}
else {
    console.log("I will not get a bike")
}




// ৫. যদি মুভির শো রাত ৭টার আগে হয়, তাহলে তুই মুভি দেখবি। যদি পরে হয়, তাহলে বাসায় গিয়ে নাকে তেল দিয়ে ঘুমাবি। এর জন্য প্রোগ্রাম লিখ।
const movieTime = 6
if(movieTime < 7) {
    console.log("I will watch the movie")
}
else {
    console.log("I will go home and sleep")
}




// ৬. তাপমাত্রা 30 ডিগ্রি বা তার বেশি হয়, তাহলে এয়ার কন্ডিশনার চালাবি। আর কম হলে কম্বল মুড়ি দিয়েই ঘুমাবি। এর জন্য কোড লিখ।
const temperature = 32
if(temperature >= 30) {
    console.log('Turn on the air conditioner!')
}
else{
    console.log('Wrap myself in a blanket')
}