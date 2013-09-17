// Name: Katy Brunette
// Date: 09/17/2013
// Class: PWA 1 
// Assignment: Goal 4 - Duel 3
// Instructor: Eric Silvay


//self-executing function
(function(){

    console.log("FIGHT!!!");

    //fighters object array
    var fighters = [{name:'Spiderman', damage:20, health:100}, {name:'Batman', damage:20, health:100}];

    var round=0;

    function fight(){
        console.log('in the fight function');

        //alert(myArray[0]+":"+myArray[2]+" *START* "+myArray2[0]+":"+myArray2[2]);
        console.log(document.getElementById());


        
            var minDamage1 = fighters[0].damage * .5;
            var minDamage2 = fighters[3].damage * .5;

            var f1 = Math.floor(Math.random()*(fighters[0].health-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighters[3].health-minDamage2)+minDamage2);
            console.log(minDamage1, minDamage2);
        
            //inflict damage
            fighters[0]-=f1;
            fighters[3]-=f2;


            console.log(myArray[0]+":"+myArray[2]+" "+myArray2[0]+":"+myArray2[2]);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner"){
                round++;
                //alert(myArray[0]+":"+myArray[2]+" *ROUND "+round+" OVER* "+myArray2[0]+":"+myArray2[2]);
            }else{
                //alert(results);
                console.log(document.getElementById());
                //break;
            };

        };
    
    });

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


});