console.log("File Connected");
const wordsArray=[
    "Hey welcome to test your speed challenge",
    "We test your typing speed by giving you sets of words to type as fast as possible",
    "India America Australia Indonesia Pakistan",
    "Shadow is the obstruction of light. Shadows appear to me to be of supreme importance in perspective",
    "Ideology Perspective Physiology Identical"
];
let messageToDisplay=document.getElementById("h4textdisplay");
let btn=document.getElementById("startStopBtn");
let textArea=document.getElementById("textArea");
let startTime,endTime;

let resetbtn=document.getElementById("resetBtn");
resetbtn.addEventListener('click',()=>{
    location.reload();
})

function playGames(){
 let date=new Date();
 let random=Math.floor(Math.random()*wordsArray.length);
 messageToDisplay.innerText=wordsArray[random];
 startTime=date.getTime();
 btn.innerText="Stop";
//  console.log(random);
}

function endGame(){
    let date=new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    // console.log(totalTime);

    let totalWordsTypedByUser=textArea.value;
    let wordCount=wordCounter(totalWordsTypedByUser);

    let speedTest=Math.round((wordCount/totalTime)*60);

    let finalMessage=`You Typing speed is ${speedTest} words per minute`;
    finalMessage+=compareWords(messageToDisplay.innerText,totalWordsTypedByUser);
    messageToDisplay.innerText=finalMessage;
}


function compareWords(str1,str2){
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let count=0;

    words1.forEach(function(item,index){
        if(item==words2[index]){
            count++;
        }
    })
    let errorWords=words1.length-count;
    return (`${count} correct out of ${words1.length} words and the total number of errors are ${errorWords}`)
}


function wordCounter(str){
    let response=str.split(" ").length;
    // console.log(response);
    return response;
}

btn.addEventListener('click',function(){
    // console.log(this);
        if(this.innerText=="Start"){
            textArea.disabled=false;
            playGames();
        }
        else if(this.innerText="Stop"){
            textArea.disabled=true;
            btn.innerText="Start";
            endGame();
        }
});