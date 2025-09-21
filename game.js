    const score = JSON.parse(localStorage.getItem('score')) ||{
        win:0,
        lose:0,
        tie:0
       };
       updatescore();
       let intervalId;
       let isautoPlay = false;
       let jsElem;
       function autoPlay(){
          if(!isautoPlay){
            intervalId = 
            intervalId = setInterval(() => {
                const playerMove= pickrandomnumber();
                playGame(playerMove);
            },1000);
            isautoPlay=true;
            jsElem=document.querySelector('.js-auto-play');
            jsElem.innerHTML='Stop Play';
            jsElem.classList.add('css-auto-play');
            
        }
            else{
                clearInterval(intervalId);
                isautoPlay=false;
                jsElem.innerHTML='Auto Play'
                jsElem.classList.remove('css-auto-play');
            }
       }
    document.querySelector('.js-rock-button')
    .addEventListener('click',() => {
        playGame('Rock');
    })
    document.querySelector('.js-paper-button')
    .addEventListener('click', () =>{
        playGame('Paper');
    })
    document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('Scissors');
    })
    document.body.addEventListener('keydown',(event) => {
        if(event.key==='r'){
            playGame('Rock');
        }
        else if(event.key==='p'){
            playGame('Paper');
        }
        else if(event.key==='s'){
            playGame('Scissors');
        }
    })
    function playGame(playerMove){
        const computerMove = pickrandomnumber();
        let result='';
        if(playerMove==='Scissors'){
            if(computerMove==='Rock'){
            result='Lose';
            }
            else if(computerMove==='Scissors'){
            result='Tie';
            }
            else if(computerMove==='Paper'){
            result='Win';
            }
        }
        else if(playerMove==='Rock'){
            if(computerMove==='Rock'){
            result='Tie';
        }
        else if(computerMove==='Scissors'){
            result='Win';
        }
        else if(computerMove==='Paper'){
            result='Lose';
        }

        }
        else{
             if(computerMove==='Rock'){
            result='Win';
        }
        else if(computerMove==='Scissors'){
            result='Lose';
        }
        else if(computerMove==='Paper'){
            result='Tie';
        }

        }
        if(result==='Win'){
            score.win++;
        }
        else if(result==='Lose'){
            score.lose++;
        }
        else{
            score.tie++;
        }
       
        localStorage.setItem('score',JSON.stringify(score));
        updatescore();
        document.querySelector('.js-result').innerHTML = `${result}`; 
        document.querySelector('.js-moves').innerHTML = `  You
        <img src="images/${playerMove}-emoji.png">
        <img src="images/${computerMove}-emoji.png">
        Computer`;
    }
    function updatescore(){
         document.querySelector('.js-score')
         .innerHTML= ` Wins: ${score.win} Lose: ${score.lose} Ties: ${score.tie}`;

    }
    function pickrandomnumber(){
        let computerMove='';
        const randomNumber= Math.random();
        if(randomNumber < 1/3){
            computerMove='Rock';
        }
        else if(randomNumber < 2/3){
            computerMove='Paper';
        }
        else{
            computerMove='Scissors';
        }
        return computerMove;
    }