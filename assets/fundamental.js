// Code Structur
console.log("Arkatama")
alert("SIB-MBKM")

// variabel and Data Type
var nama = "xRev ";
let no = 14;
const game = "Apex Legends";

console.log(nama+no+game)


let test1 = 10>5
let test2 = 5>10

console.log(test1+"|"+test2)

let score = null
console.log(score)

let kosong;
console.log(kosong)

let org = Symbol("Halo")
console.log(org.description)

let employee = {
    nama : "Fahad",
    kampus : "Universitas Trunojoyo Madura",
    jurusan : "Teknik Informatika",
    hobbi : ["Games","Swimming"]
}
console.log(`${employee.nama}adalah mahasiswa dari${employee.kampus}`)

console.log(typeof no)
console.log(typeof nama)
console.log(typeof test1)

let a = 5
let b = 9
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
console.log(a=b)
console.log(a+=b)
console.log(a-=b)
console.log(a*=b)
console.log(a/=b)
console.log(a%=b)
console.log(a**=b)
console.log(a>b)
console.log(a<b)
console.log(a==b)
console.log(a!=b)
console.log(a>=b)
console.log(a<=b)
console.log(a&&b)
console.log(a||b)
console.log(!b)
console.log(a&b)
console.log(a|b)
console.log(a^b)
console.log(~b)
console.log(a>b ?"Yes":"No")

alert("HALLO");
var name2 = prompt("Masukkan Nama Anda :");
alert("Pasti Namamu "+ name2);
var konfirm = confirm("Mau Main?");
alert("Jawabanmu..."+ konfirm)

if (a<b){
    console.log(a*b)
}else
    console.log(a+1)

if(a>b){
    console.log(b-a)
}else if(a=b){
    console.log(a+b+a)
}else{
    console.log(a+b-1)
}

switch(a){
    case 9:
        alert("Salah");
        break;

    case 5:
        alert("Benar");
        break;

    default :
        alert("Tidak Tau");
        break;
}

for (a; a<15;a++){
    console.log(a+1)
}

do{
    console.log(a+1)
}while(a<15)


let i = 5
while(i<10){
    console.log("i="+i)
    i++;
}

function Salam(){
    alert("Halo"+nama)
}
Salam()