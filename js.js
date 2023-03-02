var ulang = confirm("Mau bintang gak?");
var counter = 0;

while(ulang){
    counter++;
    var bintang = "+".repeat(counter) + "<br>"
    document.write(counter + ": " + bintang);
    ulang = confirm("Apakah ingin mengulang");
}