

let displayDetails=(id:number, namez:string, mailId?:string): void =>
{
    console.log("ID:",id);
    console.log("Name:",namez);
    if(mailId !==undefined )
    {
    console.log("Email:", mailId);
    }
}

displayDetails(123,"Scott","scot@gmail.com");
displayDetails(123,"Scott");



// arrow funcitons
// let add = (a:number, b:number):number=>a+b;
// console.log(add(1,1))

// let subs = (a:number,b:number):number=>a-b
// console.log(subs(5,6))


/* 
//Anonymous function
let msg = function():string{
  return "Hello Typescript";
}
console.log(msg());

 */


/* function display():void{
        console.log("Welcome")
}

display(); */

/* 
function addNumber(x:number,y:number):number{
    return x+y;
}
console.log(addNumber(2,3))
 */


/* 
///Name func with same Res parameters

function addNumber(...nums:number[]){
        let i;
        let sum=0;

        for(i=0;i<nums.length;i++){
            sum+=nums[i];
        }
        console.log("sum of the numers ", sum )
    }

    addNumber(1,2,3)
    addNumber(10,20,30,40)

 */

    /* 
function findElements(...elements:(number | string)[]):number{

    return elements.length;
}

console.log(findElements("Pavan",1,2,4));
console.log(findElements("K",1,2,3,"Pavana"));

 */

/* 
//Options Parmaters 
function printFunc(UserName:String,id:number,emailId?:string){

    console.log("ID",id)
    console.log("Username",UserName)
     console.log("EmailId",emailId)

}
printFunc("Pavan",1)
printFunc("Pavan",1,"A@gmail.com")

 */
