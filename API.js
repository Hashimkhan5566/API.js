fetch("https://api.crossref.org/works")
  .then((value2)=>{
    return value2.json();
  }).then((value1)=>{
    console.log(value1);
  }).catch((err)=>{
    console.log(err);
  });


  let a = 12;
  document.cookies="harry";
  document.cookies = a;
 console.log(( document.cookies));
                