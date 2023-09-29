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

// 3. (d)
//Finds the index of the given task, then uses splice to remove it from the array if found.
//If not, prints that the element was not found.
const deleteTask = (task) => {
    let index = stringArray.indexOf(task);
    if(index != -1) {
        console.log(stringArray.splice(index, 1) + " was deleted from the array!");
    }
    else {
        console.log("Element "+task+" not found!");
    }
    return stringArray.length;
};

deleteTask("September");
console.log("New size of array: "+deleteTask("of"));
deleteTask("October");
listTasks();