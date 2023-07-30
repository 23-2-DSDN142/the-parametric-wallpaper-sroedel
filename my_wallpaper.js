//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let intersect  =100;
let toplx=0;
let toply =0;
let toprx = 200;
let topry = 0;
let bottomlx = 0;
let bottomly= 200;
let bottomrx= 200;
let bottomry= 200;

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
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//Top
fill (127, 162, 255)//darker blue
beginShape(TRIANGLES);
vertex(0, 0);
vertex(200, 0);
vertex(intersect, intersect);
//Bottom 
vertex(intersect, intersect);
vertex(0, 200);
vertex(200, 200);

//left
fill (181, 126, 255)// dark purple
vertex(intersect, intersect);
vertex (toplx,toply);
vertex (bottomlx,bottomly);


//right
vertex(intersect, intersect);
vertex (toprx,topry);
vertex(bottomrx,bottomry)

endShape();

let TopOfDiamond = 0;

//Blue Diamond
beginShape();
fill(163, 219, 255);//light blue
vertex(100,TopOfDiamond);
vertex(200, 100);
vertex(100, 200);
vertex(0,100);
endShape(CLOSE);

//Purple Diamond Left
beginShape();
fill(219, 162, 255);//light purple
vertex(0,100);
vertex(50,50);
vertex(intersect, intersect);
vertex(50,150);
endShape(CLOSE);

//Purple Diamond Right
beginShape();
fill(219, 162, 255);//light purple
vertex(150,50);
vertex(200,100);
vertex(150,150);
vertex(intersect, intersect);
endShape(CLOSE);

beginShape();
noFill();
vertex(toplx,toply);
vertex(toprx,topry);
vertex(bottomrx, bottomry);
vertex(bottomlx,bottomly);
endShape(CLOSE);

}
