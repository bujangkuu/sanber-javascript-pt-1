// import fungsi dari file lain
const { namaFungsi, kali } = require("./fungsi");
const { car } = require("./property");



//panggil function
namaFungsi()
kali(2, 3)

//import object & Access Object
console.log(car.type)
console.log(car.model)
car.stop("Veloz")
car.stop(car.type)
car.start()