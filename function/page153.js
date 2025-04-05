// 7 practice problem

// ১. একটা ফাংশন লিখ, যাতে কোনো কন্ডিশনের ভিত্তিতে নাম্বার 10-এর বেশি হলে true রিটার্ন করবে, আর না হলে false রিটার্ন করবে।
function isGreaterThanTen(number) {
    if(number > 10){
        return true;
    }
    return false;
}
console.log(isGreaterThanTen(9))




// ২. তুই একটা ফাংশন লিখ, যা সংখ্যা নিবে আর তারপর সেই সংখ্যা যদি 13 দিয়ে সমানভাবে ভাগ যায়, তাহলে true রিটার্ন দিবে, না হয় false রিটার্ন দিবে।
function divided(number) {
    if(number % 13 === 0){
        return true;
    }
    return false;
}
console.log(divided(26))




// ৩. তুই একটা রেস্টুরেন্টে গিয়েছিস, সেখানে ভাত (rice), তরকারি (curry) আর ড্রিঙ্কস (drinks) খাবি। একটা ফাংশন লিখ, যাতে খাবারের মোট দাম যোগ করে মোট বিল রিটার্ন করবে।
function totalPrice(rice, curry, drinks) {
    return rice + curry + drinks;
}
console.log(totalPrice(10, 5, 20))




// ৪. এমন একটা ফাংশন বানা, যেখানে বয়স দিলে সেটি 1৪-এর বেশি হলে "Eligible for Voting" রিটার্ন করবে, আর না হলে "Not Eligible"
function eligibleForVoting(age) {
    if(age > 14){
        return "Eligible for Voting";
    }
    return "Not Eligible";
}
console.log(eligibleForVoting(15))




// ৫. একটা ফাংশন লিখ, যেখানে একটা ভেরিয়েবল স্ট্রিং হিসেবে দিবি, আর সেটার দৈর্ঘ্য রিটার্ন করবে।
function stringLength(string) {
    return string.length;
}
console.log(stringLength('Mahdi Hassan'))




// ৬. তুই একটা ফাংশন লিখ, যা তিনটা সংখ্যার গড় বের করে রিটার্ন করবে।
function averageOfThreeNumbers(num1, num2, num3) {
    const average = num1 + num2 + num3;
    return average / 3;
}
console.log(averageOfThreeNumbers(5, 10, 15))




// ৭. একটা ফাংশন লিখ, যেটা চেক করবে, কোনো একটা সংখ্যা নেগেটিভ কি না। যদি নেগেটিভ (negative) নাম্বার হয়, তাহলে সেটাকে -1 দিয়ে গুণ করে রেজাল্ট রিটার্ন করবে।
function checkNegativeNumber(number) {
    if(number < 0){
        return number * -1;
    }
    return number;
}
console.log(checkNegativeNumber(5))