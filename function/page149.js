// 9 practice problem

// ১. পিতা ও পুত্রের বয়সের সমষ্টি বের করার একটা ফাংশন লিখ।
function difference (fatherAge, sonAge) {
    const sum = fatherAge + sonAge;
    console.log(sum)
}
difference(43, 18)




// ২. তোর এক বন্ধু তোকে বলল ক্যালকুলেটর বানাতে, কিন্তু ক্যালকুলেটরে শুধু যোগ বা বিয়োগ করার অপশন থাকলে হবে না। একটা ফাংশন লিখ, যেখানে দুইটা সংখ্যার গুণ বের করে দেখাস। যেমন, যদি 20 আর 15 পাঠালে আউটপুট হবে 300।
function multipleTwoNumbers(num1, num2) {
    const multiple = num1 * num2;
    console.log(multiple)
}
multipleTwoNumbers(20, 15)




// ৩. একটা ফাংশন লিখ, যেটা তিনটা সাবজেক্টের পরীক্ষার মার্কসের সমষ্টি তোকে দিবে।
function sumOfThreeNumbers(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    console.log(sum)
}
sumOfThreeNumbers(15, 20, 5)




// ৪. বয়স বের করার একটা ফাংশন লিখ। যেটাকে তুই তোর কোন বছর জন্ম, সেটা বলবি। তারপর ফাংশনের ভিতরে এই বছর থেকে তোর জন্মসাল বিয়োগ করলে তোকে বলবে, তুই কত বছর বুইড়া হইছস (মানে তোর বয়স কত হইছে)।
function calculateAge(birthYear) {
    const currentYear = 2025
    const age = currentYear - birthYear
    console.log(age)
}
calculateAge(2004)




// ৫. তুই একটা দোকানে গেছিস, যেখানে প্রতিটা লাউ কেনার জন্য 35 টাকা লাগবে। এখন একটা ফাংশন লিখ, যা প্যারামিটার হিসেবে নিবে, তুই লাউয়ের জন্য কত টাকা দিতে চাস। তারপর ভাগ করে বলবে, তুই কয়টা লাউ কিনতে পারবি।
function calculateMoney (taka) {
    const amount = taka / 35
    console.log(amount)
}
calculateMoney(100)




// ৬. একটা ফাংশন লিখ, যেখানে চারটা সংখ্যার গড় বের করবে।
function calculateAverage (num1, num2, num3, num4) {
    const total = num1 + num2 + num3 + num4;
    const average = total / 4;
    console.log(average)

}
calculateAverage(5, 10, 15, 20)




// ৭. একজন দোকানদার প্রত্যেকটা আইটেমে 250 টাকা লাভ করে। একটা ফাংশন লিখ, যেখানে কোনো একটা জিনিসের কেনা দাম দিবি, তাহলে সে বিক্রির দাম (selling price) দিবে।
function sellingPrice (price){
    const totalMoney = price + 250
    console.log(totalMoney)
}
sellingPrice(100)




// ৮. একটা ফাংশন লিখ, তারপর সেই ফাংশনকে তোর জন্মসাল প্যারামিটার হিসেবে দিবি। তারপর সে বলে দিবে, কোন বছর তোর বয়স 100 বছর হবে।
function calculateBirthYear (birthYear){
    const year = birthYear + 100
    console.log('I Will be 100 years old in the year', year)
}
calculateBirthYear(2004)




// ৯. একটা ফাংশন লিখ, যেখানে প্যারামিটার হিসেবে দিবি, প্রতিদিন তুই কয় ঘণ্টা সময় মোবাইল ফোন ইউজ করস। তারপর সেই ফাংশন বের করবে, মাসে তুই কত ঘণ্টা সময় মোবাইল ফোন ইউজ করস। ধরে নে, এক মাসে 30 দিন হয়।
function calculateTimeSpentOnMobile (timePerDay){
    const timePerMonth = timePerDay * 30
    console.log(timePerMonth)
}
calculateTimeSpentOnMobile(3)