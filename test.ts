let myNum:number = 44;
console.log(myNum);

let myArr: Array<number> = [65,332,98,88,74];
console.log(myArr);

let anotherArr:[string,number,object];
anotherArr = ["Waqas",35,{"school":"LGS"}];

let myArray: object[] = [{"a":123,"b":35},{"a":229,"b":32}]
console.log("from myArray-> ", myArray[1]["b"]);

let strArr: string[] = ["Waqas","Rameez","Taha"];
console.log(strArr);
console.log(strArr[0].substring(1,4))

let myObj: object = {"name":"Taha Usmani","Age":28};
console.log(myObj["name"]);

function calcLength(s:string):number {
    return s.length
}
console.log(calcLength("Jeopardy"))

let smallPart = (s:string,startInd:number,endInd:number): string => {
    return s.substring(startInd,endInd)
}
console.log(smallPart("Blessed",1,10))

// // This would throw an error with the given message. Code below this will become unreachable
// function error(message: string): never {
//     throw new Error(message);
//   }
// error("My error message is this one")

let ro:ReadonlyArray<number> = [7,55,64];
let a:number[] = [98,22,34,57];
let refArr:ReadonlyArray<number> = a;
//Both the above read-only arrays are immutable

interface SquareConfig {
    color?: string;
    width?: number;
  }
function createSquare(config: SquareConfig): { color: string; area: number } {
    return { color: config.color || "red", area: config.width ? config.width*config.width : 20 };
  }
createSquare({name:"My Square",color:"grey", width:40} as SquareConfig) //Without the type assertion the additional property "name" would give an error
//To allow for additional properties than specified, the interface may have an additional field as below:
interface NewSquareConfig {
    color?: string,
    width?: number,
    [propName: string]: any,
}
//Thirdly, to add additional properties than those specified in the interface, assign the parameter to a variable like:
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean { //Specifying types of parameters are not necessary if function is assigned to interface
    let result = src.search(sub);
    return result > -1;
};
let myName = "My name is Waqas";
console.log(mySearch(myName,"aqa"));

