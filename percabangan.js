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