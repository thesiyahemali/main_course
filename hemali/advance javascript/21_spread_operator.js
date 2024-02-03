//  javascript spread operator ek array hoy temathi baijo array copy thaye 

 // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object. -->

 var a=[1,2,3,4,5]
 var b=[...a,10,11,12,13]
 console.log(b);

 var obj={name:'hemali',age:'21'}
 var o={...obj}
 console.log(o);