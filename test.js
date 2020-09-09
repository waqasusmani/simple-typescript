var myNum = 44;
console.log(myNum);
var myArr = [65, 332, 98, 88, 74];
console.log(myArr);
var anotherArr;
anotherArr = ["Waqas", 35, { "school": "LGS" }];
var myArray = [{ "a": 123, "b": 35 }, { "a": 229, "b": 32 }];
console.log("from myArray-> ", myArray[1]["b"]);
var strArr = ["Waqas", "Rameez", "Taha"];
console.log(strArr);
console.log(strArr[0].substring(1, 4));
var myObj = { "name": "Taha Usmani", "Age": 28 };
console.log(myObj["name"]);
function calcLength(s) {
    return s.length;
}
console.log(calcLength("Jeopardy"));
var smallPart = function (s, startInd, endInd) {
    return s.substring(startInd, endInd);
};
console.log(smallPart("Blessed", 1, 10));
// // This would throw an error with the given message. Code below this will become unreachable
// function error(message: string): never {
//     throw new Error(message);
//   }
// error("My error message is this one")
var ro = [7, 55, 64];
var a = [98, 22, 34, 57];
var refArr = a;
function createSquare(config) {
    return { color: config.color || "red", area: config.width ? config.width * config.width : 20 };
}
createSquare({ name: "My Square", color: "grey", width: 40 }); //Without the type assertion the additional property "name" would give an error
//Thirdly, to add additional properties than those specified in the interface, assign the parameter to a variable like:
var squareOptions = { colour: "red", width: 100 };
var mySquare = createSquare(squareOptions);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myName = "My name is Waqas";
console.log(mySearch(myName, "aqa"));
