// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.




// object literals

// define symbol data type
const mysym=Symbol("fuck you")

const user={
    name :"deepak",
    [mysym]:"dee",
age:24,
city:"roorkee"
}

//console.log(user);

// change object values
user.age=23
console.log(user);
//Object.freeze(user)

console.log(user["age"])
console.log(user[mysym])
user.age=26
console.log(user);

user.greeting=function(){
    console.log(`hello ${this.name} welcome to nodjs world` );
}

console.log(user.greeting);// its retruen functoin type

console.log(user.greeting()) // this line call your function and excute it