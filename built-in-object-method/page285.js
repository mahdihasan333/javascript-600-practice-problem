// 7 practice problem

// ১. সাতটা সংখ্যা 45, 11, 89, 23, 56, -12,-56-এর মধ্যে সবচেয়ে ছোট সংখ্যা বের কর।
const smallNumber = Math.min(45, 11, 89, 23, 56, -12, -56)
console.log(smallNumber)




// ২. তিনটা সংখ্যা 21, 35, 67-এর মধ্যে সবচেয়ে বড় সংখ্যাটা বের কর।
const bigNumber = Math.max(21, 35, 67)
console.log(bigNumber)




// ৩. 7.6 এবং 7.2-কে তার নিকটবর্তী পূর্ণসংখ্যায় রূপান্তর কর।
const num1 = Math.round(7.6)
const num2 = Math.round(7.2)
console.log(num1)
console.log(num2)




// 8. 9.8 এবং 5.3-কে তার নিকটবর্তী ছোট পূর্ণসংখ্যায় রূপান্তর কর।
const floorNumberOne = Math.floor(9.8)
const floorNumberTwo = Math.floor(5.3)
console.log(floorNumberOne)
console.log(floorNumberTwo)




// ৫. 3.1 এবং 6.9-কে তার নিকটবর্তী বড় পূর্ণসংখ্যায় রূপান্তর কর।
const ceilNumberOne = Math.ceil(3.1)
const ceilNumberTwo = Math.ceil(6.9)
console.log(ceilNumberOne)
console.log(ceilNumberTwo)




// ৬. Math.abs ব্যবহার করে -34-এর absolute মান বের কর।
const absoluteNumber = Math.abs(-34)
console.log(absoluteNumber)




// ৭. একটা ফাংশন লিখ, যেটা একটা দশমিকওয়ালা সংখ্যা ইনপুট প্যারামিটার হিসেবে নিবে। তারপর সেই ফাংশনের ভিতরে সেই সংখ্যাটিকে Math.round. Math.floor এবং Math.ceil ব্যবহার করে কনসোেল লগ কর।
function number(num){
    const roundNumber = Math.round(num)
    const floorNumber = Math.floor(num)
    const ceilNumber = Math.ceil(num)
    console.log(`RoundNumber : ${roundNumber}`)
    console.log(`FloorNumber : ${floorNumber}`)
    console.log(`CeilNumber : ${ceilNumber}`)
}
number(5.5)