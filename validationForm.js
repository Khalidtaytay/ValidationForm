let allinput = document.querySelectorAll('input');
let button = document.querySelector('button');
let ErrorName = document.getElementById('ErrorName');
let ErrorPhone = document.getElementById('ErrorPhone');
let ErrorEmail = document.getElementById('ErrorEmail');
let ErrorSubmit = document.getElementById('ErrorSubmit');
let err =['plese entre your name','plase entre your number','please entre your email','please write your message']

function fxName(){
    let  name = document.getElementById('name').value;
    if(name.length == 0 ){
        ErrorName.innerHTML = 'Completing this section is obligatory.';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
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
    }
    ShowNotification()
    return true;
    
};
function ShowNotification(){
    alert ('dine')
};

