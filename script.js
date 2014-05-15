var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = 50;
var y = 50;

var width = screen.width-50;
var height = screen.height-100;

var imageObj = new Image();

var aiy = 50;
var aix = 50;

function update(){
ctx.clearRect(0,0,400,200);
x = Math.floor((Math.random()*width-50)+1);
y = Math.floor((Math.random()*height-25)+1);
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
    imageObj.src = 'https://raw.githubusercontent.com/lordrockit/JS-Fish/master/temp%20fish.png';
  }else if(aix<x){
    aix++;
    imageObj.src = 'https://raw.githubusercontent.com/lordrockit/JS-Fish/master/temp%20fish%20fliped.png';
  }
  if(aix===x&&aiy===y){
    update();
  }
  //ctx.clearRect(0,0,width,height);
  
  ctx.fillStyle = "#00FFF2";
  ctx.fillRect(0,0,width,height);
  
  ctx.fillStyle="#2DFC9F";
  ctx.fillRect(width/2+20,height-height/2,10,height/2);
  ctx.fillRect(width/2-20,height-height/2-10,10,height/2+10);
  ctx.fillRect(width/2-35,height-height/2+10,10,height/2+10);
  ctx.fillRect(width/2+35,height-height/2,10,height/2);
  
  ctx.drawImage(imageObj, aix, aiy);
}

c.width=width;
c.height=height;

setInterval(function(){aitick();},25);
