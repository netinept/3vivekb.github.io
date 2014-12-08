$("h1").text()
-> returns text of h1
$("h1").text("What now?")
// #Sends it a what now thing!

// #Html sent to browser, javascript can fire off before DOM finished loading!
// We need to make sure the DOM has finished loading before we can reliably use jQuery.

jquery(document).ready(function(){
code}
)

jquery(document).ready(function(){
	$("h1").text("Where to?");
});

$(document).ready(function(){$("span").text("$100");});
