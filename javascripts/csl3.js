var trainsOperational = 8;
console.log("hello " + trainsOperational);
console.log("Train #" + 3);
var avgHeight = 145;
var numEruptions = 4;
console.log("\"Old Faithful\" at Yellowstone National Park\nAverage eruption height today: " + avgHeight + "\n" + "Number of eruptions: " + numEruptions);

var eruption1 = 112;
var eruption2 = 148;
var eruption3 = 160;
var numEruptions = 3;
var avg = (eruption1 + eruption2 + eruption3)/numEruptions;

console.log("\"Old Faithful\" at Yellowstone National Park")
console.log("Eruption 1: " + eruption1)
console.log("Eruption 2: " + eruption2)
console.log("Eruption 3: " + eruption3)
console.log("Average eruption height today: " + avg)

var count = 1;
while(count <= 5){
console.log(count)
count++;
};

var trainNumber = 1;
while(trainNumber <= 8){
console.log("Train #" + trainNumber + " is running")
trainNumber++;
};

// alert("Alter! Jackass near!")
// var okay=confirm("Are you sure?  Jackasses made this page!")
// alert(okay)
var response = prompt("Who let the dogs out?")
// console.log(response)
confirm("Are you sure " + response + " let the dogs out?")
