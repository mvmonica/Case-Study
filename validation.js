/*function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="admin" && pasword=="user"){
        alert("login successful");
        return false;
    }
    else{
        alert("login failed")
    }

}*/


let slide_content = document.querySelector('#slide-content')

let signin_form = document.querySelector('#signin-form')

let signup_form = document.querySelector('#signup-form')

let signin_btn = document.querySelector('#signin-btn')

let darkmode_toggle = document.querySelector('#darkmode-toggle')

let slide_index = 0

slide = () => {
    let slide_items = slide_content.querySelectorAll('img')
    slide_items.forEach(e => e.classList.remove('active'))
    slide_index = slide_index + 1 === slide_items.length ? 0 : slide_index + 1
    slide_items[slide_index].classList.add('active')
}

setInterval(slide, 5000)

// animate input
document.querySelectorAll('.animate-input').forEach(e => {
    let input = e.querySelector('input')
    let button = e.querySelector('button')

    input.onkeyup = () => {
        if (input.value.trim().length > 0) {
            e.classList.add('active')
        } else {
            e.classList.remove('active')
        }

        if (checkSigninInput()) {
            signin_btn.removeAttribute('disabled')
        } else {
            signin_btn.setAttribute('disabled', 'true')
        }
    }

    // show password button
    if (button) {
        button.onclick = () => {
            if (input.getAttribute('type') === 'text') {
                input.setAttribute('type', 'password')
                button.innerHTML = 'Show'
            } else {
                input.setAttribute('type', 'text')
                button.innerHTML = 'Hide'
            }
        }
    }
})

checkSigninInput = () => {
    let inputs = signin_form.querySelectorAll('input')
    return Array.from(inputs).every(input => {
        return input.value.trim().length >= 6
    })
}

function login(loginForm){
    if(loginForm.username.value && loginForm.password.value){
        var username=document.getElementById("username").value;
        document.write('<html><body><h1><center>')
        document.write("Welcome" + " ");
        document,write(username);
        document.write('</center></h1></body></html>');
    }
    else 
    alert("Please Enter your username & password");
}

/*function onFormSubmit(){
    var userData = readUserData();
}

function readUserData(){
    var userData = {};
    userData['']
}*/

var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var userData = readUserData();
    if(selectedRow === null){
        insertNewRecord(userData);
    }
    else{
        updateRecord(userData);
    }
    resetForm();
}

//Retrieve the data
function readUserData(){
    var userData = {};
    userData["info"] = document.getElementById("info").value;
    userData["fullname"] = document.getElementById("fullname").value;
    userData["username"] = document.getElementById("username").value;
    userData["password"] = document.getElementById("password").value;
    return userData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("userInfo").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.info;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.fullname;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.username;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.password;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('info').value = selectedRow.cells[0].innerHTML;
    document.getElementById('fullname').value = selectedRow.cells[1].innerHTML;
    document.getElementById('username').value = selectedRow.cells[2].innerHTML;
    document.getElementById('pasword').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(userData){
    selectedRow.cells[0].innerHTML = userData.info;
    selectedRow.cells[1].innerHTML = userData.fullname;
    selectedRow.cells[2].innerHTML = userData.username;
    selectedRow.cells[3].innerHTML = userData.password;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('userInfo').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('info').value = '';
    document.getElementById('fullname').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}