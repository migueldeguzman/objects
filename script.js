var user = {
	name: "John",
	age: 34,
	hobby: "soccer",
	isMarried: false,
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.hobby);
console.log(user.isMarried);

user.favouriteFood = "spinach";
console.log("added user.favouriteFood =", user.favouriteFood);
console.log(user);

console.log("changed user.isMarried to",user.isMarried = true);
console.log(user);
console.log("added user.spells =", user.spells = ["kaboom!", "booom!", "abrakadabra!"]);
console.log("accessing the spell", user.spells[0]);

console.log("added user.spells =", user.shout = function () {
	console.log("aaaaaahhhhhh!");	
});
console.log(user);
console.log("calling method user.shout in the next line"); //a function inside an object is a method
user.shout();

// console.log(emptyObject = {});
// console.log(nullObject = null);

// console.log(emptyObject.lifeCounter = 20);
// console.log(emptyObject);

// console.log(emptyObject = 2);
// console.log(emptyObject);