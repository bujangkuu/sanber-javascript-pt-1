const prompt = require('prompt-sync')({ sigint: true });

const password = prompt('Enter password: ');
const validPassword = 'password'

// perbandingan password (string) vs valiPassword(string)
if (password === validPassword) {
    //jika benar
    console.log("Selamat datang bos!")
} else {
    //jika salah
    console.log("Password Salah, coba lagi!")
}
// print ini apapun yang terjadi
console.log("Terimakasih sudah menggunakan aplikasi kami")
const prompt = require('prompt-sync')({ sigint: true });

const nilai = prompt('Masukan nilai: ');
var grade;

if (nilai > 90) {
    grade = "A"
} else if (nilai > 80) {
    grade = "B+"
} else if (nilai > 70) {
    grade = "B"
} else {
    grade = "F"
}
console.log("Grade adalah = " + grade)