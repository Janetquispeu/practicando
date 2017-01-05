$(document).ready(function(){
	var template="<div>{{lugar}}</div>"
	$("#btn").on("click",function(){
		$.getJSON("https://janetquispeu.github.io/practicando/demo.json",function(value){
			console.log(value);
			var html=" ";
			$.each(value.results,function(val,object){
				console.log(val);
				console.log(object);
				var keys=object.classification;
				html+=template.replace("{{nombre}}",keys);
				console.log(template.replace("{{nombre}}",keys))

				$(".mensaje").html(html);
				console.log($(".contenedor").html(html));
			});		
		});
	});
});