jQuery(document).ready(function(){
	$.ajax({
		url:"text2.txt",
		type: "GET",
		cache: false
	})
	.done(function(data){
		$("#auto_load").html(data);
	});
    $("#ajax_button").click(function(){
        $.ajax({
            url:"text.txt",
            type: "GET",
            cache: false
        })
        .done(function(data){
            $("#ajax").html(data);
        })
    });
    $("#ajax").click(function(){
        $.ajax({
            url:"text3.txt",
            type: "GET",
            cache: false
        })
        .done(function(data){
            $("#ajax").html(data);
        })
        .fail(function(data){
            $("#ajax").html("File not found");
        }).always(function(data){
			alert("NUEVOS DATOS");
		})
    });

	$("#withLoad").click(function(){
		$("#ajax").load("textLoad.txt")
	});
});
