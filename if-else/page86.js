// 5 practice problem

// ১. বন্ধু যদি দাওয়াত দেয়, তাহলে তার জন্মদিনের পার্টিতে তুই যাবি। আর যদি তোকে দাওয়াত না দেয়, তাহলে তাকে ফ্রেন্ডলিস্ট থেকে বের করে দিবি। আর যদি বন্ধু দাওয়াত দিয়ে ফেলে, তাহলে দাওয়াতে যাওয়ার সময় চেক করে দেখবি, পকেটে কত টাকা আছে। যদি 1000 টাকার বেশি থাকে, তাহলে বন্ধুর জন্য একটা গিফট নিয়ে যাবি। না হয় খালি হাতে যাবি।
const dawyat = true;
const money = 1200;
if (dawyat === true) {
  console.log("I will go to the party");
  if (money >= 1000) {
    console.log("I will buy a gift");
  } else {
    console.log("I will not buy a gift");
  }
} else {
  console.log("I will remove him from my friend list");
}




// ২. যদি তোর বাসায় মেহমান আসে, প্রথমে জিজ্ঞেস করবি, তারা চা খাবে কি না। যদি চা খেতে চায়, তাহলে জিজ্ঞেস করবি, সাথে বিস্কুট খাবে কি না। না চাইলে বলবি, 'শুধু চা রেডি।' আর যদি চা-ও না খেতে চায়, বলবি, 'বসে বসে স্টার জলসা দেখুন।'
const guestWantTea = true;
const guestWantCookies = false;
if (guestWantTea === true) {
  if (guestWantCookies === true) {
    console.log("Cookies are also ready");
  } else {
    console.log("Tea is ready");
  }
} else {
  console.log("Guest will watch star jalsha");
}




// ৩. তুই একটা অ্যাপ বানিয়েছিস। প্রথমে চেক করবি, ব্যবহারকারীর অ্যাকাউন্ট অ্যাকটিভ কি না। যদি অ্যাকটিভ হয়, তার সাবস্ক্রিপশন চেক করবি। যদি প্রিমিয়াম হয়, তাকে প্রিমিয়াম ফিচার দেখাবি। না হলে বলবি, 'ফ্রি ভার্সন দেখুন।'
const accountActive = true;
const premiumAccount = false;
if (accountActive === true) {
  if (premiumAccount === true) {
    console.log("Enjoy premium features");
  } else {
    console.log("Enjoy free version");
  }
} else {
  console.log("Account is not active");
}




// ৪. তোর বাসার ফ্রিজে খাবার আছে কি না, চেক করবি। যদি থাকে, খাবার গরম করবি। আর যদি না থাকে, চেক করবি, ফুড ডেলিভারি অ্যাপ কাজ করছে কি না। কাজ করলে অর্ডার করবি, না হলে বলবি, 'আজকে আমি রোজা।'
const foodInFridge = false;
const deliveryAppActive = true;
if (foodInFridge === true) {
  console.log("Heating the food");
}
else if (deliveryAppActive === true) {
  console.log("Order food online");
}
else {
  console.log("I am fasting today");
}




// ৫. ধর, তুই একটা পার্টি করবি। প্রথমে দেখবি, পার্টিতে 100 জনের বেশি গেস্ট আসবে কি না। যদি আসে, তাহলে চেক করবি, সবাই গিফট আনবে কি না। যদি আনে, বলবি, 'Lets party all night.' নচেৎ বলবি, 'I will party with myself.'
const guests = 120;
const gift = false;
if (guests > 100) {
  if (gift === true) {
    console.log("Lets party all night");
  } else {
    console.log("I will party with myself");
  }
} else {
  console.log("I will party with myself");
}
