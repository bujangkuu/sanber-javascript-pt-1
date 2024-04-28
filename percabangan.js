const prompt = require('prompt-sync')({ sigint: true });

const password = prompt('Enter password: ');
const validPassword = 'password'

// perbandingan
if (password === validPassword) {
    //jika benar
    console.log("Selamat datang bos!")
} else {
    //jika salah
    console.log("Password Salah, coba lagi!")
}
console.log("Terimakasih sudah menggunakan aplikasi kami")