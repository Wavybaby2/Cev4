let fullname = document.getElementById("fullname");
let program = document.getElementById("program");
let level = document.getElementById("level");
let department = document.getElementById("department");

let details = document.querySelector(".details");

let lname = document.getElementById("lname");
let fname = document.getElementById("fname");
let programe = document.getElementById("programe");
let levele = document.getElementById("levele");

if (lname.value === ''){
    fullname.textContent = "No name yet";
}else{
    fullname.textContent = `${lname.value} + ${fname.value}`;
}

if (programe.value === ''){
    program.textContent = "You have not select a program"
}else{
    program.textContent = `${programe.value}`;
}

if (levele.value === ''){
    level.textContent = "You have not select a Level "
}else{
    level.textContent = `${level.value}`;
}


