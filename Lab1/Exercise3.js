// 3. (a)
// an array of strings
const stringArray = ["Hello,", "today", "is", "the", "twenty-seventh", "of"];

// 3. (b)
// addTask function uses the array.push function to add
// an element to the end of the array. It returns the value that
// push returns, which is the new number of elements in the array.
const addTask = (insert) => {
    console.log("Adding "+insert+ " to array...")
    return stringArray.push(insert);
};
const month = "September";
console.log("Elements in stringArray after adding: "+addTask(month));

// 3. (c)
// Iterates through every item in the array
// and prints every item to console.
const listTasks = () => {
    stringArray.forEach(element => {
        console.log(" -> "+ element);
    });
};
listTasks();
