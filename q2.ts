// define interface for Student object
interface Student{
  name:string;
  score:number;
}

// assign interface/type to the function definition properly
function findTopNames(students:Student[]):string[] {
  let a = students.filter((stu:Student) => stu.score > 8).map((stu:Student) => stu.name)
  return a 
}

// assign interface/type to the student1 object properly
const students1 : Student[] = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
