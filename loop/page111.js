// 5 practice problem

// ১. while লুপ দিয়ে 50 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট কর।
let i = 50;
while(i <= 100) {
    console.log(i);
    i++;
}




// ২. while লুপ দিয়ে 5 থেকে 15 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর।
let j = 5;
let sum = 0;
while(j <= 15) {
    sum += j;
    j++;
}
console.log(sum);




// ৩. তুই এক স্কুলে 1 থেকে 50 পর্যন্ত ছাত্রদের রোল নাম্বার লিস্ট করবি, তারপর একটা while লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।
let rollNumbers = 1
let totalNumbers = 0
while(rollNumbers <= 50) {
    totalNumbers += rollNumbers;
    rollNumbers++;
}
console.log(totalNumbers);




// 8. while লুপ ব্যবহার করে 21 থেকে 50 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং প্রতিবারের যোগফল দেখাবি।
let number = 21
let total = 0
while(number <= 50) {
    total += number;
    console.log(number, 'Current Sum:' ,total );
    number++;
}




// ৫. 20 থেকে 40 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং শুধু ফাইনাল যোগফলটা আউটপুট হিসেবে দেখবি।
let start = 20;
let finalSum = 0;
while (start <= 40) {
    finalSum += start;
    start++;
}
console.log(finalSum);