// 7 practice problem

// ১. ধর তুই একটা মজার অঙ্ক করছিস। তুই '20' লিখে ফেললি, কিন্তু সেটা স্ট্রিং আকারে। স্ট্রিং থেকে আসল সংখ্যায় কনভার্ট করে তার সাথে 10 যোগ করতে পারবি?
const mathString = '20'
const mathNumber = parseInt(mathString)
const addedNumber = mathNumber + 10
console.log(addedNumber)




// ২. তোর কাছে একটা ভগ্নাংশ আকারে মান আছে, যেমন '3.14159'। এই মানটা পূর্ণসংখ্যায় রূপান্তর করার জন্য একটা প্রোগ্রাম লিখ।
const piString = '3.14159'
const piNumber = parseInt(piString)
console.log(piNumber)




// ৩. তুই 'premikBoy' নামের একটা স্ট্রিংকে সংখ্যা বানানোর চেষ্টা কর। দেখ কী আউটপুট দেয়।
const name = 'premikBoy'
console.log(parseInt(name))




// ৪. তুই 3.456 আর 2.789 যোগ করলি। আউটপুটে তুই দশমিকের পর মাত্র 2 ঘর পর্যন্ত দেখতে চাস। কীভাবে দেখাবি? একটা প্রোগ্রাম লিখ।
const firstNumber = 3.456
const secondNumber = 2.789
const sum = firstNumber + secondNumber
console.log(sum.toFixed(2))




// ৫. ধর, তুই '56.78' আর '12.34' স্ট্রিং আকারে পাইলি। এখন এই দুইটা যোগ করে কীভাবে আসল সংখ্যা বের করবি? সেটা বের করার একটা প্রোগ্রাম লিখ।
const firstNumberString = '56.78'
const secondNumberString = '12.34'
const sumString = parseFloat(firstNumberString) + parseFloat(secondNumberString)
console.log(sumString)




// ৬. ধর, তোর কাছে '10.5678' আর '5.4321' আছে। তুই আউটপুটে দশমিকের পর 1 ঘর পর্যন্ত দেখতে চাস। সেটা কীভাবে দেখাবি?
const firstStringNumber = '10.5678'
const secondStringNumber = '5.4321'
const sumNumber = parseFloat(firstStringNumber) + parseFloat(secondStringNumber)
console.log(sumNumber.toFixed(1))




// ৭. এখন '42.45689754'-কে দশমিকের পর 3 ঘর পর্যন্ত রাউন্ড কর।
const numbers = '42.45689754'
const stringNumber = parseFloat(numbers)
console.log(stringNumber.toFixed(3))