const getInputFieldById = (id) =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const addName = () =>{
    const nameField = getInputFieldById("name-field");

    localStorage.setItem('Name', nameField);
}
const addAge = () =>{
    const ageField = getInputFieldById("age-field");
    localStorage.setItem('Age', ageField);
}
const getData = () =>{
    const getItem = localStorage.getItem('Age');
    console.log(getItem);
}
const removeData = () =>{
    localStorage.clear();
}
//Set a object on the local storage
let obj = {firstname : 'Abraham', lastname: 'Linkon'}
localStorage.setItem("Name", JSON.stringify(obj));