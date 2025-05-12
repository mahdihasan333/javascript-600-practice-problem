// 4 practice problem

// ১. setTimeout() দিয়ে একটা ফাংশন তৈরি কর, যেখানে 3 সেকেন্ড পর “I wasted 3 seconds of my life by looking at screen and doing nothing” প্রিন্ট হবে।
setTimeout(() => {
    console.log('I wasted 3 seconds of my life by looking at screen and doing nothing')
}, 3000);




// ২. দুই সেকেন্ড পর পর একটা একটা করে সংখ্যা দেখাবে। 131 থেকে শুরু হবে এবং প্রতিবার দুই করে বাড়বে।
let number = 131
setInterval(()=> {
    console.log(number)
    number += 2
}, 2000)




// ৩. দুই সেকেন্ড পরপর কনসোলে I am learning javascript লগ করবি এবং ৬ বার আউটপুট দেখানোর পর থেমে যাবে।
let num = 0
const interval = setInterval(() => {
    num ++
    console.log("I am learning javascript")
    if(num === 6){
        clearInterval(interval)
    }
}, 2000)




// ৪. setTimeout()-এর সেকেন্ড প্যারামিটার বাদ দিলে ডিফল্ট হিসেবে কত মাইক্রোসেকেন্ড ধরে নেয়?
setTimeout(()=> {
    console.log('no delay')
})