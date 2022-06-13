
// Create canvas variable
canvas = new fabric.Canvas('myCanvas');
//Set initial positions for ball and hole images.
ball_x = 20;
ball_y = 20;
hole_x = 800;
hole_y = 400;
block_image_width = 5;
block_image_height = 5;

function load_img() {
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(40);
		hole_obj.scaleToHeight(40);
		hole_obj.set({
			top:394,
			left:792
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToHeight(30);
		ball_obj.scaleToWidth(30);
		ball_obj.set({
			top:ball_x,
			left:ball_y
		})
		canvas.add(ball_obj);
	})

	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if (ball_y == 800 && ball_x == 400) {
		document.getElementById("hd3").innerHTML = "You have Won!";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_x >= 20) {
			ball_x = ball_x - 20;
			console.log("Down" + " X: " + ball_x + " Y: " + ball_y)
			canvas.remove(ball_obj);
			new_image();
		}
		// Write a code to move ball upward.
	}

	function down()
	{
		if(ball_x <= 550) {
			ball_x = ball_x + 20;
			console.log("Right" + " X: " + ball_x + " Y: " + ball_y)
			canvas.remove(ball_obj);
			new_image();


			// Write a code to 
		}
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_y >= 20)
		{
			ball_y = ball_y - 20;
			console.log("Left" + " X: " + ball_x + " Y: " + ball_y)
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_y <=1150)
		{
			ball_y = ball_y + 20;
			console.log("Left" + " X: " + ball_x + " Y: " + ball_y)
			canvas.remove(ball_obj);
			new_image();
			// Write a code to move ball right side.
		}
	}
	
}

