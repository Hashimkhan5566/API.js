fetch("https://api.crossref.org/works")
.then((res)=>{
  return res.json();
}).then((value1)=>{
  console.log(value1);
  
}).then((value2)=>{
  console.log(value2);
  return value2;
  
}).catch((err)=>{
  console.log(err);
  
});

//promise
let promise = new Promise ((resolve,reject)=>{
   setTimeout(()=>{
    resolve (5);
   }, 2000);
}).then((value)=>{
  console.log(value);
  return value;
}).then((value2)=>{
  console.log(value2);
  
})
let promise2 =  new Promise((resolve, reject)=>{
  setTimeout(() => {
     reject(3);
  },3000);

})
promise2.then((value4)=>{
  console.log(value4);
  
}).catch((err)=>{
  console.log("this is error show on top");
  
})
promise2.then((value3)=>{
  console.log(value3);
  
}).catch((err)=>{
  console.log("this is error show on top");
  
});

let promise3 = new Promise ((resolve)=>{
  setTimeout(() => {
    resolve (34);
  },3000);
})
  let promise4 = new Promise ((resolve)=>{
  setTimeout(() => {
    resolve (35);
  },2000);
 

}) ;
Promise.all([promise3, promise4])
.then((value4)=>{
  console.log(value4);
  
}).catch((err)=>{
  console.log("this is error show on top and bottom");
  
})

async function harry(){
  let lahoreweather  =  new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("27 deg");
    }, 2000);
  });
  let punjabweather = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("29deg"); 
    },3000);
  });

  let laW =  await lahoreweather;
  let pw = await punjabweather;
  return [laW, pw];
}
harry();

