$("input[type='text'], textarea[type = 'text']").on("input", function () {    	
		  canChangeColor();
		});


		function canChangeColor(){
			 var check = false;
			 var check2 = false;
		  $("input[type='text'], textarea[type = 'text']").each(function(){
			  
			 if($("#q1").val() != ''){
				$("#l1").addClass('test')
			 }
			  else{
				  $("#l1").removeClass('test')
			  }
			  
			  if($("#q2").val() != ''){
				$("#l2").addClass('test')
			 }
			  else{
				  $("#l2").removeClass('test')
			  }
			  if($("#q1").val() != ''){
				  if($("#q2").val() != ''){
				  	check = true;  
				  }
			  }
			  
			  if($("#q3").val() != ''){
				  check2 = true;    
			  }
			  
			  if($("#q3").val() != ''){
				$("#l3").addClass('test')
			 }
			  else{
				  $("#l3").removeClass('test')
			  }
			  
		  });
			if(check){
				$("#btnID").addClass("btn-new")
			}
			else{
				$("#btnID").removeClass("btn-new")
			}
			
			if(check2){
				$("#btnID1").addClass("btn-new")
			}
			else{
				$("#btnID1").removeClass("btn-new")
			}
			
		}
			$(document).ready(function() {
				  $('#btnID').on('click', function() {
					$('#page1').toggle();
					  $('#page2').toggle();
					  $('#page3').toggle();
					$('#message').toggle();
					$('#submit-button').toggle();
				  });
				});