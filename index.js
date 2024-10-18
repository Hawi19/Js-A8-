//1
let arr = [2,3,4,5]

function doubleNum(element){
for(let x of arr){
  console.log  (x * 2)
}
}
doubleNum(arr)
//2
let person = {
    name:"Sam",
    age: 30,
    status: "Married",
};
function displayKeyValue (){
   for (key in person){
    console.log(`${key}: ${person[key]}`)
   }
}
displayKeyValue(person)




//3


const greet = ["Hello", "I", "am", "Sam"];
function printWithDelay(strings) {
    let index = 0; 
    for (const str of strings) {
        setTimeout(() => {
            console.log(str);
        }, index * 1000); 
        index++;
    }
}
printWithDelay(greet)

