$(document).ready(function(){
	var type = "";
	var newTriangle = {
						sides: [],
						triangleType: function(){
							if(this.side1 === this.side2 && this.side1 === this.side3 && this.side2 === this.side3){
								type = "equilateral";
							}else if((this.side1 === this.side2) || (this.side2 === this.side3) || (this.side1 === this.side3)){
								type = "isoceles";
							}else if((this.side1 !== this.side2) && (this.side2 !== this.side3) && (this.side1 !== this.side3)){
								type = "scalene";
							}
							return type;
						}
					  };

	$('#sides').submit(function(event) {
		event.preventDefault();

		var inputSide1 = $('#side1').val();
		var inputSide2 = $('#side2').val();
		var inputSide3 = $('#side3').val();
		
		newTriangle.side1 = inputSide1;
		newTriangle.side2 = inputSide2;
		newTriangle.side3 = inputSide3;
		

		newTriangle.sides.push(inputSide1);
		newTriangle.sides.push(inputSide2);
		newTriangle.sides.push(inputSide3);
		
		if(newTriangle.triangleType() === "equilateral"){
			$('#equilateral').append('<li>' + newTriangle.sides + '</li>');
		}else if(newTriangle.triangleType() === "isoceles"){
			$('#isoceles').append('<li>' + newTriangle.sides + '</li>');
		}else if(newTriangle.triangleType() === "scalene"){
			$('#scalene').append('<li>' + newTriangle.sides + '</li>');
		}
		
		newTriangle.sides.length = 0;

		$('form#sides')[0].reset();
	});
});

//reset cursor to first field
//align left list items