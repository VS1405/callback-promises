// console.log("person1: show ticket");
// console.log("person2: show ticket");

// // const personWifebringTicket =  new Promise((resolve, reject) =>{
// //         setTimeout(() => {
// //             resolve("ticket")
// //         }, 3000);
// //     });
// // const getPopcorn = personWifebringTicket.then((t)=> {
// //   console.log("husband: lets go in now");
// //   console.log("wife: no I am hungry now");
// //   return new Promise((resolve, reject) => {
// //     resolve(`${t} get popcorn`)
// //   })
// // })
// // const getButter = getPopcorn.then((t) => {
// //     console.log("husband: anything else")
// //     console.log("wife: I want butter on popcorn")
// //     return new Promise((resolve, reject)=>{
// //         resolve(`${t} got butter `);
// //     })
// // })
// // getButter.then((t)=> console.log(t))

// const preMovie = async () => {
//     const personWifebringTicket =  new Promise((resolve, reject) =>{
//                 setTimeout(() => {resolve("tickets")}, 3000);
//             });
//     const getpopcorn = new Promise((resolve, reject) => resolve("got popcorn"));
            
//      const getColdDrinks = new Promise((resolve, reject)=> resolve("cold drink")); 

//      const addButter = new Promise((resolve, reject) => resolve("added butter on popcorn") )
   
//           let ticket = await personWifebringTicket;      
//           /*   console.log(`wife: I have a ${ticket}`)
//             console.log(`husband: Lets go in`);
//             console.log(` wait I am hungry`) 

//             let popcorn = await getpopcorn;
//             console.log(`husband: I got some ${popcorn}`);
//             console.log(`husband: Anything else`);
            
//             let drink = await getColdDrinks;
//             console.log(`husband: I got two ${drink}`)
//             console.log("lets go in and enjoying movie") */

//       let [popCorn, Drink, butter] = await Promise.all([getpopcorn, getColdDrinks, addButter]);
//       console.log(`${popCorn} ${Drink} ${butter}`)
//      return ticket;
// };
// preMovie().then((m)=> console.log(`person3: show ${m}`))

// console.log("person4: show ticket");
// console.log("person5: show ticket");

// /* converting into asyn */


const post = async (Post)=>{
const createdPost = new Promise ((resolve, reject)=> {resolve(`Post Created`)});
let POST = await createdPost;

const Deleted = new Promise ((resolve, reject)=>resolve("Post Deleted Succesfully"))

let Deletepost = await Deleted
console.log(`${POST}`)
return Deletepost;

}

post().then((p)=> console.log(p))

