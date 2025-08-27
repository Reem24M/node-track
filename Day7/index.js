
let x=100;
let y=200;
let z=309;
// let p1=new Promise((resolve,reject)=>{
//    setTimeout(()=>resolve(1),2000)
// })
// let p2=new Promise((resolve,reject)=>{
//    setTimeout(()=>resolve(2),1000)
// })
// let p3=new Promise((resolve,reject)=>{
//    setTimeout(()=>resolve(3),3000)
// })
// //Promise.resolve  هو بيرجع اصلا برومس جديد ف لازم الوب على كل برومس جواه واطلع النتيجه بتاعته 
// // ده بيتاكد من كل البرومسيس انهم صح 
// Promise.resolve([p1,p2,p3]).then((res)=>{
//     for(let i of res)
//     {
//         i.then(r=>{

//             console.log(r);
//         }).catch(error=>{
//             console.log(error);
//         })
//     }
// })
let p1=new Promise((resolve,reject)=>{
   setTimeout(()=>reject(1),2000)
})
let p2=new Promise((resolve,reject)=>{
   setTimeout(()=>reject(2),1000)
})
let p3=new Promise((resolve,reject)=>{
   setTimeout(()=>reject(3),3000)
})
//Promise.reject  هو بيرجع اصلا برومس جديد ف لازم الوب على كل برومس جواه واطلع النتيجه بتاعته 
// ده بيتاكد من كل البرومسيس انهم غلط 
Promise.reject([p1,p2,p3]).catch((res)=>{
    for(let i of res)
    {
        i.then(r=>{

            console.log(r);
        }).catch(error=>{
            console.log(error);
        })
    }
})

// let p2=new Promise((resolve,rejected)=>{
//     if(y===20)
//     {
//         resolve('Done p2')
//     }else 
//         rejected('Error p2')
// })
// let p3=new Promise((resolve,rejected)=>{
//     if(z===30)
//     {
//         resolve('Done p3')
//     }else 
//         rejected('Error p3')
// })
// all  بتطلع اول وحده لو كلهم صح ولكن لو فى وحده غلط بتقولك الغلط فين
// Promise.all([p1,p2,p3]).then(res=>console.log("res",res))
// .catch(error=>console.log("error all",error))



// race ->  بتطلع اول وحده سواء صح او غلط 
// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log("res",res);
// }).catch(error=>console.log(error))


// any->  بتطلع اى وحده صح ولو كلهم صح بتاخد ال وقته بيخلص الاول
// دى عكس ال all
// Promise.any([p1,p2,p3]).then((res)=>{
//     console.log("res",res);
// }).catch(error=>console.log(error))
console.log("hello");