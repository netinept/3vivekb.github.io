debug(typeof "That's not a valid entry")
debug(typeof true)
debug(typeof 42)
debug(typeof undefined)
debug(typeof null)


// alert("Alter! Jackass near!")
// var okay=confirm("Are you sure?  Jackasses made this page!")
// alert(okay)
// var response = prompt("Who let the dogs out?")
// console.log(response)
// confirm("Are you sure " + response + " let the dogs out?")

// var userAge = prompt("What's your age, user?");
// var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?")

var a = 4;
var b = 9;
var aCubed = a*a*a;
var bCubed = b*b*b;
var sum = aCubed + bCubed;
debug(sum)

function sumOfCubes (a,b){
var aCubed = a*a*a;
var bCubed = b*b*b;
var sum = aCubed + bCubed;
return sum;
}
debug(sumOfCubes(5,999))
var mySum = sumOfCubes(34,452);
alert(mySum)

while(gotName != true){
	var name = prompt("What is your name?")
	if(typeof(name) == "string"){
		if( confirm("Are you sure your name is " + name + "?")){
			alert("Hey " + name + "got your nose!")
			gotName = true;
		}
	}
	else{
		alert("Not a name")
	}
	// else{}
		// gotName = false;
	// }

}

