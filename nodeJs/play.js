// const name = 'Pavel';
// let age = 29;
// const hasHobbies = true;

// age = 25;
// // cannot assign value to const variable
// // name = lolwa;
// function summarizeUser(userName, userAge, userHasHobby) {
//     return (
//         'Name is ' + userName + ', age is ' + userAge +
//         ' and the user has hobbies: ' + userHasHobby
//     );
// }

// console.log(summarizeUser(name,age,hasHobbies));
// const add = (a,b) => a + b;
// const addone = a => a + 1;
// const addRandom = () => 1 + 2;
// console.log(add(1,2));
// console.log(addone(1));
// console.log(addRandom());

const person = {
    name: 'Pavel',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name  );
    }
};

//spread operator
// const copiedPerson = {...person}
// console.log(copiedPerson)

// person.greet();

//object destruction

const {name,age} = person
console.log(name, age)

const hobbies = ['sports', 'Cooking'];


//array destructuring

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2)

// console.log(hobbies.map(hobby => 'Hobby : ' + hobby));
// console.log(hobbies);

// hobbies.push('Programming');
// console.log(hobbies);


//spread operator
// const copiedArray = [...hobbies];
// console.log(copiedArray);


//using the rest operator as the function
// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1,2,3,4,5,6,7));











