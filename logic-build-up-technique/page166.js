// 7 practice problem

// ১. তুই জানস, 1760 গজে এক মাইল। তাহলে একটা ফাংশন লিখে কেল, যাতে বের করতে পারিস, 13 মাইলে কত গজ।
function mileToYard(mile){
    const convertMile = mile * 1760
    return convertMile;
}
console.log(mileToYard(13));




// ২. শুনতে কঠিন, কিন্তু চিন্তা করলে সহজ একটা বিষয় হচ্ছে, 1 কিলোওয়াট ঘণ্টা মানে 860 কিলো ক্যালরি। তাহলে একটা ফাংশন লিখে বের কর। যেটাতে যেকোনো কিলোওয়াট ঘণ্টা দিলে সে সেটাকে কিলো ক্যালরিতে কনভার্ট করে দিবে।
function kilowatt(cal){
    const calory = cal * 860
    return calory;
}
console.log(kilowatt(2));




// ৩. ঘণ্টাকে সেকেন্ডে কনভার্ট করতে একটা ফাংশন বানা। এক ঘণ্টাতে কত মিনিট বা এক মিনিটে কত সেকেন্ড। সেটা আমি বলে দিচ্ছি না। তুই চিন্তা করে বের কর এবং আমাকে একটা ফাংশন লিখে দে, যেটা ঘণ্টা দিলে আমাকে সেকেন্ডে কনভার্ট করে দিবে।
function convertTime(hour){
    const minute = hour * 60
    const second = minute * 60
    return second;
}
console.log(convertTime(3));




// ৪. সেন্টিমিটারকে মিটারে কনভার্ট করার জন্য একটা ফাংশন তৈরি কর। তারপর বিভিন্ন মান দিয়ে সেই ফাংশনকে টেস্ট কর। আর তুই তো জানস, 1 মিটার = 100 সেন্টিমিটার।
function convertCentimeter(centimeter) {
    const cen = centimeter / 100
    return cen;
}
console.log(convertCentimeter(100));




// ৫. ইঞ্চিকে সেন্টিমিটারে রূপান্তর করার ফাংশন লিখ। 1 ইঞ্চি = 2.54 সেন্টিমিটার।
function convertInch(inch) {
    const inchToCentimeter = inch * 2.54
    return inchToCentimeter;
}
console.log(convertInch(4));




// ৬. যদি 1 পাউন্ড = 0.453 কিলোগ্রাম হলে পাউন্ড থেকে কিলোগ্রামে কনভার্ট করার একটা ফাংশন লিখে ফেল।
function convertPoundToKilogram(pound) {
    const poundToKilogram = pound * 0.453
    return poundToKilogram;
}
console.log(convertPoundToKilogram(3));




// ৭. গজকে মিটারে কনভার্ট করার জন্য একটা ফাংশন তৈরি কর। 1 গজ = 0.91 মিটার।
function convertYardToMeter(yard) {
    const yardToMeter = yard * 0.91
    return yardToMeter;
}
console.log(convertYardToMeter(2));