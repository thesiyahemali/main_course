//  javascript spread operator ek array hoy temathi baijo array copy thaye 
// array ane pobject ma use thaye

 // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object. -->

 var a=[1,2,3,4,5]
 var b=[10,11,12,13,...a]
 console.log(b);

 var obj={name:'hemali',age:'21'}
 var o={...obj,surname:'thesiya'}
 console.log(o);


//  rest operator means k function ni argument mate use thaye tene rest operator kevay

// function ni argument ma ek karta vadhre argument pase karvi hoy pan ekj thaye aetle rest operator no use ... thi use thaye se 

function hello(...all){
    console.log(all);
}
hello(1,2,3,45,56,77,66,99)