// 3 practice problem

// ১. একটা ভ্যারিয়েবল বানা, যার নাম হবে num এবং সেটাতে 15 রাখ। আরেকটি ভ্যারিয়েবল বানা, যার নাম হবে copy এবং num-এর মান সেট কর। এবার copy-এর মান পরিবর্তন করে 25 কর। এরপর console.log-এ num এবং copy-এর মান দেখ। দুইটা কি সেইম নাকি আলাদা আলাদা।
let num = 15;
let copy = num;
copy = 25;
console.log(num, copy);




// ২. একটা অ্যারে তৈরি কর, যার নাম হবে arr এবং সেটাতে [1, 2, 3] থাকবে। সেটি আরেকটি ভ্যারিয়েবলে সেট কর। কপি করা ভ্যারিয়েবলে 88 যোগ কর। তারপর প্রথম এবং কপি করা অ্যারে কনসোল লগ করে দেখ, দুইটা কি ডিফারেন্ট আউটপুট দেখাচ্ছে?
let arr = [1, 2, 3];
let copyArr = [...arr];
copyArr.push(88);
console.log(arr, copyArr);




// ৩. একটা অবজেক্ট বানা, যার নাম হবে language, যার মধ্যে দুটি প্রোপার্টি থাকবে name এবং age। name হবে JS এবং age হবে 30। language অবজেক্টটি একটা নতুন ভ্যারিয়েবল newVersion-এ সেট কর। এরপর newVersion-এ নতুন প্রোপার্টি যোগ কর, যেটার key হবে location এবং value হবে Browser। console.log ব্যবহার করে person এবং newPerson-এর মান দেখাও।
let language = {
    name: "JS",
    age: 30
};
let newVersion = language;
newVersion.location = "Browser";
console.log(language, newVersion);