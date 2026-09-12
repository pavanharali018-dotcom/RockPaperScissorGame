let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
   let options=["Rock","Paper","Scissor"];
   let randIdx=Math.floor(Math.random()*3);
   return options[randIdx];

}



const playGame=(userChoice)=>{
    console.log(`You chose:${userChoice}`);
    //generate comp choice
    const compChoice=genCompChoice();
}





choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })



});

