// 9 practice problem

// ১. বই নামে একটা অবজেক্ট বানিয়ে ফেল। সেটার মধ্যে বইয়ের নাম, লেখক, দাম ইত্যাদি থাকবে। তারপর অবজেক্টের সব প্রোপার্টি (keys) এবং সব ভ্যালু (values) কনসোল লগ কর।
const book = {
    name: "Marhaba JavaScript-e maro thaba",
    author: "Jhankar Mahbub",
    price: 585
}
const keys = Object.keys(book)
const values = Object.values(book)
console.log(keys)
console.log(values)




// ২. এই অবজেক্টটিতে চেক কর, author প্রোপার্টি আছে কি না। const article = { title: "Learning JS", category: "Programming" };
const article = {
    title: "Learning JS",
    category: "Programming"
}
const articleKeys = Object.keys(article)
const hasAuthor = articleKeys.includes(article)
console.log(hasAuthor)




// ৩. তোকে ল্যাপটপ নামের একটা অবজেক্ট দেয়া হলো- const laptop = { brand: "Dell", model: "Inspiron", price: 45000 }; এইবার for...in লুপ চালিয়ে প্রতিটি প্রোপার্টি এবং তার মান প্রিন্ট কর।
const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 45000
};
for(const key in laptop) {
    const value = laptop[key];
    console.log(key, value);
}




// ৪. একটা phone নামের অবজেক্ট আছে। const phone = { brand : "Samsung", model: "Galaxy S21", price: 85000 }; এইটার জন্য Object.keys ব্যবহার করে for...of লুপ চালিয়ে প্রতিটি প্রোপার্টি এবং তার মান কনসোল লগ কর।
const phone = {
    brand : "Samsung",
    model: "Galaxy S21",
    price: 85000
};
const phoneKeys = Object.keys(phone)
for(const phoneKey in phone){
    const phoneValue = phone[phoneKey];
    console.log(phoneKey, phoneValue);
}




// ৫. তুই একটা bike অবজেক্ট বানাস, যেখানে brand: "Hero", price: 120000, আর model: "Splendor" প্রোপার্টিগুলো থাকবে। Object.values() মেথড ব্যবহার করে সব ভ্যালুগুলো বের কর।
const bike = {
    brand: "Hero",
    price: 120000,
    model: "Splendor"
};
const bikeValues = Object.values(bike)
console.log(bikeValues)




// ৬. const books = { book1 "Harry Potter", book2 "The Hobbit", book3 "Game of Thrones" }; এর ওপরে লুপ চালিয়ে সব বইয়ের নাম কনসোল লগ কর।
const books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of Thrones"
};
const bookNames = Object.values(books)
for(const bookName of bookNames){
    console.log(bookName);
}


// ৭. সংখ্যার একটা অবজেক্ট দিলাম const numbers = { a: 10, b: 20, c: 30, d: 40 }; এইবার বুদ্ধি খাটিয়ে এই অবজেক্টের সব প্রোপার্টির ভ্যালুগুলোর যোগফল বের কর।
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};
let numbersSum = 0
for(const number in numbers) {
    numbersSum += numbers[number];
}
console.log(numbersSum)




// ৮. একটা player অবজেক্ট বানা, যেখানে name Messi, team Argentina, আর goals 91 থাকবে। Object.values ব্যবহার করে সব ভ্যালু বের কর।
const player = {
    name: "Messi",
    team: "Argentina",
    goals: 91
};
const playerValues = Object.values(player)
console.log(playerValues)




// ৯. একটা building অবজেক্ট বানা, যার মধ্যে floors 10, address {street Main Road, city Dhaka}, আর type Commercial। এখন একটা for...in লুপ চালিয়ে সব প্রোপার্টি আর ভ্যালু প্রিন্ট কর।
const building = {
    floors: 10,
    address: {
        street: "Main Road",
        city: "Dhaka"
    },
    type: "Commercial"
};
for(const key in building){
    if(typeof building[key] === 'object'){
        for(const innerKey in building[key]){
            console.log(innerKey , building[key][innerKey]);
        }
    }
    else{
        console.log(key, building[key]);
    }
}

// ৯ নাম্বার প্রাক্টিস প্রবলেম সল্ভড করতে আমার ChatGPT এর সাহায্য নেওয়া লাগছে। আমি শুধু লজিক বুজতে ChatGPT এর সাহায্য নিয়েছি।