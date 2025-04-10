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




// ৬. একটা ফাংশন তৈরি কর, যা একটা তোর সব প্রিয় বইয়ের নাম অ্যারে প্যারামিটার হিসেবে নিবে। যদি কোনো প্যারামিটার না পাঠানো হয়, তাহলে ডিফল্ট একটা অ্যারে রাখবি, সেটার মধ্যে একটা মান থাকবে JS book নামে।
function favoriteBooks(array = ['JS book']){
    return array
}
const bookList1 = favoriteBooks(['The Alchemist', 'marhaba javascript a maro thaba'])
const bookList2 = favoriteBooks([])
console.log('My favorite books are ', bookList1)
console.log('My favorite books are ', bookList2)




// ৭. একটা ফাংশন তৈরি কর, যেখানে একটা অবজেক্ট প্যারামিটার নিবে। অবজেক্টে price এবং quantity থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট মান হিসেবে price 10 এবং quantity 1 সেট কর। ফাংশন total price রিটার্ন করবে।
function calculateTotalPrice(product = {price: 10, quantity: 1}){
    const totalPrice = product.price * product.quantity
    return totalPrice
}
const totalPrice1 = calculateTotalPrice({price: 100, quantity: 2})
const totalPrice2 = calculateTotalPrice({price: 100})
console.log(totalPrice1)
console.log(totalPrice2)




// ৮. এমন একটা ফাংশন বানাও, যেখানে একটা অ্যারে প্যারামিটার নিবে। প্রতিটি উপাদানকে 2 দিয়ে গুণ করে নতুন অ্যারে রিটার্ন করবে। যদি অ্যারে না দেওয়া হয়, ডিফল্ট হিসেবে [5, 10, 15] সেট কর।
function arrayDouble(array = [5, 10, 15]){
    const newArray = []
    for(const item of array){
        const sum = item * 2
        newArray.push(sum)
    }
    return newArray
}
const doubleArray1 = arrayDouble([2, 4, 6])
const doubleArray2 = arrayDouble([])
console.log(doubleArray1)
console.log(doubleArray2)




// ৯. একটা ফাংশন তৈরি কর, যা একটা অবজেক্ট প্যারামিটার নিবে। অবজেক্টে principal এবং rate থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট principal 1000 এবং rate 5 রাখ। ফাংশন simple interest হিসাব কর, এই ফর্মুলা দিয়ে (principal * rate / 100), তাহলে রেজাল্ট রিটার্ন করবে।
function simpleInterest(interest = {principal: 1000, rate: 5}){
    return (interest.principal * interest.rate) / 100
}
const interest1 = simpleInterest({principal: 2000, rate: 7})
const interest2 = simpleInterest({})
console.log(interest1)
console.log(interest2)




// ১০. একটি ফাংশন তৈরি কর, যা একটি অবজেক্ট প্যারামিটার নিবে। অবজেক্টে salary এবং tax থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট salary 50000 এবং tax 10 সেট কর। ফাংশনের ভিতরে ট্যাক্সের পার্সেন্ট দিয়ে ট্যাক্সের টাকার পরিমাণ বের করবি। তারপর স্যালারি থেকে ট্যাক্সের টাকার পরিমাণ বিয়োগ করে রেজাল্ট রিটার্ন করবি।
function calculateSalary(info = {salary: 50000, tax: 10}){
    const tax = (info.salary * info.tax) / 100
    const total = info.salary - tax
    return total
}
const totalSalary1 = calculateSalary({salary: 20000, tax: 15})
const totalSalary2 = calculateSalary({salary: 50000})
console.log(totalSalary1)
console.log(totalSalary2)