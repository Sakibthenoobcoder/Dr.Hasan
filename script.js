function fillForm(){
    var pbox = document.getElementById('patientname');
    var name = document.getElementById('name');
    var abox = document.getElementById('patientage')
    var age = document.getElementById('age')
    var sbox = document.getElementById('patientsex')
    var sex = document.getElementById('sex')
    var dbox = document.getElementById('patientdate')
    var date = document.getElementById('date')
    var dsbox = document.getElementById('patientdisease')
    var disease = document.getElementById('disease')
    var mbox = document.getElementById('patientmedicine')
    var medicine = document.getElementById('Medicine')
    var dgbox = document.getElementById('patientdignosis')

    var tbox = document.getElementById('patienttest')
    var test = document.getElementById('test')

patientname.innerHTML = "Name: "+name.value; 
patientage.innerHTML = "Age: "+age.value; 
patientsex.innerHTML = "Sex: "+sex.value; 
patientdate.innerHTML = "Date of visit: "+date.value;
patientdisease.innerHTML = "Chief Complaint :  " + "   "+ disease.value;
patientmedicine.innerHTML = Medicine.value;

patienttest.innerHTML = test.value;
}

function newElement() {
var li = document.createElement("li");
var inputValue = document.getElementById("Medicine").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
alert("You must write something!");
} else {
document.getElementById("patientmedicine").appendChild(li);
}
document.getElementById("Medicine").value = "";

var par = document.getElementById("patientmedicine").appendChild(li);
var d = document.getElementById("time");
var displaytext = d.options[d.selectedIndex].text;
var f = document.getElementById("duration");
var displaytime = f.options[f.selectedIndex].text;
par.textContent += document.getElementById("time").innerHTML.value = " "+ "---"+" "+displaytext+" "+ "-"+" "+ displaytime;



for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
var div = this.parentElement;
div.style.display = "none";
}
}
}

function newTest() {
var li = document.createElement("li");
var inputValue = document.getElementById("test").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
console.log(li.appendChild(t));
if (inputValue === '') {
alert("You must write something!");
} else {
document.getElementById("patienttest").appendChild(li);
}
document.getElementById("test").value = "";


for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
var div = this.parentElement;
div.style.display = "none";
}
}
}

function newDigno() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("dignosis").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
    alert("You must write something!");
    } else {
    document.getElementById("patientdignosis").appendChild(li);
    }
    document.getElementById("dignosis").value = "";
    
    
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
    }
    }


    