var d = new Date();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("myDate").innerHTML = day[d.getDay()] + ", " + d.getDate() + " " +
month[d.getMonth()] + " " + d.getFullYear();

function toggleMenu() {
    console.log(document.getElementById('primaryNav').classList);
    document.getElementById('primaryNav').classList.toggle('hide');
}