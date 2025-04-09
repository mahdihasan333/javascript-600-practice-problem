// 10 practice problem

// ১. এমন একটা ফাংশন তৈরি কর যা তিনটি সংখ্যার যোগফল বের করবে। ডিফলট মান হিসেবে প্রতিটি প্যারামিটারের জন্য ০ সেট কর।
function threeSum(num1 = 0, num2 = 0, num3 = 0){
    const sum = num1 + num2 + num3
    return sum
}
const totalSum1 = threeSum(10, 20, 30)
const totalSum2 = threeSum(40, 50)
console.log(totalSum1)
console.log(totalSum2)




// ২. তুই এমন একটা ফাংশন লিখবি, যেখানে টাকা জমা দেওয়ার সুযোগ থাকবে। যদি কোনো টাকার পরিমাণ না দেওয়া হয়, তাহলে জমা হিসেবে ডিফল্ট 50 টাকা দেখাবে।
function amountDeposit(amount = 50){
    return amount
}
const deposit1 = amountDeposit(100)
const deposit2 = amountDeposit()
console.log('Deposit amount :', deposit1)
console.log('Deposit amount :', deposit2)




// ৩. এমন একটা ফাংশন তৈরি কর, যেখানে নাম আর তার মাসিক আয় নিবি। যদি নাম না দেওয়া হয়, তাহলে ডিফল্ট হিসেবে anonymous ইউজ করবি। আর মাসিক আয় দেয়া না থাকলে সেখানে ডিফল্ট হিসেবে 0 ইউজ করবি।
function personInfo(name = 'anonymous', income = 0){
    return name + ' earn ' + income + ' taka'
}
const info1 = personInfo('mahdi', 10000)
const info2 = personInfo()
const info3 = personInfo('Mahdi Hassan')
console.log(info1)
console.log(info2)
console.log(info3)




// ৪. এমন একটা ফাংশন লিখ, যা একটা সংখ্যা নেবে এবং সেটার বর্গ বের করবে। যদি সংখ্যা না দেওয়া হয়, সেটার ডিফল্ট মান 1 রাখ।
function calculateSquare(num = 1){
   return num * num
}
const square1 = calculateSquare(5)
const square2 = calculateSquare()
console.log(square1)
console.log(square2)




// ৫. এমন একটা ফাংশন বানা, যেটা কোনো পণ্যের নাম ও তার মূল্য নিবে। যদি নাম না দেওয়া হয়, তাহলে "Unknown product" এবং মূল্য না থাকলে 1 সেট কর।
function productDetails(name = "Unknown product", price = 1){
    return name + ' is ' + price + ' taka'
}
const details1 = productDetails('mango', 100)
const details2 = productDetails('apple')
console.log(details1)
console.log(details2)