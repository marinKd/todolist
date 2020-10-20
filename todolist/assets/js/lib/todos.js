$("span").toggleClass("lined");

//adding new to-do items
$("#newButton").on("click", function(){
	$("span").toggleClass("lined");
	var newTodo = $("#new").val();
	var newTodoStr = new String(newTodo);
	var newItem = "<li><button class=\"del\">X</button><span class=\"lined\">"+newTodoStr+"<span></li>";
	$("#list").children().last().after(newItem);
	$("#new").val('');
	$("span").toggleClass("lined");
	$("li:even").css("background-color", "#FAF0E6");
});

//deleting to-do items
$("#list").on("click", ".del", function(){
	$(this).fadeOut(350,function(){		
		$(this).parent().remove();
	});
	$("li:even").css("background-color", "#FAF0E6");
});

//toggle line-through on click
$("#list").on("click", "span", function(){
	$(this).toggleClass("lined");
});

//alternating row colors
$(document).ready(function(){
	$("li:even").css("background-color", "#FAF0E6");
});
	