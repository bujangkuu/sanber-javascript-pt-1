const prompt = require('prompt-sync')({ sigint: true });
//Percabangan lebih dari satu kasus (if else if else)
const nilai = prompt('Masukan nilai: ');
var grade;

if (nilai > 90) {
    grade = "A"
} else if (nilai > 80) {
    0
    grade = "B+"
} else if (nilai > 70) {
    grade = "B"
} else {
    grade = "F"
}
console.log("Grade adalah = " + grade)