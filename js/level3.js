const getInputFieldById = (id) =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
//Set Name
document.getElementById("btn-send-name").addEventListener('click', function(){
    const nameField = getInputFieldById("name-field");
    localStorage.setItem('Name', nameField);
});
//Delete Name
document.getElementById("btn-delete-name").addEventListener('click', function(){
    localStorage.removeItem('Name');
});
//Set Email
document.getElementById("btn-send-email").addEventListener('click', function(){
    const emailField = getInputFieldById("email-field");
    localStorage.setItem('Email', emailField);
});
//Delete Email
document.getElementById("btn-delete-email").addEventListener('click',function(){
    localStorage.removeItem('Email');
});
//SEt messege
document.getElementById("btn-send-message").addEventListener('click', function(){
    const messageField = getInputFieldById("message-field");
    localStorage.setItem('Messege', messageField);
});
//Delete Messege
document.getElementById("btn-delete-message").addEventListener('click', function(){
    localStorage.removeItem('Messege');
});
//REset all
document.getElementById("btn-reset").addEventListener('click', function(){
    localStorage.clear();
});
