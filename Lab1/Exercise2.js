// 2. (a)
//Arrow function to print "Data Representation & Querying" in console.
//Arrow function takes an argument, in this case sampleString is passed
//into it.
const sampleString = "Data Representation & Querying"
const say = (x) => {console.log(x)};
say(sampleString); //Result: "Data Representation & Querying"

// 2. (b)
//Arrow function now takes a parameter and does something
//to it, then returns it.
//In this case, sampleNumber is passed in, printed, then incremented & returned.
const sampleNumber = 3;
const increment = (x) => {
    console.log(x); //Result: 3
    return ++x; 
};
console.log(increment(sampleNumber)); //Result: 4

// 2. (c)
//Arrow function takes two params, sums them, prints them, then returns them.
const sampleSum1 = 2;
const sampleSum2 = 3;
const sum = (x, y) => {
    console.log(x+y); //Result: 5
    return x+y;
}
sum(sampleSum1, sampleSum2);

// 2. (d)
//Callback function using array.map. Multiplies every number below 70 by 2.
const ages = [25, 31, 42, 77];
const result = ages.map((x) => {
    if(x < 70)
        return x * 2;
    else
        return x;
});
console.log(result); //Result: 50, 62, 84, 77.

