function emotion(){
  var shapeR = 0.0;
  var dx = 0.0;
  var dy = 0.0;
  var radius = 200.0;
  var freq = 0.0;
  var amp = 0.0;
  var ampRate = 0.0;
  var angleStep = 0.0005;

  var colorR, colorG, colorB;

  var shapeSelectFlag = 0;
  var ampFlag = 0;

  var clickAlpha = 255;

  var x1 = 0;
  var y1 = 0;

  var an = 2;

  function setup()
  {
    createCanvas(windowWidth, windowHeight);
    smooth();

    colorR = random(150, 255);
    colorG = random(150, 255);
    colorB = random(150, 255);
    amp = random(0.0, 30.0);
    freq = int(random(1.0, 30.0));

    shapeSelectFlag = 1;
    x1 = width*7/8;
    y1 = height*7/8;
  }

  function draw()
  {
    background(255);
    noStroke();

    fill(colorR, colorG, colorB);
    if(shapeSelectFlag == 1)	selectShape();

    cursor('pointer');

    drawCursor(x1, y1);
  }

  function selectShape()
  {
    push();
    var angle = 0.0;
    translate(windowWidth/2.0, windowHeight/2.0);
    rotate(shapeR);
    beginShape();
    while (angle <= 2.0*PI)
    {
        dx = (radius + sin(angle * freq) * (amp+ampRate)) * cos(angle);
        dy = (radius + sin(angle * freq) * (amp+ampRate)) * sin(angle);

        angle += angleStep;

        vertex(dx, dy);
    }
    endShape(CLOSE);

    shapeR += 0.003;

    if (ampRate > -1 && ampFlag == 0) ampRate += 0.3;
    if (ampRate > 10 && ampFlag == 0) ampFlag = 1;
    if (ampRate < 11 && ampFlag == 1) ampRate -= 0.3;
    if (ampRate < 0 && ampFlag == 1) ampFlag = 0;
    pop();
  }

  function mouseDragged()
  {
    if(mouseX > pmouseX) amp++;
    if(mouseX < pmouseX) amp--;
    if(mouseY > pmouseY) freq++;
    if(mouseY < pmouseY) freq--;
  }

  function mousePressed()
  {
    clickAlpha = 0;
  }

  function mouseReleased()
  {
    clickAlpha = 255;
  }

  function mouseMoved()
  {
    x1 = mouseX;
    y1 = mouseY;
  }

  function drawCursor(x, y)
  {
    fill(225, clickAlpha/an);
    triangle(x, y-30, x+10, y-20, x-10, y-20);
    triangle(x+30, y, x+20, y+10, x+20, y-10);
    triangle(x, y+30, x+10, y+20, x-10, y+20);
    triangle(x-30, y, x-20, y-10, x-20, y+10);

    fill(colorR*2/3, colorG*2/3, colorB*2/3, clickAlpha/an);
    ellipse(x, y, 20, 20);
    text("drag!", x-45, y-20);
  }
}
