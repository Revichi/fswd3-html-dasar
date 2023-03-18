alert("Welcome To Jankenpon");
var score = 0;
var bot = 0;
var nama = prompt("Masukkan Nama Anda :");

var main = confirm("Baik "+nama+",Apakah kamu mau main?");
if (main == true){
     play();
}
function play(){
    var com = Math.floor(Math.random() * 3 + 1);
    // batu = 1  
    // kertas = 2
    // gunting = 3
    let suit = prompt("Pilih : Batu,Gunting, atau Kertas");
    if (suit == "Batu"){
        if (com == 1){
            alert(nama+" Vs Bot\nBatu Vs Batu = Seri \n\n SCORE :\n "+nama+ "=" +score +"\n Bot =" + bot)
            var lagi = confirm("Main Lagi?")
            if(lagi == true){
                play()
            }
        }else if (com == 2){
            bot+=1;
            alert(nama+" Vs Bot\nBatu Vs Kertas = Batu Kalah \n\n SCORE :\n "+nama+ "=" +score +"\n Bot =" + bot)
            var lagi = confirm("Main Lagi?")
            if(lagi == true){
                play()
            }
        }else if (com == 3){
            score+=1;
            alert(nama+" Vs Bot\nBatu Vs Gunting = Batu Menang \n\n SCORE :\n"+nama+ "=" +score +"\n Bot =" + bot)
            var lagi = confirm("Main Lagi?")
            if(lagi == true){
                play()
            }
        }
    }else if (suit == "Kertas"){
        if (com == 1){
            score+=1;
            alert(nama+" Vs Bot\nKertas Vs Batu = Kertas Menang \n\n SCORE :\n "+nama+ "=" +score +"\n Bot =" + bot)
            var lagi = confirm("Main Lagi?")
            if(lagi == true){
                play()
            }
        }else if (com == 2){
            alert(nama+" Vs Bot\nKertas Vs Kertas = Seri \n\n SCORE :\n "+nama+ "=" +score +"\n Bot =" + bot)
            var lagi = confirm("Main Lagi?")
            if(lagi == true){
                play()
            }
        }else if (com == 3){
            bot+=1;
            alert(nama+" Vs Bot\nKertas Vs Gunting = Kertas Kalah \n\n SCORE :\n "+nama+ "=" +score +"\n Bot =" + bot)
            var lagi = confirm("Main Lagi?")
            if(lagi == true){
                play()
            }
        }
    }else if (suit == "Gunting"){
        if (com == 1){
            bot+=1;
            alert(nama+" Vs Bot\nGunting Vs Batu = Gunting Kalah \n\n SCORE :\n "+nama+ "=" +score +"\n Bot =" + bot)
            var lagi = confirm("Main Lagi?")
            if(lagi == true){
                play()
            }
        }else if (com == 2){
            score+=1;
            alert(nama+" Vs Bot\nGunting Vs Kertas = Gunting Menang \n\n SCORE :\n "+nama+ "=" +score +"\n Bot =" + bot)
            var lagi = confirm("Main Lagi?")
            if(lagi == true){
                play()
            }
        }else if (com == 3){
            alert(nama+" Vs Bot\nGunting Vs Gunting = Seri \n\n SCORE :\n "+nama+ "=" +score +"\n Bot =" + bot)
            var lagi = confirm("Main Lagi?")
            if(lagi == true){
                play()
            }
        }
    }else{
        alert("Pilihanmu Tidak Sesuai")
        var lagi = confirm("Ingin Pilih Ulang?")
        if(lagi == true){
            play()
        }
    }
    
}