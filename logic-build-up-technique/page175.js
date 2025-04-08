// 5 practice problem

// ১. একটা অ্যারের জোড়সংখ্যাগুলোর গড় বা এভারেজ বের করার একটা ফাংশন লিখ এবং বিভিন্ন মান দিয়ে সেই ফাংশনকে চেক করবি, ঠিক রেজাল্ট দিচ্ছে কি না।
function evenAverage(numbers){
    const evens = []
    for(const number of numbers){
        if(number % 2 === 0){
            evens.push(number)
        }
    }
    if(evens.length === 0){
        return 0
    }
    let evensSum = 0
    for(const even of evens){
        evensSum += even
    }
    const average = evensSum / evens.length
    return average;
}
const numbers = [23, 54, 76, 45, 34, 76, 33]
const numbers1 = [34, 43, 54, 67, 34, 75, 98]
console.log(evenAverage(numbers))
console.log(evenAverage(numbers1))




// ২. একটা অ্যারের বিজোড় সংখ্যাগুলোকে 2 দিয়ে গুণ করে একটা নতুন অ্যারে বানিয়ে নতুন অ্যারে রিটার্ন কর।
function oddsNumber(numbers){
    const oddArray = []
    for(const number of numbers){
        if(number % 2 !== 0){
            oddArray.push(number * 2)
        }
    }
    return oddArray
}

const oddNumber = oddsNumber([1, 2, 3, 4, 5, 6])
console.log(oddNumber)




// ৩. একটা অ্যারেতে যদি বিজোড়সংখ্যা না থাকে, তবে "No odd numbers found" দেখানোর ব্যবস্থা কর। আর যদি বিজোড়সংখ্যা থাকে, তাহলে "Odd numbers found" রিটার্ন কর।
function checkOddNumber(numbers){
    for(const number of numbers){
        if(number % 2 !== 0){
            return 'Odd numbers found'
        }
    }
    return 'No odd numbers found'
}
const array = checkOddNumber([1, 2, 3, 4, 5, 6])
console.log(array)




// ৪. একটা অ্যারেতে বিজোড়সংখ্যাগুলোর গড় বের করে দশমিকের পরে দুই ঘর পর্যন্ত মান রিটার্ন কর।
function oddAverage(numbers){
    const odds = []
    for(const number of numbers){
        if(number % 2 !== 0){
            odds.push(number)
        }
    }
    if(odds.length === 0){
        return 0
    }
    let oddsSum = 0
    for(const odd of odds){
        oddsSum += odd
    }
    const average = oddsSum / odds.length
    return average.toFixed(2);
}
const oddArray = oddAverage([])
console.log(oddArray)




// ৫. অ্যারেতে প্রতিটি বিজোড় সংখ্যা থেকে 1 বিয়োগ করে একটা নতুন অ্যারে বানিয়ে ফেল।
function subtractOne(numbers){
    const array = []
    for(const number of numbers){
        if(number % 2 !== 0){
            array.push(number - 1)
        }
    }
    return array
}
const numberArray = subtractOne([3, 4, 5, 6, 7, 8])
console.log(numberArray)
