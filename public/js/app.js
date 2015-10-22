// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){

  console.log('Hey, Earth!');

  $("#signupForm").on('submit', function(e){
  	e.preventDefault();

  	var data = $(this).serialize();
  	// console.log(data);

  	$.post("/users", data, function(data){
  		console.log(data);
  	});

	// $.ajax({
	//   type: "POST",
	//   url: "/users",
	//   data: data,
	//   success: function(res){
	//     console.log(res);
	//   }
	// });
  });

});