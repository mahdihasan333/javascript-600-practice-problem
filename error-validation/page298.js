// 3 practice problem

// ১. একটা ফাংশন বানা, যা নামের প্রথম অক্ষর রিটার্ন করবে। ইনপুট যদি string না হয়, তখন validation ম্যাসেজ দিবে।
const getFirstCharacter = (name) => {
    if(typeof name !== 'string'){
        return 'Please provide a string'
    }
    return name[0]
}
console.log(getFirstCharacter('mahdi'))




// ২. একটা ফাংশন লিখ array-এর শেষ উপাদান দিবে। ইনপুট array না হলে ওয়ার্নিং ম্যাসেজ দিবে।
function getLastElement (arr){
    if(!Array.isArray(arr)){
        return 'Please provide a array'
    }
    const newArr = arr[arr.length - 1]
    return newArr
}
console.log(getLastElement([1, 2, 3,]))




// ৩. rectangle-এর area বের করার getArea ফাংশন বানা, যেখানে length আর width নাম্বার না হলে validation ম্যাসেজ দিবে। এরিয়া বের করার জন্য length আর width গুণ করে দিলেই হবে।
function getArea(length, width){
    if(typeof length !== 'number' || typeof width !== 'number'){
        console.log('Length and width must be numbers')
    }
    return length * width
}
console.log(getArea(12, 12))