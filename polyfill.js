let name={
    firstName:'Mamatha',
    lastName:'Bobbili'
}

/** Basic Bind  */
let printName=function(hometown,state){
    console.log(this.firstName+", "+this.lastName +", "+hometown+", "+state)
}

let printMyName=printName.bind(name,"Hyderabad")
printMyName("TG");

/** Polyfill bind - Implementing the same bind like functinality 
 1. To available for all functions assign to Function prototype
 2. As bind function returns a function will return the same
 3. We need to get access to calling object ,will assign to obj variable
 4. Obj.apply method require object to call ,will collect through args
 5. To get other parameters like city which will already collected in args need to pass them to apply
 6. To get parameters from the calling function like state,we need to pass arguments in returning function
 7. Concat the params and function args to pass into apply as a single array
*/
Function.prototype.mybind=function(...args) //1 //4
{
    let obj =this, //3
    params=args.slice(1) //5
    return function(...args2){ //2 //6
        obj.apply(args[0],[...params,...args2]);//4 //5 //7 
    }
}

let printMybind=printName.mybind(name,"Hyderabad")
printMybind("TG")
