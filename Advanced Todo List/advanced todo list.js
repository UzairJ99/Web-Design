//Check off todos by clicking
var clicked = false;
$("ul").on("click","li", function(){
	if (clicked == false) {
		clicked = true;
		$(this).css("color", "gray");
		$(this).css("text-decoration", "line-through");
	}
	else {
		clicked = false;
		$(this).css("color", "black");
		$(this).css("text-decoration", "none");
	}
});

//deleting a todo
$("ul").on("click","span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	//checks if enter was pressed
	if (event.which === 13){
		//extracts new todo from text input
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-minus-circle'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});