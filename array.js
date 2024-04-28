var mobil = ["Avanza", "Yaris", "Alya"];

mobil.push("Ferari")
mobil.pop()
mobil.shift()
mobil.shift()
console.log(mobil)
for (let i = 0; i < mobil.length; i++) {
    console.log('Cetak mobil ke-' + i + ": " + mobil[i]);
}