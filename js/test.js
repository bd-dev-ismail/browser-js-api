/**
 * ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,
 */
// console.log('hey');
setTimeout(()=>{
    // console.log('hello')
},3500);
// console.log('hi');
/**
 * ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
 */
const userInput = () =>{
   const num = JSON.parse(prompt("Enter a number"));
   const plus = JSON.parse(num + 200);
   alert(plus);
}
// userInput();
/**
 * ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
 */
const showLocation = () =>{
   const con = confirm('Please confrim to show your location');
    if(con === true){
        console.log(location.href);
    }
    else{
        console.log('I dont want to show my location');
    }
}
// showLocation();
/**
 * ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 
 * --data stored in small text file, naturally sent by visited webstite, sent to user computer throw browser, stored key value in pair
 * 1.Cookies use to track user broweser activity / track site visitor count
 * 2.Rembering for login details 
 * 3.Cookies send data to server .
 * 4.cookies are mainly use for three porupose 
 * -Session management( Logins, shopping carts, game scrore , or anything else sould the server want to remeber)
 * -personalization (user preference , themes & other setting)
 * -Tracking ( Recording & analyzing user behavior)
 * 
 */
/**
 * ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )
 * Local Storage Vs Session Storage
 * 1. Local Storage capacity is 10Mb where session storage able to take 5Mb
 * 2.Local storage accessable from any window, on the other hand session storage access only current tab.
 * 3.they are both work on browser.
 * 4.if we talk about their expairtion is local storage never expair & session storage close to tab .
 * 5.
 */