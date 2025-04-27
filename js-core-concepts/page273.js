// 4 practice problem

// ১. একটা ফাংশন লিখ, তার ভিতরে আরেকটি ফাংশন প্যারামিটার হিসেবে পাঠিয়ে তাকে কল কর এবং রেজাল্ট দেখ।
function mainFunction(para){
    para()
}
function secondFunction(){
    console.log('Second function callback')
}
mainFunction(secondFunction)




// ২. ফাংশন লিখ, যেটি একটা অবজেক্ট প্যারামিটার নিবে এবং callback-এর মাধ্যমে অবজেক্টের সব কিগুলো কনসালে দেখাবে।
const personObject = {
    name: 'Mahdi',
    age: 22,
    occupation: 'Student'
}
function personMainFunction(object, callback1){
    callback1(object)
}
function callback1(object){
    for(let key in object){
        console.log(key)
    }
}
personMainFunction(personObject, callback1)




// ৩. numberProcessor নামে একটা ফাংশন লিখ, যেটি একটা সংখ্যা এবং একটা callback নিবে এবং সংখ্যাটিকে 5 দিয়ে ভাগ করে callback-এর মাধ্যমে আউটপুট দেখাবে।
function numberProcessor(number, callback2){
    const result = number / 5
    callback2(result)
}
function callback2(result){
    console.log(`result after divided 5 : ${result}`)
}
numberProcessor(50, callback2)




// ৪. তুই ফাংশনের ভিতর থেকে অন্য একটা ফাংশন কল করবি, যেমন greeting ফাংশনের ভিতরে greetingHandler() ফাংশন কল করা হয়েছে। একবার তুই একটা প্রোগ্রাম লিখে দেখ, যেখানে প্রথম ফাংশনটি অন্য ফাংশনকে কল করবে এবং ফাংশনের আউটপুট কনসোলে দেখাবে।
function greeting(){
    console.log('Good Morning')
}
function greetingHandler(){
    greeting()
}
greetingHandler()