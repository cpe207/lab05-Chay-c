function findTopNames(students) {
    var a = students.filter(function (stu) { return stu.score > 8; }).map(function (stu) { return stu.name; });
    return a;
}
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
