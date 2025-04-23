let music =new Audio("game music.mp3")
let turn =new Audio("turn.mp3")
let gameover =new Audio("game over.mp3")
let turn ="X"

const changeTurn=()=>
{
    return turn === "X"?"0":"X"
}

const checkWin = ()=>
{

}

//game logic 
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(elemnet=>{
    let  boxtext = document.querySelector('.boxtext');
    elemnet.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;

        }
    })
 })