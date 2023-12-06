//selecting input,h4

var input = document.getElementById("input")
var result = document.getElementById("result")






function check()
{
    var gn = input.value
    var randomnumber = Math.floor(Math.random()*10)+1
    if(randomnumber==gn)
    {
        console.log("Correct")
        result.textContent="Correct !"
        
        
    }
    else
    {
        result.textContent="Worng X"
        console.log(randomnumber)

    }
}

