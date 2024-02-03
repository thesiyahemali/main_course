// <!-- array and object ma je destructing thaye se  -->
// <!-- destructing means k jaji value hoy temathi bhage pade  -->
// <!-- koy ek moto array hoy to temathi ek value joti hoy aene var api ne ek vastu lay sakiye  -->
// <!-- ek ane baiji badhi value joti hoy to extra kari ne badhi value tema aaevi jay -->

// <!-- array destructing -->

let fruit=['apple','banana','mango'];
[fruit_first,fruit_seconde,fruit_third]=fruit
console.log(fruit_first);

var fruit1 = ['apple', 'banana', 'mango']
;[fruit_first, ...extra] = fruit1
console.log(extra);

var [first1,,last1]=['thesiya','beta','alpha','delta']
console.log(first1);
console.log(last1);

// default value
// default value ma defualut varible hase to first apso toy ae default je lese
// default ma Array khali hase toje te first value lese
const [first='monika',seconde='avni']=['hemali']
console.log(first);

const [firstname='thesiya',lastname='hemali']=[]
console.log(firstname);

// return function
function namelist(){
    return['alpha','gamma','mma','delta']
}
var [firstN,secondeN]=namelist()
console.log(firstN);
console.log(secondeN);

// object destructing
let data={name:'hemali',age:21}
const{age,name}=data
// const{name:f,age:a}=data
// console.log(a);
console.log(age);
console.log(name);

