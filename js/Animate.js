window.onload = function() {
			
			//Canvas & Stage
			var canvas=document.getElementById("canvas");
			
			var stage= new createjs.Stage(canvas);
			
			//create a graphic
	        var shape = new createjs.Shape();
	    shape.graphics.f("rgba(147,206,206,254)").p("ECMeA4aMiMnAAAIAArkMCMnAAAIAALk").cp().ef().f("rgba(25,115,139,254)").p("EAAUBB8cAU8AAAB2cgAeAA8AAeIAAsMYvUmGtIGGAAAAYsqFotwloAAAAYrukip2EiAAAAYtSEsqyksAAAAYsWksqKEsAAAAYmkC0mQgKkigyYgUgKgJKeAdAA").cp().ef().f("rgba(64,135,159,254)").p("EAAeBKOcAVGgAKB2SgAUAAyAAeIAAtcYvUmus+GuAAAAYs0GGtwmGAAAAYrklAqAFAAAAAYtIFKqolKAAAAYsglUqKFUAAAAYmkC+mGgKkigyYgogKAALkAeAA").cp().ef().f("rgba(161,223,226,254)").p("ECMoAoyMiMoAAAMAAAgoyMCMoAAAMAAAAoy").cp().ef().f("rgba(244,223,132,254)").p("ECMoAs2MiMoAAAIAAjSMCMoAAAIAADS").cp().ef().f("rgba(91,156,162,254)").p("ECMoApkMiMoAAAYAAAACCmaMqkscAMggEiAwSAQuAa4gMMYa4sMLaXSAAAA").cp().ef().f("rgba(25,115,139,254)").p("EAAUBOScAU8gAKB2mgAUAAyAAeIAApYYvUk2tIE2AAAAYsqEOtwkOAAAAYrujcp2DcAAAAYtSDcqojcAAAAYsgjwqKDwAAAAYmkCCmQgKkigeYgUgKgJIIAdAA").cp().ef().f("rgba(244,223,132,254)").p("AMWHMYAACChuBkiMAAYiWAAhuhkAAiCYAAiCBuhuCWAAYCMAABuBuAACC").cp().ef().f("rgba(177,147,139,254)").p("EB3sAeyIAACWIAAAAIA8AAIAAiMIgKAAYgUAAgUAAgKgK").cp().ef().f("rgba(6,96,91,254)").p("EB7mAdOYgeAAgegegegUYgegegegegKgoYAoAAAygKAogKYAKgKAKgKgKAAYhGgygeg8gKhGYAeAAAeAAAUgKYAKgKAAAAgKgKYgog8gUhGgUhGYAAAAAAAAAAgKYgUgegKgyAAgoYAAgKgUAAgKAKYgeAygKA8gUA8YgUA8hGA8geA8YAAAKAAAAAKAAYAeAAAeAAAUAAYgeBGgyA8gyA8YAAAKAAAAAAAAYAKAUAUAAAUAKYAKAAAUAAAUAAYgUAogoAegeAeYgUAegeAogKAeYAAAKAKAAAKAKYAyAKBGAKA8AAYAUAAAUAKAUgKYAKAAAAAAAKAAYBQAABagUAUg8YAKgKgKgKgKAA").cp().ef().f("rgba(177,147,139,254)").p("EBq4AiiIAACWIAAAAIA8AAIAAiWIgKAAYgUAAgUAAgKAA").cp().ef().f("rgba(6,96,91,254)").p("EBuyAhIYgeAAgegegegUYgegegegogKgeYAoAAAygKAogUYAKAAAKgKgKgKYhGgogehGgKg8YAeAAAeAAAUgKYAKgKAAAAAAgKYgyg8gUhGgUhGIAAgKYgUgogKgoAAgoYAAgKgUAAgKAKYgeAygKA8gUA8YgUA8hGAygeBGIAKAKYAeAAAeAAAUAAYgeBGgyA8gyA8IAAAKYAKAKAUAKAUAKYAKAAAUAAAUAAYgUAegoAogeAeYgUAegeAegKAoYAAAKAKAAAKAAYAyAUBGAKA8AAYAUAAAUAAAUAAYAKAAAAAAAKAAYBQAABagUAeg8YAAgKgKgKgKAA").cp().ef().f("rgba(177,147,139,254)").p("ECBsAisIAACMIAAAAIBGAAIAAiMYgKAAAAAAgKAAYgKAAgUAAgUAA").cp().ef().f("rgba(6,96,91,254)").p("ECFwAhIYgoAAgegegUgUYgogegUgogUgeYAyAAAogKAogUYAKAAAKgKgKgKYg8gogehGgUg8YAeAAAeAAAegKYAAgKAAAAAAgKYgyg8gKhGgehGIAAgKYgUgogKgoAAgoYAAgKgUAAgKAKYgeAyAAA8gUA8YgeA8g8AygoBGYAAAAAKAKAKAAYAUAAAeAAAeAAYgoBGgyA8goA8YgKAAAAAKAKAAYAKAKAKAKAUAKYAUAAAKAAAUAAYgUAegeAogeAeYgeAegeAeAAAoYAAAKAAAAAKAAYA8AUA8AKBGAAYAUAAAUAAAUAAIAKAAYBQAABagUAeg8YAAgKAAgKgKAA").cp().ef().f("rgba(177,147,139,254)").p("EASSAisIAACMIAKAAIA8AAIAAiMIgKAAYgUAAgUAAgUAA").cp().ef().f("rgba(6,96,91,254)").p("EAWWAhcYgoAAgegegUgUYgegegegogUgeYAyAAAygKAogKYAKgKAKgKgKAAYhGgygeg8gKhGYAeAAAeAAAUgKYAKgKAAAAgKgKYgog8gUhGgUhGYAAAAAAAAAAgKYgUgogKgoAAgoYAAgKgeAAAAAKYgeAygKA8gUA8YgUA8hGAygeBGYgKAAAKAKAKAAYAeAAAeAAAUAAYgeBGgyA8gyA8IAAAKYAKAKAUAKAUAKYAKAAAUAAAUAAYgUAogoAegeAeYgUAegoAoAAAeYAAAKAKAAAKAAYAyAUBGAKA8AAYAUAAAUAAAUAAYAKAAAAAAAKAAYBQAABagUAUg8YAKgKgKgKgKAA").cp().ef();

	 //add shape to stage
	stage.addChild(shape);    
	    
	    //end of background
	    
	    
	    
			var bmp = new createjs.Bitmap();
			//Center of the canvas
			var centerX = canvas.width/2;
			var centerY = canvas.height/2;
			
			//Get the image 
			var img = new Image();
			img.src = "images/ship3.png";
			img.onload = updateStage;
			
			function updateStage(e){
				bmp = new createjs.Bitmap(e.target);
				
			
				
				// Set our images x & y
				bmp.x = centerX;
				bmp.y = centerY;
				
				//Change reg points
				bmp.regX = 225;
				bmp.regY = 225;
				
				//Scale it up
				//bmp.scaleX = 2;
				//bmp.scaleY = 2;
				
				stage.addChild(bmp);
				
				//stage.update();
				
		}			
				// Add event listener for our "tick"
				createjs.Ticker.addEventListener("tick", ticker);
				
		function ticker(){
			//Anything in here will run default of 20 fps
			//bmp.rotation +=2;
			//bmp.x +=2;
			
			
			//Shake the ship
			
			//bmp.x = centerX + Math.random() * 5;
			//bmp.y = centerY + Math.random() * 5;
			
			//Shake in both directions 
			//bmp.x = centerX + (Math.random() -.5) * 50; //lower than 50 it will shake less. 50 it shakes more
			//bmp.y = centerY + (Math.random()-.5 )* 50;

			//Ship will go in a wave motion
			///Sin and Cos  
			
			bmp.x = centerX + Math.sin(3);

			// getTicks()  - that returns the current of ticks
			// the divided number controls the speed and * number is the distance away from the center point.
			 bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/10)*20;
			 bmp.y = centerY + Math.sin(createjs.Ticker.getTicks()/10)*20;
			
			//Circle path
			 bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/40)*200;
			 bmp.y = centerY + Math.cos(createjs.Ticker.getTicks()/10)*20;
			



//background


			stage.update();
			
			}
				
	
				
				
		
			
}