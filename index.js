// Code your solutions in this file


function writeCards(myArr, event){
    let newArr = [];
    for(let i = 0; i < myArr.length; i++){
    let message = `Thank you, ${myArr[i]}, for the wonderful ${event} gift!`;
    newArr.push(message);
    }
    console.log(newArr);
    return newArr;
}
writeCards([`sam`, `carl`,`ben`], `birthday`);

function countDown(){
    let j = 10;
    while(j >= 0){
       console.log(j--);
    }
}
console.log(countDown());