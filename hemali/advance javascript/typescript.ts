// let a: Number = 123
// console.log(a);

// poerchelll ma right cilck in run adminstartor
// set-executionpolicy remotesigned commnde lakhvo
// pachi yes apvu
// pachi vs terminal ma ts-node filen name lakhvu

// abstract example

abstract class sum {
    num1: number
    num2: number
    constructor(a: Number, b: number) {
        this.num1 = a
        this.num2 = b
    }

    abstract add():void
}

// const obj=new sum(2,3)
class multi extends sum{
    n1:number
    n2:number
    constructor(a:number,b:Number)
    {
        super(a, b)
        this.n1=a
        this.n2=b
    }
    add(){
        console.log(this.n1+this.n2);
        
    }
}
const muulti=new multi(3,2)
multi.add()