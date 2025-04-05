// 7 practice problem

// ১. তোর দেওয়া array-এর মধ্যে যতগুলো উপাদান আছে, উপাদানের সংখ্যা জোড় নাকি বিজোড়, তা চেক কর। ফাংশন লিখে এটা করে দেখ।
function numberOfElements(element) {
    if(element.length % 2 == 0) {
        return "Number of elements is even";
    }
    return "Number of elements is odd";
}
console.log(numberOfElements([1, 2, 3, 4, 5, 6, 7, 8]))




// ২. ধর, তোকে এমন একটা ফাংশন বানাতে হবে, যেটাতে একটা নাম পাস করলে সেটার প্রথম অক্ষরটা রিটার্ন করবে। ধর 'Raju' দিলে 'R' রিটার্ন করবে।
function firstLetter(letter) {
    return letter[0]
}
console.log(firstLetter('Raju'))




// ৩. তুই একটা ফাংশন বানাবি, যেটাতে একটা সংখ্যা দিবি। ফাংশনটা চেক করবে, সংখ্যাটা 10-এর বড় কি না। বড় হলে 10 দিয়ে ভাগ করবে। আর 10-এর ছোট হলে 10 দিয়ে গুণ করবে। তারপর রেজাল্ট রিটার্ন করবে।
function divided(num) {
    if(num > 10){
        return num / 10
    }
    return num * 10
}
const result = divided(20)
console.log(result)




// ৪. একটা ফাংশন বানা, যেটা একটা array নিবে এবং array-এর প্রথম এবং দ্বিতীয় উপাদান যোগ করে যোগফল রিটার্ন করবে।
function sumOfFirstTwo(array) {
    return array[0] + array[1]
}
const numbersArray = [1, 2, 3, 4, 5]
const sum = sumOfFirstTwo(numbersArray)
console.log(sum)




// ৫. একটা ফাংশন বানাবি, যেটা কোনো সংখ্যা n পাবে, আর সেই সংখ্যা দ্বিগুণ করে রিটার্ন করবে, যদি n পজিটিভ হয়। যদি n নেগেটিভ হয়, তাহলে তিনগুণ করে রিটার্ন করবে।
function doubleOrTriple(n) {
    if(n >= 0){
        return n * 2
    }
    return n * 3
}
const n = doubleOrTriple(-5)
console.log(n)




// ৬. তুই এমন একটা ফাংশন লিখবি, যা দুইটা নাম নিবে, প্রথম নাম আর দ্বিতীয় নাম। যদি প্রথম নামের দৈর্ঘ্য দ্বিতীয় নামের দৈর্ঘ্যের চেয়ে বেশি হয়, তাহলে true রিটার্ন করবে, না হলে false।
function compareNameLength(name1, name2) {
    if(name1.length > name2.length){
        return true
    }
    return false
}
const names = compareNameLength('Raju', 'Rajeev')
console.log(names)




// ৭. তুই এমন একটা ফাংশন লিখ, যা দুইটি সংখ্যা নিবে এবং তাদের গুণফল রিটার্ন করবে। তবে, গুণফল 100-এর বেশি হলে শুধু তার অর্ধেক রিটার্ন করবে।
function calculate(num1, num2) {
    const multiple = num1 * num2;
    if(multiple > 100) {
        return multiple / 2
    }
    return multiple;
}
console.log(calculate(1, 2));
