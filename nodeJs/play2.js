// // //example of asynchronous function

// // const fetchData = callback => {
// //     setTimeout(() => {
// //         callback("Done")
// //     }, 1500);
// // }

// // setTimeout(() => {
// //     console.log("timer is done !")
// //     fetchData(text => {
// //         console.log(text);
// //     })
// // }, 2000)

// // with the help of a promise

// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Done !")
//         }, 1500)
//     })
//     return promise;
// }


// setTimeout(()=>{
//    console.log("timer is done ! ");
//    fetchData()
//    .then(text => {
//        console.log(text);
//        //this will return as promise
//        return fetchData();
//    })//this then refers to the above fetchData() promise call
//    .then(text2 => {
//        console.log(text2);
//    });
// }, 2000)


//Template literals

const name = "Pavel";
const age = 29;

console.log(`His name is - ${name} and he loves to code, still at the age of : ${age}`)