


// Data Controller
var shuffledList, totNumClicks, activePlayer, cardTargets, pickOne, scores;


function shuffleDeck(){
  var photoList=["beetle", "cow", "dog", "eagle", "fish", "snake", "turtle", "whale"];
  shuffledList = new Array(16);
  var isPhotoPicked = [0, 0, 0, 0, 0, 0, 0, 0];
  scores = [0,0];
  //populate the shuffledList array
  for(i=0; i<16; i++){
    //pick an animal by random number
    var picked = Math.floor( Math.random()*8 );

      //check if this animal has  already been picked twice,
      //if NOT, then assign that animal to the element of the shuffledDeck array
      //update the isPhotoPicked Array
    while(isPhotoPicked[picked]>=2){
      picked = Math.floor( Math.random()*8 );
    }

    if (isPhotoPicked[picked] < 2){
      shuffledList[i] = photoList[picked];
      isPhotoPicked[picked]++;
    }
  }
console.log(shuffledList);
 return shuffledList;
}






function changeTurn(active){
    if(active == 0){
      document.querySelector("#zero").classList.remove('active');
      document.querySelector("#one").classList.add('active');
    } else if(active == 1){
      document.querySelector("#one").classList.remove('active');
      document.querySelector("#zero").classList.add('active');
    };
  active === 0 ? activePlayer++ : activePlayer--;
};


// App Controller

init = function(){
   shuffledList = shuffleDeck();
   totNumClicks = 0;
   activePlayer = 0;
   cardTargets = document.querySelectorAll(".question");
 }

//
init();






// THIS IS GOLD AND IT WORKS!
   for (const cardTarget of cardTargets){
     cardTarget.addEventListener('click',  function getElement(){

       // Identify the picked card
       this.src = "images/" + shuffledList[this.id] + ".jpeg";
       totNumClicks++;
       element1 = this;

       // check if its time to change turns
       if (totNumClicks%2 ===0 ){

          // check for a match
          if( element1.src === pickOne.src){
            console.log("match!");
            scores[activePlayer]++;

            var domString = "score" + activePlayer;
            document.querySelector("#" + domString).textContent = scores[activePlayer];

            changeTurn(activePlayer);

          } else{
            setTimeout(function(){
              pickOne.src  = "images/question-mark.jpeg";
              element1.src  = "images/question-mark.jpeg";

              changeTurn(activePlayer);

            }, 1000);
          };

        // if(activePlayer == 0){
        //     document.querySelector("#zero").classList.remove('active');
        //     document.querySelector("#one").classList.add('active');
        //  } else if(activePlayer == 1){
        //     document.querySelector("#one").classList.remove('active');
        //     document.querySelector("#zero").classList.add('active');
        //
        //   };
        //
        // activePlayer === 0 ? activePlayer++ : activePlayer--;


      } else{
        //save first pick
        pickOne = element1;
      };

     });
    };
