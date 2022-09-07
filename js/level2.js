const numTextString = document.getElementById("count-num");
let count = 0;
// localStorage.setItem('Number', count);
document.getElementById("btn").addEventListener("click", function () {
    count++;
  numTextString.innerText = count;
  localStorage.setItem('Number', count);
});

const displayNum = ()=>{
    const getNum = localStorage.getItem('Number');
    console.log(typeof getNum);
    numTextString.innerText = getNum;

}
displayNum();