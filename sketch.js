function setup() {
  createCanvas(1000, 800);
 background("pink");}

function draw() {
  
  fill("rgb(184,143,184)");
  stroke ("white");
  if(mouseIsPressed)
  rect(mouseX,mouseY,30,50);
}
