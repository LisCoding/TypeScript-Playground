
let myNum: number = 5
let myString: string = "Hello Universe";
let myArr: number[] = [1, 2, 3, 4];
let myObj1: object = { name:'Bill'};
let anythingVariable: any = "Hey";
let arrayOne: boolean[] = [true, false, true, true];
let arrayTwo: any[] = [1, 'abc', true, 2];
let myObj: object = { x: 4, y: 6 }

class MyNode {
    val: number;
    _priv : number
  constructor(val: number) {
  this.val = 0;
  this.val = val
  }
    do_something() {
    this._priv = 10;
  }

}


let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction():void {
    console.log("Hello World");
    return;
}
function sendingErrors(message: string):never {
	throw new Error('Error message');
}
