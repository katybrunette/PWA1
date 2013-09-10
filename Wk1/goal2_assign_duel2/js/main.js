// Name: Katy Brunette
// Date: 09/09/2013
// Class: PWA 1 
// Assignment: Goal 2 - Duel 2
// Instructor: Eric Silvay


//self-executing function
(function(){

    console.log("FIGHT!!!");

    //player one array
    var myArray = ["Spiderman", 20, 100];

    //player two array
    var myArray2 = ["Batman", 20, 100];

    var round=0;

    function fight(){
        console.log('in the fight function');

        alert(myArray[0]+":"+myArray[2]+" *START* "+myArray2[0]+":"+myArray2[2]);

        for (var i=0; i < 10; i++){
            
            var minDamage1 = myArray[1] * .5;
            var minDamage2 = myArray2[1] * .5;

            var f1 = Math.floor(Math.random()*(myArray[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(myArray2[1]-minDamage2)+minDamage2);

        
            //inflict damage
            myArray[2]-=f1;
            myArray2[2]-=f2;


            console.log(myArray[0]+":"+myArray[2]+" "+myArray2[0]+":"+myArray2[2]);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner"){
                round++;
                alert(myArray[0]+":"+myArray[2]+" *ROUND "+round+" OVER* "+myArray2[0]+":"+myArray2[2]);
            }else{
                alert(results);
                break;
            };

        };
    
    };

    function winnerCheck(){
        console.log("in winnerCheck FN");

        var result="no winner";

        if (myArray[2]<1 && myArray2[2]<1){
            result = "You Both Die :(";
        } else if (myArray[2]<1){
            result = myArray2[0]+" WINS!!!";
        } else if (myArray2[2]<1){
            result = myArray[0]+" WINS!!!";

        };

        return result;

    };

    /******* The program gets started below *******/
    console.log('program starts');
    fight();


})();