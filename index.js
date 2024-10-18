//1
const arr =[2,3,4,5,6];


function doubleNumber(){
    const doubledArray = []
   for(const numb of arr){
doubledArray.push(numb * 2)
   }
   return doubledArray;

}
const result = doubleNumber();
console.log(result);
//2
const person = {
name: 'Sam',
age: 30,
status: "married",

}
function displayKeyValue(person){
    for(let key in person){
        console.log(`${key}: ${person[key]}`);
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

