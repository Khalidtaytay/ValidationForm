let allinput = document.querySelectorAll('input');
let button = document.querySelector('button');
let ErrorName = document.getElementById('ErrorName');
let ErrorPhone = document.getElementById('ErrorPhone');
let ErrorEmail = document.getElementById('ErrorEmail');
let ErrorSubmit = document.getElementById('ErrorSubmit');
let Form = document.querySelector('.form');
let notification = document.querySelector('.notification');
let urform = document.querySelector('.urform');
let k = document.getElementById('k');

function fxName(){
    let  name = document.getElementById('name').value;
    if(name.length == 0 ){
        ErrorName.innerHTML = 'Completing this section is obligatory.';
        return false;
    }
    if(!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)){
        ErrorName.innerHTML = 'Write full name !';
        return false;
    }
    ErrorName.innerHTML = '';
    return true;
};
function fxPhone(){
    let  number = document.getElementById('number').value;
    if(number.length == 0 ){
        ErrorPhone.innerHTML = 'Completing this section is obligatory.';
        return false;
    }
    if(number.length !==10 ){
        ErrorPhone.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    if(!number.match(/^[0-9]{10}$/)){
        ErrorPhone.innerHTML = 'Only numbers ';
        return false;
    }
    ErrorPhone.innerHTML = '';
    return true;
};
function fxEmail(){
    let  email = document.getElementById('email').value;
    if(email.length == 0 ){
        ErrorEmail.innerHTML = 'Completing this section is obligatory.';
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        ErrorEmail.innerHTML = 'Email Invalid';
        return false;
    }
    ErrorEmail.innerHTML = '';
    return true;
};
function fxSubmit(){
    if(!fxName() || !fxPhone() || !fxEmail()){
        ErrorSubmit.innerHTML = 'Please fix the error to submit'
        return false;
    };
    ShowNotification()
    fxurname()
    fxurphone()
    fxurEmail()
    fxurMessage()
    return true;
   
};
function ShowNotification(){
    Form.style.display = 'none'
    notification.classList.add('notificationActive')

};

// your form
let urName = document.getElementById('urName');
let urPhone = document.getElementById('urPhone');
let urEmail = document.getElementById('urEmail');
let urMessage = document.getElementById('urMessage');

function fxurname(){
    let  nom = document.getElementById('name').value;
    let NM = document.createElement('div')
    NM.classList.add('allurinfos')
    NM.innerHTML = nom
    urName.appendChild(NM)
    k.innerHTML = nom

};
function fxurphone(){
    let  num = document.getElementById('number').value;
    let NMR = document.createElement('div')
    NMR.classList.add('allurinfos')
    NMR.innerHTML = num
    urPhone.appendChild(NMR)
};
function fxurEmail(){
    let eml = document.getElementById('email').value;
    let EML = document.createElement('div')
    EML.classList.add('allurinfos')
    EML.innerHTML = eml
    urEmail.appendChild(EML)
};
function fxurMessage(){
    let  msg = document.getElementById('Message').value;
    let MSG = document.createElement('div')
    MSG.innerHTML = msg
    urMessage.appendChild(MSG)
};

//showin fom function :

function showform(){
    notification.style.display = 'none';
    urform.style.display = 'inline-block';

}

