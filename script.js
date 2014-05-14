var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = 50;
var y = 50;

var width = screen.width;
var height = screen.height;

var aiy = 50;
var aix = 50;

function update(){
ctx.clearRect(0,0,400,200);
x = Math.floor((Math.random()*width-10)+1);
y = Math.floor((Math.random()*height-10)+1);
ctx.fillStyle = "#00000";
ctx.fillRect(x,y,10,10);
}
function aitick(){
  if(aiy>y){
    aiy--;
  }else if(aiy<y){
    aiy++;
  }
  if(aix>x){
    aix--;
  }else if(aix<x){
    aix++;
  }
  if(aix===x&&aiy===y){
    update();
  }
  ctx.clearRect(0,0,400,200);
  ctx.fillStyle = "#00FFF2";
  ctx.fillRect(aix,aiy,50,25);
}

c.width=width;
c.height=height;

setInterval(function(){aitick();},75);
