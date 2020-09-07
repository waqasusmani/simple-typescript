let myNum:number = 44;
console.log(myNum);

let myArr: Array<number> = [65,332,98,88,74];
console.log(myArr);

let anotherArr:[string,number,object];
anotherArr = ["Waqas",35,{"school":"LGS"}];
console.log(anotherArr[2]["school"]);

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

