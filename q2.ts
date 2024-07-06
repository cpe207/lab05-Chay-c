
interface Student{
  name:string;
  score:number;
}

function findTopNames(students:Student[]):string[] {
  let a = students.filter((stu:Student) => stu.score > 8).map((stu:Student) => stu.name)
  return a 
}


const students1 : Student[] = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
