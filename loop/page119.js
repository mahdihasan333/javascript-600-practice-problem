// 6 practice problem

// ১. তোর কাজ হবে 20 থেকে 50 পর্যন্ত যে সকল সংখ্যা 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা।
for(let i = 20; i <= 50; i++) {
    if(i % 7 == 0) {
        console.log(i);
    }
}




// ২. এইবার 40 থেকে 80 পর্যন্ত যে সকল সংখ্যা 5 দিয়ে এবং 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা।
for(let i = 40; i <= 80; i++) {
    if(i % 5 == 0 && i % 7 == 0) {
        console.log(i);
    }
}




// ৩. এখন তোর প্রবলেম হলো 1 থেকে 40 পর্যন্ত যে সকল সংখ্যা 13 দিয়ে বিভাজ্য, তাদের যোগফল কর।
let total = 0;
for(let i = 1; i <= 40; i++) {
    if(i % 13 == 0) {
        total += i;
    }
}
console.log(total);




// 8. For লুপ দিয়ে 1 থেকে 50 পর্যন্ত লুপ চালাবি। তবে লুপ চালানোর সময় লুপ ভেরিয়েবলের মান প্রত্যেকবার 4 করে বাড়াবি।
for(let i = 1; i < 50; i = i + 4){
    console.log(i);
}




// ৫. ০ থেকে 100 পর্যন্ত সব সংখ্যাগুলো প্রিন্ট কর, যা 9 এবং 6 দিয়ে বিভাজ্য।
for(let i = 0; i <= 100; i++) {
    if(i % 6 == 0 && i % 9 == 0) {
        console.log(i);
    }
}




// ৬. 1 থেকে 50 পর্যন্ত এমন সংখ্যাগুলো প্রিন্ট কর, যা 3 এবং 4 উভয়ের দ্বারা বিভাজ্য এবং সংখ্যাগুলোর যোগফল বের কর।
let sum = 0
for(let i = 1; i <= 50; i++) {
    if(i % 3 == 0 && i % 4 == 0) {
        sum += i;
        console.log(i);
    }
}
console.log('Sum of numbers :',sum)