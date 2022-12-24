const posts = [
    {title: "post One", body: "This is a first post"}, 
    {title: "post Second", body: "This is a Second post"}
];

function getPost() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post , index)=> {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 2000)
};

function createpost(post){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        posts.push(post);
        const error = false;
        if(!error){
            resolve();
        } else{
            reject("Something went wrong")
        }
    }, 2000)
   });
};

function deletePost(){
    return new Promise((Resolve, Deleted)=>{
        setTimeout(() => {
                // posts.pop();
                const lastelement = posts.pop()
                if (posts.length> 0){
                    Resolve(lastelement)
                }else{
                    Deleted("Array is Empty now");
                }
            }, 3000)
    });
}
createpost({title: "post Three", body: "This is a third post"})
.then(getPost);
createpost({title: "post four", body: "This is a fourth post"})
.then(()=>{
    getPost()
    deletePost().then(()=>{
        getPost()
        deletePost().then(()=>{
            getPost() 
            deletePost().then(()=>{
                getPost() 
                deletePost().then(()=>{})
                    .catch((arr)=>{
                        console.log("Inside Block is", arr)
                })
            })
        })
    })
});
// async function init (){
//     await createpost({title: "post five", body: "This is a five post"});
//     getPost();
// }
// init();
// Promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 100;
// const promise3 = new Promise((resolve, reject)=> {
//     setTimeout(resolve, 2000, "God Bye")
// });
// // const promise4 = fetch("https://my-json-server.typicode.com/typicode/demo");
// console.log([promise1, promise2, promise3]);
