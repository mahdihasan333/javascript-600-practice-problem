// 3 practice problem

// ১. একটা function লিখ, যেটা একটা income amount প্যারামিটার হিসেবে নিবে এবং কোনো tax bracket-এ পড়ে সেটা রিটার্ন করবে। ইনকাম যদি ≤ 50,000- এর নিচে হয়, তাহলে 10 রিটার্ন করবে। ইনকাম 50,001-100,000-এর মধ্যে হলে 20 ট্যাক্স হবে। আবার 100,001-200,000-এর মধ্যে হলে 30, আর$200,000 ওপরে হলে 40 পার্সেন্ট ট্যাক্স হবে। ফাংশন থেকে শুধু সংখ্যা রিটার্ন করবি। কোনো পার্সেন্টেজ চিহ্ন রিটার্ন করবি না।
function incomeText(income ) {
    if (income <= 50000) {
        return (income * 10) / 100;
    } else if (income >= 50001 && income <= 100000) {
        return (income * 20) / 100;
    } else if (income >= 100001 && income <= 200000) {
        return (income * 30) / 100;
    } else if (income > 200000) {
        return (income * 40) / 100;
    }
}
const amount = incomeText(1000)
console.log(amount)




// ২. একটা প্যাকেজ ডেলিভারির খরচ হিসাব কর। যেখানে 10kg-এর কম হলে 100 টাকা। আর 20kg-এর কম হলে 300 টাকা। 50 kg-এর কম হলে 1000 টাকা। আর তার বেশি হলে কেজিপ্রতি 100 টাকা করে খরচ দিতে হবে।
function deliveryCost(weight){
    if(weight < 10){
        return 100
    }
    else if(weight < 20){
        return 300
    }
    else if(weight < 50){
        return 1000
    }
    else{
        return weight * 100
    }
}

const packageWeight = deliveryCost(60)
console.log(packageWeight)




// ৩. একটা function বানা, যেটা marks input নিবে এবং তারপর 80 বা তার ওপরে হলে A, 70 থেকে 79 হলে B, 60 থেকে 69-এর মধ্যে হলে C, 50 থেকে 59- এর মধ্যে হলে D, আর 50-এর নিচে হলে F গ্রেড return করবে।
function grade(marks){
    if(marks >= 80){
        return "A"
    }
    else if(marks >= 70){
        return "B"
    }
    else if(marks >= 60){
        return "C"
    }
    else if(marks >= 50){
        return "D"
    }
    else{
        return "F"
    }
}

const examMarks = grade(60)
console.log(examMarks)