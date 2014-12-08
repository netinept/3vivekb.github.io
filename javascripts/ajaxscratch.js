// AJAX
// Asynchonous javascript and xml
// Without refershing the whole page, pull data from server and load data dynamically.
$.ajax('confirmation.html',{
success: function(response){
	$('ticket').html(response).slideDown();
},
data:{"confNum": 1234}
// Send a javascript object
}	
});
#vs
$.ajax('confirmation.html?confNum=1234',{
success: function(response){
	$('ticket').html(response).slideDown();
	}// Send a javascript object	
});

#vs
<div class='ticket' data-confNum='1234'>
$.ajax('confirmation.html',{
success: function(response){
	$('ticket').html(response).slideDown();
	},
	data: {"confNum": $(".ticket").data("confNum")}
	}// Send confNum that was stored in HTML	
});


$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $.ajax('/photos.html',{})
  });
});

$(document).ready(function() { 
  $("#tour").on("click", "button", function() { 
    $.ajax('/photos.html', {
      success: function(response){
      	$('.photos').html(response).fadeIn();
      }
    });
  });
});

// IS THE SAME AS
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $.get('/photos.html', function(response){
          $('.photos').html(response).fadeIn();
    });
  });
});


$(document).ready(function() {
  var el = $("#tour")
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      }
    });
  });
});

// jquery map
// map takes an array called collection (thing we are iterating through, (as an index)... )
// with map it's item then index, with each it is index and then item!
$.map(collection, )
// map returns an array modified by what is returned in the function passed as an argument
// take an array, apply a function to it, then return the modified array.
// can't you just take a 

var myNumbers = [1,2,3,4];

var newNumbers = $.map(myNumbers, function(item, index){return item + 1});
