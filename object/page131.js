// 8 practice problem

// ১. তুই player অবজেক্ট তৈরি করবি। নাম, বয়স, স্পোর্টস, টিম ইত্যাদি প্রোপার্টি থাকবে। তারপর সেই অবজেক্ট থেকে dot notation দিয়ে তার টিমের নাম console কর।
const player = {
    name: 'Cristiano Ronaldo',
    age: 39,
    sport: 'Football',
    team: 'Al Nasar',
}
const playerTeam = player.team
console.log(playerTeam)




// ২. একটা laptop অবজেক্ট তৈরি কর। তার brand, price, hardDisc, ram, screenSize ইত্যাদি প্রোপার্টি থাকবে। dot notation দিয়ে screenSize বের করে দেখ।
const laptop = {
    brand: 'Apple',
    price: 150000,
    hardDisc: '512GB SSD',
    ram: '16GB 1600 MHz DDR3',
    screenSize: '15-inch'
}
const laptopScreenSize = laptop.screenSize
console.log(laptopScreenSize)




// ৩. তোর একটা প্রিয় জায়গা আছে, যার নাম favPlace। তার মধ্যে কিছু তথ্য আছে। যেমন, name: "Cox's Bazar", distance: "400km", আর popularity: "high"। bracket notation দিয়ে popularity প্রোপার্টি console log কর।
const favPlace = {
    name: "Cox's Bazar",
    distance: '400km',
    popularity: 'high'
}
const popularityPlace = favPlace['popularity']
console.log(popularityPlace)




// ৪. তুই একটা phone অবজেক্ট বানাস। সেখানে brand, color, price প্রোপার্টি থাকে। ব্রান্ড দিস Nokia, কালার black আর দাম 5000। ব্র্যাকেট নোটেশন দিয়ে দাম বের কর।
const phone = {
    brand: 'Nokia',
    color: 'black',
    price: 5000,
}
const phonePrice = phone['price']
console.log(phonePrice)




// ৫. একটা library অবজেক্ট তৈরি কর। তার মধ্যে name Public Library, location Dhaka আর books: 5000 প্রোপার্টি থাকবে। dot notation দিয়ে location বের কর।
const library = {
    name: 'Public Library',
    location: 'Dhaka',
    books: 5000,
}
const libraryLocation = library.location
console.log(libraryLocation)




// ৬. একটা movie অবজেক্ট বানা। যার title Inception, director Nolan, rating 91 bracket notation দিয়ে rating প্রোপার্টি বের কর।
const movie = {
    title: 'Inception',
    director: 'Nolan',
    rating: 91,
}
const movieRating = movie['rating']
console.log(movieRating)




// ৭. একটা college অবজেক্ট বানা। যার নাম ndc, স্থাপিত (established) 1949, গ্রুপ (groups) ['Science', 'Arts', 'Commerce']। এইবার তোর কাজ হবে সেকেন্ড groups-এর মান অর্থাৎ 1 ইনডেক্সের মান বের কর।
const college = {
    name: 'ndc',
    established: 1949,
    groups: ['Science', 'Arts', 'Commerce'],
}
const collegeGroup = college.groups[1]
console.log(collegeGroup)




// ৮. একটা family অবজেক্ট বানা। যার মধ্যে একটা প্রোপার্টি হবে father সেটার মানও আরেকটা অবজেক্ট এবং ফাদারের মধ্যে তোর আব্বুর নাম, বয়স এবং পেশা (profession) থাকবে। একইভাবে family অবজেক্টে mother নামে আরেকটা প্রোপার্টি থাকবে, সেই প্রোপার্টির মানও আরেকটা অবজেক্ট। আর mother-এর অবজেক্টের মধ্যে তোর আম্মুর নাম, বয়স আর পেশা থাকবে। এখন তোর কাজ হচ্ছে, mother-এর age প্রোপার্টি বের কর। তারপর তোর আব্বুর age-এর মান বের কর। তারপর এই দুইটা age-এর যোগফল বের করে সেটা আউটপুট হিসেবে দেখা।
const family = {
    father: {
        name: 'Shah Alom',
        age: 45,
        profession: 'Business',
    },
    mother: {
        name: 'Noeon Akter',
        age: 38,
        profession: 'HouseWife',
    },
}
const fatherAge = family.father.age
const motherAge = family.mother.age
const combinedAge = motherAge + fatherAge
console.log('Mother age :', motherAge)
console.log('Father age :', fatherAge)
console.log('Combined age :', combinedAge)