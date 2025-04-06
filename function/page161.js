// 7 practice problem

// ১. তোর এক বন্ধুর কাছে কিছু নাম্বার আছে: [5, 15, 8, 7]। ওর চাওয়া অনুযায়ী, শুধু বিজোড় সংখ্যাগুলোর যোগফল বের করে দে। এই কাজের জন্য একটা ফাংশন লিখে ফলাফলটা রিটার্ন কর।
function oddNumbersSum(numbers){
    let sum = 0
    for(const number of numbers){
        if(number % 2 !== 0) {
            sum += number
        }
    }
    return sum
}
const total = oddNumbersSum([5, 15, 8, 7])
console.log(total)




// ২. একটা ফাংশন লিখে দেখ, যেটা array-এর প্রথম দুইটা উপাদানের মধ্যে যেটা ছোট সেটাকে রিটার্ন করবে। উদাহরণস্বরূপ, তুই যদি [20, 45, 78] পাঠাস, ফাংশন 20 রিটার্ন করবে।
function smallNumber(number) {
    if(number[0] < number[1]){
        return number[0];
    }
    return number[1];
}
const smallestNumber = smallNumber([20, 45, 78]);
console.log(smallestNumber);




// ৩. তুই তোর বয়স একটু লুকিয়ে-চুপিয়ে দেখাতে চাস। ধর, তোর বয়স 18-এর কম হলে তুই রিটার্ন 18, আবার 45-এর বেশি হলে তুই বলবি 45, আর এই দুইটার মাঝখানে কোনো সংখ্যা হলে সরাসরি সেই সংখ্যাটা রিটার্ন করে পাঠিয়ে দিবি। এমন একটা ফাংশন লিখ।
function secretAge(age){
    if(age < 18){
        return 18;
    }
    else if(age > 45){
        return 45;
    }
    return age
}
const secretAgeResult = secretAge(50);
console.log(secretAgeResult);




// ৪. তোর এক বন্ধুর কাছে একটা array আছে, যেমন: [2, 4, 5, 7, 8, 32, 45]। এখন এমন একটা ফাংশন তৈরি কর, যেটা শুধু array-এর 4 দিয়ে ভাগ যায়, এমন সংখ্যাগুলোর যোগফল দেখাবে।
function dividedByFour(numbers){
    let sum = 0
    for(const number of numbers){
        if(number % 4 === 0){
            sum += number
        }
    }
    return sum
}
const numbersArray = dividedByFour([2, 4, 5, 7, 8, 32, 45])
console.log(numbersArray)




// ৫. একটা ফাংশন লিখ, যা একটা নাম্বার নিবে এবং সেটি যদি 20-এর কম হয়, তবে নাম্বারটিকে দ্বিগুণ করবে, না হলে 20 দিয়ে ভাগ করবে।
function handleNumber(number){
    if(number < 20){
        return number * 2;
    }
    return number / 20
}
const number = handleNumber(30)
console.log(number)




// ৬. এমন একটা ফাংশন লিখ, যা array-এর মধ্যে শুধু নেগেটিভ সংখ্যাগুলোর যোগফল রিটার্ন করবে।
function sumOfNegativeNumbers(numbers){
    let sum = 0
    for(const number of numbers){
        if(number < 0){
            sum += number;
        }
    }
    return sum
}
const numberArray = sumOfNegativeNumbers([-5, 3, 10, -8, 7]);
console.log(numberArray)




// ৭. একটা ফাংশন লিখ, যা একটা array নিবে এবং array-এর মধ্যে যে সংখ্যাগুলো 3 দিয়ে ভাগ যায়, তাদের গুণফল রিটার্ন করবি।
function multipleByThree(numbers){
    let multiple = 1
    for(const number of numbers){
        if(number % 3 === 0){
            multiple *= number;
        }
    }
    return multiple
}
const arrayNumber = multipleByThree([2, 3, 6, 7, 9])
console.log(arrayNumber)