//selecting all tags from html

var inputBox = document.getElementById("inputBox")
var checkBtn = document.getElementById( "checkBtn" )
var result = document.getElementById( "answer" )
var guessCount = document.getElementById( "guessCount" )
var number_of_guess = 5
// function for generate the random number and validate it

function checkTheNumber() 
{
    var random_number = Math.floor(Math.random() *5 ) +1
    var guessedNumber = inputBox.value
    if(random_number ==guessedNumber)
    {
        result.textContent=" 👏👏 Correct Guess: 🎉 Congratulations! You got it right! 🎉🎉 "
    }
    else if(guessedNumber=="")
        {
            result.textContent=" Enter a number! "
        }
    else if(random_number!=guessedNumber)
    {
        result.textContent= "Incorrect Guess: ❌ Oops! Try again. The number was : "+ random_number +".  Try again "
        // guess count 
        number_of_guess=number_of_guess-1
        guessCount.textContent="Available guess : " + number_of_guess

        if(number_of_guess==0)
        {
            guessCount.textContent= " 5 chances are  over!  "
            alert(" 5 chances are  over! ")
        }
    }
   
    
}
