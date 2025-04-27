// 4 practice problem

// ১. একটা গ্লোবাল ভেরিয়েবল taxRate ডিক্লেয়ার কর, যার মান হবে 15। taxRate-এর মান বলতে ট্যাক্স রেটের পার্সেন্টেজ বোঝায়। এরপর একটা ফাংশন লিখ, যেটা একজন মানুষের ইনকামকে ইনপুট হিসেবে নিবে। তারপর ফাংশনের ভিতরে taxRate-এর পার্সেন্টেজ ইউজ করে ট্যাক্সের পরিমাণ কত হবে সেটা রিটার্ন করবে।
const taxRate = 15
function calculateTax(income){
    const tax = (income * taxRate) / 100
    return tax
}
const personTax = calculateTax(10000)
console.log(personTax)




// ২. একটা ফাংশন বানা, যেটার মধ্যে let দিয়ে insideSecret নামে ভেরিয়েবল ডিক্লেয়ার কর। এইটার মান হবে "internal secret hiding place"। ফাংশনের বাইরে থেকে insideSecret অ্যাক্সেস করতে চেষ্টা কর।
function secret(){
    let insideSecret = "internal secret hiding place"
    console.log(insideSecret)
}
secret()
console.log(insideSecret)




// ৩. if ব্লকের ভিতরে let দিয়ে temperature ভেরিয়েবল ডিক্লেয়ার কর এবং সেই ব্লকের বাইরে থেকে অ্যাক্সেস করার চেষ্টা কর।
if(true){
    let temperature = 45
    console.log(temperature)
}
console.log(`Block outside ${temperature}`)




// ৪. একটা ফাংশন বানা, যার নাম হবে schoolDetails। এই ফাংশনের ভেতরে schoolName নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। এরপর schoolDetails ফাংশনের ভেতরে আরেকটা nested ফাংশন বানা, যার নাম হবে displaySchoolName। এই nested ফাংশন outer ফাংশনের schoolName ভেরিয়েবল অ্যাক্সেস করে সেটা console-এ প্রিন্ট করবে। ফাংশনগুলো কল করার সময় যেন আউটপুটে স্কুলের নাম দেখা যায়। এখন বাহির থেকে schoolDetails ফাংশনকে কল কর।
function schoolDetails(){
    const schoolDetails = 'xyz high school'
    function displaySchoolName(){
        console.log(schoolDetails)
    }
    displaySchoolName()
}
schoolDetails()