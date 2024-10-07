var data = window.location.search;
var params = new URLSearchParams(data);

var fname = params.get("fname");
var lname = params.get("lname");
var matric = params.get("matric");
var department = params.get("department");

var getData = "First Name : "+fname+"<br>";
    getData += "Last Name : "+lname+"<br>";
    getData += "Department : "+department+"<br>";
    getData += "Matric : "+matric;

    document.getElementById("heading").innerHTML += lname;
result = document.getElementById("result").innerHTML = getData;

function resetProfile () {
    var fname = '';
    var getData = "First Name : "+fname+"<br>";
    getData += "Last Name : "+p+"<br>";
    getData += "Department : "+p+"<br>";
    getData += "Matric : "+p;
    result = document.getElementById("result").innerHTML = getData;
}



let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function() {
    profilePic.src = URL.createObjectURL(inputFile.files[0])
}