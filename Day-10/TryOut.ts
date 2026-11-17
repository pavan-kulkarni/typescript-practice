

let fruits:string[]=["Apple","banana","Pineapple","Orange"]

let veggies:Array<string>=["Bhopla","Karle","Mirchi","Menasu"]

let result=fruits.concat(veggies);

// result.forEach(
//     (result,i)=>{  console.log(`${i + 1}. ${result}`);

// })


result.forEach(
    (result,i)=> {console.log(`${i+1}.${result}`)}
)

// console.log(veggies)
// console.log(veggies.toString())


// console.log(result.includes("Bhopla"))

// veggies.splice(4,0,"aloooo","bhindi")

// let resultSliced = result.slice(4,8)

/* let lastFruit=fruits.pop()
console.log(lastFruit) */
// fruits.push("Mango")
//console.log( fruits.shift())
//console.log( fruits.unshift())
//console.log( fruits)


/* console.log(a===null);
console.log(a===undefined); */

/* 
//Throws error in the code
console.log(null+1);
console.log(undefined + 1); */
