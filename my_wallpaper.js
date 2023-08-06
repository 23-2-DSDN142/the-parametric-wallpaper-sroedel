//your parameter variables go here!



var Bigrect= 25
var Smallsquare =15
var Bigcircle =30
var Smallcircle = 15
var rectlong = 30
var rectshort = 5


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background("white"); 

if (true)
{
  background("black"); 
}
else{
  background("white"); 
}
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//Variables
  var yellow = color(255, 242, 145);
  var orange = color(255, 180, 115);
  var pink = color (255, 135, 170);
  var blue = color(104, 186, 200);

  //Squares

  fill(orange); //orange
  rect (1,1,Bigrect);

  fill(blue);
  rect(80,50,Bigrect*.6);

  fill(yellow);
  rect (5,115,Bigrect*.8);

  fill(yellow);
  rect (175,110,Smallsquare*.8);

  fill(pink);
  rect (140,125,Smallsquare*1.1);

  //circles
  fill(yellow);
  circle(60,20, Bigcircle);

  fill(orange); 
  circle(110,25,Smallcircle)

  fill(pink);
  circle(180,50,Bigcircle*.9);

  fill(yellow);
  circle (70,100,Smallcircle);

  fill(pink);
  circle(105,155,Bigcircle*.8);

  fill(blue);
  circle(25,175,Bigcircle*.95);

//Triangle
  fill(pink)
  triangle(145,5,145,25,160,15); 

  fill(yellow);
  triangle (140,45,125,70, 155,70)

  fill(orange);
  triangle(95,105,120,120,120,90,);

  fill(blue);
  triangle(180,145,170,160,190,160);

  fill(orange)
  triangle(75,190,65,175,85,175); 

  fill(blue);
  triangle(20,80,5,70,5,90);

//Rectangle
  fill(pink)
  rect (15, 45, rectlong, rectshort);

  fill(orange);
  rect(35,70,rectshort,rectlong);

  fill(blue);
  rect(145,90,rectlong, rectshort);

  fill(blue);
  rect(45,135,rectlong, rectshort);

  fill(yellow);
  rect(135,160,rectshort, rectlong);

  fill(orange); 
  circle(175,185,Smallcircle)






  
}
