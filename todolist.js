// Check off to-dos
$("ul").on("click", "li", function() //'on()' adds the function to the dynamically added to-dos whereas click() can't do the same 
{
	$(this).toggleClass("completed");
});


//Click on X to delete
$("ul").on("click", "span", function(event)
{
	$(this).parent().fadeOut(500, function()
	{ //removes entire li with fade out
		$(this).remove();
	}); 
	// to mitigate effect on other elements
	event.stopPropagation(); 
});

$("input[type = 'text']").keypress(function(event)
{// adding a new to-do
	if(event.which === 13)
	{ //grabing new to-do text from input
		var todotext = $(this).val();
		//create new to-dos
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+" "+todotext+"</li>");
		//clear input placeholder
		$(this).val("");
	}
});

$(".fa-plus-square").click(function(){
	$("input[type = 'text']").fadeToggle();
})