var myNum = 44;
console.log(myNum);
var myArr = [65, 332, 98, 88, 74];
console.log(myArr);
var anotherArr;
anotherArr = ["Waqas", 35, { "school": "LGS" }];
console.log(anotherArr[2]["school"]);
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
