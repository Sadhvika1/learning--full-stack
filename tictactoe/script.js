let music =new Audio("game music.mp3");
let turn =new Audio("turn.mp3");
let gameover =new Audio("game over.mp3");
let turn ="X";
let isgameover =false;

const changeTurn=()=>
{
    return turn === "X"?"O":"X"
}

const checkWin = ()=>
{  let boxtexts = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[i]].innertext) && (boxtext[e[1]].innerText === boxtext[e[2]].innertext) && (boxtext[e[0]].innerText !==="" ))
                document.getAnimations('.info').innerText = boxtext[e[0]].innerText="Won";
                isgameover= true;
                document.querySelector('.imgbox').getElementsByTagName('.img')[0].style.width= "250px";
    })

}

//game logic 
music.play()
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(elemnet=>{
    let  boxtext = elemnet.querySelector('.boxtext');
    elemnet.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover)
            {document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            }
        }
    })
 })

 resizeTo.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(elemt =>{
        element.innertext=" ";
    })
    turn ="X"
    if(isgameover=false)
        {document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            document.querySelector('.imgbox').getElementsByTagName('.img')[0].style.width= "0px";
        }

 }