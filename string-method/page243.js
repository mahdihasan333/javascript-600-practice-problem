// 4 practice problem

// ১. একটা ই-মেইল আছে const email = 'User@Example.Com'; এই ই-মেইলকে ছোট হাতের অক্ষরে কনভার্ট কর।
const email = 'User@Example.Com'
const lowerCase = email.toLowerCase()
console.log(lowerCase)




// ২. const greeting = 'hELlo WoRLd'; এই স্ট্রিং পুরোটা বড় হাতের অক্ষরে এবং ছোট হাতের অক্ষরে কনভার্ট করে দেখ।
const greeting = 'hELlo WoRLd'
const upperCase = greeting.toUpperCase()
const lower = greeting.toLowerCase()
console.log(upperCase)
console.log(lower)




// ৩. কেইস ইগনোর করে চেক কর const language = 'JavaScript'; এর মধ্যে script আছে কি না।
const language = 'JavaScript'
const scriptCheck = language.includes('script')
console.log(scriptCheck)




// 8. const text = 'NodeJs'; এই স্ট্রিংয়ের প্রথম ক্যারেক্টার বড় হাতের কি না, তা চেক কর।
const text = 'NodeJs'
const checkFirstCharacter = text[0] === text[0].toUpperCase()
console.log(checkFirstCharacter)