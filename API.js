// // fetch("https://api.crossref.org/works")
// // .then((res)=>{
// //   return res.json();
// // }).then((value1)=>{
// //   console.log(value1);
  
// // }).then((value2)=>{
// //   console.log(value2);
// //   return value2;
  
// // }).catch((err)=>{
// //   console.log(err);
  
// // });

// // //promise
// // let promise = new Promise ((resolve,reject)=>{
// //    setTimeout(()=>{
// //     resolve (5);
// //    }, 2000);
// // }).then((value)=>{
// //   console.log(value);
// //   return value;
// // }).then((value2)=>{
// //   console.log(value2);
  
// // })
// // let promise2 =  new Promise((resolve, reject)=>{
// //   setTimeout(() => {
// //      reject(3);
// //   },3000);

// // })
// // promise2.then((value4)=>{
// //   console.log(value4);
  
// // }).catch((err)=>{
// //   console.log("this is error show on top");
  
// // })
// // promise2.then((value3)=>{
// //   console.log(value3);
  
// // }).catch((err)=>{
// //   console.log("this is error show on top");
  
// // });

// // let promise3 = new Promise ((resolve)=>{
// //   setTimeout(() => {
// //     resolve (34);
// //   },3000);
// // })
// //   let promise4 = new Promise ((resolve)=>{
// //   setTimeout(() => {
// //     resolve (35);
// //   },2000);
 

// // }) ;
// // Promise.all([promise3, promise4])
// // .then((value4)=>{
// //   console.log(value4);
  
// // }).catch((err)=>{
// //   console.log("this is error show on top and bottom");
  
// // })

// // async function harry(){
// //   let lahoreweather  =  new Promise((resolve, reject)=>{
// //     setTimeout(() => {
// //       resolve("27 deg");
// //     }, 2000);
// //   });
// //   let punjabweather = new Promise((resolve, reject)=>{
// //     setTimeout(() => {
// //       resolve("29deg"); 
// //     },3000);
// //   });

// //   let laW =  await lahoreweather;
// //   let pw = await punjabweather;
// //   return [laW, pw];
// // }
// // harry();
// console.log(document.body.firstChild);
// console.log(document.body.firstChild.previousSibling);

// // async function harry(){
// //   let promise  =  new Promise((resolve, reject)=>{
// //     setTimeout(() => {
// //        resolve(34);
// //     },3000);

// //   })

// //   let promise2 = new Promise((resolve, reject)=>{
// //     setTimeout(() => {
// //       resolve(40);
// //     }, 4000);
// //   })

// //   let p1 = await promise;
// //   let p2 = await promise2;

// //   return [p1,p2];
// // }
// //  const cherry = ()=>{
// // console.log("welcome to promise");
// // }
// // let main=()=>{


// // let a =  harry();
// // let b = cherry();
// // console.log(a);
// // console.log(b);

// // }
// // main();


// // setTimeout(() => {
// //   console.log("deep");
  
// // },3000);

// // setTimeout(() => {
// //   console.log("concept");
  
// // }, 4000);
// // try{
// // setTimeout(() => {
// //   try{
// //   console.log(deep);
// //   }
// //   catch(err){
// //     console.log("error this same");
// //     console.log(err.name);
// //     console.log(err.message);
// //     console.log(err.stack);
    
    
    
// //   }
// // }, 6000);
// // }
// // catch(err){
// //   console.log("balle balle");
  
// // }
// // setTimeout(() => {
// //   console.log("run");
  
// // }, 5000);
// // let num = Number(prompt("enter your number"));
// // if(num>10){
// //   throw new ReferenceError("your number is greater");
  
// // }


// //currency converter
// let amount  = Number(prompt("enter your amount"));
// let currency  = prompt("pkr", "us", "darham");
// let rate ;
// if(currency==="us"){
//   rate = 280;
  

// }
// else if(currency==="pkr"){
//   rate = 409;
  
// }
// else if(currency==="darham"){
//   rate = 78;
  
// }
// let formula = amount*rate;
// // let inp = document.getElementsByClassName(input)[0];
// // let btn = document.getElementsByClassName(button)[0];

// // btn.addEventListener("click" , function(){
    
// // });
// alert(formula);

// //example of dom
// document.body.style.backgroundColor = "red";

