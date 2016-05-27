$('document').ready(function(){
    console.log("test 1,2,3");
    
    var correctQuestions = 0;
    var incorrectQuestions = 0;
    var unansweredQuestions = 0;
    var counter;
    var timeRemaining;

    
    $(".btn").on("click",function(){
        $(".allQuestions").removeClass("overWatch");
        $(".startButton").addClass("overWatch");

       
        timeRemaining = 60;
        counter = setTimeout(function(){timeUp()},60000);
        

        secondsInterval = setInterval(countDownDisplay,1000);

        function countDownDisplay (){
            if (timeRemaining>0){
                timeRemaining--;
                $(".timeDisplay").html(timeRemaining + " Seconds Remaining.");
                }
            };

        function timeUp(){
            alert("Your time is up!");
            testValues();
            logResults();
            $(".testAnswerButton").addClass("overWatch");
        };

    }); 

    function testValues(){
        for(i=0; i<8 ;i++){
            var userInput = document.querySelector('input[name="a'+i+'"]:checked').value;
            console.log(userInput);
            if(userInput==="true"){
                correctQuestions+=1;
            } else if (userInput==="false"){
                incorrectQuestions+=1;
            } else if (userInput==="default"){
                unansweredQuestions+=1;
            }
        }
    };

    function logResults(){
        clearInterval(counter);
        timeRemaining=0;
        $(".timeDisplay").html("<p> You got " + correctQuestions + " right and " + incorrectQuestions + " wrong. " + unansweredQuestions + " question(s) remained unanswered.</p>");
    };
    $(".testAnswerButton").on("click",function(){
        testValues();
        logResults();
        $(".testAnswerButton").addClass("overWatch");
    });

    $(".resetButton").on("click",function(){
        correctQuestions = 0;
        incorrectQuestions = 0;
        unansweredQuestions = 0;
        clearInterval(counter);
        clearInterval(secondsInterval);
        timeRemaining = 0;
        $(".allQuestions").addClass("overWatch");
        $(".startButton").removeClass("overWatch");
        $(".timeDisplay").html("");
        $(".testAnswerButton").removeClass("overWatch");
    });


});
